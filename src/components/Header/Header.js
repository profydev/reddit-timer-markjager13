import React from 'react';
import { StyledHeader, StyledNavList, StyledNavItem } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <StyledNavItem>
            <a href="/"><img alt="logo" src="logo.png" /></a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="/search">Search</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="/">How it works</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="/">About</a>
          </StyledNavItem>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
}

export default Header;
