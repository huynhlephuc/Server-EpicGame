import { CategoryModule } from './categories/category.module';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import 'dotenv/config';
import { GameModule } from './game/game.module';
@Module({
  imports: [
    TypegooseModule.forRoot(
      process.env.DB ||
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@epicdata.uxavk.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`,
    ),
    CategoryModule,
    GameModule,
  ],
})
export class AppModule {}
