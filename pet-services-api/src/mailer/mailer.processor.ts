// src/mailer/mailer.processor.ts

import { Processor, WorkerHost } from '@nestjs/bullmq'; // Ou @nestjs/bull
import { Job } from 'bullmq';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { Logger } from '@nestjs/common';

// Definimos o nome do Job (Ex: 'confirmation')
interface MailJobData {
  to: string;
  subject: string;
  template: string;
  context: any; // Dados para o template (nome, token, etc.)
}

@Processor('email-queue') // 👈 Escuta a fila que definimos no MailerModule
export class MailerProcessor extends WorkerHost{
  private readonly logger = new Logger(MailerProcessor.name);

  // Injetamos o MailerService do @nestjs-modules/mailer
  constructor(private readonly nestMailerService: NestMailerService) {
    super();
  }

// 👈 OBRIGATÓRIO: Implementação do método abstrato
  async process(job: Job<MailJobData>) {
    try {
      const { to, subject, template, context } = job.data;
      
      this.logger.log(`Enviando e-mail para: ${to}`);

      // Usamos o serviço do @nestjs-modules/mailer para enviar o e-mail
      await this.nestMailerService.sendMail({
        to,
        subject,
        template: `./${template}`, // Caminho relativo ao diretório de templates
        context,
      });

      this.logger.log(`E-mail para ${to} enviado com sucesso.`);
      return {};
    } catch (error) {
        this.logger.error(`Erro ao processar job de e-mail para ${job.data.to}: ${error.message}`);
        throw error;
    }
  }
}