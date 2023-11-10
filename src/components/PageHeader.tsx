import React, { FC } from "react";
import styled from "styled-components";

interface PageHeaderProps {
    title?: string;
    desc?: string;
    noDot?: string;
    hideDecor?: boolean;
    preTitleSymbol?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, desc, noDot, hideDecor, preTitleSymbol = '/'}) => (
    <Header>
        {title && (
            <Heading aria-label={`${title}.`}>
                <span aria-hidden="true">
                    {!hideDecor && <span>{preTitleSymbol}</span>}
                    {title}
                    {!noDot && !hideDecor && <span>.</span>}
                </span>
            </Heading>
        )}
        {desc && (
            <p>{desc}</p>
        )}
    </Header>
)

export default PageHeader;

const Header = styled.header`
    position: relative;
    text-align: center;
    margin-top: 1.1em;
    margin-bottom: 3.5rem;

    @media (max-width: 650px) {
        :root:not([id^='work-']) h1 {
            display: none;
        }
    }
    
    > p {
        position: relative;
    }
`;

const Heading = styled.h1`
    user-select: none;
    font-size: 1.802em;

    > span > span {
        opacity: .7;
    }

`
