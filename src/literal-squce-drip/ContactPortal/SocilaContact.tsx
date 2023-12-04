import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

export default function SocialContact() {
    return (
        <StyledSocialContact>
                <NavItem href="https://github.com/bbagbbagn2" external>GitHub</NavItem>
        </StyledSocialContact>
    );
};

const StyledSocialContact = styled.ul`
    position: relative;

    @media (max-width: 460px) {
        display: none;
    }
    
    li {
        display: inline-block;

        &:not(:last-of-type) {
            margin-right: 2.5em;
        }
    }

    a {
        color: currentColor;
    }
`;