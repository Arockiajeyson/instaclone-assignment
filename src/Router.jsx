import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
export default function Router() {
  return (
    <div className='router-main-div'>
        <div className='first-div'>
            <img className='router-img' src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'></img>
        </div>
        <div className='second-div'>
            <h1>10x Team 04</h1>
            <Link to={'/insta'}><button>Enter</button></Link>
        </div>
    </div>
  )
}
