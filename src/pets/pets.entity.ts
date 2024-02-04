import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
  })
  type?: string;

  @Column({ nullable: true })
  @Field(() => Int)
  owerId: number;

  @Field(() => [Owner], { nullable: true })
  @ManyToOne(() => Owner, (owner) => owner.pets)
  owner: Owner;
}
