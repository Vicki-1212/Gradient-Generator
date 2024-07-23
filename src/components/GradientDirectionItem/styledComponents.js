import styled from 'styled-components'

export const GradientList = styled.li`
    list-style-type: none;
`
export const GradientButton = styled.button`
    background-color:#ffffff;
    border:none;
    border-radius: 5px;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')};
    width:100px;
    height: 40px;
    margin-right: 20px;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    font-weight:bold;
    outline:none;
    cursor:pointer;
`
