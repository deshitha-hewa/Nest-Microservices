import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

// READ env
@Module({
    imports: [NestConfigModule.forRoot({
        validationSchema: Joi.object({
            MONGO_URI: Joi.string().required(),
        })
    })],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule { }
