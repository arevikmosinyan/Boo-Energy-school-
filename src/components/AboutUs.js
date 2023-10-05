import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Hidden } from '@material-ui/core';

import TestSectionImage from '../images/imagesOfAboutUs/TestSectionImage.jpg';
import ClassesSectionImage from '../images/imagesOfAboutUs/ClassesSectionImage.jpg';
import RatingSectionImage from '../images/imagesOfAboutUs/RatingSectionImage.jpg';
import { fonts, colors } from '../constants/variables';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <h1 className={classes.header}>{t('aboutus')}</h1>
        <Typography paragraph className={classes.aboutUsTypography}>
          {t('aboutUsTypographyText1')}
        </Typography>
        <Typography paragraph className={classes.aboutUsTypography}>
          {t('aboutUsTypographyText2')}
        </Typography>
        <Typography paragraph className={classes.aboutUsTypography}>
          {t('aboutUsTypographyText3')}
        </Typography>

        <div className={classes.wrapperOfSections}>
          <div className={classes.containerofImageAndTypography}>
            <div className={classes.containerOfImage}>
              <img
                src={TestSectionImage}
                alt='Tests'
                className={classes.image}
              />
            </div>

            <div className={classes.containerOfTypography}>
              <h2 className={classes.header}>{t('tests')}</h2>
              <Typography className={classes.typeographyOfSection}>
                {t('aboutUsTypographyTestsSection')}
              </Typography>
            </div>
          </div>
          {/* Classes Section */}

          <div className={classes.containerofImageAndTypography}>
            <div className={classes.containerOfImage}>
              <img
                src={ClassesSectionImage}
                alt='classes'
                className={classes.image}
              />
            </div>
            <div className={classes.containerOfTypography}>
              <h2 className={classes.header}>{t('courses')}</h2>
              <Typography className={classes.typeographyOfSection}>
                {t('aboutUsTypographyCoursesSection')}
              </Typography>
            </div>
          </div>

          {/* Rating Section */}
          <div className={classes.containerofImageAndTypography}>
            <div className={classes.containerOfImage}>
              <img
                src={RatingSectionImage}
                alt='Tests'
                className={classes.image}
              />
            </div>
            <div className={classes.containerOfTypography}>
              <h2 className={classes.header}>{t('rating')}</h2>
              <Typography className={classes.typeographyOfSection}>
                {t('aboutUsTypographyRatingSection')}
              </Typography>
            </div>
          </div>
        </div>
        {/* Tests Section */}

        {/* Contact Us  */}
        <div className={classes.contactUsSectionWrapper}>
          <h4 className={classes.headerOfContactUs}>{t('contactUs')}</h4>
          <Typography paragraph className={classes.typographyOfContactUs}>
            {t('contactUsSection')}
          </Typography>
          <Typography className={classes.typographyOfContactUs}>
            Email:
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default AboutUs;

/*-----------------------------------------Styles---------------------------------------------------------*/

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  wrapperOfSections: {
    '& > div:nth-child(even)': {
      flexDirection: 'row-reverse',
    },
  },
  paper: {
    padding: 50,
  },
  aboutUsTypography: {
    color: colors.darkGreen,
  },
  containerofImageAndTypography: {
    display: 'flex',
    margin: '70px 40px',
    alignItems: 'center',
  },
  containerOfImage: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageWrapper: {
    // width: '100%',
    // height: '100%',
    // border: `2px solid ${colors.yellow}`,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: `2px solid ${colors.yellow}`,
    borderRadius: 20,
  },
  containerOfTypography: {
    flex: 1,
    padding: 25,
    fontSize: 25,
  },

  header: {
    textAlign: 'center',
    margin: 20,
    color: colors.darkGreen,
  },
  typeographyOfSection: {
    fontSize: 20,
    textIndent: 15,
    fontFamily: fonts.armenian,
    color: colors.darkGreen,
  },

  contactUsSectionWrapper: {
    border: `2px solid ${colors.yellow}`,
    borderRadius: 20,
    padding: 25,
  },
  headerOfContactUs: {
    color: colors.yellow,
    fontSize: 20,
    marginBottom: 15,
  },
  typographyOfContactUs: {
    color: colors.darkGreen,
  },
});
