import React from 'react'
import { useState } from 'react'
import './armstrong.css';
export default function Armstrong() {
  const [num, setNum] = useState();
  const [isTrue, setIsTrue] = useState(null);
  const HandleNum = (e)=>{
    setNum(e.target.value);
  }
  const Check = ()=>{
    let temp = parseInt(num);
    let og = parseInt(num);
    let n=0;
    let sum=0;
    while(temp>0){
        n++;
        temp = Math.floor(temp / 10);
    }
    temp = parseInt(num);
    while(temp>0){
        let x = temp%10;
        sum+= Math.pow(x,n);
        temp = Math.floor(temp / 10);
    }
    setIsTrue(og===sum);
  }
  return (
    <div className='arm-strong'>
        <h4>Enter Armstrong Number:- </h4>
        <input type='text' pattern="[0-9]" value={num} onChange={HandleNum}></input>
        <button type='submit' onClick={Check}>Check</button>
        {isTrue!==null && (
            <p>
                {isTrue?"Armstrong Number" : "Not Armstrong Number"}
            </p>
        )}
    </div>
  )
}
