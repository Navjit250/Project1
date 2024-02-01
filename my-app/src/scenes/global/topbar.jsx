
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlinedIcon";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlinedIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
import SearchIcon from "@mui/icons-material/SearchIcon";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (<Box display="flex" justifyContent="space-between" p={2}>

        <IconButton sx={{ display: "flex"}}></IconButton>
    </Box>);
};

export default Topbar;