import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProjectsService } from 'src/shared/projects/projects.service';
import { Project } from './../shared/projects/project.entity';

@Controller('admin/projects')
export class ProjectsController {

  constructor(private projectdb: ProjectsService) {

  }

  @Get()
  readAll(): Promise<Project[]>{
    return this.projectdb.readAll();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) id: number) {
    return this.projectdb.readOne(+id);
  }
}
