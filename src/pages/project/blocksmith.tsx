import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from './Layout.tsx';
import Footer from '../Footer/Footer.tsx';
import screen1 from "./work-images/icondb/screen1.png";
import screen2 from "./work-images/icondb/screen2.png";
import screen3 from "./work-images/icondb/screen3.png";
import screen4 from "./work-images/icondb/screen4.png";


export default function Icondb() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 3000
    };

    const images = [
        { src: screen1, alt: "Icondb: Screen 1." },
        { src: screen2, alt: "Icondb: Screen 2." },
        { src: screen3, alt: "Icondb: Screen 3." },
        { src: screen4, alt: "Icondb: Screen 4." }
    ]

    return (
        <>
            <Layout>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                                <SliderImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </Slider>
                <PostContainer>
                    <PostParagraph>ICON_DB는 아이콘을 사용하려는 사람들을 위한 무료 배포 플랫폼입니다. 저희는 기존 웹사이트와의 차별점을 두었습니다.</PostParagraph>
                    <PostParagraph>기존의 웹사이트와는 달리 ICOn_DB는 svg 파일을 이용해 즉석으로 아이콘을 변경할 수 있는 기능을 구축하였습니다.</PostParagraph>
                    <PostParagraph>프로젝트의 디자인은 아이콘 무료 배포 목적에에 맞도록 아이콘 리스트들을 크게 보이도록 디자인 하였습니다.</PostParagraph>
                    <PostParagraph>
                        전체적인 웹사이트의 UI를 디자인하고, 소셜 로그인 및 다운로드 & 업로드 기능을 axios를 통하여 백엔드와의 연결을 구축하였습니다.
                        성능과 효율성에 주의를 기울이면서 해당 기능을 구현하는 것은 시간이 걸렸습니다.
                        팀원과의 일정 조율 및 완성도에 관한 약간의 갈등이 있었지만, 충분한 대화를 통해 해결할 수 있었습니다. 결국, 저희는 안정적이고 완성도 있는 프로젝트를 개발할 수 있었습니다.
                    </PostParagraph>
                    <PostParagraph>해당 프로젝트는 HTML, CSS, JavaScript, React, style-components, Node.js, express, MySQL, AWS 등과 같은 여러 기술을 사용하였습니다.
                        저는 디자인부터 기획 및 구현에 이르기까지 다양한 부분에서 작업할 수 있는 경험을 얻었습니다.
                    </PostParagraph>
                    <PostParagraph>React와 JavaScript를 활용한 첫 프로젝트였기 때문에 해당 기술에 대해 많은 공부를 하였고 많은 피드백을 얻었습니다.</PostParagraph>
                </PostContainer>
            </Layout>
            <Footer />
        </>
    );
}

const SliderImage = styled.img`
    width: auto;
    max-width: 100%;
    height: auto;
    user-select: none;
    border-style: none;
    cursor: pointer;
`;

const PreviousButton = styled.button`
    padding: 8px;
    margin-right: -8px;
    position: absolute;
    top: 50%;
    border: none;
    background-color: transparent;
    color: #000;
    outline: none;
    font-size: 100%;
    font-family: "system";
    text-decoration: none;
    appearance: none;
    transform: translateX(-100%) translateY(-50%);
    cursor: pointer;
`;

const NextButton = styled(PreviousButton)`
    margin-left: 0;
    margin-right: -8px;
    right: 0;
    transform: translateX(100%) translateY(-50%);
`;
const PostContainer = styled.div`
    margin: 0 auto;
    margin-top: 3em;
    position: relative;
    max-width: 940px;
`;

const PostParagraph = styled.p`
    margin-bottom: 1.25em;
    color: #474747;
    line-height: normal;
`;

