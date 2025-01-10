import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto.ts';
import { UpdateStudentDto } from './dto/update-student.dto';
// prettier-ignore
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: { id },
    });
  }

  async updateStudent(id: number, updateData: UpdateStudentDto): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id }, // 'id' condition inside 'where' option
    });

    if (!student) {
      throw new Error('Student not found');
    }

    // Apply the updates to the student object
    Object.assign(student, updateData);

    // Save the updated student
    return this.studentRepository.save(student);
  }
  // Create a new student
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto); // Create a new student entity
    return this.studentRepository.save(student); // Save the student to the database
  }

  // Delete a student by ID
  async deleteStudent(id: number): Promise<void> {
    const student = await this.studentRepository.findOne({
      where: { id }, // 'id' condition inside 'where' option
    });

    if (!student) {
      throw new Error('Student not found');
    }

    // Remove the student from the repository
    await this.studentRepository.remove(student);
  }
}
