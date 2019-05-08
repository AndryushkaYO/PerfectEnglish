import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ProfileLogo from '../../../img/profile/profile.logo.png';
import ProfileLogo1 from '../../../img/profile/profile1.png';
import ProfileLogo2 from '../../../img/profile/profile2.png';
import '../../../styles/profile.styles.css';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 45 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 80,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    //padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: 20
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>       
        <a onClick={this.handleOpen}>
        <img src={ProfileLogo} className="profile"/>
        </a>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <div className="head-green">
           <img src={ProfileLogo} className="modal-logo"/>
           </div>
           <div className="flex">
            <h2>Alice Larson</h2>
            <div> <img src={ProfileLogo1} className="ico"/> <p>AGE</p></div>
            <div> <img src={ProfileLogo2} className="ico"/> <p>PHONE</p></div>  
            <div> <img src={ProfileLogo2} className="ico"/> <p>EMAIL</p></div>          
            </div>
           
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ProfileModal = withStyles(styles)(SimpleModal);

export default ProfileModal;