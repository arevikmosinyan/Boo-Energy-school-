import { colors } from '../constants/variables';
import AdultFemale from '../images/AdultFemale.png';
import Businessman from '../images/Businessman.png';
import EnglishBook from '../images/EnglishBook.png';
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
import class1Div2Math from '../components/Courses/classesOfMathematics/division2/class1';
import class2Div2Math from '../components/Courses/classesOfMathematics/division2/class1';

export const coursesToStudy = [
  {
    title: 'Մաթեմատիկա',
    color: colors.darkGreen,
    route: MATHEMATICSCOURSE_ROUTE,
  },
  { title: 'Ծրագրավորում', color: colors.lightGreen, route: PROGRAMMING_ROUTE },
  { title: 'Անգլերեն', color: colors.yellow, route: ENGLISH_ROUTE },
  {
    title: 'Գրաֆիկ դիզայն',
    color: colors.darkGreen,
    route: GRAPHICDESIGN_ROUTE,
  },
  { title: 'UI/UX դիզայն', color: colors.lightGreen, route: UIUXDESIGN_ROUTE },
  // { title: 'IQ Թեստեր', color: colors.yellow },
];

export const menuListOfSubjects = [
  { nameOfSubject: 'Մաթեմատիկա', routeOfSubject: MATHEMATICSCOURSE_ROUTE },
  { nameOfSubject: 'Անգլերեն', routeOfSubject: ENGLISH_ROUTE },
  { nameOfSubject: 'Ծրագրավորում', routeOfSubject: PROGRAMMING_ROUTE },
  { nameOfSubject: 'Գրաֆիկ դիզայն', routeOfSubject: GRAPHICDESIGN_ROUTE },
  { nameOfSubject: 'UI/UX դիզայն', routeOfSubject: UIUXDESIGN_ROUTE },
];

export const popularCoursesList = [
  {
    title: 'Անգլերեն',
    color: colors.darkGreen,
    // countOfStudents: '358 սովորող',
    image: EnglishBook,
  },
  {
    title: 'Գրաֆիկ դիզայն',
    color: colors.lightGreen,
    // countOfStudents: '287 սովորող',
    image: AdultFemale,
  },
  {
    title: 'UI/UX դիզայն',
    color: colors.yellow,
    // countOfStudents: '240 սովորող',
    image: Businessman,
  },
  {
    title: 'Մաթեմատիկա',
    color: colors.darkGreen,
    // countOfStudents: '150 սովորող',
    image: EnglishBook,
  },
  {
    title: 'Ծրագրավորում',
    color: colors.lightGreen,
    // countOfStudents: '182 սովորող',
    image: AdultFemale,
  },
  // {
  //   title: 'Մաթեմատիկա',
  //   color: colors.yellow,
  //   // countOfStudents: '195 սովորող',
  //   image: Businessman,
  // },
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
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բնական թվերի համեմատումը',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Թվերի կլորացումը',
        singleClassContent: 'content',
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
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բազմանիշ թվերի հանումը',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Բազմանիշ թվերի բազմապատկումը',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 5',
        singleClassTitle: 'Կարգային միավորների բազմապատկումը',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 6',
        singleClassTitle: 'Բազմապատկման օրենքները',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 7',
        singleClassTitle: 'Մնացորդով բաժանում',
        singleClassContent: 'content',
      },
      {
        singleClassNumber: 'Դաս 8',
        singleClassTitle: 'Բազմանիշ թվերի բաժանումը',
        singleClassContent: 'content',
      },
      {
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

export const ratingList = [
  { nameAndSurname: 'Արման Հովհաննիսյան', value: 2775 },
];
