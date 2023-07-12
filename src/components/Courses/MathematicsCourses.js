import React from 'react';
import mathematicsBackground from '../../images/mathematicsBackground.png';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import rectangle17 from '../../icons/Rectangle17.png';
import { colors, fonts } from '../../constants/variables';
import { divisions } from '../Categories';
import { v4 as uuid } from 'uuid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const MathematicsCourses = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  return (
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
              className={`${classes.input} ${classesForMediaQueries.input} `}
              placeholder='Որոնել նախընտրելի թեման․․․'
            />
            <IconButton
              type='submit'
              className={classes.iconButton}
              aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className={classes.wrapperOfDivisions}>
        <div className={classes.division}>
          {divisions.map((singleDivision) => {
            return (
              <div key={uuid()}>
                <div
                  className={`${classes.headerOfDivision} ${classesForMediaQueries.headerOfDivision} `}>
                  {singleDivision.title}
                </div>
                {singleDivision.classes.map((singleClass) => {
                  return (
                    <div className={classes.wrapperOfSingleClass} key={uuid()}>
                      <img
                        src={rectangle17}
                        alt='rec'
                        className={`${classes.rectangle17Style} ${classesForMediaQueries.rectangle17Style}`}
                      />
                      <NavLink
                        key={uuid()}
                        className={classes.navLinkTextAboutClass}>
                        <p className={classes.navLink}>
                          {singleClass.singleClassNumber}
                        </p>
                        {singleClass.singleClassTitle}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MathematicsCourses;

/*------------------------------------------Styles----------------------------------------------*/
const useStyles = makeStyles((theme) => ({
  wrapperOfCourseNameAnalyzeAndSearchbar: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 40,
    marginRight: 80,
    display: 'flex',
    flexDirection: 'column',
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
    width: '100%',
    marginTop: 2,
    background: colors.veryLightGreen,
    fontSize: 15,
    borderRadius: 15,
  },
  // input: {
  //   marginLeft: theme.spacing(1),
  //   flex: 1,
  // },
  wrapperOfDivisions: {
    margin: '40px 50px',
  },
  division: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerOfDivision: {
    marginBottom: 10,
    fontSize: 25,
    background: 'linear-gradient(90deg, #009846 0%, #00DF67 100%)',
    color: colors.white,
    borderRadius: 5,
    padding: 5,
  },
  wrapperOfRectangleAndAboutCourseText: {
    paddingBottom: 15,
  },
  wrapperOfSingleClass: {
    display: 'flex',
    marginBottom: 10,
  },
  navLinkTextAboutClass: {
    color: colors.grey,
    textDecoration: 'none',
    display: 'inline',
    fontFamily: fonts.armenian,
  },
  navLink: {
    textDecoration: 'none',
    color: colors.darkGreen,
    display: 'inline',
    fontFamily: fonts.armenian,
    marginRight: 5,
  },
  rectangle17Style: {
    width: 15,
    height: 15,
    marginRight: 10,
    color: '#00DF67',
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
    headerOfDivision: {
      fontSize: 18,
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
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    iconButton: {
      width: '90px',
      height: '90px',
    },
  },
});
