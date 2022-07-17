import React from 'react';
import { StyledHeader, StyledNavList, StyledNavItem } from './Header.styled';
import { DEFAULT_SUBREDDIT } from '../../constants';

function Header() {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <StyledNavItem>
            <a href="/"><img alt="logo" src="logo.svg" /></a>
          </StyledNavItem>
          <StyledNavItem>
            <a href={`/search/${DEFAULT_SUBREDDIT}`}>Search</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="/#how-it-works">How it works</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="/#about">About</a>
          </StyledNavItem>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
}

export default Header;
