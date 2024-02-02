import React from 'react'
import w6 from '../Css/w6.module.css'

import image6_1 from "../wimages/logo.svg"
import image6_2 from "../wimages/mainvisual.jpg"
import image6_3 from "../wimages/about.jpg"
import image6_4 from "../wimages/bicycle1.jpg"
import image6_5 from "../wimages/bicycle2.jpg"
import image6_6 from "../wimages/bicycle3.jpg"

const Work6 = () => {
    return (
        <div className={w6.all}>
            <header id="header" className={`${w6.wrapper} ${w6.header}`}>
                <h1 className={w6.site_title}>
                    <a href="index.html">
                        <img src={image6_1} alt="Profile" />
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#bicycle">Bicycle</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="mainvisual" className={w6.mainvisual}>
                    <img src={image6_2} alt="テキストテキストテキスト" />
                </div>
                <section id="about" className={`${w6.wrapper} ${w6.about}`}>
                    <h2 className={w6.section_title}>About</h2>
                    <div className={w6.content}>
                        <img src={image6_3} alt="テキストテキストテキスト" />
                        <div className={w6.text}>
                            <h3 className={w6.content_title}>KAKERU MIYAICHI</h3>
                            <p>
                                テキストテキストテキストテキストテキストテキストテキスト
                                <br />
                                テキストテキストテキストテキストテキストテキストテキスト
                                <br />
                                テキストテキストテキストテキストテキストテキストテキスト
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bicycle" className={`${w6.wrapper} ${w6.bicycle}`}>
                    <h2 className={w6.section_title}>Bicycle</h2>
                    <ul>
                        <li>
                            <img src={image6_4} alt="テキストテキストテキスト" />
                            <h3 className={w6.content_title}>タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                        <li>
                            <img src={image6_5} alt="テキストテキストテキスト" />
                            <h3 className={w6.content_title}>タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                        <li>
                            <img src={image6_6} alt="テキストテキストテキスト" />
                            <h3 className={w6.content_title}>タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer id="footer" className={w6.footer}>
                <p>© 2020 Profile</p>
            </footer>
        </div>
    )
}

export default Work6