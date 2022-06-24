import styled from "styled-components";


const ContenedorCard = styled.div`
    max-width: 650px;
    max-height: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 25px auto;
    border: 1px solid #111;
    background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
    font-size: 20px;

    h3 {
        margin-bottom: 10px;
        display: block;
        width: 50%;
        height: max-content;
        color: #111;
        grid-column: span 1;
    }

    h4, p {
        margin-bottom: 10px;
        display: block;
        color: tomato;
        font-weight: bold;
        width: 50%;
    }

    article {
        grid-column: span 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }   

    @media (max-width: 450px){
        max-width: 450px;
        margin-top: 0;
        font-size: 16px;
    } 
    
`

const ContenedorImg = styled.div`
    width: 100%;
    height:250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #111;
    grid-column: span 2;

    img {
        width: 250px;
        height: 100%;
    }
`



export {ContenedorCard, ContenedorImg};