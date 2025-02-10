// **********1 importer le typeorm **

import { Column, Entity, JoinTable, ManyToMany, OneToMany} from "typeorm";

import {Person} from "./utils/Person"

import { Transaction } from "./Transaction";
import { Banquier } from "./Banquier";

@Entity("client") //decorateur ("nom_table")
export class Client extends Person {

 
  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;


  @OneToMany(
    () => Transaction, 
    (transaction) => transaction.client // 👈 Ici, "transaction.client" fait référence à la propriété `client` dans Transaction.ts
  )
  transactions: Transaction[]; // 👈 "transactions" au pluriel, car un client peut avoir plusieurs transactions
  

  @ManyToMany(
    ()=>Banquier,
    banquier => banquier.clients
  )
  @JoinTable()
  banquiers: Banquier
}
