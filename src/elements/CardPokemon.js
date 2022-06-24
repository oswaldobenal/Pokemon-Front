import styled from "styled-components";

const PokemonCard = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
  margin: 25px;
  border: 3px solid #000;
  cursor: grab;
  transition: all 0.4s;

  &:hover {
    box-shadow: 10px 20px 30px #6d1f6d;
  }

  @media (max-width: 800px){
    grid-column: span 3;
    width: 90%;
    margin: 5%;
  }

  @media (max-width: 500px){
    grid-column: span 6;
    width: 90%;
    margin: 5%;
  }
`;

const CardHead = styled.article`
  width: 100%;
  height: 70%;
  border-bottom: 2px solid #111;

  img {
    width: 100%;
    height: 100%;
    transition: .6s ease-in-out;
    
    &:hover {
        transform: rotate(45deg);
    }
  }

`;

export { PokemonCard, CardHead };
