import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordian from "@mui/material/Accordian";
import AccordianSummary from "@mui/material/Accordian";
import AccordianDetails from "@mui/material/AccordianDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>
                    You are a NPC?
                </Typography>
            </AccordianDetails>
        </Accordian>

        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favorite Question
                </Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>
                    You are a NPC?!
                </Typography>
            </AccordianDetails>
        </Accordian>

        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Final Question
                </Typography>
            </AccordianSummary>
            <AccordianDetails>
                <Typography>
                    You are THE NPC?!!!!
                </Typography>
            </AccordianDetails>
        </Accordian>
        
    </Box>
    );
};

export default FAQ;