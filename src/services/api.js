import axios from "axios";

// Backend API manzili
const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// 🔹 1. Bugungi barcha matchlar
export const getTodayMatches = async () => {
  const response = await api.get("/matches");
  return response.data;
};

// 🔹 2. Chempionlar Ligasi matchlari
export const getChampionsLeagueMatches = async () => {
  const response = await api.get("/competitions/CL/matches");
  return response.data;
};

// 🔹 3. Real Madridning bo'lajak matchlari
export const getTeamUpcomingMatches = async (teamId) => {
  const response = await api.get(`/teams/${teamId}/matches`);
  return response.data;
};

// 🔹 4. Premier League turnir jadvali
export const getLeagueStandings = async (leagueCode) => {
  const response = await api.get(`/competitions/${leagueCode}/standings`);
  return response.data;
};

// 🔹 5. Ligalar ro'yxatini olish
export const getLeagues = async () => {
   const response = await api.get("competitions");
   return response.data;
 };
 

export default api;
