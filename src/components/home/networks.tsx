import { Box, Grid, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CV from "../../doc/CV Asgary NT.pdf"
import "./home.css"

export default function Networks() {

    return (
        <Box >
            <Grid container textAlign={"center"} >
                <Grid item sm={1} xl={1} />
                <Grid item xs={12} sm={5} xl={5} sx={{ borderRight: { xs: "none", sm: 1 }, borderColor: { sm: "#C92C6D" }, pt: { xs: 5, sm: 0 }, pb: { xs: 0, sm: 0 } }}>
                    <Typography sx={{ fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.9rem", lg: "2.4rem", xl: "2.8rem" }, color: "#332C39" }}><span className="dtextHighlight">Redes</span></Typography>
                    <Grid container >
                        <Grid item xs={12} xl={12} display={"flex"} justifyContent={"space-evenly"}>
                            <a href="https://www.linkedin.com/in/asgarynt/" target="_blank" rel="noreferrer">
                                <LinkedInIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                            <a href="https://github.com/asgarynt/" target="_blank" rel="noreferrer">
                                <GitHubIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                            <a href={CV} target="_blank" rel="noreferrer">
                                <ArticleIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} xl={5} sx={{ borderLeft: { xs: "none", sm: 1 }, borderColor: { sm: "#C92C6D" }, py: { xs: 5, sm: 0 } }}>
                    <Typography sx={{ fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.9rem", lg: "2.4rem", xl: "2.8rem" }, color: "#332C39", mt: 0, paddingTop: 0 }}><span className="dtextHighlight">Contacto</span></Typography>
                    <Grid container >
                        <Grid item xs={12} xl={12} display={"flex"} justifyContent={"space-evenly"}>
                            <a href="https://api.whatsapp.com/send?phone=525565390213" target="_blank" rel="noreferrer">
                                <WhatsAppIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                            <a href="https://telegram.me/Asgarynt" target="_blank" rel="noreferrer">
                                <TelegramIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                            <a href="mailto:asgarynt@gmail.com" target="_blank" rel="noreferrer">
                                <EmailIcon sx={{ color: "#332C39", fontSize: { xs: "3rem", sm: "3.75rem", md: "4.5rem", lg: "5.5rem" }, '&:hover': { color: "#374D5D" } }} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} xl={1} />
            </Grid >
        </Box >
    )
}