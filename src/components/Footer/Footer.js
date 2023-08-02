import React from 'react';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/variables';
import Facebook from './Facebook';
import Email from './Email';
import Telegram from './Telegram';
import Instagram from './Instagram';
import Logo from '../Logo';
import Form from './Form';
import userContext from '../../contexts/userContext';
import { useContext } from 'react';

const Footer = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const user = useContext(userContext);

  return (
    <footer className={`${classes.footer} ${classesForMediaQueries.footer}`}>
      <div
        className={`${classes.containerOfLogo} ${classesForMediaQueries.containerOfLogo}`}>
        <Logo />
      </div>
      {!user && (
        <div
          className={`${classes.containerOfSubscribeForm} ${classesForMediaQueries.containerOfSubscribeForm}`}>
          <p
            className={`${classes.typografyStyle} ${classesForMediaQueries.typografyStyle}`}>
            Մուտքագրի՛ր էլ․փոստիդ հասցեն և սկսի՛ր
          </p>
          <Form />
        </div>
      )}

      <div
        className={`${classes.containerOfIconButtonsAndTypografy} ${classesForMediaQueries.containerOfIconButtonsAndTypografy}`}>
        <p
          className={`${classes.typografyStyle} ${classesForMediaQueries.typografyStyle}`}>
          Հետևեք մեզ այստեղ
        </p>
        <div className={classes.containerOfIconButtons}>
          <IconButton
            component={Link}
            to='#'
            aria-label='Instagram'
            color='inherit'>
            <Instagram
              className={`${classes.iconStyle} ${classesForMediaQueries.iconStyle}`}
            />
          </IconButton>
          <IconButton
            component={Link}
            to='https://www.facebook.com/profile.php?id=100068397000889'
            aria-label='Facebook'
            color='inherit'>
            <Facebook
              className={`${classes.iconStyle} ${classesForMediaQueries.iconStyle}`}
            />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
/*--------------------------------------------Styles--------------------------------------------*/
const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'space-around',
  },
  containerOfLogo: {
    width: 250,
    height: 178,
    marginLeft: 100,
    marginTop: 50,
  },
  typografyStyle: {
    color: colors.yellow,
    textAlign: 'center',
    fontSize: 20,
  },
  containerOfSubscribeForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerOfIconButtonsAndTypografy: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerOfIconButtons: {
    display: 'flex',
  },
  iconStyle: {
    width: 40,
  },
});

/*------------------------------------------------media quiries------------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    footer: {
      flexWrap: 'wrap',
    },
    containerOfLogo: {
      width: 200,
      height: 158,
      marginLeft: 80,
      marginTop: 20,
    },
    containerOfSubscribeForm: {
      marginRight: 20,
      marginTop: 10,
    },
    containerOfIconButtonsAndTypografy: {
      marginRight: 20,
    },
    typografyStyle: {
      fontSize: 15,
    },
    iconStyle: {
      width: 15,
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    footer: {
      flexWrap: 'wrap',
    },
    containerOfLogo: {
      width: 250,
      height: 178,
      marginLeft: 100,
      marginTop: 16,
    },
    containerOfSubscribeForm: {
      marginRight: 25,
    },
    containerOfIconButtonsAndTypografy: {
      marginRight: 25,
    },
    typografyStyle: {
      fontSize: 15,
      marginTop: 50,
    },
    iconStyle: {
      width: 25,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    containerOfSubscribeForm: {
      marginRight: 30,
    },
    containerOfIconButtonsAndTypografy: {
      marginRight: 30,
    },
    typografyStyle: {
      fontSize: 17,
    },
    iconStyle: {
      width: 35,
    },
  },
});
