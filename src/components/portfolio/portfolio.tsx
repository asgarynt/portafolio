import { Box, Grid, Typography } from "@mui/material";
import Project from "./projects"
import data from "../../constants/projects"

function Projects() {
    const smallProjectsData = data.filter((item) => item.type === 'SmallProject');
    const cardsSmallProjects = smallProjectsData.map((item) => <Project key={item.id} {...item} />);
    const projectsData = data.filter((item) => item.type === 'Project');
    const cardsProjects = projectsData.map((item) => <Project key={item.id} {...item} />);
    return (
        <Box  sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant="h6" marginY={5} sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem", lg: "2rem", xl: "2.2rem" }, fontFamily: 'Monospace' }}>Projects</Typography>
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"} >
                        <Grid container>
                            {cardsProjects}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h6" marginY={5} sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem", lg: "2rem", xl: "2.2rem" }, fontFamily: 'Monospace' }}>Small Projects</Typography>
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"}>
                            <Grid container>
                            {cardsSmallProjects}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Box>
    )
}


const Portfolio: React.FC  = () => {

    return (
        <div>

            <Grid id="portfolio" container minHeight={"100vh"} textAlign={"center"} sx={{bgcolor:"#F0EEED", color: "#332C39", width: { xs: "100vw", md: "95vw" } }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.4rem", xl: "2.6rem" }, color: "#332C39", fontWeight: "bold", fontFamily: 'Monospace', pt: 10 }}>
                        PORTAFOLIO
                        </Typography>
                </Grid>
                <Grid item xs={12}>
                    {Projects()}
                </Grid>
            </Grid>
        </div>
    )
}

export default Portfolio;