import express from "express";
import { Banquier } from "../../entities/Banquier";
import { Client } from "../../entities/Client";

const route = express.Router();
route.put(
  "/api/client/:clientId/banquier/:banquierId",
  async (req, res) => {
    // **********recuperation clientid ,banquierId********
    const { clientId, banquierId } = req.params;
    // ********************verification datas
    try {
      const banquier = await Banquier.findOne({ where: { id: banquierId } });
      const client = await Client.findOne({ where: { id: clientId } });

      if (!client || !banquier) {
        res.json({ message: "client or banquier not found" });
      } else {
        // *************ajouter banquier dans le tablauw client.banquiers ou inverse **
        client.banquiers = [banquier];

        await client.save();
      }

      res.status(201).json({ message: "relatin yes" });
    } catch (error) {
      res.status(500).json({ message: error });
      console.log("une error", error);
    }
  }
);


export {route as CreateRelationClientBanquier}