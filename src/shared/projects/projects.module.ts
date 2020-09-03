import { Module } from '@nestjs/common';
import { ProjectsController } from '../../admin/projects.controller';
import { Project } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [ProjectsService],
  providers: [ProjectsService]
})
export class ProjectsModule {}
