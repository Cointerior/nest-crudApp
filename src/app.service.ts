import { Injectable, NotFoundException } from '@nestjs/common'; 
import { User, UserDocument } from "./user.model"
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { signUp } from './app.controller';



@Injectable()
export class AppService {
  constructor(@InjectModel("user") private readonly userModel: Model<UserDocument>) {}

  async createUser(user: signUp): Promise<User> {
    const newUser = new this.userModel(user)
    return await newUser.save()
  }

  async getAll(): Promise<any> {
    const product = await this.userModel.find()
    return product   
  }

  async getProduct(id: string) {
    const product = await this.userModel.findById(id)
    if (!product) {
      throw new NotFoundException()
    }
    return product 
  }

  async updateOne(id: string, data: {}) {
    const update = await this.userModel.findByIdAndUpdate(id, data, { new: true })
    if (!update) {
      throw new NotFoundException()
    }
    return update
  }

  async deleteOne(id: string): Promise<any> {
    const result = await this.userModel.findByIdAndDelete(id)
    if (!result) {  
      throw new NotFoundException()
    }
    return result
  }
}
