import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  readAll(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  readOne(id: number): Promise<Skill> {
    return this.skillRepository.findOne(id);
  } 
}
