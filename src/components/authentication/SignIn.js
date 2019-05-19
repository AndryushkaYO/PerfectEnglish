import React from 'react';
import { withRouter } from 'react-router-dom';
import { State } from 'react-powerplug';
import { auth } from '../firebase';

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { lightGreen } from '@material-ui/core/colors';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: lightGreen[500],
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
    color: lightGreen[700],
    '&:focus': {
      color: lightGreen[700]
    }
  },
  cssLabel: {
    '&$cssFocused': {
      color: lightGreen[700],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: lightGreen[700],
    },
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
    color: 'white'
  },
});



class SignIn extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  handleSubmit = ({ email, password }) => {
    return auth
      .doSignInWithEmailAndPassword(email, password)
      .then(response => {
        sessionStorage.setItem('isUser', JSON.stringify(response.user));
        console.log('Successful Sign In', response);
        this.props.history.push('/profile/');
      })
      .catch(err => {
        console.log('Failed Sign In', err);
        throw err;
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <State initial={{ email: '', password: '', error: null }}>
        {({ state, setState }) => {
          const onEmailChange = e => {
            setState({ email: e.target.value });
          };
          const onPasswordChange = e => {
            setState({ password: e.target.value });
          };
          const onSubmit = e => {
            e.preventDefault();
            this.handleSubmit({
              email: state.email,
              password: state.password,
            }).catch(err => {
              setState({ error: err.message });
            });
          };

          return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <form className={classes.form}
                      onSubmit={onSubmit}>
                  {state.error &&
                    <p style={{ color: 'red' }}>
                      {state.error}
                    </p>}  
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email"classes={{
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    }}>Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus
                      type="text" classes={{
                        underline: classes.cssUnderline,
                      }}
                      value={state.email} onChange={onEmailChange} />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password" classes={{
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      }}>Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" 
                      value={state.password} onChange={onPasswordChange} classes={{
                        underline: classes.cssUnderline,
                      }}/>
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                </form>
              </Paper>
            </main>
          );
        }}
      </State>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SignIn));
