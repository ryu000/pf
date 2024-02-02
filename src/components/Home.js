import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import profileImage from "../images/me.jpg"
import instaImage from "../images/instagram.png"
import twitterImage from "../images/twitter.png"
import mailImage from "../images/mail.png"
import facebookImage from "../images/facebook.png"

import SwiperIn from "./SwiperIn.js"

const Home = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const birthday = new Date(1994, 6, 7);
        const today = new Date();
        const nennrei = today.getFullYear() - birthday.getFullYear();
        setAge(nennrei);
    }, []);


    const [isSiteOn, setIsSiteOn] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let scrollY = window.scrollY;
            const site = document.getElementById('site');

            if (site) {
                if (scrollY > 400) {
                    site.classList.remove('on');
                    setIsSiteOn(false);
                } else {
                    site.classList.add('on');
                    setIsSiteOn(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // クリーンアップ関数でイベントリスナーを解除
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header" id="header">
                <h2 id="site" className={isSiteOn ? 'site on' : 'site'}>
                    RYUTO.M
                    <br />
                    PORTFOLIO
                </h2>
            </header>
            {/* hero */}
            <section className="hero" id="home">
                <div className="main-sentence">
                    {/* <p>18 So many people,<br>so many minds.</p> */}
                </div>
            </section>
            {/* profile */}
            <section className="profile" id="profile">
                <div className="title">
                    <h2>PROFILE</h2>
                </div>
                <div className="profile-container">
                    <div className="me-img">
                        <img src={profileImage} alt="me" />
                    </div>
                    <div className="prof-box">
                        <h3>森井 竜人/Ryu-to Morii</h3>
                        <p>
                            1994年生まれ。今年で
                            {age}
                            歳。ふたご座。A型。東京都出身。
                            <br />
                            10代から現在まで飲食業に従事し社会人歴14年。デジタルネイティブ世代ではないですが
                            小学生の頃からPCに慣れ親しんでいたこともあり、
                            昔からIT業界やクリエイティブ職に関心があったため
                            隙間時間を見つけて完全独学でコーディングを学びました。
                            <br />
                            <br />
                            現在進行系で勉強中。
                            <br />
                            HTML5/CSS/Javascript
                            <br />
                            react/sass/bootstrap5
                        </p>
                    </div>
                </div>
                <div className="pr-more">
                    <HashLink to="/profile#profile-top">MORE...</HashLink>
                </div>
            </section>
            {/* work */}
            <section className="works" id="works">
                <div className="title">
                    <h2>WORKS</h2>
                </div>
                <div className="works-container">
                    {/* swiper */}
                    <div className="l-wrapper">
                        <main>
                            <div id="demo09" className="gallery03 l-section">
                                <SwiperIn />
                            </div>
                        </main>
                    </div>
                </div>
                <div className="wk-more">
                    <HashLink to="/works#works-top">MORE...</HashLink>
                </div>
            </section>
            {/* contact */}
            <section className="contact" id="contact">
                <div className="title">
                    <h2>CONTACT</h2>
                </div>
                <div className="contact-container">
                    <div className="icon">
                        <a href="https://www.instagram.com/yutoruuu">
                            <img src={instaImage} alt="instagram" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="http://twitter.com">
                            <img src={twitterImage} alt="twitter" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="http://ja-jp.facebook.com">
                            <img src={facebookImage} alt="facebook" />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:ryu.m.1994@gmail.com">
                            <img src={mailImage} alt="e-mail" />
                        </a>
                    </div>

                </div>
            </section>
            {/* footer */}
            <footer className="footer" id="footer">
                <a className="pagetop" href="#header">
                    <div className="pagetop__arrow" />
                </a>
                <div className="footer-container">
                    <div className="title">
                        <h2>FOOTER</h2>
                    </div>
                    <div className="footer1">
                        <div className="footer-about">
                            <h3>About</h3>
                            <p>
                                This website is a portfolio site created by Ryuto.M in 2024.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/yutoruuu">instagram</a>
                                </li>
                                <li>
                                    <a href="http://twitter.com">X(twitter)</a>
                                </li>
                                <li>
                                    <a href="http://ja-jp.facebook.com">facebook</a>
                                </li>
                                <li>
                                    <a href="mailto:ryu.m.1994@gmail.com">mail</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h3>Menu</h3>
                            <ul>
                                <li>
                                    <HashLink to="/#header">HOME</HashLink>
                                </li>
                                <li>
                                    <Link to="/profile">PROFILE</Link>
                                </li>
                                <li>
                                    <HashLink to="/works#works-top">WORKS</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/#contact">CONTACT</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="cr">© 2024 RYUTO.M PORTFOLIO</p>
            </footer>
        </>
    )
}

export default Home