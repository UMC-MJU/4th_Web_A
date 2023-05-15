import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const data = {
  art: {
    title: '뮤지컬/연극',
    h1: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/04/202304101723230a61e7e3-e197-4e79-a28e-da4f7c40caa0.jpg" alt="이미지" />,
    h1_t:'뮤지컬 〈더 테일 에이프릴 풀스〉',
    h1_c:'멜론티켓 1열보유',
    h2: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/03/2023033014002648bdd334-ffac-4b04-b1b0-4df9b85d2166.png" alt="이미지" />,
    h2_t:'뮤지컬 〈베토벤；Beethoven Secret〉 SEASON 2',
    h2_c:'멜론티켓 1열보유',
    h3: <img src="https://cdnticket.melon.co.kr/resource/image/upload/marketing/2023/03/20230307100434920d96d9-7c63-4ff7-9a9d-1899984cfb86.png" alt="이미지" />,
    h3_t:'패밀리 서커스 〈이상한 나라의 앨리스〉 오리지널 내한공연',
    h3_c:'멜론티켓 1열보유',
    h4: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/03/202303081047409156a88d-c15d-43f3-a265-27427d9b00dd.jpg" alt="이미지" />,
    h4_t:'뮤지컬 〈라흐마니노프〉－부산',
    h4_c:'멜론티켓 1열보유'
  },
  classic: {
    title: '클래식',
    h1: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/04/2023041310434505815236-fba4-47d3-9a9e-77b7960b89c7.jpg/melon/resize/180x250/strip/true" alt="이미지" />,
    h1_t:'Colour of Geomungo 거문고의 빛깔2',
    h1_c:'멜론티켓 1열보유',
    h2: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/04/2023041009150843e5b1c3-72a3-43b6-82ac-389709aca199.png/melon/resize/180x250/strip/true" alt="이미지" />,
    h2_t:'일무',
    h2_c:'멜론티켓 1열보유',
    h3: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/04/202304101439127ae28d14-b389-4dad-bf99-893761f70cac.jpg/melon/resize/180x254/strip/true/quality/90/optimize" alt="이미지" />,
    h3_t:'176회 정기연주',
    h3_c:'멜론티켓 1열보유',
    h4: <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2023/02/202302061401150cff4966-9637-45f5-beb2-0683efad529c.jpg/melon/resize/180x254/strip/true/quality/90/optimize" alt="이미지" />,
    h4_t:'헨델，메시아',
    h4_c:'멜론티켓 1열보유'
  }
};

const Concert = () => {
  const params = useParams();
  const concert = data[params.usertitle];

  return (
    <div>
      {concert ? (
        <div className='Concert_highlight'>
          <h2>{concert.title}</h2>
          <ul className='Highlight_list'>
            <li>
              {concert.h1}
              <div className='Highlight_Info'>
                <div className='Highlight_title'>{concert.h1_t}</div>
                <div className='Highlight_content'>{concert.h1_c}</div>
              </div>
            </li>
            <li>
              {concert.h2}
              <div className='Highlight_Info'>
                <div className='Highlight_title'>{concert.h2_t}</div>
                <div className='Highlight_content'>{concert.h2_c}</div>
              </div>
            </li>
            <li>
              {concert.h3}
              <div className='Highlight_Info'>
                <div className='Highlight_title'>{concert.h3_t}</div>
                <div className='Highlight_content'>{concert.h3_c}</div>
              </div>
            </li>
            <li>
              {concert.h4}
              <div className='Highlight_Info'>
                <div className='Highlight_title'>{concert.h1_t}</div>
                <div className='Highlight_content'>{concert.h1_c}</div>
              </div>  
            </li>
          </ul>
        </div>
      ) : (
        <p>존재하지 않는 경로입니다.</p>
      )}
    </div>
  );
};

export default Concert;