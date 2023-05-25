import React, { useState } from 'react';
import styled from 'styled-components';
import IconDB_Logo from '../../assets/images/IconDB_Logo.svg';
import DRINKABLE_Logo from '../../assets/images/DRINKABLE_Logo.svg';

export default function Work() {
    const [isModalOpen, setIsModalOpen] = useState();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>02 </TitleColor>PORTFOLIO
                </Title>
            </TitleWrapper>
            <WorkContainer>
                <WorkWrapper>
                    <ItemWrapper>
                        <WorkItems src={IconDB_Logo} />
                        <ItemCaption onClick={openModal} />
                    </ItemWrapper>
                    <ItemWrapper>
                        <WorkItems background="#EDEAE3" src={DRINKABLE_Logo} />
                        <ItemCaption />
                    </ItemWrapper>
                </WorkWrapper>
            </WorkContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 350px;
    height: 1080px;
    display: grid;
    grid-template-rows: min-content;
    align-items: start;
`;


const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
`;

const Title = styled.h3`
    color: #FFFFFF;
    line-height: 1.3em;
    text-align: center;
    font-size: 42px;
`;

const TitleColor = styled.span`
    font-size: 42px;
    color: #939DAB;
`;

const WorkContainer = styled.div`
    display: grid;
    justify-items: center;
`;

const WorkWrapper = styled.div`
    width: 640px;
    height: 320px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
    cursor: pointer;
`;


const WorkItems = styled.img`
    width: 320px;
    height: 320px;
    transition: 0.4s ease 0s;
    transform: scale3d(1, 1, 1);

    background: ${(props) => (props.background || "#FFFFFF")};
`;

const ItemCaption = styled.div`
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    display: table;
    transition: 0.4s ease 0s;
`;

const ItemWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    border: none;
    cursor: pointer;

    &:hover ${ItemCaption}{
        background: rgba(0,0,0,0.3);
    }

    &:hover ${WorkItems}{
        transform: scale3d(1.1, 1.1, 1);
    }
`;