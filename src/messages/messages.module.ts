import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesServices } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServices, MessagesRepository], // Registering the dependency in message module.
})
export class MessagesModule {}

/*
Module file is something like root file for each app. here we will register the controller and providers in @module() decorator.
*/
