const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express();
const {conn} = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors({
    origin: true
}))


app.get("/character", async (req, res)=>{
  try {
    const pages = Array.from(Array(20).keys()) 
console.log(pages)
     const requests = pages.map(page => axios.get(`https://rickandmortyapi.com/api/character/?page=${page+1}`)) 
     const responses = await Promise.all(requests) 
     const data = responses.reduce((acc, response) => acc.concat(response.data.results), []) 
     res.status(200).json({data}) 
  } catch (error) {
     console.log(error)
     res.status(500).json({error: "Internal server error"})
  }
})

app.get("/location/:name", async (req, res)=>{
  try {
    const locationName = req.params.name
    const {data} = await axios.get(`https://rickandmortyapi.com/api/location/${locationName}`)
    const characters = await axios.all(data.residents.map(residentUrl => axios.get(residentUrl)))
   const characterData = characters.map(e=> e.data)
   res.status(200).json({data:characterData })    
  } catch (error) {
   console.log(error)
  }
})




app.get("/character/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).send("Personaje no encontrado");
  }
});



app.post("/favorites", async (req, res) => {
  const character = req.body;
  console.log(req.body);
  try {
    await conn.query(`INSERT INTO favorites (id,name) VALUES (:id, :name)`, {
      replacements: { name: character.name, id:character.id }
    });
    res.status(201).send("Personaje agregado a favoritos");
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }
});


app.get("/favorites", async (req, res) => {
  try {
    const [rows] = await conn.query(`SELECT * FROM favorites`);
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }
});

module.exports = app
