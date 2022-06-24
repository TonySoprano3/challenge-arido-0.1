/* eslint-disable */
import React, { Component } from 'react'
import {MdKeyboardArrowUp} from 'react-icons/md';
import './ScrollTop.scss';


function calcScrollValue() {

  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
 
  
  const ScrollTop = () => {
    return (
      <div id='progress'>
        <span id='progress-value'><MdKeyboardArrowUp /></span>
      </div>
    )
  }
  
  export default ScrollTop
 
  