// **********1 importer le typeorm **

import { Column, Entity, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity() // on va pas mettre le nom du table, 
export class Person extends BaseEntity {

  @PrimaryGeneratedColumn() //primary key 
  id: string;

  @Column() //pour indiquer que c'est un colmn
  first_name: string; //attriubt

  @Column()
  last_name: string; //atrtribut

  @Column({
    unique: true, //pour indiquer que l'email doit etre unique
  })
  email: string;

  @Column({
    type:"simple-json",
    nullable:true , //peut etre null
  })
  additionanl_info : {
    age: number;
    hair_color: string
  }


  @Column({
    type:"simple-array",
    default: []
  })
  family_members: string []


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
