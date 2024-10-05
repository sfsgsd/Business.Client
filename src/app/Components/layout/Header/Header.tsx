import { IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderAppBar from "./HeaderAppBar";

interface HeaderProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerToggle: (smUp: boolean) => void;
}

export default function Header({ open, drawerWidth,   handleDrawerToggle}: HeaderProps) {
  const smUp = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  return (
    <HeaderAppBar open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerToggle(smUp)}
          edge="start"
          sx={{
            mr: 6,
            display: { xs: 'block', sm: open ? 'none' : 'block' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </HeaderAppBar>
  );
}
