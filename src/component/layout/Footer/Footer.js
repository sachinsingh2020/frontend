import React from 'react'
import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="leftFooter">
                <h4>Download Our App</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>
            <div className="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2023 &copy; Sachin Singh</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/__sachin__singh_1/" target='_blank' rel="noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/sachin-singh-040290218/" target='_blank' rel="noreferrer">Linkedin</a>
                <a href="https://github.com/sachinsingh2020" target='_blank' rel="noreferrer">GitHub</a>
            </div>
        </footer>
    )
}

export default Footer
