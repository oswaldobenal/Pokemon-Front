import styled from "styled-components";

const MainContainer = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const NavBarContainer = styled.nav`
  width: 100%;
  min-height: 100px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  a {
    color: #fff;
    &:visited {
      color: #fff;
    }
  }

  figure {
    width: 100px;
    height: 100px;
    /* margin-top: 20px; */
  }

  img {
    width: 100px;
    height: 100px;
    transition: all 0.6s;
  }

  button {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    border: 2px solid #fff;
    transition: 0.4s ease all;
    cursor: pointer;
    background: transparent;
  }

  button:hover {
    background-color: #fff;
    color: #000;

    a {
      color: #000;
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const BotonNav = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  border: 2px solid #fff;
  transition: 0.4s all;
  cursor: pointer;
  background: transparent;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #000;

    a {
      color: #000;
    }
  }

  @media (max-width: 800px) {
    margin: 5px;
    display: none;
  }
`;

const BotonMoviles = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  border: 2px solid #fff;
  transition: 0.4s all;
  cursor: pointer;
  background: transparent;
  outline: none;
  display: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  a {
    color: #fff;

    &:visited {
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    margin: 5px;
    display: block;
  }
`;

const FiltersContainer = styled.div`
  width: 100%;
  min-height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: center;
  /* background-color: bisque; */

  //estilos para el boton y los select
  button,
  select {
    height: 45px;
    line-height: 45px;
    width: 200px;
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease all;
    margin: 0 10px;
    text-align: center;
    outline: none;

    option {
      color: #1cb5e0;
    }

    &:hover {
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    select,
    button {
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    grid-column: span 2;
  }
`;

const PaginadoContainer = styled.div`
  min-width: max-content;
  max-width: max-content;
  max-height: 50px;
  line-height: 45px;
  border: 1px solid #1cb5e0;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px;
  padding: 0 40px;
  grid-column: span 3;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
    }
    button {
      width: 45px;
      height: 45px;
      background: transparent;
      font-weight: bold;
      color: #1cb5e0;
      line-height: 45px;
      border-radius: 50%;
      outline: none;
      border: 1px solid #1cb5e0;
      transition: 0.6s ease all;

      &:hover {
        background: #1cb5e0;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }
`;

const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export {
  FiltersContainer,
  PaginadoContainer,
  MainContainer,
  NavBarContainer,
  ContainerCards,
  BotonNav,
  BotonMoviles,
};
