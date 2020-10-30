import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



const Home = (props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box className={props.classes}>
                    <Typography component="p" style={{ padding: '1em', backgroundColor: '#cfe8fc', height: '100vh' }}>
                        hello world
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Home