import { createConnection } from "typeorm";

// **********1 migration , import client
import { Client } from "./entities/Client";
import { Banquier } from "./entities/Banquier";
import { Transaction } from "./entities/Transaction";


const main = async () => {
  try {
    await createConnection({
      type: "postgres", //type du bdd => postgres,mariadb,mongo,mysql ...
      username: "shogun",
      host: "localhost",
      port: 7007,
      password: "password",
      database: "initial_typeorm",

      //   ************2 migration , creer un tableaux entities et le mettre ****
      entities: [Client,Banquier,Transaction],

      //   ***************3, migrations , synchronisation **
      synchronize: true,
    });

    console.log("bravo!!! connexion reussi ");
  } catch (error) {
    console.error(error);
    throw new Error("une erreur a la connexion ");
  }
};

main();
