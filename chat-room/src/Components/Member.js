import React from 'react';

function Member({ name }) {
  return (
    <li>
      <div>
        <h3>
          <span className="status green"></span>
        </h3>
        <h2>{name}</h2>
      </div>
      {/* <img src={avatarImg} alt="user" /> ***-img for future-***/}
    </li>
  );
}

export default Member;
