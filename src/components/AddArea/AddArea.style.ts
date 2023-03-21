import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  padding: 10px;

  .image {
    margin-right: 5px;
    cursor: pointer;
  }

  input {
    border: 0px;
    background-color: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
