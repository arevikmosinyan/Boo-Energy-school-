import React from 'react';
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import { colors, fonts } from '../constants/variables';
import SearchIcon from '@material-ui/icons/Search';

const Community = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.containerOfCommunity}>
        <div className={classes.wrapperOfNamesOfMessagersAndSearchBar}>
          <div className={classes.wrapperOfSearchBar}>
            <Paper component='form' className={`${classes.searchBar}  `}>
              <InputBase
                className={classes.inputForSearch}
                placeholder='Որոնել նոր մարդկանց'
              />
              <IconButton
                type='submit'
                className={classes.searchIconButton}
                aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div className={classes.wrapperOfHeaderAndMessagers}>
            <p className={classes.header}>Նամակներ</p>
            <div className={classes.wrapperOfSingleMessagers}>
              <div className={classes.singleMessagerWithShortPartOfMessage}>
                hello
              </div>
              <div className={classes.singleMessagerWithShortPartOfMessage}>
                hello
              </div>
              <div className={classes.singleMessagerWithShortPartOfMessage}>
                hello
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            classes.wrapperOfBoardOfMessagesAndMessageWritingBar
          }></div>
      </div>
    </>
  );
};

export default Community;
/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles({
  containerOfCommunity: {
    margin: 'auto',
    display: 'flex',
    width: '90%',
    height: '100%',
  },
  wrapperOfNamesOfMessagersAndSearchBar: {
    flex: 2,
    backgroundColor: colors.lightGreen,
  },
  wrapperOfBoardOfMessagesAndMessageWritingBar: {
    flex: 4,
    backgroundColor: colors.veryVeryLightGreen,
  },
  wrapperOfHeaderAndMessagers: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: colors.white,
    padding: 5,
  },
  singleMessagerWithShortPartOfMessage: {
    backgroundColor: colors.veryVeryLightGreen,
    color: colors.darkGreen,
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  searchBar: {
    padding: '2px 4px',
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    background: colors.white,
    borderRadius: 15,
    height: 48,
  },
  searchIconButton: {
    width: '50px',
    height: '50px',
  },
  inputForSearch: {
    flex: 1,
    fontSize: '100%',
    paddingLeft: 30,
  },
});
