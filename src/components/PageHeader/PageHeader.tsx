import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

type PageHeaderProps = {
  title?: string;
  desc?: string;
};

export default function PageHeader({ desc, title }: PageHeaderProps) {
  return (
    <Container>
      <Heading title={title} />
      {desc && <p>{desc}</p>}
    </Container>
  );
}

const Container = styled.header`
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
