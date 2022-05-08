import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// Register Repository in this service by implementing in constructor function
// Important Note in the Service.
//We have written in some code where the service is creating its own dependencies. Messages Repository is a dependency of this service. In other words, the service cannot work correctly unless it has a repository. So we have set up a dependency between these two classes.
@Injectable()
export class MessagesServices {
  // messagesRepo: MessagesRepository;
  // constructor() {
  //   //Service is creating its own dependencies.
  //   // DONT DO THIS ON REAL APPS - TEMPORARY LINE OF CODE. WILL BE REPLACE BY INJECTABLE DEPENDENCIES.
  //   this.messagesRepo = new MessagesRepository();
  // }

  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
