import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets.entity';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnerModule],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
