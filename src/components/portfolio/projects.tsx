import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material';
import "./projects.css"

interface cardsProjectsProps {
  id: number;
    title: null | string;
    category: null | string;
    type: null | string;
    description: null | string;
    url: null | string;
    activities: null | string;
    status: null | string;
    repository: {
        link: {
            one: string;
            two: string;
            three: string;
            four: string;
        },
        icon: {
            one: string;
            two: string;
            three: string;
            four: string;
        },

    },
    tools: {

        one: string;
        two: string;
        three: string;
        four: string;
    },

    img: string;
}


export default function CardsProjects(props: cardsProjectsProps) {

  return (
    <Grid item xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Card sx={{ maxWidth: 300, bgcolor: "#374D5D", border:1, borderColor:"#374D5D" ,borderRadius: 8, my: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.img}
          />
          <CardContent >
            <Grid container>
              <Grid item xs={12}>
                <Typography align='center' sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.45rem", xl: "1.6rem" }, color: "#F0EEED", fontWeight: "bold", textAlign: { sx: "left" } }}>
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='center' sx={{ fontSize: { xs: ".9rem", sm: "1rem", md: "1.05rem", lg: "1.15rem", xl: "1.25rem" }, fontStyle: 'bold', color: "#F0EEED" }}>
                  {props.category}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Accordion sx={{ bgcolor: "#374D5D"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography align='center' sx={{ fontSize: { xs: ".7rem", sm: ".9rem", md: ".95rem", lg: "1.05rem", xl: "1.15rem" }, color: "#F0EEED" }}>
                          Descripción
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography align='justify' sx={{ fontSize: { xs: ".7rem", sm: ".85rem", md: ".9rem", lg: "1rem", xl: "1rem" }, color: "#F0EEED" }}>
                      {props.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Accordion sx={{ bgcolor: "#374D5D"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography align='center' sx={{ fontSize: { xs: ".7rem", sm: ".9rem", md: ".95rem", lg: "1.05rem", xl: "1.15rem" }, color: "#F0EEED" }}>
                          Tools
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"}>
                        {props.tools.one != "null" ? <img src={props.tools.one} width={35}>
                        </img> : null}
                        {props.tools.two != "null" ? <img src={props.tools.two} width={35}>
                        </img> : null}
                        {props.tools.three != "null" ? <img src={props.tools.three} width={35}>
                        </img> : null}
                        {props.tools.four != "null" ? <img src={props.tools.four} width={35}>
                        </img> : null}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} >
                <Accordion sx={{ bgcolor: "#374D5D" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Grid container>
                      <Grid item xs={12}>

                        <Typography align='center' sx={{ fontSize: { xs: ".7rem", sm: ".9rem", md: ".95rem", lg: "1.05rem", xl: "1.15rem" }, color: "#F0EEED" }}>Enlaces</Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} display={"flex"} justifyContent={"space-evenly"}>
                        {props.repository.icon.one != "null" ? <a target='_blank' href={props.repository.link.one}> <img src={props.repository.icon.one} width={35}>
                        </img> </a>: null}
                        {props.repository.icon.two != "null" ? <a target='_blank' href={props.repository.link.two}> <img src={props.repository.icon.two} width={35}>
                        </img> </a>: null}
                        {props.repository.icon.three != "null" ? <a target='_blank' href={props.repository.link.three}> <img src={props.repository.icon.three} width={35}>
                        </img> </a>: null}
                        {props.repository.icon.four != "null" ? <a target='_blank' href={props.repository.link.four}> <img src={props.repository.icon.four} width={35}>
                        </img> </a>: null}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>









              </Grid>


            </Grid>
          </CardContent>

        </Card>
      </Box>
    </Grid>

  );
}