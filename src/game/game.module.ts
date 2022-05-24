import { GameService } from '../game/game.service';
import { Game } from './game.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GameController } from './game.controller';


@Module({
  imports: [TypegooseModule.forFeature([Game])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {};
