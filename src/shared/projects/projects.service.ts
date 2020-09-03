import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  readAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  readOne(id: number): Promise<Project> {
    return this.projectRepository.findOne(id);
  } 
}
