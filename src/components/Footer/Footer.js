import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:361-742-1312'>361-742-1312</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:chris79kennard@gmail.com'>chris79kennard@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Life is to short to only fish on the weekends!</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/chris79kennard">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/christopher-kennard">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/c/KennutzEntertainment">
      <AiFillYoutube size="3rem"></AiFillYoutube>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
