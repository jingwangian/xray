import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#112233df',
    width: '230px',
    height: '63px',
    paddingBottom: '3px',
  },
  logobar: {},
}));

/**
 * This function is used to create the LogoBar component
 *
 * @export
 * @returns LogoBar component
 */
export default function LogoBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logobar} alt="logo" />
    </div>
  );
}
