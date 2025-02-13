import express from "express";
import { Client } from "../../entities/Client";
import { Transaction } from "../../entities/Transaction";

const route = express.Router();

route.post("/api/client/:clientId/transaction", async (req, res) => {
  // *********MANYTOONE 1, recupration du clientid dans le params **
  const { clientId } = req.params;

  // ***********MANYTOONE 2, recuperation des datas **
  const { type, amount } = req.body;
  try {
    // ************MANYTOONE 3, voir d'abord s'il client existe ou pas **
    const client = await Client.findOne({ where: { id: clientId } });

    if (!client) {
      res.status(403).json({ message: "client not found" });
    } else {
      // ****il existe **

    // ************MANYTOONE 4, ajout **
      const transaction = Transaction.create({ type, amount, client });

      await transaction.save();

      res.status(201).json({ transaction });
    }
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("une error", error);
  }
});

export { route as CreateTransationRoute };
