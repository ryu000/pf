import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import image_1 from "../images/p-pic1.png"
import image_2 from "../images/p-pic2.png"
import image_3 from "../images/p-pic3.png"
import image_4 from "../images/p-pic4.png"
import image_5 from "../images/p-pic5.png"
import image_6 from "../images/p-pic6.png"
import image_7 from "../images/p-pic7.png"
import image_8 from "../images/p-pic8.png"
import image_9 from "../images/p-pic9.png"
import image_10 from "../images/p-pic10.png"
import image_11 from "../images/p-pic11.png"
import image_12 from "../images/p-pic12.png"
import image_13 from "../images/p-pic13.png"
import image_14 from "../images/p-pic14.png"


const SwiperIn = () => {

  const [slideLength, setSlideLength] = useState(0);

  useEffect(() => {
    const updateSlideLength = () => {
      const length = document.querySelectorAll('.gallery03 .swiper-slide').length;
      setSlideLength(length);
    };

    // 初回のスライド数取得
    updateSlideLength();

    // スライド数が変わる可能性がある場合、リサイズなどのイベントにリスンすることも考慮する
    window.addEventListener('resize', updateSlideLength);

    // クリーンアップ関数でイベントリスナーを解除
    return () => {
      window.removeEventListener('resize', updateSlideLength);
    };
  }, []); // 空の配列を渡すことで、初回のマウント時にのみ実行される



  return (
    <>
      <Swiper
        className="swiper"
        autoplay={{ delay: 0, stopOnLastSlide: false, disableOnInteraction: false, reverseDirection: false }}
        grabCursor={true}
        loop={true}
        spaceBetween={10}
        speed={6000}
        loopedSlides={slideLength}
        slidesPerView={2}
        centeredSlides={true}
        loopAdditionalSlides={1}

      >

        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_1} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_2} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_3} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_4} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_5} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    ポートフォリオサイト(当サイト)
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_6} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_7} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_8} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_9} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_10} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_11} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_12} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_13} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <a href="http://google.com">
                <div className="slide-media img-cover">
                  <img src={image_14} alt="" />
                </div>
                <div className="slide-content">
                  <p className="slide-title">
                    勉強課題/模写コーディング
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default SwiperIn