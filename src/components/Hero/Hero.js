import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi! <br/> I'm Chris,<br/>
      Web Developer
    </SectionTitle>
    <SectionText>
      Front End Developer / CSS Expert
    </SectionText>
    <Button onClick={() => window.location = "https://docs.google.com/document/d/17gOiLylLV4PYGOSKBJqceWZs88y890e-aKR_nc6y6Gc/edit?usp=sharing"}>Hire Me</Button>
  </LeftSection>
</Section>
);

export default Hero;