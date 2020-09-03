import { Module } from '@nestjs/common';
import { SkillsController } from '../../admin/skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [SkillsService],
  providers: [SkillsService]
})
export class SkillsModule {}
