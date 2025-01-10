import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // Change to your MySQL username
      password: '',      // Change to your MySQL password
      database: 'student_db', // Replace with your actual database name
      entities: [Student],
      synchronize: true,  // Enable auto-sync for development
    }),
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
