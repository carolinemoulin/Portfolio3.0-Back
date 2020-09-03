import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './job.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  readAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  readOne(id: number): Promise<Job> {
    return this.jobRepository.findOne(id);
  } 
}
