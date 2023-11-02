import React from "react";
import { useEffect, useContext } from 'react';
import { AppContext } from "./Context.js"; 

function UserInfo() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/5')
      .then(response => response.json())
      .then(data => {

        const { name } = data;
        const { firstname } = name;
        const { lastname } = name;
        const firstNameLetter = firstname.charAt(0).toUpperCase();
        const lastNameLetter = lastname.charAt(0).toUpperCase();
        
        const userInitials = {
          fnl: firstNameLetter,
          lnl: lastNameLetter,
        };
        dispatch({ type: 'SET_USER_INITIALS', payload: userInitials });

      })}, [dispatch]);

  return (
    <span className="userIcon">
      {state.userInitials.fnl}{state.userInitials.lnl}
    </span>
  );
}
export default UserInfo;