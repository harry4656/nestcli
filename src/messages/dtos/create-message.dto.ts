import { IsString } from 'class-validator';

export class createMessageDto {
  @IsString()
  content: string;
}

/*
@IsString is dectora to validate ths incoming content is string. thats how validator works.
*/
