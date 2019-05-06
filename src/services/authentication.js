import { auth, provider } from './firebase';

sessionStorage.setItem('isUser', null);

export const login = () => {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        sessionStorage.setItem('isUser', JSON.stringify(user));
      });
  }
export const logout = () => {
    auth.signOut()
      .then(() => {
        sessionStorage.setItem('isUser', null);
      });
  }
export const onAuthStateChanged = (currentUser) => {
  auth.onAuthStateChanged(() => {
    if (currentUser.state.user !== sessionStorage.getItem("isUser")) {
      currentUser.setState({ 
        user :  sessionStorage.getItem("isUser") 
       });
    } 
  });
} 

