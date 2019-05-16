import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PrizesLogo from '../../../img/profile/prizes.logo.png';
import PrizesLogo1 from '../../../img/profile/prizes1.png';
import PrizesLogo2 from '../../../img/profile/prizes2.png';
import PrizesLogo3 from '../../../img/profile/prizes3.png';
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
        <img src={PrizesLogo} className="prizes"/>
        </a>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
           <div className="head-green">
           <img src={PrizesLogo} className="modal-logo"/>
           </div>
            <div className="flex">
            
            <div> <img src={PrizesLogo1} className="ico"/> <p>LOREM</p></div>
            <div> <img src={PrizesLogo2} className="ico"/> <p>LOREM</p></div>     
            <div> <img src={PrizesLogo3} className="ico"/> <p>LOREM</p></div>            
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
const PrizesModal = withStyles(styles)(SimpleModal);

export default PrizesModal;