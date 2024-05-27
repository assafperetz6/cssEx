'use strict'

var elBackToTopBtn = document.querySelector('.back-to-top-btn')
var elHeader = document.getElementById('header')

window.onscroll = userScroll

function userScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        elBackToTopBtn.style.opacity = '1'
        elBackToTopBtn.style.visibility = 'visible'        
    }
    else {
        elBackToTopBtn.style.opacity = '0'
        elBackToTopBtn.style.visibility = 'hidden'
    } 
}