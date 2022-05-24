import { GameService } from './game.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Game } from './game.model';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getCats(): Promise<Game[] | null> {
    return await this.gameService.findAll();
  }

  @Post()
  async create(@Body() game: Game): Promise<Game> {
    return await this.gameService.create(game); 
  }
}
