import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { divisions } from '../Categories';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../../constants/variables';
import { useState } from 'react';
import { writeUserData } from '../../requests/firebase';
import userDataContext from '../../contexts/userDataContext';
import { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import loadingContext from '../../contexts/dataLoadingContext';
import Loading from '../Loading';
import userContext from '../../contexts/userContext';
import { useTranslation } from 'react-i18next';

const Topic = () => {
  const classes = useStyles();
  const location = useLocation();
  const userData = useContext(userDataContext);
  const user = useContext(userContext);

  // const loading = useContext(loadingContext);
  const [alreadyRead, setAlreadyRead] = useState(false);
  const [scoreForReading, setScoreForReading] = useState(
    userData?.scoreForReading || 0,
  );

  const [openTheDialog, setOpenTheDialog] = useState(false);
  const [dialogForNonRegisteredUsers, setDialogForNonRegisteredUsers] =
    useState(false);
  const { selectedClassId } = location.state || {};
  let selectedClass = null;

  const { t } = useTranslation();
  // console.log(loading);

  /*-------------------------------------setting new score to real-time database while clicking----------------*/

  function submitGainedScoresForReading() {
    for (let singleDivision of divisions) {
      for (let singleClass of singleDivision.classes) {
        if (singleClass.id === selectedClassId) {
          if (!userData?.alreadyReadClassesIds?.includes(singleClass.id)) {
            writeUserData({
              ...userData,
              scoreForReading,
              alreadyReadClassesIds: [
                ...userData?.alreadyReadClassesIds,
                singleClass.id,
              ],
              alreadyReadClassesTitles: [
                ...userData?.alreadyReadClassesTitles,
                singleClass.singleClassTitle,
              ],
            });
          } else {
            // setAlreadyRead(true);
            setOpenTheDialog(true);
            return;
          }

          break;
        }
      }

      if (selectedClass) {
        break;
      }
    }
  }

  /*---------------------------------------------------adding score while scrolling-----------------*/

  useEffect(() => {
    if (!user) {
      setDialogForNonRegisteredUsers(true);
    }

    function addingScoreWhileScrolling() {
      const scrollHeight = document.documentElement.scrollHeight; // ամբողջ էջն է, scroll-ի ենթակա ամբողջ մասը
      const scrollYOffset = window.pageYOffset; //scroll արած վերև գնացած, չերևացող մասը
      const windowHeight = window.innerHeight; // user-ին տեսանելի հատվածը

      for (let singleDivision of divisions) {
        for (let singleClass of singleDivision.classes) {
          if (singleClass.id === selectedClassId) {
            if (windowHeight + scrollYOffset + 10 >= scrollHeight) {
              setScoreForReading(scoreForReading + 1);
            }
          }
        }

        if (selectedClass) {
          break;
        }
      }
    }

    window.addEventListener('scroll', addingScoreWhileScrolling);

    return () =>
      window.removeEventListener('scroll', addingScoreWhileScrolling);
  }, []);

  /*--------------------------------by this loop we decide which class was selected-------------------------*/
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

  /*-------------------------------------------------------------------------------------------------------------*/
  console.log(scoreForReading); //stex der undefined e, chi hascnum get ani, dra hama8 es togh@ ||ov em tvel
  // <div className={classes.scoreShowDiv}>
  //{scoreForReading || userData?.scoreForReading}

  // </div>
  console.log(userData?.scoreForReading);
  return (
    <div
      className={classes.container}
      // style={{ backgroundColor: alreadyRead ? 'red' : 'blue' }}
    >
      {dialogForNonRegisteredUsers ? (
        <Dialog
          open={true}
          onClose={() => setDialogForNonRegisteredUsers(false)}>
          <DialogContent>
            <DialogContentText>
              {t('dialogForNonRegisteredUserInTopicComponent')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setDialogForNonRegisteredUsers(false)}
              color='primary'
              autoFocus>
              {t('ok')}
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
      {/* {loading ? (
        <Loading />
      ) : ()} */}
      <>
        {user && (
          <div className={classes.scoreShowDiv}>
            {/* {scoreForReading || userData?.scoreForReading} */}
            {scoreForReading}
          </div>
        )}

        <p className={classes.paragraph}>{selectedClass?.singleClassContent}</p>

        {user && (
          <form className={classes.wrapperOfButtonSignUp}>
            <Button
              type={openTheDialog ? 'button' : 'submit'}
              variant='outlined'
              className={classes.submitButtonOfGainedScoresForReading}
              onClick={submitGainedScoresForReading}>
              {t('submitGainedScoresForReading')}
            </Button>
            {openTheDialog ? (
              <Dialog open={true} onClose={() => setOpenTheDialog(false)}>
                <DialogContent>
                  <DialogContentText>
                    {t('dialogForRegisteredUserForDoubleReadingTheSameLesson')}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenTheDialog(false)}
                    color='primary'
                    autoFocus>
                    {t('ok')}
                  </Button>
                </DialogActions>
              </Dialog>
            ) : null}
          </form>
        )}
      </>
    </div>
  );
};

export default Topic;
/*----------------------------------------------Styles--------------------------------------------------*/
const useStyles = makeStyles({
  scoreShowDiv: {
    position: 'fixed',
    padding: 15,
    backgroundColor: colors.darkGreen,
    color: colors.white,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  paragraph: {
    border: `3px solid ${colors.yellow}`,
    borderRadius: 15,
    padding: 20,
    margin: '50px 130px',
  },
  wrapperOfButtonSignUp: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  submitButtonOfGainedScoresForReading: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginBottom: 30,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
});
