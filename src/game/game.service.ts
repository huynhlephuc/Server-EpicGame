import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Game } from './game.model';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game)
    private readonly gameModel: ReturnModelType<typeof Game>,
  ) {}

  async create(createGameDto: { name: string }): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return await createdGame.save();
  }

  async findAll(): Promise<Game[] | null> {
    return await this.gameModel
    .find()
    .select('-__v')
    .populate({
      path: 'category',
      select: '-__v -createdAt',
    })
    .exec();

  }
  
}
