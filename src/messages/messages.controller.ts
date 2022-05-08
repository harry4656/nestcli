import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('/messages')
export class MessagesController {
  // messageService: MessagesServices;
  // constructor() {
  //   // DONT DO THIS IS REAL APP
  //   //USE DEPENDENCY INJECTION.
  //   this.messageService = new MessagesServices();
  // }
  constructor(public messagesService: MessagesServices) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log(body);
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log(id);
    const message = await this.messagesService.findOne(id);
    console.log(message, 'message chek');
    if (!message) {
      throw new NotFoundException('No Doc found for this id');
    }
  }
}
