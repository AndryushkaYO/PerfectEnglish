import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AchievementsLogo from '../../../img/profile/achievements.logo.png';
import AchievementsLogo1 from '../../../img/profile/achievements1.png';
import AchievementsLogo2 from '../../../img/profile/achievements2.png';
import AchievementsLogo3 from '../../../img/profile/achievements3.png';
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
        <img src={AchievementsLogo} className="achievements"/>
        </a>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <div className="head-green">
           <img src={AchievementsLogo} className="modal-logo"/>
           </div>
           <div className="flex">

            <div> <img src={AchievementsLogo1} className="ico"/> <p>7 / 20</p></div>
            <div> <img src={AchievementsLogo2} className="ico"/> <p>11 / 30</p></div>
            <div> <img src={AchievementsLogo3} className="ico"/> <p>21 / 50</p></div>
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
const AchievementsModal = withStyles(styles)(SimpleModal);

export default AchievementsModal;