import React from 'react';
import { useLocation } from 'react-router-dom';
import { divisions } from '../Categories';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../constants/variables';

const Topic = () => {
  const classes = useStyles();
  const location = useLocation();

  const { selectedClassId } = location.state || {};

  let selectedClass = null;

  for (let singleDivision of divisions) {
    for (let singleClass of singleDivision.classes) {
      if (singleClass.id === selectedClassId) {
        selectedClass = singleClass;
        break;
      }
    }

    if (selectedClass) {
      break;
    }
  }
  console.log(selectedClassId);
  console.log(selectedClass);
  return (
    <div>
      <p className={classes.paragraph}>
        {selectedClass && selectedClass.singleClassContent}
      </p>
    </div>
  );
};

export default Topic;
/*----------------------------------------------Styles--------------------------------------------------*/
const useStyles = makeStyles({
  paragraph: {
    border: `3px solid ${colors.yellow}`,
    borderRadius: 15,
    padding: 20,
    margin: 30,
  },
});
