import express from "express";
import os from "os"

const port = process.env.PORT || 3000

const app = express();
app.use(express.json());

app.get("/",  (req, res ) => {
	const hostName = os.hostname()
  	res.json({ hostName });
});

app.listen(port, () => console.log(`Served on port ${port}`));
