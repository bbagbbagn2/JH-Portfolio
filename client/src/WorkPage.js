import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Activity() {
    return (<>
        <Header>
            <HeaderMessage to='/'>HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='#'>CONTACT</HeaderMessage>
        </Header>
        <Page>
        <WorkPage>
            <Container href="#">
                <Gradient/>
            <D>
                <FFF>
                    <DevDate>June 2022</DevDate>
                    <DevTitle>IconDB</DevTitle>
                </FFF>
                <Description>
                    <A>
                        <Des>사용자의 목적에 가장 알맞는 아이콘을 무료 제작및 배포할 수 있는 반응형 웹사이트입니다.</Des>
                    </A>
                </Description>
                <Topic>
                    <Tags>Website</Tags>
                </Topic>
            </D>
            </Container>
        </WorkPage>
        </Page>
    </>
    )
}
const Tags = styled.span`
    box-sizing: border-box;
    
    font-size: 12px;
    line-height: 16px;
`;
const Topic = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;

    border-bottom-width: 1px;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Des = styled.p`
box-sizing: border-box;
margin-top: 1rem;
max-width: 65ch;

transition-duration: 0.5s;
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

margin-block-end: 0px;
margin-block-start: 16px;
margin-inline-end: 0px;
margin-inline-start: 0px;
transform: matrix(1, 0, 0, 1, 0, 48);

`;
const Description = styled.div`
    bottom: 25vh;
    box-sizing: border-box;
    position: absolute;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: matrix(1, 0, 0, 1, 0, -64);

`;
const A = styled.div`   
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: matrix(1, 0, 0, 1, 0, 48);
`;


const DevDate = styled.span`
    box-sizing: border-box;
    max-width: 65ch;

    font-size: 16px;
`;

const DevTitle = styled.h4`
    box-sizing: border-box;
    margin-bottom: 1.25rem;
    margin-top: 0.25rem;
    
    font-size: 36px;
    font-weight: 700;
    line-heigth: 2.5rem;

    margin-block-end: 20px;
    margin-block-start: 4px;
    margin-inline-end: 0;
    margin-inline-start: 0;
    

`;
const Header = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    
    display: grid;
    grid-template-columns: repeat(4,10%);
    place-items: center;
    place-content: center;

    background: #042940;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    color: white;
    transition-duration: 0.5s;
    &:hover{
        color: orange;
    }
`;
const Page= styled.div`
    box-sizing: border-box;
    display: flex;
    height:100%;
    visibility: visible;
    
    line-height: 24px;
    tab-size: 4;
    text-size-adjust: 100%;

    color: rgb(255, 254, 250);

    backface-visibility: hidden;

`;
const WorkPage = styled.div`
    box-sizing: border-box;
    display: list-item;
    flex-shrink: 0;
    height: 100vh; 
    position: relative;
    visibility: visible;
    width: 100%;

    line-height: 24px;
    tab-size: 4;
    text-align: left;
    text-size-adjust: 100%;

    color: rgb(255, 254, 250);

    backface-visibility: hidden;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    padding-inline-start: 0;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-style: preserve-3d;
`;

const Container = styled.a`
    box-sizing: border-box;
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;

    color: rgb(255, 254, 250);
    cusrsor: pointer;
`;

const Gradient = styled.div`
    box-sizing: boreder-box;
    height: 100%;
    position: absolute;
    right: 0px;
    width: 100%;

    background-image: linear-gradient(to top, rgb(15, 25, 34), rgba(15, 25, 34, 0));
`;

const D = styled.div`
    bottom: 0;
    box-sizing: border-box;
    max-width: 92vw;
    padding-bottom: 24vh;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 24vh;
    position: absolute;
    width: 100%;
    z-index: 10;
`;

const FFF = styled.div`
    box-sizing: border-box;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;