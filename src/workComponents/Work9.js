import React from 'react'
import w9 from '../Css/w9.module.css'

import image9_1 from "../wimages/logo2.svg"
import image9_2 from "../wimages/mainvisual2.jpg"
import image9_3 from "../wimages/detail.jpg"

const Work9 = () => {
    return (
        <div className={w9.all}>
            <div className={w9.wrapper}>
                <header id="header" className={w9.header}>
                    <h1 className={w9.title}>
                        <a href="#">
                            <img src={image9_1} alt="title" />
                        </a>
                    </h1>
                </header>
                <main>
                    <section id="mainvisual" className={w9.mainvisual}>
                        <img src={image9_2} alt="mainvisual" />
                    </section>
                    <section id="index" className={w9.index}>
                        <div className={w9.inner}>
                            <h2 className={w9.sub_title}>INDEX</h2>
                            <ol>
                                <li>
                                    タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                                </li>
                                <li>
                                    タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                                </li>
                                <li>
                                    タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                                </li>
                                <li>
                                    タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                                </li>
                                <li>
                                    タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                                </li>
                            </ol>
                        </div>
                    </section>
                    <section id="detail" className={w9.detail}>
                        <div className={w9.inner}>
                            <h2 className={w9.sub_title}>DETAIL</h2>
                            <div className={w9.sep}>
                                <img src={image9_3} alt="picture" />
                                <div className={w9.article}>
                                    <h2 className={w9.title}>タイトルタイトルタイトル</h2>
                                    <dl>
                                        <dt>著者</dt>
                                        <dd>タイトルタイトルタイトル</dd>
                                        <dt>出版社</dt>
                                        <dd>タイトルタイトルタイトル</dd>
                                        <dt>発行年</dt>
                                        <dd>タイトルタイトルタイトル</dd>
                                    </dl>
                                    <p>
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキスト
                                    </p>
                                    <a className={w9.link} href="#">
                                        オンラインストアで見る
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer id="footer" className={w9.footer}>
                    <p className={w9.inner}>© 2021 PHOTO BOOK.</p>
                </footer>
            </div>
        </div>

    )
}

export default Work9