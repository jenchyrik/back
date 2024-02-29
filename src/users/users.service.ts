import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from './entities/user.entity'; // Обновленный импорт имени сущности

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userEntity) // Обновленное имя сущности
    private userRepository: Repository<userEntity>, // Обновленное имя сущности
  ) {}

  async create(createUserDto: CreateUserDto): Promise<userEntity> {
    // Обновленное имя сущности
    const { name, surname, tokens, createdAt, email, password } = createUserDto;
    const user = new userEntity(); // Обновленное имя сущности
    user.name = name;
    user.surname = surname;
    user.tokens = tokens;
    user.createdAt = createdAt;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  async findAll(): Promise<userEntity[]> {
    // Обновленное имя сущности
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<userEntity> {
    // Обновленное имя сущности
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<userEntity> {
    // Обновленное имя сущности
    const user = await this.userRepository.findOne({ where: { id } });
    const { name, surname, tokens, createdAt, email, password } = updateUserDto;
    user.name = name;
    user.surname = surname;
    user.tokens = tokens;
    user.createdAt = createdAt;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
