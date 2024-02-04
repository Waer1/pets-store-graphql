import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';
import { CreatePetDto } from './dto/CreatePet.dto';
import { FindPetDto } from './dto/findPet.dto';
import { Owner } from 'src/owner/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Query(() => Pet)
  findpet(@Args('FindPet') findPet: FindPetDto): Promise<Pet> {
    return this.petsService.findOne(findPet.id);
  }

  @Query(() => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet) ;
  }

  @Mutation(() => Pet)
  createPet(@Args('CreatePetInput') createpet: CreatePetDto): Promise<Pet> {
    return this.petsService.createPet(createpet);
  }
}
