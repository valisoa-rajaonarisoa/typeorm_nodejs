import { createConnection } from "typeorm";

// **********1 migration , import client
import { Client } from "./entities/Client";
import { Banquier } from "./entities/Banquier";
import { Transaction } from "./entities/Transaction";

// ***************** EXPRESS CONNEXION 1 , importation de l'express**
import express from "express";
import { ClientRoute } from "./routes/client/create_client";
import { CreateBanquierRoute } from "./routes/banquier/create_banquier";
import { CreateTransationRoute } from "./routes/transaction/create_transaction";
import { CreateRelationClientBanquier } from "./routes/client_banquier/create_realation_client_banquier";


// ***************** EXPRESS CONNEXION 2 , creation d'une application app express**
const app = express();

const main = async () => {
  try {
    // *************connextion au bdd ***
    await createConnection({
      type: "postgres", //type du bdd => postgres,mariadb,mongo,mysql ...
      username: "shogun",
      host: "localhost",
      port: 7007,
      password: "password",
      database: "initial_typeorm",

      //   ************2 migration , creer un tableaux entities et le mettre ****
      entities: [Client, Banquier, Transaction],

      //   ***************3, migrations , synchronisation **
      synchronize: true,
    });

    console.log("bravo!!! connexion reussi ");
    // ***************** EXPRESS CONNEXION 3 , lancement de notra app express**
    // ***un peu de json midlleare **
    app.use(express.json())

    // ******** ROUTAGE ,5 importer le ClientRoute
    app.use(ClientRoute);
    app.use(CreateBanquierRoute)
    app.use(CreateTransationRoute)
    app.use(CreateRelationClientBanquier)


    // *********port d'ecoute *******
    app.listen(5000,()=>console.log("express running in port 5000"))

  } catch (error) {
    console.error(error);
    throw new Error("une erreur a la connexion ");
  }
};

main();
