import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { divisions } from '../Categories';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../../constants/variables';
import { useState } from 'react';
import { writeUserData } from '../../requests/firebase';
import userDataContext from '../../contexts/userDataContext';
import { useContext } from 'react';

const Topic = () => {
  const classes = useStyles();
  const location = useLocation();
  const userData = useContext(userDataContext);

  // const [scoreForReading, setScoreForReading] = useState(
  //   userData?.scoreForReading || 0,
  // );
  const [scoreForReading, setScoreForReading] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const { selectedClassId } = location.state || {};

  const handleScrollY = useCallback(() => {
    const currentScrollY = window.scrollY || window.pageYOffset;
    if (currentScrollY > prevScrollY) {
      setTimeout(() => setScoreForReading(scoreForReading + 1), 2000);
    }
    setPrevScrollY(currentScrollY);
  }, [prevScrollY, scoreForReading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, [handleScrollY]);

  let selectedClass = null;

  for (let singleDivision of divisions) {
    for (let singleClass of singleDivision.classes) {
      if (singleClass.id === selectedClassId) {
        selectedClass = singleClass;
        break;
      }
    }

    if (selectedClass) {
      break;
    }
  }

  // function submitGainedScoresForReading() {
  //   writeUserData({
  //     ...userData,
  //     scoreForReading,
  //   });
  // }

  return (
    <div>
      <div className={classes.scoreShowDiv}>{scoreForReading}</div>
      <p className={classes.paragraph}>
        {selectedClass && selectedClass.singleClassContent}
      </p>
      <form className={classes.wrapperOfButtonSignUp}>
        {/* <Button
          type='submit'
          variant='outlined'
          className={classes.buttonSignUp}
          onClick={submitGainedScoresForReading}>
          Պահպանել հավաքած միավորները
        </Button> */}
      </form>
    </div>
  );
};

export default Topic;
/*----------------------------------------------Styles--------------------------------------------------*/
const useStyles = makeStyles({
  scoreShowDiv: {
    position: 'fixed',
    padding: 15,
    backgroundColor: colors.darkGreen,
    color: colors.white,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  paragraph: {
    border: `3px solid ${colors.yellow}`,
    borderRadius: 15,
    padding: 20,
    margin: '50px 130px',
  },
  wrapperOfButtonSignUp: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonSignUp: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginBottom: 30,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
});
