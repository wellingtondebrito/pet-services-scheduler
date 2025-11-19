
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerProcessor } from './mailer.processor';

@Module({
    imports:[
        BullModule.registerQueue({
            name: 'email-queue',
        })
    ],
    providers:[
        MailerService,
        MailerProcessor,
    ],
    exports:[
        MailerService,
        MailerModule,
    ]
})
export class MailerModule {}
