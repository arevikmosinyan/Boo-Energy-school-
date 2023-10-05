import { colors } from '../constants/variables';
// import { useTranslation } from 'react-i18next';
import AdultFemale from '../images/imagesForPopularCourses/AdultFemale.png';
import EnglishBook from '../images/imagesForPopularCourses/EnglishBook.png';
import Programming from '../images/imagesForPopularCourses/programming.png';
import Mathematics from '../images/imagesForPopularCourses/mathematics.png';
import UiUx from '../images/imagesForPopularCourses/UX_Design.png';

// const {t} = useTranslation()

import {
  MATHEMATICSCOURSE_ROUTE,
  MATHEMATICSQUIZZES_ROUTE,
  ENGLISH_ROUTE,
  GRAPHICDESIGN_ROUTE,
  PROGRAMMING_ROUTE,
  UIUXDESIGN_ROUTE,
} from '../constants/routes';
import { topics } from '../constants/contentsOfTopics';

import class1Div1Math from '../components/Courses/classesOfMathematics/division1/class1';
import class2Div1Math from '../components/Courses/classesOfMathematics/division1/class2';
import class3Div1Math from '../components/Courses/classesOfMathematics/division1/class3';
import class4Div1Math from '../components/Courses/classesOfMathematics/division1/class4';
import class1Div2Math from '../components/Courses/classesOfMathematics/division2/class1';
import class2Div2Math from '../components/Courses/classesOfMathematics/division2/class1';

export const coursesToStudy = [
  {
    title: 'mathematics',
    color: colors.darkGreen,
    route: MATHEMATICSCOURSE_ROUTE,
  },
  { title: 'programming', color: colors.lightGreen, route: PROGRAMMING_ROUTE },
  { title: 'english', color: colors.yellow, route: ENGLISH_ROUTE },
  {
    title: 'graphicDesign',
    color: colors.darkGreen,
    route: GRAPHICDESIGN_ROUTE,
  },
  { title: 'UX/UI', color: colors.lightGreen, route: UIUXDESIGN_ROUTE },
  // { title: 'IQ Թեստեր', color: colors.yellow },
];

export const menuListOfSubjects = [
  { nameOfSubject: 'mathematics', routeOfSubject: MATHEMATICSCOURSE_ROUTE },
  { nameOfSubject: 'english', routeOfSubject: ENGLISH_ROUTE },
  { nameOfSubject: 'programming', routeOfSubject: PROGRAMMING_ROUTE },
  { nameOfSubject: 'graphicDesign', routeOfSubject: GRAPHICDESIGN_ROUTE },
  { nameOfSubject: 'UX/UI', routeOfSubject: UIUXDESIGN_ROUTE },
];

export const popularCoursesList = [
  {
    title: 'english',
    color: colors.darkGreen,
    // countOfStudents: '358 սովորող',
    image: EnglishBook,
    route: ENGLISH_ROUTE,
  },
  {
    title: 'graphicDesign',
    color: colors.lightGreen,
    // countOfStudents: '287 սովորող',
    image: AdultFemale,
    route: GRAPHICDESIGN_ROUTE,
  },
  {
    title: 'mathematics',
    color: colors.darkGreen,
    // countOfStudents: '150 սովորող',
    image: Mathematics,
    route: MATHEMATICSCOURSE_ROUTE,
  },
  {
    title: 'UX/UI',
    color: colors.yellow,
    // countOfStudents: '240 սովորող',
    image: UiUx,
    route: UIUXDESIGN_ROUTE,
  },

  {
    title: 'programming',
    color: colors.lightGreen,
    // countOfStudents: '182 սովորող',
    image: Programming,
    route: PROGRAMMING_ROUTE,
  },
];

export const divisions = [
  {
    title: 'Բաժին 1. Բնական թվեր և զրո',
    color: colors.darkGreen,
    classes: [
      {
        id: 'class1Div1Math',
        singleClassNumber: 'Դաս 1',
        singleClassTitle: 'Բնական թվերը և դրանց գրառումը',
        singleClassContent: class1Div1Math(),
      },
      {
        id: 'class2Div1Math',
        singleClassNumber: 'Դաս 2',
        singleClassTitle: 'Կարգ, կարգային արժեք',
        singleClassContent: class2Div1Math(),
      },
      {
        id: 'class3Div1Math',
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բնական թվերի համեմատումը',
        singleClassContent: class3Div1Math(),
      },
      {
        id: 'class4Div1Math',
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Թվերի կլորացումը',
        singleClassContent: class4Div1Math(),
      },
    ],
  },
  {
    title: 'Բաժին 2.Գործողություններ բնական թվերով',
    color: colors.lightGreen,
    classes: [
      {
        id: 'class1Div2Math',
        singleClassNumber: 'Դաս 1',
        singleClassTitle: 'Բազմանիշ թվերի գումարումը',
        singleClassContent: class1Div2Math(),
      },
      {
        id: 'class2Div2Math',
        singleClassNumber: 'Դաս 2',
        singleClassTitle: 'Գումարման օրենքները',
        singleClassContent: class2Div2Math(),
      },
      {
        id: 'class3Div2Math',
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բազմանիշ թվերի հանումը',
        singleClassContent: 'content',
      },
      {
        id: 'class4Div2Math',
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Բազմանիշ թվերի բազմապատկումը',
        singleClassContent: 'content',
      },
      {
        id: 'class5Div2Math',
        singleClassNumber: 'Դաս 5',
        singleClassTitle: 'Կարգային միավորների բազմապատկումը',
        singleClassContent: 'content',
      },
      {
        id: 'class6Div2Math',
        singleClassNumber: 'Դաս 6',
        singleClassTitle: 'Բազմապատկման օրենքները',
        singleClassContent: 'content',
      },
      {
        id: 'class7Div2Math',
        singleClassNumber: 'Դաս 7',
        singleClassTitle: 'Մնացորդով բաժանում',
        singleClassContent: 'content',
      },
      {
        id: 'class8Div2Math',
        singleClassNumber: 'Դաս 8',
        singleClassTitle: 'Բազմանիշ թվերի բաժանումը',
        singleClassContent: 'content',
      },
      {
        id: 'class9Div2Math',
        singleClassNumber: 'Դաս 9',
        singleClassTitle: 'Թվային արտահայտություններ',
        singleClassContent: 'content',
      },
    ],
  },
  {
    title: 'Բաժին 3․ Բնական թվերի բաժանելիություն',
    color: colors.veryLightGreen,
    classes: [],
  },
  {
    title: 'Բաժին 4․ ',
    color: colors.darkGreen,
    classes: [],
  },
  {
    title: 'Բաժին 5․ ',
    color: colors.lightGreen,
    classes: [],
  },
];
