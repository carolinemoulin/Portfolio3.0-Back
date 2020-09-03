import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './shared/jobs/jobs.module';
import { ProjectsModule } from './shared/projects/projects.module';
import { SkillsModule } from './shared/skills/skills.module';
import { TrainingsModule } from './shared/trainings/trainings.module';
import { JobsController } from './admin/jobs.controller';
import { ProjectsController } from './admin/projects.controller';
import { SkillsController } from './admin/skills.controller';
import { TrainingsController } from './admin/trainings.controller';
import { MYSQL } from './config/config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL.HOST,
      port: MYSQL.PORT,
      username: MYSQL.USERNAME,
      password: MYSQL.PASSWORD,
      database: MYSQL.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,}),
    JobsModule,
    ProjectsModule,
    SkillsModule,
    TrainingsModule,
  ],
  controllers: [JobsController, ProjectsController, SkillsController, TrainingsController],
})
export class AppModule {}
