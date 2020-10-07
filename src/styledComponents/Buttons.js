import styled from 'styled-components'
import { faintColor, primaryColor, secondaryColor } from '../utility/Theme';

export const PrimaryButton = styled.button`
    font-size: 1.15rem;
    text-align: center;
    border-radius:5px;
    color: ${secondaryColor};
    background-color: ${primaryColor};
    padding-left:25px;
    padding-right:25px;
    padding-top:7.5px;
    padding-bottom:7.5px;
`;

export const Logo = styled.span`
    font-size: 1.8rem;
    text-align: center;
    display:flex;
    font-family:alice-regular;
    align-items:center;
    justify-content:center;
    border: 3px solid ${primaryColor};
    border-radius: 2rem;
    color: ${faintColor};
    height:3rem;
    width:3rem;
    box-shadow: 0 0 15px ${primaryColor};
`;