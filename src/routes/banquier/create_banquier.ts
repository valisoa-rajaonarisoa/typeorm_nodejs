import express from "express";
import { Banquier } from "../../entities/Banquier";

const route = express.Router();

route.post("/api/banquier", async (req, res) => {
  const { firstName, lastName, email, matricule } = req.body;

  try {
    const banquier = Banquier.create({
      first_name: firstName,
      last_name: lastName,
      email,
      matricule_employee: matricule,
    });
    await banquier.save();
    res.status(201).json({ banquier });
    
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("une error ",error)
  }
})

export {route as CreateBanquierRoute}
