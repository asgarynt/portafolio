import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Box, Drawer, Grid } from '@mui/material'
import { Events, Link as ScrollLink } from 'react-scroll';
import React, { useEffect, useState } from 'react'
import "./navbar.css"

const DesktopNavBar: React.FC = () => {


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



  const list = (
    <Box sx={{ width: "5vw", bgcolor: "#27374D", height: "100vh",  zIndex:10 }}>
      <ScrollLink
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
      >
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '25vh', border: 1, borderColor: "#27374D", bgcolor: activeSection === "home" ? '#F0EEED' : '#27374D' }}>
          <Grid item xs={12} textAlign="center">

            <HomeIcon sx={{ color: activeSection === "home" ? '#27374D' : '#F0EEED', fontSize: 40 }} />
          </Grid>
        </Grid>
      </ScrollLink>

      <ScrollLink
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}

      >
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '25vh', border: 1, borderColor: "#27374D", bgcolor: activeSection === "education" ? '#F0EEED' : '#27374D' }}>
          <Grid item xs={12} textAlign="center" >

            <SchoolIcon sx={{ color: activeSection === "education" ? '#27374D' : '#F0EEED', fontSize: 40 }} />

          </Grid>
        </Grid>
      </ScrollLink>

      {/* <ScrollLink
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}

      >

        <Grid container justifyContent="center" alignItems="center" sx={{ height: '20vh', border: 1, borderColor: "#27374D", bgcolor: activeSection === "experience" ? '#F0EEED' : '#27374D' }}>
          <Grid item xs={12} textAlign="center">
            <WorkIcon sx={{ color: activeSection === "experience" ? '#27374D' : '#F0EEED', fontSize: 40 }} />
          </Grid>
        </Grid>

      </ScrollLink> */}
      <ScrollLink
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}

      >
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '25vh', border: 1, borderColor: "#27374D", bgcolor: activeSection === "portfolio" ? '#F0EEED' : '#27374D' }}>
          <Grid item xs={12} textAlign="center">
            <AutoFixHighIcon sx={{ color: activeSection === "portfolio" ? '#27374D' : '#F0EEED', fontSize: 40 }} />
          </Grid>
        </Grid>
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}

      >
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '25vh', border: 1, borderColor: "#27374D", bgcolor: activeSection === "skills" ? '#F0EEED' : '#27374D' }}>
          <Grid item xs={12} textAlign="center">
            <ConstructionIcon sx={{ color: activeSection === "skills" ? '#27374D' : '#F0EEED', fontSize: 40 }} />
          </Grid>
        </Grid>
      </ScrollLink>
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer variant="permanent" anchor="right" sx={{display: { xs: "none", md: "flex" } }}>
        {list}
      </Drawer>
    </React.Fragment>
  );
}

export default DesktopNavBar;