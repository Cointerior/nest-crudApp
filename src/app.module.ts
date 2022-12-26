import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.model';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://dre:pharmacy@cluster0.arjfk.mongodb.net/myF?retryWrites=true&w=majority"), MongooseModule.forFeature([{name: "user", schema: UserSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
