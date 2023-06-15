import React from 'react'
import style from "./Footer.module.css";
import logo from './logo.png'
import { Button } from "@chakra-ui/react";
import {Link} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon} from '@chakra-ui/icons'



const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.box}>
        <div className={style.left_box}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                <div className={style.logoContainer}>
                    <h1 style={{ color: "#E25B55", fontSize: "30px", fontWeight: "bolder", background:"#B7B7B7" }} > PILL </h1>
                    <h1 style={{ color: "blue",background:"#B7B7B7",fontSize: "20px",fontWeight: "bolder" }}>ALERT</h1>
                </div>
            </div>
            <div style={{background:"#B7B7B7"}}>
            <Button
                _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
                variant="outline"
                style={{ color: "black", marginRight: "20px" ,background:"#B7B7B7"}}
                >
                Download for Android
                <img
                    src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/playstore_ic.svg"
                    alt=""
                    style={{ marginLeft: "10px",background:"#B7B7B7" }}
                />
            </Button>
            <Button
                variant="outline"
                style={{ color: "black",background:"#B7B7B7" }}
                _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
                >
                Download for iOS
                <img
                    src="https://healthifyme.imgix.net//static/images/home_website/landing/icons/appstore_ic.svg"
                    alt=""
                    style={{ marginLeft: "10px", background:"#B7B7B7" }}
                />
             </Button>
            </div>
            <div>
                <h1>Follow us on</h1>
                <img
                    src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png"
                    alt=""
                />
                <img
                    src="https://ii1.pepperfry.com/assets/w23-pf-social-fb.png"
                    alt=""
                />
                <img
                    src="https://ii2.pepperfry.com/assets/w23-pf-social-pinterest.png"
                    alt=""
                />
                <img
                    src="https://ii1.pepperfry.com/assets/w23-pf-social-linkedin.png"
                    alt=""
                />
                <img
                    src="https://ii3.pepperfry.com/assets/w23-pf-social-youtube.png"
                    alt=""
                />
                <img
                    src="https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png"
                    alt=""
                />
            </div>
        </div>
        <div className={style.right_box}>
            <div>
                <div>
                    <h1 style={{background:"#B7B7B7", fontWeight:"bolder"}}><InfoOutlineIcon style={{background:"#B7B7B7"}} /> Contact Us</h1>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> shatrukumar47@gmail.com</a>
                    <h4><InfoOutlineIcon style={{background:"#B7B7B7"}} /> Company</h4>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> About Us</a>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> Careers</a>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> Blogs</a>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> Terms and conditions</a>
                </div>
                <div>
                    <h4> <InfoOutlineIcon style={{background:"#B7B7B7"}} /> Need Help?</h4>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> FAQs</a>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> Policies</a>
                    <a href=""><ChevronRightIcon style={{background:"#B7B7B7"}} /> Contact Us</a>
                    <p style={{background:"#B7B7B7"}}>© 2023 Pill ALert,  All rights reserved.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
