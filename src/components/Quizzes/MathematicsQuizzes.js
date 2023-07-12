import React from 'react';
import mathematicsBackground from '../../images/mathematicsBackground.png';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import math1 from '../../images/imagesOfMathQuizzes/math1.png';
import math2 from '../../images/imagesOfMathQuizzes/math2.png';
import math3 from '../../images/imagesOfMathQuizzes/math3.png';
import Card from '@material-ui/core/Card';
import { divisions } from '../Categories';

const MathematicsQuizzes = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  return (
    <>
      <div className={classes.containerOfMathematics}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
          }}>
          <div className={classes.containerOfImage}>
            <img
              className={classes.imageOfMathematics}
              src={mathematicsBackground}
              alt='mathematics'
            />
          </div>
          <div
            className={`${classes.wrapperOfCourseNameAnalyzeAndSearchbar} ${classesForMediaQueries.wrapperOfCourseNameAnalyzeAndSearchbar} `}>
            <p
              className={`${classes.courseName} ${classesForMediaQueries.courseName} `}>
              Մաթեմատիկա
            </p>
            <p
              className={`${classes.examined} ${classesForMediaQueries.examined} `}>
              Ոսումնասիրված 40%
            </p>
            <Paper
              component='form'
              className={`${classes.search} ${classesForMediaQueries.search} `}>
              <InputBase
                className={classes.input}
                placeholder='Որոնել նախընտրելի թեման․․․'
              />
              <IconButton
                type='submit'
                className={classes.iconButton}
                aria-label='search'>
                <SearchIcon className={classes.searchIcon} />
              </IconButton>
            </Paper>
          </div>
        </div>
      </div>
      <div className={classes.containerOfQuizzes}>
        <div
          className={`${classes.wrapperOfImagesOfMathQuizzes} ${classesForMediaQueries.wrapperOfImagesOfMathQuizzes} `}>
          <div
            className={`${classes.wrapperOfASingleImage} ${classes.wrapperOfASingleImage1} ${classesForMediaQueries.wrapperOfASingleImage1}`}>
            <img src={math1} alt='math1Image' className={classes.image} />
          </div>
          <div
            className={`${classes.wrapperOfASingleImage} ${classes.wrapperOfASingleImage2} ${classesForMediaQueries.wrapperOfASingleImage2}`}>
            <img src={math2} alt='math2Image' className={classes.image} />
          </div>
          <div
            className={`${classes.wrapperOfASingleImage} ${classes.wrapperOfASingleImage3} ${classesForMediaQueries.wrapperOfASingleImage3}`}>
            <img src={math3} alt='math3Image' className={classes.image} />
          </div>
        </div>
        <div
          className={`${classes.wrapperOfQuizzesCards} ${classesForMediaQueries.wrapperOfQuizzesCards}`}>
          {divisions.map((singleDivision) => {
            return (
              <div className={classes.cardDiv}>
                <Card
                  style={{ backgroundColor: singleDivision.color }}
                  className={`${classes.card} ${classesForMediaQueries.card}`}>
                  <p
                    className={`${classes.typographyStyle} ${classesForMediaQueries.typographyStyle}`}>
                    {singleDivision.title}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MathematicsQuizzes;
/*------------------------------------------Styles----------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  wrapperOfCourseNameAnalyzeAndSearchbar: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 40,
    marginRight: 80,
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
  containerOfImage: {
    // position: 'relative',
    zIndex: 0,
  },
  imageOfMathematics: {
    maxWidth: '100%',
    objectFit: 'cover',
  },
  courseName: {
    background: colors.darkGreen,
    fontFamily: fonts.armenian,
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
    borderRadius: 20,
    padding: '10px 50px',
    height: 50,
  },
  examined: {
    background: colors.lightGreen,
    fontFamily: fonts.armenian,
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
    borderRadius: 20,
    padding: '5px 50px',
    marginTop: 20,
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    background: colors.veryLightGreen,
    borderRadius: 15,
  },
  input: {
    flex: 1,
    fontSize: '100%',
    paddingLeft: 5,
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },

  containerOfQuizzes: {
    margin: '30px 70px',
  },
  wrapperOfImagesOfMathQuizzes: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
  },
  wrapperOfASingleImage: {
    width: 290,
    height: 290,
  },
  image: {
    maxWidth: '100%',
    objectFit: 'cover',
  },
  wrapperOfQuizzesCards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  cardDiv: {},
  card: {
    margin: 20,
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    borderRadius: 20,
  },
  typographyStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: fonts.armenian,
    paddingTop: 17,
    padding: '17px 20px 0px 20px',
  },
}));
/*---------------------------------------Media Quieries------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    wrapperOfCourseNameAnalyzeAndSearchbar: {
      marginTop: 20,
      marginRight: 40,
      right: '-15px',
    },
    courseName: {
      fontSize: 12,
      borderRadius: 10,
      paddingTop: 4,
      height: 25,
    },
    examined: {
      fontSize: 12,
      borderRadius: 10,
      paddingTop: 4,
      marginTop: 11,
    },
    search: {
      padding: 0,
      marginTop: 10,
      fontSize: 12,
      borderRadius: 10,
    },
    wrapperOfImagesOfMathQuizzes: {
      justifyContent: 'space-around',
    },
    wrapperOfASingleImage3: {
      display: 'none',
    },
    wrapperOfASingleImage2: {
      display: 'none',
    },
    wrapperOfASingleImage1: {
      width: 180,
      height: 180,
    },
    wrapperOfQuizzesCards: {
      gridTemplateColumns: '1fr',
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    wrapperOfCourseNameAnalyzeAndSearchbar: {
      marginTop: 30,
      marginRight: 60,
    },
    courseName: {
      fontSize: 20,
      color: colors.white,
      textAlign: 'center',
      borderRadius: 15,
      padding: '7px 30px',
      height: 35,
    },
    examined: {
      fontSize: 15,
      borderRadius: 15,
      padding: '3px 30px',
      marginTop: 15,
    },
    search: {
      padding: 0,
      marginTop: 10,
      fontSize: 12,
      borderRadius: 10,
    },
    wrapperOfImagesOfMathQuizzes: {
      justifyContent: 'space-around',
    },
    wrapperOfASingleImage3: {
      display: 'none',
    },
    wrapperOfASingleImage2: {
      display: 'none',
    },
    wrapperOfASingleImage1: {
      width: 240,
      height: 240,
    },
    wrapperOfQuizzesCards: {
      gridTemplateColumns: '1fr',
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    iconButton: {
      width: '90px',
      height: '90px',
    },
    wrapperOfImagesOfMathQuizzes: {
      justifyContent: 'space-around',
    },
    wrapperOfASingleImage3: {
      display: 'none',
    },

    wrapperOfASingleImage2: {
      width: 240,
      height: 240,
    },
    wrapperOfASingleImage1: {
      width: 240,
      height: 240,
    },
    wrapperOfQuizzesCards: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
  },
});
