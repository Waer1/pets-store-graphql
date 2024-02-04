import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/CreatePet.dto';
import { OwnerService } from 'src/owner/owner.service';
import { Owner } from 'src/owner/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    private readonly ownerService: OwnerService,
  ) {}

  async findAll(): Promise<Pet[]> {
    const pets = this.petRepository.find({});
    return pets;
  }

  async createPet(pet: CreatePetDto): Promise<Pet> {
    const newPet = this.petRepository.create(pet);
    return this.petRepository.save(newPet);
  }

  async findOne(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOne({
      where: { id },
    });

    if (!pet) {
      throw new NotFoundException('Pet not found');
    }

    return pet;
  }

  async getOwner(pet: Pet): Promise<Owner> {
    return this.ownerService.findOne(pet.id);
  }
}
