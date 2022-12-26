import { Controller, Get, Post } from '@nestjs/common';
import { Body, Delete, Param, Patch } from '@nestjs/common/decorators';
import { MinLength, IsEmail } from 'class-validator';
import { AppService } from './app.service';
import { User } from './user.model';

export class signUp {
  @IsEmail()
  username: string
  @MinLength(1)  
  description: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() user: signUp) {
    return this.appService.createUser(user) 
  }

  @Get()
  getAll() {
    return this.appService.getAll()    
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.appService.getProduct(id)
  }

  @Patch(":id")
  updateOne(@Body() data: {}, @Param("id") id: string) {
    return this.appService.updateOne(id, data)
  }

  @Delete(":id")
  deleteOne(@Param("id") id: string) {
    return this.appService.deleteOne(id)
  }
}
