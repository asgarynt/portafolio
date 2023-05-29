import { CardMedia, Divider, Grid, Typography } from "@mui/material";
import profilePicture from "../../img/home/foto.jpeg"
import "./resume.css"
import "./home.css"

export default function Resumen() {
    return (
        <Grid container className="resume-container"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Grid item xs={0} sm={0} md={0} lg={0} xl={1} />
            <Grid item xs={10} sm={10} md={6} lg={5} xl={5}>
                <CardMedia
                    component="img"
                    alt="Imagen de ejemplo"
                    image={profilePicture}
                    sx={{
                        display: { xs: "flex", md: "none" },
                        borderRadius: 100,
                        height: "40%",
                        minWidth: 150,
                        width: "40%",
                        border: 2,
                        borderColor: "#27374D",
                        margin: "auto"
                    }}
                />
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "1.9rem", lg: "2.4rem", xl: "2.8rem" }, color: "#332C39", mt: 0, paddingTop: 0, fontWeight:"bold" }}>Hola, soy <span className="textHighlight">Asgary Nieto.</span> <br />Desarrollador Java Full Stack Jr.</Typography>
                <br />
                <Divider />
                <br />
                <Typography align="justify" sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1.2rem" }, color: "#332C39" }}>
                    Dedicado al ámbito educativo, actualmente estoy buscando una transición hacia el área de TI. Cuento con habilidades técnicas y capacidad para trabajar en equipo en el desarrollo de soluciones eficaces. Poseo una mentalidad de crecimiento constante y estoy comprometido con el aprendizaje y la mejora continua. Me apasiona la tecnología y su capacidad para innovar y resolver problemas. Estoy convencido de que puedo contribuir significativamente al desarrollo de proyectos y soluciones tecnológicas.
                </Typography>
                <Grid item sm={12} xl={12}>
                </Grid>
            </Grid>
            <Grid item sm={5} md={5} lg={5} xl={5} sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                <CardMedia
                    component="img"
                    alt="Imagen de ejemplo"
                    image={profilePicture}
                    sx={{
                        borderRadius: 100, height: "80%", minWidth: 300, maxWidth: 360, width: "80%", border: 2, borderColor: "#27374D", display: "block",
                        margin: "auto"
                    }}
                />
            </Grid>
        </Grid>
    )
}