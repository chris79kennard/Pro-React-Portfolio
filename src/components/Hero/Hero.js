import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi, <br/> I'm Chris,<br/>
      web developer
    </SectionTitle>
    <SectionText>
      i wanna be the very best like no one ever was, to catch em all is my main quest to train them is my causeeeee
    </SectionText>
    <Button onClick={() => window.location = "https://docs.google.com/document/d/17gOiLylLV4PYGOSKBJqceWZs88y890e-aKR_nc6y6Gc/edit?usp=sharing"}>Click for Resume</Button>
  </LeftSection>
</Section>
);

export default Hero;