import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  ul {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
    list-style: none;
    }
 ul li {
    background: #efeceb;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    }

`;