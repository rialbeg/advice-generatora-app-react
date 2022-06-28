import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;

  background: hsl(217, 19%, 24%);
  border-radius: 10px;

  position: relative;
`;

export const Content = styled.div`
  text-align: center;
  padding: 30px;

  h1.title {
    letter-spacing: 5px;
    color: hsl(150, 100%, 66%);
    font-size: 1.2rem;
  }
  p.quote {
    font-size: 2.3rem;
    margin-top: 2rem;
  }
  img.divider {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  div.dice {
    width: 5rem;
    height: 5rem;
    background: hsl(150, 100%, 66%);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -50px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      box-shadow: 0px 0px 50px 1px hsl(150, 100%, 66%);
      cursor: pointer;
    }
  }
  @media (max-width: 400px) {
    div.dice {
      bottom: -40px;
    }
  }
  @media (max-width: 300px) {
    div.dice {
      bottom: -30px;
    }
  }
`;
