import * as React from 'react';

import './AboutUsCard.css'
import Jazz from '../../Assets/jazz.jpg'
import Timothy from '../../Assets/IMG_0705.jpeg'
import Malia from '../../Assets/Malia.jpg'
import Rachel from '../../Assets/rachel01.jpg'
import Oliver from '../../Assets/oliver.jpg'
import Claude from '../../Assets/claude1.png'


import { Typography, Container, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material'



// Import query me

const AboutUsCard = () => {
  // Use the query to swap out the hard coded user info for the logged in user instead
  
  return (
    <>
    <br></br><br></br>
      <Container className='cardDiv'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
      <Card className='card' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={Claude}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Claude Mokbel
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A full-stack web developer currently based in Southern California. I've been studying web development for roughly 2 years and intend to continue my studies long into the future. I work effectively with others and display strong leadership skills when needed. Capacity to meet strict deadlines, delegate tasks, and be of assistance to team members at a moments notice. Focus on Back End development for this project.
          </Typography>
        </CardContent>
        <CardActions>
        <a rel="noopener noreferrer" target="_blank" href='https://github.com/cmokbel1'><Button size="small">Github</Button></a>
        <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/claude-mokbel-aa076788/'><Button size="small">Linkedin</Button></a>
        </CardActions>
      </Card>
        </Grid>
          <Grid item xs={12} md={4}>
            <Card className='card' sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="420"
                image={Jazz}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jazmine Jose
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is my story. Majored in Psychology, switched it up now im an aspiring full stack web developer in the making. I can't wait to use my new found skillset in the world of coding.
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/jazminejose'><Button size="small">Github</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://google.com'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='card' sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="440"
                image={Malia}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Malia Pringle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recent CSUF graduate and highly motivated aspiring software engineer currently searching for work! I hope you find our app useful.
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
            <Card className='card' sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="280"
                image={Rachel}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rachel Hoelscher
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Highly motivated and results-oriented full-stack web developer who operates with strong sense of urgency and thrives in a fast-paced setting while maintaining high standards.
                </Typography>
              </CardContent>
              <CardActions>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/me0wmerz'><Button size="small">Github</Button></a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/rachel-hoelscher/'><Button size="small">Linkedin</Button></a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='card' sx={{ maxWidth: 345 }}>
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
            <Card className='card' sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={Timothy}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Timothy Duran
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicated full-stack web developer with a keen understanding of design and knowledgeable in building robust applications.
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