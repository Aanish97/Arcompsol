import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import { HomeHeroImage } from "../../../public/images";
import { theme } from "@/muiConfig/theme";
import { colors } from "@/styles/colors";
import GenericWrapper from "../genericComponents/GenericWrapper";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "120px 32px 80px",
  gap: "48px",
  minHeight: "80vh",
  
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 60px",
    gap: "32px",
    minHeight: "70vh",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 400,
  textAlign: "center",
  maxWidth: "500px",
  color: theme.palette.text.secondary,
  letterSpacing: "0.01em",
  lineHeight: 1.5,
  
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    maxWidth: "400px",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  fontWeight: 600,
  textAlign: "center",
  maxWidth: "800px",
  color: theme.palette.text.primary,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
    lineHeight: 1.2,
  },
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  height: "400px",
  position: "relative",
  borderRadius: "0",
  overflow: "visible",
  background: "transparent",

  [theme.breakpoints.down("md")]: {
    height: "300px",
    maxWidth: "500px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 400,
  textAlign: "center",
  maxWidth: "600px",
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    maxWidth: "500px",
  },
}));



const HomeHero = () => {
  return (
    <GenericWrapper backgroundcolor={theme.palette.common.white}>
      <Container>
        <Subtitle>Building products, services & everything in between</Subtitle>
        <MainHeading>Power Your Business with Innovation</MainHeading>
        <Description>
          We help brands make better decisions by delivering world-class, scalable solutions that drive growth and success.
        </Description>
        <ImageWrapper>
          <Image
            fill
            alt="Hero Image"
            src={HomeHeroImage}
            style={{ 
              objectFit: "contain",
              background: "transparent",
              mixBlendMode: "multiply"
            }}
          />
        </ImageWrapper>

      </Container>
    </GenericWrapper>
  );
};

export default HomeHero;
