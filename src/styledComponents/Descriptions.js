import styled from 'styled-components'
import { faintColor, secondaryColor } from '../utility/Theme'

export const Paragraph = styled.p`
    font-size: 1.35rem;
    margin-top:20px;
    color:${secondaryColor};
    @media (max-width: 600px) {
        font-size:1.25rem
    }
`;

export const Text = styled.span`
    font-size: 1.35rem;
    color:${secondaryColor};
    @media (max-width: 600px) {
        font-size:1.25rem
    }
`;

export const Ul = styled.ul`
    display:block;
    padding-left:0;
    color:${secondaryColor};
`;

export const Li = styled.li`
    font-size: 1.20rem;
    list-style-type:none;
    color:${secondaryColor};
    @media (max-width: 600px) {
        font-size:1.15rem
    }
`;

export const NavLi = styled.li`
    font-size: 1.35rem;
    list-style-type:none;
    color:${faintColor};
    @media (max-width: 600px) {
        font-size:1.15rem
    }
`;