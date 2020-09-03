import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Training } from './training.entity';
import { Repository } from 'typeorm';
import { TrainingDto } from './training.dto';

@Injectable()
export class TrainingsService {
  constructor(
    @InjectRepository(Training)
    private trainingRepository: Repository<Training>,
  ) {}

  readAll(): Promise<Training[]> {
    return this.trainingRepository.find();
  }

  readOne(id: number): Promise<Training> {
    return this.trainingRepository.findOne(id);
  } 
}
