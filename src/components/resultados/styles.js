import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  ul {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 15px;
      list-style: none;
    }
  ul li {
      background: #efeceb;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      color: #000;
      display: flex;
      flex-direction: column;
    }
  ul li p {
    padding-left: 35px;
  }
  ul li th {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

`;