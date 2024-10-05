"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box, CssBaseline} from "@mui/material";
import Header from "./Components/layout/Header/Header";
import { useState } from "react";
import SideBar from "./Components/layout/SideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [drawerWidth, setdrawerWidth] = useState(240);
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = (smUp: boolean) => {

    console.log("Open handleDrawerToggle", open);   

    
    if (open && smUp) {
      setdrawerWidth(65)
    }else{
      setdrawerWidth(240)
    }
    if (smUp){
      setOpen(!open)
      setMobileOpen(false);
    }
    if (!isClosing && !smUp) {
      setMobileOpen(!mobileOpen);
      setOpen(true)
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<AppRouterCacheProvider>*/}
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <SideBar open={open} mobileOpen={mobileOpen}
              drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}
              handleDrawerClose={handleDrawerClose}
              handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            />
            <Header open={open} drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: "yellow" }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
        {/*</AppRouterCacheProvider>*/}
      </body>
    </html>
  );
}
