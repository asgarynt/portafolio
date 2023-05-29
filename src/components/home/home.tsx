import { Grid } from "@mui/material";
import Networks from "./networks"

import Resume from "./resume"
import "./home.css"

const Home: React.FC  = () => {


    
    return (
        <div id="home">
            <Grid container textAlign={"center"} minHeight={"100vh"} sx={{width:{xs:"100vw",md:"95vw"}}}>
                <Grid item xs={12}  sx={{mt:{xs:7, md:0}}}>
                <Resume />
                </Grid>
            
            <Grid item xs={12}>
                <Networks />
            </Grid>
            </Grid>

        </div>



    )

}

export default Home;