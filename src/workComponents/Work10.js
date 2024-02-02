import React from 'react'
import w10 from '../Css/w10.module.css'

import image10_1 from "../wimages/logo3.svg"
import image10_2 from "../wimages/mainvisual-pc.jpg"
import image10_3 from "../wimages/icon-instagram.png"
import image10_4 from "../wimages/works1.jpg"
import image10_5 from "../wimages/works2.jpg"
import image10_6 from "../wimages/works3.jpg"
import image10_7 from "../wimages/works4.jpg"
import image10_8 from "../wimages/works5.jpg"
import image10_9 from "../wimages/works6.jpg"

const work10 = () => {
    return (
        <div className={w10.all}>
            <header id="header" className={`${w10.header} ${w10.wrapper}`}>
                <h1 className={w10.site_title}>
                    <a href="#">
                        <img src={image10_1} alt="" />
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Works">Works</a>
                        </li>
                        <li>
                            <a href="#News">News</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com ">
                                <img src={image10_3} alt="instagram" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="mainvisual" className={w10.mainvisual}>
                    <img src={image10_2} alt="mainvisal" />
                </div>
                <section id="about" className={w10.wrapper}>
                    <h2 className={w10.section_title}>About</h2>
                    <ul className={w10.info}>
                        <li>
                            <address>
                                2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031
                                Japan
                            </address>
                        </li>
                        &gt;
                        <li>tel:000-0000-0000</li>
                        <li cite="www.xxxxxx.jp">url:www.xxxxx.jp</li>
                        <li>mail:xxx@xxxxxx.jp</li>
                    </ul>
                    <p>
                        プロフィールテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキストテキストテキスト
                    </p>
                </section>
                <section id="works" className={`${w10.works} ${w10.wrapper}`}>
                    <h2 className={w10.section_title}>Works</h2>
                    <ul>
                        <li>
                            <img src={image10_4} alt="" />
                        </li>
                        <li>
                            <img src={image10_5} alt="" />
                        </li>
                        <li>
                            <img src={image10_6} alt="" />
                        </li>
                        <li>
                            <img src={image10_7} alt="" />
                        </li>
                        <li>
                            <img src={image10_8} alt="" />
                        </li>
                        <li>
                            <img src={image10_9} alt="" />
                        </li>
                    </ul>
                </section>
                <section id="news" className={w10.wrapper}>
                    <h2 className={w10.section_title}>News</h2>
                </section>
                <section id="contact" className={`${w10.contact} ${w10.wrapper}`}>
                    <h2 className={w10.section_title}>Contact</h2>
                    <dl>
                        <dt>
                            <label htmlFor="name">NAME</label>
                        </dt>
                        <dd>
                            <input type="text" name="name" id="name" />
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <label htmlFor="email">E-mail</label>
                        </dt>
                        <dd>
                            <input type="email" name="email" id="email" />
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <label htmlFor="massage">MASSAGE</label>
                        </dt>
                        <dd>
                            <textarea
                                name="massage"
                                id="massage"
                                cols=""
                                rows=""
                                defaultValue={""}
                            />
                        </dd>
                    </dl>
                </section>
            </main>
            <footer>
                <div id="footer" className={w10.footer}>
                    <p>© 2021 My Work</p>
                </div>
            </footer>
        </div>

    )
}

export default work10