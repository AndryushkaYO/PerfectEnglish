import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import PrizesModal from './modals/prizes.modal';
import ProfileModal from './modals/profile.modal';
import AchievementsModal from './modals/achievments.modal';

class Profile extends Component {
    render() {
        return (
            <div>
            <div className="profile-bg">
          </div>
    
   <ProfileModal> </ProfileModal>
   <PrizesModal> </PrizesModal>
   <AchievementsModal> </AchievementsModal>
        </div>);
    }
}

export default Profile;