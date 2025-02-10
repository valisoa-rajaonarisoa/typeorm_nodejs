import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";
export enum TransactionEnum {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum", //type enum
    enum: TransactionEnum, //enum est de type TRanscation les valeurs possibles son deposit et withdraw
  })
  type: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  //   ***************realation **********
  @ManyToOne(
    () => Client,
    (client) => client.transactions // 👈 Ici, "client.transactions" fait référence à la liste des transactions d'un client
  )
  @JoinColumn({ name: "client_id" }) // 👈 Ajoute la clé étrangère client_id dans la table transaction
  client: Client; // 👈 Au singulier, car UNE transaction appartient à UN SEUL client

  
}
