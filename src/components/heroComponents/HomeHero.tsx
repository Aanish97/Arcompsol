import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import { HomeHeroImage } from "../../../public/images";
import GenericWrapper from "../genericComponents/GenericWrapper";
import { theme } from "@/muiConfig/theme";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "75px 20px 100px",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 15px",
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "36px",
  lineHeight: "150%",
  textAlign: "center",
  maxWidth: "592px",
  marginBottom: "23px",
  color: theme.palette.common.dimGray,

  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    lineHeight: "130%",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  background:
    "linear-gradient(90deg, #26EFAE 1.08%, rgba(2, 40, 28, 0.99) 107.35%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparentont-weight",
  fontSize: "53px",
  lineHeight: "170%",
  textAlign: "center",
  maxWidth: "620px",
  marginBottom: "25px",
  fontWeight: 800,

  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    lineHeight: "130%",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "767px",
  height: "526px",

  [theme.breakpoints.down("md")]: {
    width: "90vw",
    height: "61.92vw",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "17px",
  textAlign: "center",
  maxWidth: "400px",
  marginBottom: "90px",
  color: theme.palette.common.black,

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginBottom: "50px",
  },
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  width: "187px",
  height: "58",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const HomeHero = () => {
  return (
    <GenericWrapper backgroundcolor={theme.palette.common.white}>
      <Container>
        <Title>Building products services & everything in between</Title>
        <Heading>Power Your Business </Heading>
        <ImageWrapper>
          <Image src={HomeHeroImage} alt="Arcompsol Home" fill />
        </ImageWrapper>
        <Description>
          We help brands make better marketing decisions by delivering
          world-class, scalable insights
        </Description>
        <GetStartedButton variant="primary">Get Started</GetStartedButton>
      </Container>
    </GenericWrapper>
  );
};

export default HomeHero;
