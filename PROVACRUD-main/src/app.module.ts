export class AppModules {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseModule } from './use/use.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './db/entities/user.entity';
import { Injectable } from '@nestjs/common/decorators';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'crud',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}