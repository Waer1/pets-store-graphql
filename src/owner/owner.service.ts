import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const newOwner = this.ownerRepository.create(createOwnerInput);

    return this.ownerRepository.save(newOwner);
  }

  findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({});
  }

  async findOne(id: number): Promise<Owner> {
    const owner = await this.ownerRepository.findOne({
      where: { id },
    });

    if (!owner) {
      throw new NotFoundException(`Owner #${id} not found`);
    }

    return owner;
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) {
    const owner = await this.findOne(id);

    Object.assign(owner, updateOwnerInput);

    return this.ownerRepository.save(owner);
  }

  remove(id: number) {
    return this.ownerRepository.delete({ id });
  }
}
