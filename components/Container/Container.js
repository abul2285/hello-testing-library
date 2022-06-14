import React from 'react';
import styled from 'styled-components';

const ContainerStc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  div {
    max-width: 500px;
  }
`;

const Container = ({ children }) => {
  return (
    <ContainerStc>
      <div>{children}</div>
    </ContainerStc>
  );
};

export default Container;
