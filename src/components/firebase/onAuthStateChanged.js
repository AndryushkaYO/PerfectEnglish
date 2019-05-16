import { auth } from './firebase';

export const onAuthStateChanged = (currentUser) => {
  auth.onAuthStateChanged(() => {
    if (currentUser.state.user !== sessionStorage.getItem("isUser")) {
      currentUser.setState({ 
        user :  sessionStorage.getItem("isUser") 
       });
    } 
  });
} 
