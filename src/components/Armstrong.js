import React from 'react'
import { useState } from 'react'
import './armstrong.css';
export default function Armstrong() {
  const [num, setNum] = useState();
  const [isTrue, setIsTrue] = useState(null);
  const [isPrime, setIsprime] = useState(null);
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
  const CheckPrime = () =>{
    if(parseInt(num)===1){
        isPrime(null);
    }
    else if(parseInt(num)>1){
        for(let i=2;i<parseInt(num)/2;i++){
            if(parseInt(num)%i===0){
                setIsprime(false);
                break;
            }
            else{
                setIsprime(true);
            }
        }
        
    }
  }
  return (
    <div className='arm-strong'>
        <h1><center>SET-1,3</center></h1>
        <h4>Enter Number:- </h4>
        <input type='text' pattern="[0-9]" value={num} onChange={HandleNum}></input>
        <br></br>
        <button type='submit' onClick={Check}>Check</button>
        <br></br>
        <br></br>
        <button type='submit' onClick={CheckPrime}>Check Prime</button>
        {isTrue!==null && (
            <p>
                {isTrue?"Armstrong Number" : "Not Armstrong Number"}
            </p>
        )}
        <br></br>
        {isPrime!==null && num!==1 &&(
            <p>
                {isPrime?"Prime Number" : "Not Prime Number"}
            </p>
        )}
    </div>
  )
}
