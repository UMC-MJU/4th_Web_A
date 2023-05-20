import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { MainCart } from "../images/imgSrc";
import { Price1 } from "../images/imgSrc";
import { Price2 } from "../images/imgSrc";
import { Price3 } from "../images/imgSrc";
import { Price4 } from "../images/imgSrc";

import { New1 } from "../images/imgSrc";
import { New2 } from "../images/imgSrc";
import { New3 } from "../images/imgSrc";
import { New4 } from "../images/imgSrc";

import { Slide1 } from "../images/imgSrc";
import { Slide2 } from "../images/imgSrc";
import { Slide3 } from "../images/imgSrc";
import { Slide4 } from "../images/imgSrc";
import { Slide5 } from "../images/imgSrc";

import { FooterBanner } from "../images/imgSrc";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";
import "../styles/styles.css";

function Home() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    const result = window.confirm("장바구니에 추가하시겠습니까?");
    if (result) {
      dispatch({ type: "INCREMENT" });
      alert("장바구니에 담았습니다!");
    }
  }

  return (
    <div id="home-all">
      <main>
        <section className="main-1">
          <Swiper
            id="slideShow"
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <ul>
              <SwiperSlide>
                <li>
                  <img src={Slide1} alt="price" />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={Slide2} alt="price" />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={Slide3} alt="price" />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={Slide4} alt="price" />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={Slide5} alt="price" />
                </li>
              </SwiperSlide>
            </ul>
          </Swiper>
        </section>

        <section className="main-2">
          <div id="main-2-ment" alt="how-about?">
            이 상품 어때요?
          </div>
          <div className="main-2-wrap">
            <div className="main-2-img">
              <Link to={"/egg"}>
                <img src={Price1} width="230px" alt="egg" />
              </Link>
              <button>
                <img
                  className="main-cart-img"
                  src={MainCart}
                  alt="main-cart"
                  onClick={handleIncrement}
                />
              </button>
              <span className="main-2-name">
                [KF365] 1+등급 무항생제 특란 20구
              </span>
              <span className="main-2-price">6,205원</span>
              <span className="main-2-re">후기 9,999+</span>
            </div>
            <div className="main-2-img">
              <img src={Price2} width="230px" alt="choco" />
              <button>
                <img
                  className="main-cart-img"
                  src={MainCart}
                  alt="main-cart"
                  onClick={handleIncrement}
                />
              </button>
              <span className="main-2-name">
                [그랜드벨지안] 초콜릿 트윅스 4종
              </span>
              <span className="main-2-price"> 4,000원</span>
              <span className="main-2-re">후기 999+</span>
            </div>
            <div className="main-2-img">
              <img src={Price4} width="230px" alt="plate" />
              <button>
                <img
                  className="main-cart-img"
                  src={MainCart}
                  alt="main-cart"
                  onClick={handleIncrement}
                />
              </button>
              <span className="main-2-name">
                [오덴세] 아틀리에 노드 세트 2종 (택1)
              </span>
              <span className="main-2-price">139,000원~</span>
              <span className="main-2-re">후기 46</span>
            </div>
            <div className="main-2-img">
              <img src={Price3} width="230px" alt="ddeok" />
              <button>
                <img
                  className="main-cart-img"
                  src={MainCart}
                  alt="main-cart"
                  onClick={handleIncrement}
                />
              </button>
              <span className="main-2-name">
                [떡편] 쌀케이크 세트 (커피+고구마)
              </span>
              <span className="main-2-price"> 13,900원</span>
              <span className="main-2-re"> 후기 256</span>
            </div>
          </div>
        </section>
        <section className="main-3">
          <img src={FooterBanner} alt="footer-banner" />
        </section>
        <section className="main-2">
          <div id="main-2-ment" alt="how-about?">
            놓치면 후회할 가격 &gt;
          </div>
          <div className="main-2-wrap">
            <div className="main-2-img">
              <Link to={"/egg"}>
                <img src={New1} width="230px" alt="egg" />
                <img className="main-cart-img" src={MainCart} alt="main-cart" />
              </Link>
              <span className="main-2-name">[네떼] 부드러운 샐러드 65g </span>
              <span className="main-2-price">1,615원</span>
              <span className="main-2-re">후기 9,999+</span>
            </div>
            <div className="main-2-img">
              <img src={New2} width="230px" alt="choco" />
              <img className="main-cart-img" src={MainCart} alt="main-cart" />
              <span className="main-2-name">
                [Perfect Cut] 우대꽃갈비 스테이크 600g{" "}
              </span>
              <span className="main-2-price"> 28,728원</span>
              <span className="main-2-re">후기 999+</span>
            </div>
            <div className="main-2-img">
              <img src={New3} width="230px" alt="plate" />
              <img className="main-cart-img" src={MainCart} alt="main-cart" />
              <span className="main-2-name">
                [바샤커피] 드립백 어쏘티드 세트 12종 (25개입 / 쇼핑백 포함){" "}
              </span>
              <span className="main-2-price">66,960원~</span>
              <span className="main-2-re">후기 790</span>
            </div>
            <div className="main-2-img">
              <img src={New4} width="230px" alt="ddeok" />
              <img className="main-cart-img" src={MainCart} alt="main-cart" />
              <span className="main-2-name">
                [서울우유] 비요뜨 요거트 4종 (택1){" "}
              </span>
              <span className="main-2-price"> 1,380원</span>
              <span className="main-2-re"> 후기 9,999+</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
