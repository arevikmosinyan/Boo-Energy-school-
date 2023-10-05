import React from 'react';
import illustration1 from '../../images/Illustration1.png';
import illustration2 from '../../images/Illustration2.png';
import illustration3 from '../../images/Illustration3.png';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import { useTranslation } from 'react-i18next';

const HowToUse = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const { t } = useTranslation();

  return (
    <div className={classes.HowToUseSection}>
      <div
        className={`${classes.headerOfHowToUse} ${classesForMediaQueries.headerOfHowToUse}`}>
        <p>{t('howToUseHeader')}</p>
      </div>
      <div
        className={`${classes.containerOfHowToUse} ${classesForMediaQueries.containerOfHowToUse}`}>
        <div
          className={`${classes.stepsToUse} ${classesForMediaQueries.stepsToUse}`}>
          <p
            className={`${classes.stepsToUseText} ${classesForMediaQueries.stepsToUseText}`}>
            {t('stepOneOfHowToUse')}
          </p>
          <img
            src={illustration1}
            alt='illustration1'
            className={`${classes.illustration} ${classesForMediaQueries.illustration}`}
          />
        </div>

        <div
          className={`${classes.stepsToUse} ${classesForMediaQueries.stepsToUse}`}>
          <p
            className={`${classes.stepsToUseText} ${classesForMediaQueries.stepsToUseText}`}>
            {t('stepTwoOfHowToUse')}
          </p>
          <img
            src={illustration2}
            alt='illustration2'
            className={`${classes.illustration} ${classesForMediaQueries.illustration}`}
          />
        </div>
        <div
          className={`${classes.stepsToUse} ${classesForMediaQueries.stepsToUse}`}>
          <p
            className={`${classes.stepsToUseText} ${classesForMediaQueries.stepsToUseText}`}>
            {t('stepThreeOfHowToUse')}
          </p>
          <img
            src={illustration3}
            alt='illustration3'
            className={`${classes.illustration} ${classesForMediaQueries.illustration}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
/*-----------------------------------------------------Styles-----------------------*/
const useStyles = makeStyles({
  HowToUseSection: {
    margin: 60,
  },
  stepsToUse: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 20px',
  },
  containerOfHowToUse: {
    '& > div:nth-child(even)': {
      flexDirection: 'row-reverse',
    },
  },
  stepsToUseText: {
    width: 994,
    height: 145,
    fontSize: 50,
    fontFamily: fonts.armenian,
    color: colors.darkGreen,
    marginLeft: 20,
  },
  headerOfHowToUse: {
    color: colors.darkGreen,
    textAlign: 'center',
    fontSize: 60,
    fontFamily: fonts.armenian,
    fontWeight: 600,
    marginBottom: 40,
    paddingTop: 100,
  },
  illustration: {
    width: 539,
    height: 335,
    margin: 50,
  },
});
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    containerOfHowToUse: {
      flexDirection: 'column',
      '& > div:nth-child(even)': {
        flexDirection: 'column',
      },
    },
    headerOfHowToUse: {
      fontSize: 30,
    },
    stepsToUseText: {
      width: 494,
      height: 45,
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 1.2,
      paddingBottom: 76,
    },
    illustration: {
      width: 239,
      height: 135,
      margin: 10,
    },
    stepsToUse: {
      flexDirection: 'column',
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    containerOfHowToUse: {
      flexDirection: 'column',
      '& > div:nth-child(even)': {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
      },
    },
    headerOfHowToUse: {
      fontSize: 30,
    },
    stepsToUse: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '20px 10px',
    },
    stepsToUseText: {
      width: 394,
      height: 45,
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 1.2,
      paddingBottom: 40,
    },
    illustration: {
      width: 200,
      height: 150,
      margin: 8,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    containerOfHowToUse: {
      flexDirection: 'column',
      '& > div:nth-child(even)': {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
      },
    },
    headerOfHowToUse: {
      fontSize: 30,
    },
    stepsToUse: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '20px 10px',
    },
    stepsToUseText: {
      width: 494,
      height: 45,
      fontSize: 25,
      textAlign: 'center',
      lineHeight: 1.2,
      paddingBottom: 40,
    },
    illustration: {
      width: 200,
      height: 150,
      margin: 8,
    },
  },
});
