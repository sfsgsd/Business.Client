import { Box, Drawer, useMediaQuery } from "@mui/material";
import DrawerItems from "./DrawerItems";
import SideBarDesktop from "./SideBarDesktop";

interface SideBarProps{
  open: boolean;
  mobileOpen: boolean;
  drawerWidth: number;
  handleDrawerToggle: (smUp: boolean) => void;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

export default function SideBar({open, mobileOpen, drawerWidth, handleDrawerToggle, handleDrawerClose, handleDrawerTransitionEnd}: SideBarProps) {
  const smUp = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"  //Small Screen
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box'},
          }}
        >
          <DrawerItems handleDrawerToggle={() => handleDrawerToggle(smUp)} />MOBILE
        </Drawer>
        <SideBarDesktop open={open} drawerWidth={drawerWidth} handleDrawerToggle={() => handleDrawerToggle(smUp)} />            
      </Box>      
    </Box>
  );
}
