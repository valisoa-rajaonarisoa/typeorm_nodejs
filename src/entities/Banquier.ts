// **********1 importer le typeorm **

import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity("banquier") //decorateur ("nom_table")
export class Banquier extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  matricule_employee: string;

  @ManyToMany(() => Client, (client) => client.banquiers)
  @JoinTable()
  clients: Client;
}
