import React from "react";
import { Link } from "react-router-dom";
// import { counterState } from "../../atoms/counterAtom";
// import { useRecoilState } from "recoil";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Logo from "../images/r-logo.png";
import Heart from "../images/r-heart.png";
import Cart from "../images/r-cart.png";
import Search from "../images/r-search.png";
import Place from "../images/r-place.png";
import List from "../images/r-list.png";

import "./Header.css";
import "../styles/styles.css";

const Header = () => {
  // const [count, setCount] = useRecoilState(counterState);
  const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  return (
    <Wrapper>
      {/* <header className="header"> */}
      <SectionA>
        <LoginList>
          <li className="logins">
            <Highlight>회원가입</Highlight>
          </li>
          |
          <li className="logins">
            <Link to={"/login"}>로그인</Link>
          </li>
          |<li className="logins">고객센터</li>
        </LoginList>
      </SectionA>
      <SectionB>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <MarketOrBeauty>
          <Highlight>마켓컬리</Highlight> | 뷰티컬리
          <NewImg
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTUuMTA4IDd2LS4wMDdMMS45MTEgMi41NzdWN0guMDQ2VjBoMS44NjdsMy4xOTYgNC40MTlWMGgxLjg2N3Y3SDUuMTA4eiIgZmlsbD0iI0ZBNjIyRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="
            alt="market-kurly"
          />
        </MarketOrBeauty>
        <HeaderSearch>
          <HeaderSearchInput type="text" placeholder="검색어를 입력해주세요" />
          <HeaderSearchButton>
            <img src={Search} width={25} rem alt="search" />
          </HeaderSearchButton>
        </HeaderSearch>
        <Like>
          <div>
            <img src={Place} width={30} rem alt="place" />
          </div>
          <div>
            <Link to={"/Heart"}>
              <img src={Heart} width={30} rem alt="heart" />
            </Link>
          </div>
          <div>
            <Link to={"/Cart"}>
              <img src={Cart} width={30} rem alt="cart" />
            </Link>
            <CartCounting>{count}</CartCounting>
          </div>
        </Like>
      </SectionB>
      <SectionC>
        <Kategorie>
          <KategorieList>
            <span>
              <img src={List} width={30} rem alt="list" />
              카테고리
            </span>
          </KategorieList>
          <KategorieLists>
            <span>신상품</span>
          </KategorieLists>
          <KategorieLists>
            <span>베스트</span>
          </KategorieLists>
          <KategorieLists>
            <span>알뜰쇼핑</span>
          </KategorieLists>
          <KategorieLists>
            <span>특가/혜택</span>
          </KategorieLists>
          <li>
            <DeliveryIntroButton>
              <Highlight>샛별 · 택배</Highlight> 배송안내
            </DeliveryIntroButton>
          </li>
        </Kategorie>
      </SectionC>
      {/* </header> */}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SectionA = styled.section`
  display: flex;
`;

const SectionB = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionC = styled.section`
  display: flex;
`;
const Like = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 10rem;
`;
const Kategorie = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginList = styled.ul`
  display: flex;
  padding: 1rem 0 0 30rem;
  font-size: 0.5rem;
  color: #333;
`;

const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 1.8rem;
  border: 1px solid #5f0080;
  border-radius: 0.2rem;
`;

const HeaderSearchInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 12rem;
  height: 1.5rem;
  font-size: 0.8rem;
  outline: none;
`;

const HeaderSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  width: 25px;
  height: 25px;
`;
// KategorieListStyle 공통 스타일 설정
const KategorieListStyle = styled.li`
  padding: 1rem 3rem 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const KategorieList = styled(KategorieListStyle)`
  &:hover {
    color: #5f0080;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const KategorieLists = styled(KategorieListStyle)`
  &:hover {
    color: #5f0080;
    font-weight: bolder;
    cursor: pointer;
    text-decoration: underline;
  }
`;
const DeliveryIntroButton = styled.button`
  background-color: white;
  border: 0.5px solid lightgrey;
  border-radius: 0.8rem;
  font-size: 0.5rem;
  padding: 0.3rem 0.4rem;
  font-weight: bold;
  color: grey;
`;
const CartCounting = styled.span`
  background-color: #5f0080;
  color: #fff;
  width: 10px;
  height: 5px;
  padding: 2px;
  font-size: 0.5rem;
  border-radius: 10rem;
`;
const MarketOrBeauty = styled.div`
  padding: 0 2rem 0 0.8rem;
  font-size: 0.8rem;
  color: grey;
  font-weight: bold;
`;

const Highlight = styled.span`
  color: #5f0080;
  font-weight: bold;
`;

const NewImg = styled.img`
  padding-left: 2px;
  padding-bottom: 5px;
`;
