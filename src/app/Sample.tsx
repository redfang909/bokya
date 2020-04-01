import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root';

const { useEffect } = React
const Sample = () => {
  useEffect(() => {
    // let id = setInterval(() => {
    //   const randomNum = Math.floor(Math.random() * members.length)
    //   setMember(members[randomNum])
    // }, 1000);
    // return () => clearInterval(id);
    console.log('drwxxxxx');
    
  }, []);
  return (
    <div>
        ace red sdfsfw
    </div>
  )
};

export default Sample;