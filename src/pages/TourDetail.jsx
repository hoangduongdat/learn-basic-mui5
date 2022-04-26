import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import ImageCollage from '../components/ImageCollage';
import Accordion from './../components/Accordion';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

const TourDetail = () => {
    return (
        <Container sx={{ maxWidth: '900px !important' }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world in vegas
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img
                    height={325}
                    width={500}
                    src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
                    alt=""
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, non iure incidunt veritatis culpa et, totam saepe, assumenda exercitationem aliquam debitis eligendi illo placeat dolores voluptatem reiciendis voluptatibus fuga? Rem blanditiis accusamus quia aliquid id tempore quis modi incidunt maiores.
                </Typography>
            </Box>
            <Box marginBottom={20}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <Accordion />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
    );
};

export default TourDetail;