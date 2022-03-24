import React from "react";
import {
  HeroSection,
  HeroTitle,
  Imagen,
  HeroDesc,
  Button,
} from "../styles/styles.jsx";

const Hero = () => {
  return (
    <HeroSection>
      {/* <Imagen src="https://i.ibb.co/mDRQxhp/91254460.webp" alt=""/> */}
      <HeroTitle>Road Connect</HeroTitle>
      <HeroDesc>
        Enfatizados a la seguridad para montar bicicleta deportivamente, ayudando
        a los biciusuarios a conseguir compañía, ya sea con comunidad de
        personas que vivan cerca a su residencia o con planes establecidos con
        anticipación, además de la posibilidad de compartir tu ubicación en
        tiempo real a tus contactos.
      </HeroDesc>
      <Button>Empezar</Button>
    </HeroSection>
  );
};

export default Hero;
