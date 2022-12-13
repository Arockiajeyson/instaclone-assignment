import React from 'react'
import { useState,useEffect } from 'react'
import {FiHeart} from 'react-icons/fi'
import {TbSend} from 'react-icons/tb'
import {ImLocation2} from 'react-icons/im'
import {FaCommentDots} from 'react-icons/fa'
export default function Fetching() {
    let [state,setState] =useState([])
    useEffect(()=>{
      fetch('http://localhost:3004/user')
      .then((e)=>(e.json()))
      .then((ele)=>(setState(ele)))
      .catch((err)=>console.log(err))
    },[])
    return (
      <>
      <div className="hearder">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpe5Yj8BSzP4Em3zlluAoSTiuEFW16Cenhw&usqp=CAU"></img>
        <img className="insta-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrnpYTwoUtOmpTk7sRvtG5rs9E_JzkXbM_g&usqp=CAU"></img></div>
      <div className="main-div">
        {state.map((e,index)=>{
          return(
            <div key={index} className="inner-div">
              <section className="name-tag">{e.name}</section>
              <section className="location-tag"><ImLocation2/> {e.location}</section>
              <img className="main-img" src={e.PostImage}></img>
              <aside className="aside-class">
              <span className="like-img"><FiHeart/></span>
              <span className="share-img"><TbSend/></span>
              <span className="commnt-img"><FaCommentDots/></span>
              <section className="like-class">{e.likes} Likes</section>
              <span className="date-class">{e.date}</span>
              </aside>
              <section className="description">{e.description}</section>
            </div>
  
          )
        })}
      </div>
      </>
    );
}
