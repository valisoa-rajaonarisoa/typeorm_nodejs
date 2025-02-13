// ******** ROUTAGE ,1 importer express
import express from "express";
import { Client } from "../../entities/Client";

// ******** ROUTAGE ,2 creation de route
const route = express.Router();

// ******** ROUTAGE ,3 route pour poster un client avec mo post
route.post("/api/client", async (req, res) => {
  // ***********ADD CLIENT 1,recuperation des datas ***********
  const { firstName, lastName, email, card_number } = req.body;

  try {
    // ***********ADD CLIENT 2,mise en place create  ***********
    const client = Client.create({
      first_name: firstName,
      last_name: lastName,
      email,
      card_number,
    });

    // ***********ADD CLIENT 3, sauvegarder dans le bdd ***********
    await client.save();

    // ***********ADD CLIENT 4, return un json  ***********
    res.status(201).json({ client: client });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("une error ",error)
  }
});

// ******** ROUTAGE ,4 exporter route as ClientRoute
export { route as ClientRoute };
