import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

export const app = express();
export const PORT = 5000;
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello I am running Server."));

app.listen(PORT, () =>
  console.log(`Server running on port:http://localhost:${PORT}`)
);
