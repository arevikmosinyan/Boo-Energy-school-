import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuid } from 'uuid';
import { popularCoursesList } from '../Categories';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assest/styles/customSlick.css';
import Slider from 'react-slick';

const PopularCourses = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

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
      <p
        className={`${classes.popularCoursesHeader} ${classesForMediaQueries.popularCoursesHeader}`}>
        Ամենահայտնի դասընթացները
      </p>
      <div
        className={`${classes.containerOfCategoriesAsSlides} ${classesForMediaQueries.containerOfCategoriesAsSlides}`}>
        <Slider {...settings}>
          {popularCoursesList.map((course) => {
            return (
              <div
                key={uuid()}
                className={`${classes.cardDiv} ${classesForMediaQueries.cardDiv}`}>
                <img
                  src={course.image}
                  alt='imageOfCourse'
                  className={`${classes.imageOfPopularCouse} ${classesForMediaQueries.imageOfPopularCouse}`}
                />
                <Card
                  className={`${classes.card} ${classesForMediaQueries.card}`}
                  style={{ backgroundColor: course.color }}>
                  <Typography
                    className={`${classes.typographyStyle} ${classesForMediaQueries.typographyStyle}`}>
                    {course.title}
                    {/* <p
                      className={`${classes.countOfStudentsStyle} ${classesForMediaQueries.countOfStudentsStyle}`}>
                      {course.countOfStudents}
                    </p> */}
                  </Typography>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCourses;

/*-------------------------------------Styles----------------------------*/

const useStyles = makeStyles({
  popularCoursesHeader: {
    color: colors.darkGreen,
    textAlign: 'center',
    fontSize: 60,
    fontFamily: fonts.armenian,
    fontWeight: 600,
    marginTop: 100,
    marginBottom: 70,
  },
  containerOfCategoriesAsSlides: {
    width: 850,
    margin: '0px auto',
  },
  cardDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageOfPopularCouse: {
    width: 180,
    height: 180,
    borderRadius: 20,
    position: 'relative',
    top: 35,
    zIndex: 1,
    left: '20%',
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
    paddingTop: 17,
    padding: '17px 20px 0px 20px',
  },
  // countOfStudentsStyle: {
  //   fontSize: 20,
  // },
});
/*-------------------------------------media quieries-----------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    popularCoursesHeader: {
      fontSize: 30,
      marginTop: 60,
      marginBottom: 35,
    },
    containerOfCategoriesAsSlides: {
      width: 250,
    },
    card: {
      margin: '0 7px',
    },
    imageOfPopularCouse: {
      width: 130,
      height: 160,
      top: 20,
      left: '25%',
    },

    typographyStyle: {
      fontSize: 20,
      paddingTop: 5,
    },
    // countOfStudentsStyle: {
    //   fontSize: 10,
    // },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    popularCoursesHeader: {
      fontSize: 25,
      marginTop: 70,
      marginBottom: 45,
    },
    containerOfCategoriesAsSlides: {
      width: 500,
    },
    imageOfPopularCouse: {
      width: 150,
      height: 170,
      top: 20,
      left: '20%',
    },

    typographyStyle: {
      fontSize: 20,
      paddingTop: 8,
      textAlign: 'center',
      padding: '12px 20px 0px 20px',
    },
    card: {
      margin: '0 7px',
    },
    // countOfStudentsStyle: {
    //   fontSize: 12,
    // },
  },

  '@media (min-width:993px) and (max-width:1200px)': {
    popularCoursesHeader: {
      fontSize: 35,
      marginTop: 90,
      marginBottom: 60,
    },
    containerOfCategoriesAsSlides: {
      width: 830,
    },

    card: {
      margin: '0 7px',
    },
    imageOfPopularCouse: {
      width: 170,
      height: 170,
      top: 32,
    },
    typographyStyle: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: fonts.armenian,
      padding: '12px 20px 0px 20px',
    },
  },
});
