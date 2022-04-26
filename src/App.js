import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import TourCard from './components/TourCard';
import SearchAppBar from './components/TopBar';
import cities from './data.json'
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
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
                <TourCard key={index} tour={tour} />
              ))}
            </Grid>
          </>
        ))}


      </Container>
    </div>
  );
}

export default App;
