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

export const coursesToStudy = [
  { title: 'Մաթեմատիկա', color: colors.darkGreen },
  { title: 'Ծրագրավորում', color: colors.lightGreen },
  { title: 'Անգլերեն', color: colors.yellow },
  { title: 'Արվեստ', color: colors.darkGreen },
  { title: 'Մշակույթ', color: colors.lightGreen },
  { title: 'Պատմություն', color: colors.yellow },
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
    countOfStudents: '358 սովորող',
    image: EnglishBook,
  },
  {
    title: 'Գրաֆիկ դիզայն',
    color: colors.lightGreen,
    countOfStudents: '287 սովորող',
    image: AdultFemale,
  },
  {
    title: 'Մարքեթինգ',
    color: colors.yellow,
    countOfStudents: '240 սովորող',
    image: Businessman,
  },
  {
    title: 'Հաշվապահություն',
    color: colors.darkGreen,
    countOfStudents: '358 սովորող',
    image: EnglishBook,
  },
  {
    title: 'Ապահովագրություն',
    color: colors.lightGreen,
    countOfStudents: '358 սովորող',
    image: AdultFemale,
  },
  {
    title: 'Մաթեմատիկա',
    color: colors.yellow,
    countOfStudents: '358 սովորող',
    image: Businessman,
  },
];

export const divisions = [
  {
    title: 'Բաժին 1. Բնական թվեր և զրո',
    color: colors.darkGreen,
    classes: [
      {
        singleClassNumber: 'Դաս 1',
        singleClassTitle: 'Բնական թվերը և դրանց գրառումը',
      },
      {
        singleClassNumber: 'Դաս 2',
        singleClassTitle: 'Կարգ, կարգային արժեք',
      },
      {
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բնական թվերի համեմատումը',
      },
      {
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Թվերի կլորացումը',
      },
    ],
  },
  {
    title: 'Բաժին 2.Գործողություններ բնական թվերով',
    color: colors.lightGreen,
    classes: [
      {
        singleClassNumber: 'Դաս 1',
        singleClassTitle: 'Բազմանիշ թվերի գումարումը',
      },
      { singleClassNumber: 'Դաս 2', singleClassTitle: 'Գումարման օրենքները' },
      {
        singleClassNumber: 'Դաս 3',
        singleClassTitle: 'Բազմանիշ թվերի հանումը',
      },
      {
        singleClassNumber: 'Դաս 4',
        singleClassTitle: 'Բազմանիշ թվերի բազմապատկումը',
      },
      {
        singleClassNumber: 'Դաս 5',
        singleClassTitle: 'Կարգային միավորների բազմապատկումը',
      },
      {
        singleClassNumber: 'Դաս 6',
        singleClassTitle: 'Բազմապատկման օրենքները',
      },
      { singleClassNumber: 'Դաս 7', singleClassTitle: 'Մնացորդով բաժանում' },
      {
        singleClassNumber: 'Դաս 8',
        singleClassTitle: 'Բազմանիշ թվերի բաժանումը',
      },
      {
        singleClassNumber: 'Դաս 9',
        singleClassTitle: 'Թվային արտահայտություններ',
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
