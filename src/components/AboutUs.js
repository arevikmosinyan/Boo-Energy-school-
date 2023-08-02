import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Grid } from '@material-ui/core';

import CalendarImage from '../images/calendar.png';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant='h4' gutterBottom>
          Մեր մասին
        </Typography>
        <Typography paragraph>
          Բարի գալուստ մեր կրթական կայք։Մենք պատրաստ ենք տրամադրելու բարձրորակ
          կրթական բովանդակություն բոլոր տարիքի սովորողների համար։ Մեր
          առաքելությունն է դարձնել ուսուցումը զվարճալի, գրավիչ և հասանելի բոլորի
          համար։
        </Typography>
        <Typography paragraph>
          Մեր մասնագետների թիմը աշխատում է մշակելու համար ուսումնական նյութեր,
          որոնք ընդգրկում են առարկաների լայն շրջանակ՝ անկախ նրանից , թե դուք
          ուսանող եք, ուսուցիչ, դպրոցական թե պարզապես ինքնակրթվող մարդ։
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        {/* Tests Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img src={CalendarImage} alt='Tests' className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Թեստեր
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        {/* Classes Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Դասընթացներ
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={CalendarImage} alt='Classes' className={classes.image} />
          </Grid>
        </Grid>
        {/* Rating Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img src={CalendarImage} alt='Rating' className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Վարկանիշ
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        {/* Calendar  */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' gutterBottom>
              Օրացույց
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={CalendarImage} alt='Calendar' className={classes.image} />
          </Grid>
        </Grid>
        {/* Contact Us  */}
        <Typography variant='h5' gutterBottom>
          Կապը մեզ հետ
        </Typography>
        <Typography variant='body1' paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant='body1'>Email:</Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;

/*-----------------------------------------Styles---------------------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));
