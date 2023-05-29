import { Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Grid } from '@mui/material';
import './navbar.css';
import { useEffect, useState } from 'react'
import { Events, Link as ScrollLink } from 'react-scroll';


export default function MobileNavBar() {

    const [activeSection, setActiveSection] = useState<string>("home");


    useEffect(() => {
        Events.scrollEvent.register('begin', () => { });
        Events.scrollEvent.register('end', () => { });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to: string) => {
        setActiveSection(to);
    };


    return (

        <Box position={"fixed"} sx={{ width: "100vw", bgcolor: "#27374D",  zIndex:10,  display: { xs: "flex", md: "none" } }}>
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={3} textAlign="center" sx={{border: 1, borderColor: "#27374D", bgcolor: activeSection === "home" ? '#F0EEED' : '#27374D' }}>
                    <ScrollLink
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        <HomeIcon sx={{ color: activeSection === "home" ? '#27374D' : '#F0EEED', fontSize: { xs: "2rem", sm: "2.4rem" } }} />
                    </ScrollLink>
                </Grid>
                <Grid item xs={3} textAlign="center" sx={{border: 1, borderColor: "#27374D", bgcolor: activeSection === "education" ? '#F0EEED' : '#27374D' }}>
                    <ScrollLink
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        <SchoolIcon sx={{ color: activeSection === "education" ? '#27374D' : '#F0EEED', fontSize: { xs: "2rem", sm: "2.4rem" } }} />
                    </ScrollLink>
                </Grid>
                <Grid item xs={3} textAlign="center" sx={{border: 1, borderColor: "#27374D", bgcolor: activeSection === "portfolio" ? '#F0EEED' : '#27374D' }}>
                    <ScrollLink
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        <AutoFixHighIcon sx={{ color: activeSection === "portfolio" ? '#27374D' : '#F0EEED', fontSize: { xs: "2rem", sm: "2.4rem" } }} />
                    </ScrollLink>
                </Grid>
                <Grid item xs={3} textAlign="center" sx={{border: 1, borderColor: "#27374D", bgcolor: activeSection === "skills" ? '#F0EEED' : '#27374D' }}>
                    <ScrollLink
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        <ConstructionIcon sx={{ color: activeSection === "skills" ? '#27374D' : '#F0EEED', fontSize: { xs: "2rem", sm: "2.4rem" } }} />
                    </ScrollLink>
                </Grid>

            </Grid>
        </Box>
    );
}