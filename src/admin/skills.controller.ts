import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SkillsService } from 'src/shared/skills/skills.service';
import { Skill } from './../shared/skills/skill.entity';

@Controller('admin/skills')
export class SkillsController {

  constructor(private skilldb: SkillsService) {

  }

  @Get()
  readAll(): Promise<Skill[]>{
    return this.skilldb.readAll();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) id: number) {
    return this.skilldb.readOne(+id);
  }
}
