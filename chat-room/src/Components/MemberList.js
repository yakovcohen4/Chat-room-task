import React from 'react';
import Member from './Member';

function MemberList({ chatData }) {
  return (
    <ul>
      {chatData.map(({ author }, index) => (
        <Member key={index} name={author} />
      ))}
    </ul>
  );
}

export default MemberList;
