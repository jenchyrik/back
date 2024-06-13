import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ default: 'name1' })
  @IsNotEmpty()
  @MinLength(3, { message: 'Username must be more then 3 symbols' })
  username: string;

  @ApiProperty({ default: 'name2' })
  @IsNotEmpty()
  @MinLength(3, { message: 'Name must be more then 3 symbols' })
  name: string;

  @ApiProperty({ default: '123' })
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be more then 6 symbols' })
  password: string;

  @ApiProperty({ default: 'hello@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: { id: '1' } })
  role: object;
}
