import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rectangle17 from '../../icons/Rectangle17.png';
import illustrationCourse from '../../images/IllustrationCourse.png';

const AboutCoursesSection = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  return (
    <>
      <p
        className={`${classes.aboutCoursesHeader} ${classesForMediaQueries.aboutCoursesHeader}`}>
        Դասընթացների մասին
      </p>
      <div className={classes.wrapperOfAboutCoursesTextsAndIllustration}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 50 }}>
          <div
            className={`${classes.wrapperOfRectangleAndAboutCourseText} ${classesForMediaQueries.wrapperOfRectangleAndAboutCourseText}`}>
            <img
              src={rectangle17}
              alt='rec'
              className={`${classes.rectangle17Style} ${classesForMediaQueries.rectangle17Style}`}
            />
            <span
              className={`${classes.aboutCoursesText} ${classesForMediaQueries.aboutCoursesText}`}>
              Դասընթացները կազմված են լավագույն մասնագետների կողմից
            </span>
          </div>

          <div
            className={`${classes.wrapperOfRectangleAndAboutCourseText} ${classesForMediaQueries.wrapperOfRectangleAndAboutCourseText}`}>
            <img
              src={rectangle17}
              alt='rec'
              className={`${classes.rectangle17Style} ${classesForMediaQueries.rectangle17Style}`}
            />
            <span
              className={`${classes.aboutCoursesText} ${classesForMediaQueries.aboutCoursesText}`}>
              Ուսուցման նյութերի ինֆորմացիան վստահելի աղբյուրներից է
            </span>
          </div>

          <div
            className={`${classes.wrapperOfRectangleAndAboutCourseText} ${classesForMediaQueries.wrapperOfRectangleAndAboutCourseText}`}>
            <img
              src={rectangle17}
              alt='rec'
              className={`${classes.rectangle17Style} ${classesForMediaQueries.rectangle17Style}`}
            />
            <span
              className={`${classes.aboutCoursesText} ${classesForMediaQueries.aboutCoursesText}`}>
              Ընտրված դասընթացները հիմնված են լսարանի կարիքների վրա
            </span>
          </div>

          <div
            className={`${classes.wrapperOfRectangleAndAboutCourseText} ${classesForMediaQueries.wrapperOfRectangleAndAboutCourseText}`}>
            <img
              src={rectangle17}
              alt='rec'
              className={`${classes.rectangle17Style} ${classesForMediaQueries.rectangle17Style}`}
            />
            <span
              className={`${classes.aboutCoursesText} ${classesForMediaQueries.aboutCoursesText}`}>
              Յուրաքանչյուր դասընթացին հաջորդող թեստի լրացումը պարտադիր է
            </span>
          </div>
        </div>

        <img
          src={illustrationCourse}
          alt='imgIllusration'
          className={`${classes.IllustrationCourseImage} ${classesForMediaQueries.IllustrationCourseImage}`}
        />
      </div>
    </>
  );
};

export default AboutCoursesSection;

/*-----------------------------Styles-------------------------------------*/
const useStyles = makeStyles({
  aboutCoursesHeader: {
    color: colors.darkGreen,
    textAlign: 'center',
    fontSize: 60,
    fontFamily: fonts.armenian,
    fontWeight: 600,
    marginBottom: 100,
    marginTop: 300,
  },
  wrapperOfRectangleAndAboutCourseText: {
    paddingBottom: 15,
  },
  aboutCoursesText: {
    color: colors.lightGreen,
    fontSize: 30,
    fontFamily: fonts.armenian,
    fontWeight: 400,
  },
  wrapperOfAboutCoursesTextsAndIllustration: {
    display: 'flex',
    alignItems: 'center',
  },
  rectangle17Style: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  IllustrationCourseImage: {
    width: 703,
    height: 437,
  },
});

/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    aboutCoursesHeader: {
      fontSize: 30,
      marginBottom: 50,
      marginTop: 150,
    },
    aboutCoursesText: {
      fontSize: 15,
    },
    rectangle17Style: {
      width: 10,
      height: 10,
    },
    IllustrationCourseImage: {
      width: 250,
      height: 150,
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    aboutCoursesHeader: {
      fontSize: 30,
      marginBottom: 60,
      marginTop: 20,
    },
    aboutCoursesText: {
      fontSize: 17,
      fontWeight: 200,
    },
    rectangle17Style: {
      width: 15,
      height: 15,
    },
    IllustrationCourseImage: {
      width: 350,
      height: 200,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    aboutCoursesHeader: {
      fontSize: 40,
      marginBottom: 60,
      marginTop: 200,
    },
    aboutCoursesText: {
      fontSize: 20,
      fontWeight: 300,
    },
    rectangle17Style: {
      width: 15,
      height: 15,
    },
    IllustrationCourseImage: {
      width: 500,
      height: 290,
    },
  },
});
