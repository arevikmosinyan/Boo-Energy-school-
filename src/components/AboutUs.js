import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Hidden } from '@material-ui/core';

import TestSectionImage from '../images/imagesOfAboutUs/TestSectionImage.jpg';
import ClassesSectionImage from '../images/imagesOfAboutUs/ClassesSectionImage.jpg';
import RatingSectionImage from '../images/imagesOfAboutUs/RatingSectionImage.jpg';
import { fonts, colors } from '../constants/variables';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <h1 className={classes.header}>Մեր մասին</h1>
        <Typography paragraph className={classes.aboutUsTypography}>
          Բարի գալուստ մեր կրթական կայք։ Մենք պատրաստ ենք տրամադրելու բարձրորակ
          կրթական բովանդակություն բոլոր տարիքի սովորողների համար։ Մեր
          առաքելությունն է դարձնել ուսուցումը զվարճալի, գրավիչ և հասանելի բոլորի
          համար։
        </Typography>
        <Typography paragraph className={classes.aboutUsTypography}>
          Մեր մասնագետների թիմը աշխատում է մշակելու համար ուսումնական նյութեր,
          որոնք ընդգրկում են առարկաների լայն շրջանակ՝ անկախ նրանից , թե դուք
          ուսանող եք, ուսուցիչ, դպրոցական, թե՝ պարզապես ինքնակրթվող մարդ։
        </Typography>
        <Typography paragraph className={classes.aboutUsTypography}>
          Շնորհակալություն մեզ` որպես ձեր ուսումնական գործընկեր ընտրելու համար:
          Մենք սիրով կուղեկցենք ձեզ` ձեր ուսումնական ճամփորդության ընթացքում։
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
              <h2 className={classes.header}>Թեստեր</h2>
              <Typography className={classes.typeographyOfSection}>
                Անցե՛ք ինտերակտիվ թեստեր տարբեր առարկաներից ձեր գիտելիքներն ու
                տրամաբանությունը գնահատելու համար ։
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
              <h2 className={classes.header}>Դասընթացներ</h2>
              <Typography className={classes.typeographyOfSection}>
                Միացե՛ք մեր ինտերակտիվ դասերին: Իրական ժամանակում շփվեք
                ուսուցիչների և համակուրսեցիների հետ՝ դարձնելով ուսումը գրավիչ և
                հաճելի:
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
              <h2 className={classes.header}>Վարկանիշ</h2>
              <Typography className={classes.typeographyOfSection}>
                Վարկանիշային բաժինը ուսանողներին հնարավորություն է տալիս ճշգրիտ
                գնահատել իրենց ներկայիս գիտելիքներն ու հմտությունները: Անցնելով
                թեստեր և ստանալով ակնթարթային արձագանք՝ ուսանողները արժեքավոր
                պատկերացումներ են ձեռք բերում իրենց ուժեղ և թույլ կողմերի
                վերաբերյալ:
              </Typography>
            </div>
          </div>
        </div>
        {/* Tests Section */}

        {/* Contact Us  */}
        <div className={classes.contactUsSectionWrapper}>
          <h4 className={classes.headerOfContactUs}>Կապը մեզ հետ</h4>
          <Typography paragraph className={classes.typographyOfContactUs}>
            Եթե ​​ունեք հարցեր, կարծիքներ կամ առաջարկություններ, խնդրում եմ
            դիմեք մեզ: Դուք կարող եք կապվել մեզ հետ՝
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
