import { Divider, IconButton, styled, Toolbar, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import SideBarItems from "./SideBarItems";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

interface DrawerItemsProps{
    handleDrawerToggle: () => void;
}

export default function DrawerItems({handleDrawerToggle}: DrawerItemsProps){
    const theme = useTheme();
    
    return (
        <div>
            <Toolbar >
                <DrawerHeader>
                <Image
                    src="/images/logos/dark-logo.svg"
                    alt="Home"
                    width={170}
                    height={50}            
                />
                <IconButton onClick={handleDrawerToggle}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon  />
                    ) : (
                    <ChevronLeftIcon />
                    )}
                </IconButton>
                </DrawerHeader>
            </Toolbar >
            <Divider />
            <SideBarItems />
        </div>
    );
}