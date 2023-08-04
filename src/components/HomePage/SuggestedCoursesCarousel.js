import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';
import { colors, fonts } from '../../constants/variables';
import { v4 as uuid } from 'uuid';
import { coursesToStudy } from '../Categories.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assest/styles/customSlick.css';

const SuggestedCoursesCarousel = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: true,
    speed: 1600,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 993,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className={`${classes.wrapperOfSugestedCoursesTypeography} ${classesForMediaQueries.wrapperOfSugestedCoursesTypeography}`}>
        <Typography
          className={`${classes.suggestedCoursesAndTypography} ${classesForMediaQueries.suggestedCoursesAndTypography}`}>
          Հիմա, երբ արդեն անցել ես ընդհանուր թեստը, <br />
          մենք կարող ենք առաջարկել քեզ դասընթացներ
        </Typography>
      </div>
      <div
        className={`${classes.wrapperOfTheSlider} ${classesForMediaQueries.wrapperOfTheSlider}`}>
        <Slider {...settings}>
          {coursesToStudy.map((course) => {
            return (
              <div key={uuid()}>
                <Card
                  onClick={() => navigate(course.route)}
                  className={`${classes.card} ${classesForMediaQueries.card}`}
                  style={{
                    backgroundColor: course.color,
                  }}>
                  <p
                    className={`${classes.typographyStyle} ${classesForMediaQueries.typographyStyle}`}>
                    {course.title}
                  </p>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SuggestedCoursesCarousel;

/*--------------------------------------------------Styles---------------------------------------------*/
const useStyles = makeStyles({
  wrapperOfSugestedCoursesTypeography: {
    height: 150,
  },
  suggestedCoursesAndTypography: {
    color: colors.darkGreen,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 600,
    fontFamily: fonts.armenian,
    marginTop: 100,
  },
  containerOfCategoriesAsSlides: {
    display: 'flex',
    width: '100%',
    height: 230,
    justifyContent: 'space-around',
    transition: 'transform 3s ease',
  },
  wrapperOfTheSlider: {
    width: 850,
    margin: '0px auto',
  },
  card: {
    margin: '0 10px',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*----------------------------------------------media queries---------------------------------------------*/

const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    wrapperOfSugestedCoursesTypeography: {
      height: 70,
    },
    suggestedCoursesAndTypography: {
      fontSize: 20,
      marginTop: 90,
      paddingBottom: 70,
    },
    wrapperOfTheSlider: {
      width: 250,
      margin: '0px auto',
      marginTop: 100,
    },
    typographyStyle: {
      fontSize: 15,
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    wrapperOfSugestedCoursesTypeography: {
      height: 70,
    },
    suggestedCoursesAndTypography: {
      fontSize: 25,
      marginTop: 90,
      paddingBottom: 90,
    },
    wrapperOfTheSlider: {
      width: 500,
      margin: '0px auto',
      marginTop: 150,
    },
    typographyStyle: {
      fontSize: 20,
    },
  },

  '@media (min-width:993px) and (max-width:1200px)': {
    wrapperOfSugestedCoursesTypeography: {
      height: 70,
    },
    suggestedCoursesAndTypography: {
      fontSize: 30,
      marginTop: 90,
      paddingBottom: 90,
    },
    wrapperOfTheSlider: {
      width: 830,
      margin: '0px auto',
      marginTop: 150,
    },
    typographyStyle: {
      fontSize: 20,
    },
  },
});
