import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../utility/Theme'

export const Header1 = styled.h1`
    font-size: 4rem;
    font-weight:bold;
    color:${secondaryColor};
    @media (max-width: 600px) {
        font-size:3.25rem
    }
`;

export const Header2 = styled.h1`
    font-size: 3rem;
    font-weight:bold;
    color:${secondaryColor};
    @media (max-width: 600px) {
        font-size:2.75rem
    }
`;

export const Header3 = styled.h1`
    font-size: 2.5rem;
    font-weight:bold;
    color:${primaryColor};
    @media (max-width: 600px) {
        font-size:2.45rem
    }
`;

export const Header4 = styled.h1`
    font-size: 2rem;
    font-weight:bold;
    color:${primaryColor};
    @media (max-width: 600px) {
        font-size:1.85rem
    }
`;

export const Header5 = styled.h1`
    font-size: 1.5rem;
    font-weight:bold;
    color:${primaryColor};
`;

export const Header6 = styled.h1`
    font-size: 1.25rem;
    font-weight:bold;
    color:${primaryColor};
`;