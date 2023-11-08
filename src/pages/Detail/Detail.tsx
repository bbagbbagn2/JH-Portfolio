import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import { ReactComponent as ICONDBLogo } from "../../assets/images/IconDB/logo3.svg";
import { ReactComponent as DRINKABLELogo } from "../../assets/images/DRINKABLE/logo.svg";
import Main from '../../assets/images/IconDB/Main_Mobile.png';
import Posting from '../../assets/images/IconDB/Posting.PNG';
import Detail from '../../assets/images/IconDB/Detail_PNG.png';
import SignIn from '../../assets/images/IconDB/SignIn_Mobile.png';
import SignUp from '../../assets/images/IconDB/SignUp_Mobile.png';
import Profile from '../../assets/images/IconDB/Profile_Mine.png';
import About from '../../assets/images/Portfolio/About.PNG';
import Skills from '../../assets/images/Portfolio/Skills.PNG';
import Portfolio from '../../assets/images/Portfolio/Portfolio.PNG';
import Contact from '../../assets/images/Portfolio/Contact.PNG';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Work() {
    return (
        <>
        <Header />
        <MainPage>
            <PageHeader>
                <PageHeaderHeading>/project.</PageHeaderHeading>
                <PageHeaderParagraph>팀 & 개인 프로젝트 리스트</PageHeaderParagraph>
            </PageHeader>
            <WorkContainer>
                <ProjectList>
                    <ProjectItem>
                        <ProjectLogoBox to="/work/icondb">IconDb project summary.</ProjectLogoBox>
                        <ProjectLogoFigure>
                            <span><ICONDBLogo /></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>ICON_DB</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </ProjectItem>
                    <ProjectItem>
                    <ProjectLogoBox to="">DRINKABLE project summary.</ProjectLogoBox>
                        <ProjectLogoFigure>
                            <span><DRINKABLELogo /></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>DRINKABLE</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </ProjectItem>
                    <ProjectItem>
                    <ProjectLogoBox to="">Personal Website project summary.</ProjectLogoBox>
                        <ProjectLogoFigure>
                            <span></span>
                        </ProjectLogoFigure>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>Personal Website</ProjectInfoHeading>
                            <ProjectInfoLink to="https://pjh-portfolio.netlify.app/">Jihun's Portfolio</ProjectInfoLink>
                        </ProjectInfoBox>
                    </ProjectItem>
                        {/*<WorkPageBox>
                            <ProjectBox>
                                <ProjectTitleParagraph>포트폴리오 웹사이트</ProjectTitleParagraph>
                                <ProjectCol>
                                    <SliderBox>
                                        <CarouselProvider
                                            naturalSlideWidth={100}
                                            naturalSlideHeight={125}
                                            totalSlides={4}>
                                            <SliderImageBox>
                                                <Slider>
                                                    <Slide index={0}><SliderImage src={About} /></Slide>
                                                    <Slide index={1}><SliderImage src={Skills} /></Slide>
                                                    <Slide index={2}><SliderImage src={Portfolio} /></Slide>
                                                    <Slide index={3}><SliderImage src={Contact} /></Slide>
                                                </Slider>
                                            </SliderImageBox>
                                            <ButtonCol>
                                                <ButtonBack><BsArrowLeftCircle size="40" /></ButtonBack>
                                                <ButtonNext><BsArrowRightCircle size="40" /></ButtonNext>
                                            </ButtonCol>
                                        </CarouselProvider>
                                    </SliderBox>
                                    <DetailBox>
                                        <ProjectInfoBox>
                                            <b>포트폴리오 용도로 제작한 웹사이트</b>
                                            <span>
                                                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                                <br /><br />
                                                첫 개인 프로젝트로, <ExplanationSpan color='#ED3770'>순수 React</ExplanationSpan>로 개발을 완료하였습니다.
                                                후에 <ExplanationSpan color='#ED3770'>TypeScript</ExplanationSpan>로 프로젝트 <ExplanationSpan color='#ED3770'>리팩토링</ExplanationSpan>을 진행하였습니다.
                                                <br /><br />
                                                <ExplanationSpan color='#ED3770'>Styled-Components</ExplanationSpan>를 통해 진행한 프로젝트로,
                                                네이밍 및 스타일 컴포넌트와 공통 컴포넌트 간의 혼란을 줄이는 것에 집중하였습니다.
                                                이로 인해 <ExplanationSpan color='#ED3770'>네이밍</ExplanationSpan>에 대한 규칙을 알 수 있었고, <ExplanationSpan color='#ED3770'>S-Dot 방법</ExplanationSpan>을 이용해 스타일 컴포넌트와 공통 컴포넌트 간의 혼란을 줄일 수 있었습니다.
                                                <br /><br />
                                                또한, <ExplanationSpan color='#ED3770'>Netlify</ExplanationSpan>를 이용하여 웹사이트의 배포도 경함해볼 수 있었습니다.
                                            </span>
                                        </ProjectInfoBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>주요 기능</p>
                                            </ListTitleBox>
                                            <div>
                                                간단한 자기소개, 기술 스택, 프로젝트, 연락처
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>GitHub</p>
                                            </ListTitleBox>
                                            <div>
                                                <GithubLink href="https://github.com/bbagbbagn2/Portfolio">github.com/bbagbbagn2/JH Portfolio</GithubLink>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>URL</p>
                                            </ListTitleBox>
                                            <div>
                                                <GithubLink href="https://parkproject.netlify.app/">JH Portfolio</GithubLink>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>Frontend</p>
                                            </ListTitleBox>
                                            <div>
                                                <p>React, TypeScript, styled-components</p>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>Deployment</p>
                                            </ListTitleBox>
                                            <div>
                                                <p>Netlify</p>
                                            </div>
                                        </SummaryBox>
                                    </DetailBox>
                                </ProjectCol>
                            </ProjectBox>
    </WorkPageBox>*/}
                </ProjectList>
            </WorkContainer>
        </MainPage>
        </>
    );
}

const MainPage = styled.main`
    margin: 0 auto;
    padding: 0 3.5rem;
    max-width: 1280px;
    
    @media (min-width: 651px) {
        font-size: 18px;
    }
    
    @media (min-width: 1024px) {
        margin-top: calc(3.5rem * 1.2);
    }
`;

const PageHeader = styled.header`
    position: relative;
    margin-top: 1.1em;
    margin-bottom: 3.5rem;
    text-align: center;

`;

const PageHeaderHeading = styled.h1`
    margin: 0.67em 0;
    margin-bottom: 0;
    font-size: 1.802em;
    user-select: none;
`;

const PageHeaderParagraph = styled.p`
    position: relative;
    margin-bottom: 1.25em;
`;

const WorkContainer = styled.section``;

const ProjectList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProjectItem = styled.li`
    position: relative;
    flex-grow: 0;
    flex-shrink: 1;
    margin-bottom: 1.2rem;
    border: 1px solid transparent;
    border-radius: 0.2rem;
    background-color: #FFF;
    box-shadow: 0 8px 6px -6px rgba(235, 234, 242, 0.5);
    overflow: hidden;
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
    }

    @media (min-width: 940px) {
        flex-basis: calc((100% - 2em) / 3);
    }
`;

const ProjectLogoBox = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
    transition: none;
    background-color: transparent;
`;

const ProjectLogoFigure = styled.figure`
    margin: 0;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 244, 252, 0.62);
    transition: filter 0.3s;
`;
const WorkPageBox = styled.div`
    display: grid;
    justify-items: center;
`;

const ProjectBox = styled.div`
    margin-bottom: 32px;
    display: grid;
    justify-items: center;
    border: 1px solid transparent;
    border-radius: 20px;
`;

const SliderBox = styled.div` 
    width: 85%;
    position: relative;
    border-radius: 10px;

    @media (max-width: 1024px) {
        margin-bottom: 30px;
    }
`

const SliderImageBox = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
`;

const ButtonCol = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ProjectCol = styled.div`
    display: grid;

    @media (max-width: 1024px) {
        place-items: center;
        grid-template-columns: 1fr;
    }
`;

const ProjectTitleParagraph = styled.p`
    font-family: Black Han Sans;
    font-size: 2.5rem;
    color: #FFF;
`;

const ProjectSubTitleParagraph = styled.div`
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6C757D;
    opacity: .8;
`;

const DetailBox = styled.div`
    display: grid;
`;

const ProjectInfoBox = styled.div`
    padding: 2em;
`;

const ProjectInfoHeading = styled.h5`
    font-size: 1.125em;
`;

const ProjectInfoLink =styled(Link)`
    white-space: pre;
    color: #3c8fdd;
`;

const ExplanationSpan = styled.span<{ color?: string }>`
    color: ${props => props.color};
`;

const SummaryBox = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: center;
`;

const ListTitleBox = styled.div`
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
`;

const GithubLink = styled.a`
    color: #258DDB;
    word-break: break-all;
`