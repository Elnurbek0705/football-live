import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodayMatches, getChampionsLeagueMatches } from "../../services/api";

// 🔹 1. Bugungi matchlarni yuklash
export const fetchTodayMatches = createAsyncThunk(
  "matches/fetchTodayMatches",
  async () => {
    const data = await getTodayMatches();
    return data.matches;
  }
);

// 🔹 2. Chempionlar Ligasi matchlarini yuklash
export const fetchChampionsLeagueMatches = createAsyncThunk(
  "matches/fetchChampionsLeagueMatches",
  async () => {
    const data = await getChampionsLeagueMatches();
    return data.matches;
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    todayMatches: [],
    championsLeagueMatches: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodayMatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodayMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.todayMatches = action.payload;
      })
      .addCase(fetchTodayMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchChampionsLeagueMatches.fulfilled, (state, action) => {
        state.championsLeagueMatches = action.payload;
      });
  },
});

export default matchesSlice.reducer;
