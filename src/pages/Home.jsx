import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from '../components/TourCard';
import cities from '../data.json'
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            {cities.map((city) => (
                <>
                    <Typography
                        variant="h4"
                        component="h2"
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} Tours
                    </Typography>

                    <Grid container spacing={3}>
                        {city.tours.map((tour, index) => (
                            // <Link to={`/tour.id`}></Link>
                            <TourCard key={index} tour={tour} />
                        ))}
                    </Grid>
                </>
            ))}
        </Container>
    );
};

export default Home;