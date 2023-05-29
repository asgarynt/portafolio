import { Grid, Typography } from "@mui/material";
import SoftSkills from "./softSkills"
import TechSkills from "./techSkills"


const Skills: React.FC = () => {

    return (
        <div>
            <Grid id="skills" container textAlign={"center"} minHeight={"100vh"} sx={{bgcolor: "#374D5D", width: { xs: "100vw", md: "95vw" } }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.4rem", xl: "2.6rem" }, color: "#F0EEED", fontWeight: "bold", fontFamily: 'Monospace', pt: 10, textAlign: "center" }}>
                        SKILLS
                    </Typography>
                </Grid>
                <Grid item >

                    <TechSkills />
                    <SoftSkills />

                </Grid>

            </Grid>
        </div>
    )
}

export default Skills;