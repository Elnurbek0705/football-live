import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLeagueStandings } from "../../services/api";

// 🔹 Premier League turnir jadvalini yuklash
export const fetchLeagueStandings = createAsyncThunk(
  "standings/fetchLeagueStandings",
  async (leagueCode) => {
    const data = await getLeagueStandings(leagueCode);
    return data.standings;
  }
);

const standingsSlice = createSlice({
  name: "standings",
  initialState: {
    leagueStandings: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagueStandings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLeagueStandings.fulfilled, (state, action) => {
        state.loading = false;
        state.leagueStandings = action.payload;
      })
      .addCase(fetchLeagueStandings.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default standingsSlice.reducer;
