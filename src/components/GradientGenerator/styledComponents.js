import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(${props => props.gradientValue});
    height: 100vh;
`
export const Heading = styled.h1`
    color:#ededed;
    font-family:"Roboto";
    font-size: 30px;
    text-align:center;
    font-weight:bold;
`
export const Paragraph = styled.p`
    color:#ffffff79;
    font-family:"Roboto";
    font-size: 20px;
    text-align:center;
    font-weight:bold;
`

export const DirectionConatiner = styled.ul`
    padding: 0px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 500px;
    align-items:center;
`

export const ColorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Label = styled.p`
    color:#ededed;
    font-family:"Roboto";
    font-size:18px;
    font-weight:bold;
    margin-bottom: 15px;
`

export const ColorInput = styled.input`
    width: 100px;
    height: 50px;
    background-color:transparent;
    border:none;
    cursor:pointer;
    outline:none;
`

export const GenerateButton = styled.button`
    background-color:#00c9b7;
    color:#1e293b;
    font-weight:bold;
    font-family:"Roboto";
    width: 150px;
    height: 50px;
    border:none;
    font-size: 16px;
    margin-top:30px;
    cursor:pointer;
    outline:none;
`
