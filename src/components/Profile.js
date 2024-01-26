import React, { useState, useEffect } from 'react'
import cp from '../Css/profile.module.css'

// import {Link} from "react-router-dom";
import profileImage from "../images/me.jpg"


const Profile = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthday = new Date(1994, 6, 7);
    const today = new Date();
    let nennrei = today.getFullYear() - birthday.getFullYear();

    if (
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
    ) {
      nennrei -= 1;
    }
    setAge(nennrei);
  }, []);

  return (

    <div className={cp.p} id="profile-top">
      <header className={cp.wrapper}>
        <h2 className={cp.header_title}>Profile</h2>
      </header>

      <main className={`${cp.profile} ${cp.wrapper}`}>

        <section className={cp.profile} id="profile">
          <div className={cp.profile_container}>

            <div className={cp.me_img}>
              <img src={profileImage} alt="me" />
            </div>

            <div className={cp.prof_box}>
              <h3>森井  竜人 / Ryu-tos  Morii</h3>

              <div className={cp.prof_mini}>

                <div className={cp.prof_card}>
                  <h4 className={cp.prof_title}>略歴</h4>
                  <p>1994年生まれ。
                    {age}歳。ふたご座。A型。東京都出身。10代から雇用形態は個人事業主としてですが様々な飲食店にて従事し社会人歴14年目。一番長くレギュラーとして働いた創業25年のお店では一日で120万円超えの売上を上げ歴代一位になりました。様々な失敗を経て、コミュニケーション能力や協調性、自発的行動力、適切な判断力、忍耐力、営業能力、顧客分析、考察力などどの職種でも必要な能力を養ってきたと自負しています。これらの経験をいかし、クリエイティブの力でお客様の課題を解決するIT職を目指しています。
                  </p>
                </div>

                <div className={cp.prof_card}>

                  <div className={cp.card_mini}>
                    <h4 className={cp.prof_title}>将来像</h4>
                    <p>フロントエンドエンジニアとして技術力を磨き自身の価値を上げ、お客様が笑顔になるような仕事をして、結果として社会、企業の利益になるようなクリエイティブに富んだ人材を目指しています。ゆくゆくはバックエンドにも挑戦してフルスタックエンジニアとして働いていきたいと思っています。接客業で培った能力、持ち前の素直さを生かして様々な人と良い関係性を築いていきたいです。
                    </p>
                  </div>

                  <div className={cp.card_mini}>
                    <h4 className={cp.prof_title}>趣味</h4>
                    <p>映画鑑賞、読書、ネットサーフィン、食べ歩き、ジョギング、人間観察</p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        <section className={cp.skill}>
          <div class={cp.skill_container}>

            <div className={cp.skill_card}>
              <h4 className={cp.skill_title}>design</h4>
              <p>「見る人にとってわかりやすい」、「シンプル」、「整然としている」を前提とした情報設計と、普遍的に美しいスタイリングを心がけます。</p>
            </div>

            <div className={cp.skill_card}>
              <h4 className={cp.skill_title}>implement</h4>
              <p>シンプルで効率的なコーデイングに努めるほか、フレームワーク、ライブラリを用いて、レスポンシブに実装します。</p>
              <p className={cp.skills}>HTNL5/CSS/Javascript
                <br />react/sass/bootstrap5</p>
            </div>

            <div className={cp.skill_card}>
              <h4 className={cp.skill_title}>character</h4>
              <p>培った考察力によりマーケティング視点とクライアント視点両面で顧客の求めているものを分析し、
                コミュニケーション能力ですり合わせを円滑に行い理想的な解決策に落とし込みます。
                また周囲の意見を広く取り入れる素直さと客観性をいかし、ユーザー視点を重んじたデザインを心がけます。</p>
            </div>

          </div>
        </section>

      </main>
    </div>

  )
}

export default Profile