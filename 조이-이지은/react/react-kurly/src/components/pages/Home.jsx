import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { MainCart } from "../images/imgSrc";
import { Price1, Price2, Price3, Price4 } from "../images/imgSrc";
import { New1, New2, New3, New4 } from "../images/imgSrc";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../images/imgSrc";
import { FooterBanner } from "../images/imgSrc";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";

function Home() {
  // const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    const result = window.confirm("장바구니에 추가하시겠습니까?");
    if (result) {
      dispatch({ type: "INCREMENT" });
      alert("장바구니에 담았습니다!");
    }
  }

  return (
    <Wrapper>
      <SectionA>
        {/* main-1 section content */}
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
      </SectionA>

      <SectionB>
        {/* main-2 section content */}
        <SectionTitle>이 상품 어때요?</SectionTitle>
        <div className="section-wrapper">
          <PricesWrap>
            <Link to={"/egg"}>
              <img src={Price1} width="230px" alt="egg" />
            </Link>
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [KF365] 1+등급 무항생제 특란 20구
            </span>
            <span className="sales-price">6,205원</span>
            <span className="review-number">후기 9,999+</span>
          </PricesWrap>
          <PricesWrap>
            <img src={Price2} width="230px" alt="choco" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [그랜드벨지안] 초콜릿 트윅스 4종
            </span>
            <span className="sales-price"> 4,000원</span>
            <span className="review-number">후기 999+</span>
          </PricesWrap>
          <PricesWrap>
            <img src={Price4} width="230px" alt="plate" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [오덴세] 아틀리에 노드 세트 2종 (택1)
            </span>
            <span className="sales-price">139,000원~</span>
            <span className="review-number">후기 46</span>
          </PricesWrap>
          <PricesWrap>
            <img src={Price3} width="230px" alt="ddeok" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [떡편] 쌀케이크 세트 (커피+고구마)
            </span>
            <span className="sales-price"> 13,900원</span>
            <span className="review-number"> 후기 256</span>
          </PricesWrap>
        </div>
      </SectionB>

      <SectionC>
        {/* main-3 section content */}
        <img src={FooterBanner} alt="footer-banner" />
      </SectionC>

      <SectionD>
        {/* main-4 section content */}
        <SectionTitle>놓치면 후회할 가격 &gt;</SectionTitle>
        <div className="section-wrapper">
          <PricesWrap>
            <Link to={"/egg"}>
              <img src={New1} width="230px" alt="egg" />
              <button>
                <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
              </button>
            </Link>
            <span className="product-name">[네떼] 부드러운 샐러드 65g </span>
            <span className="sales-price">1,615원</span>
            <span className="review-number">후기 9,999+</span>
          </PricesWrap>
          <PricesWrap>
            <img src={New2} width="230px" alt="choco" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [Perfect Cut] 우대꽃갈비 스테이크 600g{" "}
            </span>
            <span className="sales-price"> 28,728원</span>
            <span className="review-number">후기 999+</span>
          </PricesWrap>
          <PricesWrap>
            <img src={New3} width="230px" alt="plate" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [바샤커피] 드립백 어쏘티드 세트 12종 (25개입 / 쇼핑백 포함){" "}
            </span>
            <span className="sales-price">66,960원~</span>
            <span className="review-number">후기 790</span>
          </PricesWrap>
          <PricesWrap>
            <img src={New4} width="230px" alt="ddeok" />
            <button>
              <img src={MainCart} alt="main-cart" onClick={handleIncrement} />
            </button>
            <span className="product-name">
              [서울우유] 비요뜨 요거트 4종 (택1){" "}
            </span>
            <span className="sales-price"> 1,380원</span>
            <span className="review-number"> 후기 9,999+</span>
          </PricesWrap>
        </div>
      </SectionD>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  /* styles for the entire Home component */
`;

const SectionA = styled.section`
  /* styles for the main-1 section */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionB = styled.section`
  /* styles for the main-2 section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SectionC = styled.section`
  /* styles for the main-3 section */
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* main-4 section */
const SectionD = styled.section`
  /* styles for the main-4 section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PricesWrap = styled.div`
  /* styles for each main-2 image */
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  width: 250px;

  button {
    border: none;
    background-color: #fff;
  }

  .product-name {
    font-size: 1.1rem;
    padding: 1rem 0;
  }

  .sales-price {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0 0 0.5rem 0;
  }

  .review-number {
    font-size: 1rem;
    color: grey;
    padding: 0.5rem 0 5rem 0;
  }
`;
const SectionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5rem 0 3rem 0;
  font-weight: bold;
`;
