import { Grid, Typography } from "@mui/material";
import CustomizedTimeline from "./timeLineEducation";
import data from '../../constants/education'


function TimeLineEducationAcademic() {

    const academicData = data.filter((item) => item.category === 'academic');
    const timeLineAcademic = academicData.map((item) => <CustomizedTimeline key={item.id} {...item} />);
    return (
        <div>
            <Typography variant="h6" marginY={5} sx={{ fontSize: {xs:"1.4rem", sm:"1.6rem", md:"1.8rem", lg:"2rem", xl:"2.2rem"}, color: "F0EEED", fontFamily: 'Monospace' }}>Formación Académica</Typography>
            {timeLineAcademic}
        </div>
    )
}

function TimeLineEducationBootcamp() {

    const bootcampData = data.filter((item) => item.category === 'bootcamp');
    const timeLineBootcamp = bootcampData.map((item) => <CustomizedTimeline key={item.id} {...item} />);
    return (
        <div>
            <Typography variant="h6" marginY={5} sx={{ fontSize: {xs:"1.4rem", sm:"1.6rem", md:"1.8rem", lg:"2rem", xl:"2.2rem"}, color: "F0EEED", fontFamily: 'Monospace' }}>Bootcamps</Typography>
            {timeLineBootcamp}
        </div>
    )
}


const Education: React.FC  = () => {

    return (
       <Grid id="education" container minHeight={"100vh"}  textAlign={"center"} sx={{ bgcolor: "#374D5D", color: "#F0EEED", width:{xs:"100vw", md:"95vw"} }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: {xs:"1.8rem", sm:"2rem", md:"2.2rem", lg:"2.4rem", xl:"2.6rem"}, color: "#F0EEED", fontWeight:"bold", fontFamily: 'Monospace', pt:10}}>EDUCACIÓN</Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    {TimeLineEducationAcademic() }
                </Grid>
                <Grid item xs={12} lg={6}>
                    {TimeLineEducationBootcamp()}
                </Grid>
    </Grid>
    )
}

export default Education;