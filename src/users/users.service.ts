import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userEntity)
    private userRepository: Repository<userEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<userEntity> {
    const { name, surname, tokens, createdAt, email, password } = createUserDto;
    const user = new userEntity();
    user.name = name;
    user.surname = surname;
    user.tokens = tokens;
    user.createdAt = createdAt;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  async findAll(): Promise<userEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<userEntity> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<userEntity> {
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

  async findByUsername(name: string) {
    return this.userRepository.findOneBy({ name });
  }

  async findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
