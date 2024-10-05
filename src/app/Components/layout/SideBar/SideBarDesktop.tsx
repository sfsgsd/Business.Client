import { CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import DrawerItems from "./DrawerItems";

interface SideBarDesktopProps{
    open: boolean;
    drawerWidth: number;
    handleDrawerToggle: () => void;
}

export default function SideBarDesktop({open, drawerWidth, handleDrawerToggle}: SideBarDesktopProps){
  const Drawer = styled(MuiDrawer, {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
    }));

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
    
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });  
  
  return (
      <Drawer
        variant="permanent"  //Wider Screen
        sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open={open}
      >
        <DrawerItems handleDrawerToggle={handleDrawerToggle} />DESKTOP
      </Drawer>
  );
}