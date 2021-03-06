import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <DiCssdeck size="6rem" /> <Span>Christopher Kennard</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li> <li>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/chris79kennard">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/christopher-kennard">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/c/KennutzEntertainment">
        <AiFillYoutube size="3rem"></AiFillYoutube>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
