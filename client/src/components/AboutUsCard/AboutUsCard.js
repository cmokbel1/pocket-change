import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Jazz from '../../Assets/jazz.jpg'
import Timothy from '../../Assets/timothy.jpeg'
import Malia from '../../Assets/Malia.jpg'
import Rachel from '../../Assets/rachel2.0.jpg'
import Oliver from '../../Assets/oliver.jpg'
import Claude from '../../Assets/claude1.png'
import './AboutUsCard.css'

// Import query me

const AboutUsCard = () => {
  // Use the query to swap out the hard coded user info for the logged in user instead
  
  return (
    <>
    <br></br><br></br>
      <Container className='cardDiv'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          image={Claude}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Claude Mokbel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <a rel="noopener noreferrer" target="_blank" href='https://github.com/cmokbel1'><Button size="small">Github</Button></a>
        <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/claude-mokbel-aa076788/'><Button size="small">Linkedin</Button></a>
        </CardActions>
      </Card>
        </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="280"
                image={Jazz}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jazmine Jose
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/jazminejose'><Button size="small">Github</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://google.com'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="260"
                image={Malia}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Malia Pringle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recent CSUF graduate and highly motivated aspiring software engineer currently searching for work! I hope you find our app useful. Yes that's right she's only 1 Pringle no S Kekw
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/pringle97'><Button size="small">Github</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/malia-pringle-356175189/'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <br></br>

      <Container className='cardDiv'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={Rachel}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rachel Hoelscher
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/me0wmerz'><Button size="small">Github</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/rachel-hoelscher/'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={Oliver}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Oliver Hoang
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An experienced coding bootcamp graduate with extensive background in Javascript, developing, and building mobile first web applications.
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/LohasOT?tab=repositories'><Button size="small">Gibhub</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/oliver-hoang-492b22221/'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="280"
                image={Timothy}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Timmmmmmothy Duran
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Highly motivated and results-oriented full-stack web developer who operates with strong sense of urgency and thrives in a fast-paced setting while maintaining high standards.
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/timduran'><Button size="small">Gibhub</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/timothy-duran-402b3a223/'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default AboutUsCard;