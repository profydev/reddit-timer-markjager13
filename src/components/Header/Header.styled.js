import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    height: 100px;
`;

export const StyledNavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 80px;
`;

export const StyledNavItem = styled.li`
    padding-left: 25px;
    margin-top: 15px;

    :first-child{
        width: 150px;
        padding: 0;
        margin-right: auto;
    }

    a {
        text-decoration: none;
    }

`;
