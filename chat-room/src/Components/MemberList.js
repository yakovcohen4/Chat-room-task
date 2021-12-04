import React from 'react';
import Member from './Member';

function MemberList({ chatData }) {
  const arrUsers = chatData.map(chatData => chatData.userName);
  const uniqueArray = arrUsers.filter(function (item, pos) {
    return arrUsers.indexOf(item) == pos;
  });
  return (
    <ul>
      {uniqueArray.map((userName, index) => (
        <Member key={index} name={userName} />
      ))}
    </ul>
  );
}

export default MemberList;
