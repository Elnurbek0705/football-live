require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

// CORS muammosini oldini olish uchun
app.use(cors({credentials: true, origin: true}));

// API kalitini yashirishs
const API_KEY = process.env.API_KEY || "f24900cbf9204de69813944a5df9be37";
const BASE_URL = "https://api.football-data.org/v4";

// 🔹 Bugungi matchlarni olish uchun endpoint
app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/matches`, {
      headers: { "X-Auth-Token": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Ma'lum bir musobaqaning matchlarini olish uchun endpoint
app.get("/api/competitions/:code/matches", async (req, res) => {
  try {
    const { code } = req.params;
    const response = await axios.get(`${BASE_URL}/competitions/${code}/matches`, {
      headers: { "X-Auth-Token": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Muayyan jamoaning kelgusi matchlarini olish uchun
app.get("/api/teams/:id/matches", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/teams/${id}/matches?status=SCHEDULED`, {
      headers: { "X-Auth-Token": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Ligalar ro'yxatini olish uchun endpoint
app.get("/api/competitions", async (req, res) => {
   try {
      const response = await axios.get(`${BASE_URL}/competitions`, {
         headers: { "X-Auth-Token": API_KEY },
      });
      res.json(response.data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
   });

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
});
