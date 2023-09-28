import React from "react";
import { useEffect, useState } from 'react';

function UserInfo() {
  const [userInitials, setUserInitials] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/5')
      .then(response => response.json())
      .then(data => {

        const { name } = data;
        const { firstname } = name;
        const { lastname } = name;
        const firstNameLetter = firstname.charAt(0).toUpperCase();
        const lastNameLetter = lastname.charAt(0).toUpperCase();
        
        setUserInitials({
          fnl: firstNameLetter,
          lnl: lastNameLetter,
        });
      })}, []);

  return (
    <div className="userIcon">
      {userInitials.fnl}{userInitials.lnl}
    </div>
  );
}
export default UserInfo;