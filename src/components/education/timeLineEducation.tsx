import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import "./timeLineEducation.css"

interface CustomizedTimelineProps {
    id: number;
    category: null | string;
    title: null | string;
    institution: null | string;
    status: null | string;
    place: null | string;
    activities: null | string;
    identifier: null | string;
    img: null | string;
    startDate: {
        month: null | string;
        year: null | number;
    };
    finishDate: {
        month: null | string;
        year: null | number;
    }
    icon: string;
}

export default function CustomizedTimeline(props: CustomizedTimelineProps) {
    const position = props.id % 2 === 0 ? "left" : "right";
    const positionDate = props.id % 2 !== 0 ? "left" : "right";

    return (

        <Grid container justifyContent="center">
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <HorizontalRuleIcon sx={{ color: { xs: "transparent", sm: "#F0EEED" }, transform: 'rotate(90deg)', m: -1 }} />
                <HorizontalRuleIcon sx={{ color: { xs: "transparent", sm: "#F0EEED" }, transform: 'rotate(90deg)', m: -1 }} />
            </Grid>

            
            <Grid item xs={0} sm={5} sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", justifyContent: "center" }}>

                {props.id % 2 !== 0 ? (
                    <>
                        <Typography align={position} sx={{ fontSize: { lg: ".9rem", xl: "1.2rem" }, fontWeight: 'bold' }}>{props.title}</Typography>
                        <Typography align={position} sx={{ fontSize: { lg: ".8rem", xl: ".9rem" }, fontStyle: 'oblique' }}>{props.institution}</Typography>
                        <Typography align={position} sx={{ fontSize: { lg: ".8rem", xl: ".9rem" }, fontStyle: 'oblique' }}>{props.status}</Typography>
                    </>
                ) : (
                    <>
                        {props.finishDate.month == null && props.finishDate.year == null ? (
                            <Typography align={positionDate} sx={{ fontSize: { lg: ".8rem", xl: ".9rem" }, fontStyle: 'oblique' }}>
                                {props.startDate.month} {props.startDate.year} - Actualmente
                            </Typography>
                        ) : (
                            <Typography align={positionDate} sx={{ fontSize: { lg: ".8rem", xl: ".9rem" }, fontStyle: 'oblique' }}>
                                {props.startDate.month} {props.startDate.year} - {props.finishDate.month} {props.finishDate.year}
                            </Typography>
                        )}
                    </>
                )}
            </Grid>
            <Grid item xs={2} display={"flex"} justifyContent={"center"} textAlign={"center"} alignContent={"center"} >
                <TimelineDot sx={{ bgcolor: "#F0EEED" }}>
                    {typeof (props.icon) == "string" ?
                        (<img className='imagenLogo' src={props.icon}></img>) : (<>{props.icon}</>)}
                </TimelineDot>
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign:"center" }}>
                <Typography align="center" sx={{ fontSize: "1.2rem", fontWeight: 'bold' }}>{props.title}</Typography>
                <Typography align="center" sx={{ fontSize: "1.1rem", fontStyle: 'oblique' }}>{props.institution}</Typography>
                <Typography align="center" sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>{props.status}</Typography>
                <Typography align='center' sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>{props.startDate.month} {props.startDate.year} - {props.finishDate.month} {props.finishDate.year}</Typography>
            </Grid>
            <Grid item sm={5} sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", justifyContent: "center", textAlign:"center", alignContent:"center" }}>
                {props.id % 2 === 0 ? (
                    <>
                        <Typography align={position} sx={{ fontSize: "1.2rem", fontWeight: 'bold' }}>{props.title}</Typography>
                        <Typography align={position} sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>{props.institution}</Typography>
                        <Typography align={position} sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>{props.status}</Typography>
                    </>
                ) : (
                    <>
                        {props.finishDate.month == null && props.finishDate.year == null ? (
                            <Typography align={positionDate} sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>
                                {props.startDate.month} {props.startDate.year} - Actualmente
                            </Typography>
                        ) : (
                            <Typography align={positionDate} sx={{ fontSize: ".9rem", fontStyle: 'oblique' }}>
                                {props.startDate.month} {props.startDate.year} - {props.finishDate.month} {props.finishDate.year}
                            </Typography>
                        )}
                    </>
                )}
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <HorizontalRuleIcon sx={{ color: { xs: "transparent", sm: "#F0EEED" }, transform: 'rotate(90deg)', m: -1 }} />
                <HorizontalRuleIcon sx={{ color: { xs: "transparent", sm: "#F0EEED" }, transform: 'rotate(90deg)', m: -1 }} />
            </Grid>
        </Grid>
    );
}