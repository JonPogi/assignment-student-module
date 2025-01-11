// prettier-ignore
import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto.ts';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  // prettier-ignore
  // Update a student by ID
  @Put(':id')
   async update(@Param('id') id: number, 
   @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
   return this.studentService.updateStudent(id, updateStudentDto);
   }

  // Create a student
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  // Delete a student by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  }
}
