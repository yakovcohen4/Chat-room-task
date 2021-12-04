import React from 'react';
import Member from './Member';

function MemberList({ chatData }) {
  const userName = sessionStorage.getItem('userName'); // get username - me or you ?
  const arrUsers = chatData.map(chatData => chatData.userName);
  // console.log(arrUsers);
  const uniqueArray = arrUsers.filter((item, pos) => {
    return arrUsers.indexOf(item) == pos;
  });
  const arrWithoutUsername = uniqueArray.filter(user => user !== userName);
  // console.log(arrWithoutUsername);
  return (
    <ul>
      {arrWithoutUsername.map((userName, index) => (
        <Member key={index} name={userName} />
      ))}
    </ul>
  );
}

export default MemberList;
