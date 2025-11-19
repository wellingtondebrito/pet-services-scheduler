import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

// Estrutura do Job
interface MailJobData {
  to: string;
  subject: string;
  template: string;
  context: any;
}

@Injectable()
export class MailerService {
  // Injeta a fila usando o decorador @InjectQueue
  constructor(@InjectQueue('email-queue') private readonly emailQueue: Queue<MailJobData>) {}

  // Método público que outros serviços chamarão
  async sendMailJob(data: MailJobData) {
    // Adiciona o job à fila. O 'send-email' é o nome do job, útil para dashboards.
    await this.emailQueue.add('send-email', data, {
        attempts: 3, // Tenta novamente 3 vezes em caso de falha
        backoff: {
            type: 'exponential',
            delay: 1000,
        },
    });
  }
}