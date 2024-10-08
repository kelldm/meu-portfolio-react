import styled, { keyframes } from "styled-components";

export const SiteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding:1rem;
  
   
  @media screen and (min-width: 768px) {
    gap: 0;
    margin-left:3rem;
    padding:3rem;
  }

  @media screen and (min-width: 1440px) {
    margin-left:0;
  }
`;
export const Space = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
  padding: 3rem;
  padding-top: 12rem;
  padding-bottom: 20rem;
  margin-left: 1rem;
  color: #000;
  width: 100vw;
  height: 100wh;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  text-wrap: wrap;
  text-align: left;

  @media screen and (min-width: 768px) {
  padding-top: 10rem;
  margin-left: 0rem;
  width: 100vw;
  height: 100vh;
  }

  @media screen and (min-width: 1440px) {
  padding-top: 20rem;
  padding-bottom: 40rem;
  margin-left: 0rem;
  width: 80vw;
  height: 80vh;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  
  font-weight: 600;
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 3rem;

   @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const TechStackTitle = styled.h1`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: #2d2e32;

  @media screen and (min-width: 768px) {
  margin-top: 20rem;
  font-size: 35px;
  padding:2rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const TechStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    flex-wrap: wrap;

  svg {
    width:50px;
    height: 50px;
    color: #fc393a;
  }

  .item {
  padding: 3rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-around; 
    width: 100%;      
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc(50% - 8px); 
    margin-top:5rem;
    margin-bottom:20rem;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const MinhaFoto = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: left;
  padding-bottom:2.5rem;


  @media screen and (min-width: 768px) {
    padding-top: 0.5rem;
     justify-content: left;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 3rem;
    padding-left: 0.5rem;
    padding-bottom:5rem;

  }

  img {
    border-radius: 16px;
    width: 350px;
    filter: grayscale(100%); 
    transition: filter 1s ease-in-out;
    }

  img:hover {
    filter: grayscale(0);
  }

    @media screen and (min-width: 768px) {
      width: 300px;
    }

    @media screen and (min-width: 1440px) {
      width: 300px;
    }
  }
`;
export const float = keyframes` {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-25px);
  }

  100% {
    transform: translatey(0px);
  }
}`;
export const Gato = styled.div`
  animation: ${float} 2s infinite linear;
  }
`;

