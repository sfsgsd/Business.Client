"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./NavBar";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import SideBar from "./SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(true);
  const drawerWidth = 240;

  const handleToogleDrawer = () => {
    console.log("Clicked open");

    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<AppRouterCacheProvider>*/}
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            {/*<CssBaseline /> */}
            {/*<Header open={open} handleDrawerOpen={handleToogleDrawer} />*/}
            {/*<Navbar open={open} handleDrawerClose={handleToogleDrawer} />*/}
            <SideBar />
            <main>{children}</main>
          </Box>
        </ThemeProvider>
        {/*</AppRouterCacheProvider>*/}
      </body>
    </html>
  );
}
