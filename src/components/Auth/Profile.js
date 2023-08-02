import React from 'react';
import userContext from '../../contexts/userContext';
import userDataContext from '../../contexts/userDataContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {
  makeStyles,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import { HOME_ROUTE } from '../../constants/routes';

const Profile = () => {
  const classes = useStyles();
  const user = useContext(userContext);
  const userData = useContext(userDataContext);

  return (
    <>
      <Card className={classes.container}>
        <Typography variant='h5' className={classes.header}>
          Անձնական տվյալներ
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText primary={`Անուն: ${userData.name}`} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={`Ազգանուն: ${userData.surname}`} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={`Էլ․ փոստի հասցե: ${userData.email}`} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`Սեռ: ${
                userData.gender === 'Իգական' ? 'Իգական' : 'Արական'
              }`}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={`Երկիր: ${userData.country}`} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`Ուսումնական հաստատության անվանում: ${userData.educationCenter}`}
            />
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Profile;
/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  header: {
    color: colors.darkGreen,
    textAlign: 'center',
  },
  container: {
    margin: 50,
    padding: 25,
    borderRadius: 15,
    border: `2px solid ${colors.darkGreen}`,
  },
  listItem: {
    border: `2px solid ${colors.darkGreen}`,
    borderRadius: 10,
    margin: 10,
    color: colors.darkGreen,
  },
}));
