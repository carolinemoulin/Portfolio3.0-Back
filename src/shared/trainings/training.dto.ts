import { IsNotEmpty, IsString, MaxLength, IsISO8601 } from 'class-validator';

export class TrainingDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  graduate: string;

  @IsISO8601({strict: true})
  date: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  institution: string;
}
