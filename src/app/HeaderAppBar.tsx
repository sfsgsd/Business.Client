import { styled, useMediaQuery } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderAppBar{
    open?: boolean;
    children: React.ReactNode;
}

export default function HeaderAppBar({open, children}: HeaderAppBar){
    const smUp = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));

    console.log("render Header"); 
    console.log("smUp HEADER", smUp);
      
    
    return(
        <>
            {smUp
                ? (<AppBar position="fixed" open={open}> {children} </AppBar>) //AppBar styled custom for Desktop
                : (<MuiAppBar   //AppBar from MUI for mobile
                    position="fixed"
                    sx={{
                      width: { sm: `calc(100% - ${drawerWidth}px)` },
                      ml: { sm: `${drawerWidth}px` },
                    }}
                    >
                        {children}
                    </MuiAppBar>)
            }            
        </>
    );
}