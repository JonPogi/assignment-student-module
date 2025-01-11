// prettier-ignore

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity'; // Import the Student entity
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
// prettier-ignore

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // Adjust your MySQL credentials
      password: '',
      database: 'student_db',
      entities: [Student],  // Register the Student entity here
      synchronize: true,    // Enable auto-sync for development (be cautious in production)
    }),
    TypeOrmModule.forFeature([Student]),  // Make the Student entity available in the current module
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
