import React from 'react';

const CircleSvg = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color !== undefined ? color : "#2c3e50"} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export default CircleSvg;
