import { Box, CardMedia, Grid } from "@mui/material";
import javaIcon from "../../img/skills/javaIcon.svg"
import springBootIcon from "../../img/skills/springBootIcon.svg"
import mysqlIcon from "../../img/skills/mysqlIcon.svg"
import mysqlWorkbenchIcon from "../../img/skills/mysqlWorkbenchIcon.svg"
import postmanIcon from "../../img/skills/postmanIcon.svg"
import htmlIcon from "../../img/skills/htmlIcon.svg"
import cssIcon from "../../img/skills/cssIcon.svg"
import jsIcon from "../../img/skills/jsIcon.svg"
import reactIcon from "../../img/skills/reactIcon.svg"
import gitIcon from "../../img/skills/gitIcon.svg"
import gitHubIcon from "../../img/skills/gitHubIcon.svg"
import jiraIcon from "../../img/skills/jiraIcon.svg"
import materialUIIcon from "../../img/skills/materialUIIcon.svg"




export default function SoftSkills() {


    return (

        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: "wrap", my:3 }}>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>
                <Grid item xs={12} md={4} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Grid container>
                        <Grid item xs={12} sx={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={javaIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={springBootIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={mysqlIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={postmanIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={mysqlWorkbenchIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item xs={12} md={4} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Grid container>
                        {/* <Grid item xs={12}>
                            <Typography variant="h6" marginY={3} sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem", lg: "2rem", xl: "2.2rem" }, color: "#F0EEED", fontFamily: 'Monospace' }}>Frontend Tech</Typography>
                        </Grid> */}
                        <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={htmlIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={cssIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={jsIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={reactIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={materialUIIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={12} md={4} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Grid container>
                        {/* <Grid item xs={12}>
                            <Typography variant="h6" marginY={3} sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem", lg: "2rem", xl: "2.2rem" }, color: "#F0EEED", fontFamily: 'Monospace' }}>Others</Typography>
                        </Grid> */}
                        <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={gitIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={gitHubIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                            <CardMedia
                                component="img"
                                alt="Imagen de ejemplo"
                                image={jiraIcon}
                                sx={{
                                    height: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }, 
                                    width: { xs: 50, sm: 60, md: 60, lg: 70, xl: 80 }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>

    )

}

