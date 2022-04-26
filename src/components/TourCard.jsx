import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { AccessTime } from "@mui/icons-material"
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 14,

                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 12,

                    },
                },
            ]
        }
    }
})

const TourCard = ({ tour }) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={10} >
                    <img
                        src={tour.image}
                        alt=""
                        className='img-tour'
                    />
                    <Box paddingX={1}>
                        <Typography component="h2" variant="subtitle1">
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography component="p" variant="body2" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={2}
                        >
                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                            <Typography component="p" variant="body2" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography component="p" variant="body3" marginLeft={1.5}>
                                ({tour.numberOfReviews})
                            </Typography>
                        </Box>
                        <Box>
                            <Typography component="h3" variant="h6" marginTop={0}>
                                From C ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>

    );
};

export default TourCard;