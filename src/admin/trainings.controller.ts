import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { TrainingsService } from 'src/shared/trainings/trainings.service';
import { Training } from './../shared/trainings/training.entity';
import { TrainingDto } from 'src/shared/trainings/training.dto';

@Controller('admin/trainings')
export class TrainingsController {

  constructor(private trainingdb: TrainingsService) {

  }

  @Get()
  readAll(): Promise<Training[]>{
    return this.trainingdb.readAll();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) id: number) {
    return this.trainingdb.readOne(+id);
  }
}
