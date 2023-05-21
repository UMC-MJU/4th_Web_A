import React from "react";
import styled from "styled-components";
import SNS from "../images/sns.png";
import Cert from "../images/certification.png";
import "../styles/styles.css";

const Footer = () => {
  return (
    <Wrapper>
      <div className="wrap-row-flex">
        <HappyCustomerSection>
          <HappyCustomerLabel>고객행복센터</HappyCustomerLabel>
          <HappyCustomerNumber>
            1644-1107
            <HappyCustomerNumberSpan>
              월~토요일 오전 7시 - 오후 6시
            </HappyCustomerNumberSpan>
          </HappyCustomerNumber>
          <div className="wrap-row-flex">
            <ContactButton>카카오톡 문의</ContactButton>
            <ContactInfo>
              월~토요일 | 오전7시-오후6시
              <br />
              일/공휴일 | 오전 7시-오후1시
            </ContactInfo>
          </div>
          <div className="wrap-row-flex">
            <ContactButton>1:1 문의</ContactButton>
            <ContactInfo>
              365일
              <br />
              고객센터 운영시간에 순차적으로 답변드리겠습니다.
            </ContactInfo>
          </div>
          <div className="wrap-row-flex">
            <ContactButton>대량주문 문의</ContactButton>
            <ContactInfo>
              월~금요일 | 오전9시-오후6시
              <br />
              점심시간 | 낮 12시-오후1시
            </ContactInfo>
          </div>
        </HappyCustomerSection>

        <IntroduceSection>
          <ul>
            <li>컬리소개</li>
            <li>컬리소개영상</li>
            <li>투자정보</li>
            <li>인재채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <IntroduceInfo>
            법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 |
            사업자정보 확인
            <br />
            통신판매업 : 제 2018-서울강남-01646 호 | 개인정보보호책임자 : 이원준
            <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 :
            김슬아
            <br />
            입점문의 : <ContactLink href="#">입점문의하기</ContactLink> 제휴문의
            :
            <ContactLink href="mailto:business@kurlycorp.com">
              business@kurlycorp.com
            </ContactLink>
            <br />
            채용문의 :{" "}
            <ContactLink href="mailto:recruit@kurlycorp.com">
              recruit@kurlycorp.com
            </ContactLink>
            <br />
            팩스: 070 - 7500 - 6098
            <br />
            <SNSImage src={SNS} alt="SNS" />
          </IntroduceInfo>
        </IntroduceSection>
      </div>
      <CertificationSection>
        <CertificationImage src={Cert} alt="certification" />
      </CertificationSection>

      <CorpSection>
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
        마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
        당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
        책임을 부담하지 않습니다.
        <br />© KURLY CORP. ALL RIGHTS RESERVED
      </CorpSection>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  height: 586px;
  border-top: 1px solid rgb(238, 238, 238);
  margin: 1.5rem 0 0 0;

  .wrap-row-flex {
    display: flex;
    flex-direction: row;
  }
`;

const HappyCustomerSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3vh 0 0 0;
  margin: 1.5rem 0;
`;

const HappyCustomerLabel = styled.div`
  padding-bottom: 17px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;

const HappyCustomerNumber = styled.div`
  display: block;
  padding-bottom: 20px;
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
`;

const HappyCustomerNumberSpan = styled.span`
  margin-left: 8px;
  font-weight: normal;
  font-size: 16px;
`;

const ContactButton = styled.button`
  width: 140px;
  height: 40px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
  margin-right: 16px;
  margin-bottom: 16px;
  background-color: #fff;
`;

const ContactInfo = styled.p`
  font-size: 14px;
  margin-top: 2px;
  color: rgb(153, 153, 153);
  letter-spacing: -0.5px;
  line-height: 16.8px;
`;

const IntroduceSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6vh 0 0 0;

  ul {
    display: flex;
    flex-direction: row;
  }
`;

const IntroduceInfo = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgb(153, 153, 153);
  padding: 3vh 0 0 0;
  margin-bottom: 40px;
`;

const ContactLink = styled.a`
  color: #5f0080;
  font-weight: bold;
`;

const SNSImage = styled.img`
  width: 300px;
`;

const CertificationSection = styled.section`
  border-top: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: center;
`;

const CertificationImage = styled.img`
  width: 1500px;
`;

const CorpSection = styled.section`
  display: flex;
  padding: 20px 0px 30px;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  background-color: rgb(247, 247, 247);
  color: rgb(153, 153, 153);
  width: 100%;
  align-items: center;
  justify-content: center;
`;
