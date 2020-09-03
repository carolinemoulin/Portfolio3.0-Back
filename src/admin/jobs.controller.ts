import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { JobsService } from 'src/shared/jobs/jobs.service';
import { Job } from './../shared/jobs/job.entity';

@Controller('admin/jobs')
export class JobsController {

  constructor(private jobdb: JobsService) {

  }

  @Get()
  readAll(): Promise<Job[]>{
    return this.jobdb.readAll();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobdb.readOne(+id);
  }
}
