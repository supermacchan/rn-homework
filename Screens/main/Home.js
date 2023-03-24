import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../../router";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { onStateChange } from '../../redux/auth/authSlice';

export const Home = () => {
  const { stateChange } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const updateInfo = {
          userId: user.uid,
          nickname: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };
        dispatch(onStateChange(updateInfo));
      }
    });
  }, []);

  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
