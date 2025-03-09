import React from "react";
import { Box, Grid2 } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Navbar, LeaguesList, Matches, Sidebar} from "../components/";

const Layout = () => {
  return (
    <Box sx={{ height: "100vh", bgcolor: "#121212", color: "#fff" }}>
      <Navbar />
      <Grid container spacing={2} sx={{ p: 2 }}>
        {/* Chap tomonda doimiy ligalar ro‘yxati */}
        <Grid size={{xs:12, md:3}} >
          <LeaguesList />
        </Grid>

        {/* O‘rtadagi asosiy kontent */}
        <Grid size={{xs:12, md:6}}>
          <Matches />
        </Grid>

        {/* O‘ng tomondagi doimiy panel */}
        <Grid size={{xs:12, md:3}}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
