import { Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';

function Footer() {

    return (
        <Grid container bgcolor="#27374D" >
                  <Grid item xs={3} />
                <Grid item xs={6} alignContent={"center"} sx={{mt:3, display: "flex", alignItems: "center", alignContent: "center", justifyContent:"space-evenly", flexWrap:"wrap" }}>
                    <a href="https://github.com/LouckGuntz/DVeritas/" target="_blank" rel="noreferrer">
                        <LinkedInIcon sx={{ color: "#D3E0EA", fontSize: "2.5rem" }} />
                    </a>
                    <a href="https://github.com/LouckGuntz/DVeritas/" target="_blank" rel="noreferrer">
                        <GitHubIcon sx={{ color: "#D3E0EA", fontSize: "2.5rem" }} />
                    </a>
                    <a href="https://github.com/LouckGuntz/DVeritas/" target="_blank" rel="noreferrer">
                        <ArticleIcon sx={{ color: "#D3E0EA", fontSize: "2.5rem" }} />
                    </a>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={12} mt={5}>
                    <Typography sx={{mb:3,color: "#D3E0EA"}} textAlign="center">Asgary Nieto Terrazas</Typography>
                </Grid>
        </Grid> 

    )
}
export default Footer;