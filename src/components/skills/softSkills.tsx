import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import data from '../../constants/softskills'
import { List, ListItemButton, ListItemText } from '@mui/material';

interface SkillsProps {
    id: number;
    icon: string | React.ReactNode;
    title: null | string;
    description: null | string;
}


export default function SoftSkills() {

    const skills = data.map((item) => <BasicCard key={item.id} {...item} />);

    return (

        <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: "wrap", justifyContent: "center" }}>
                {skills}
            </Box>
        </Box>

    )

}


function BasicCard(props: SkillsProps) {
    return (
        <Card sx={{bgcolor: "#F0EEED", minWidth: 240, maxWidth: 480, m: 2, borderRadius: 10, color: "#332C39", display: "flex", justifyContent: "center", flexWrap:"wrap", my:3  }}>

            <CardContent>
                {props.icon}
                <Typography align='center' sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.45rem", xl: "1.6rem" }, color: "#332C39", fontWeight: "bold", textAlign: { sx: "left" } }}>
                    {props.title}
                </Typography>

                <List>
                    <ListItemButton>
                        <ListItemText sx={{ fontSize: { xs: ".9rem", sm: "1rem", md: "1.05rem", lg: "1.15rem", xl: "1.25rem" }, fontStyle: 'bold', color: "#332C39", textAlign:'justify' }}  primary={props.description} />
                    </ListItemButton>
                </List>

            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}