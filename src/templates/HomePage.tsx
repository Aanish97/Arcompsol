import GenericWrapper from "@/components/genericComponents/GenericWrapper";
import HomeHero from "@/components/heroComponents/HomeHero";
import MilestonesList from "@/components/lists/MilestonesList";
import { Typography, styled, Box } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import {
  AiAndMlImage,
  BigDataImage,
  DevOpsImage,
  MobileDevelopmentImage,
  UiUxDesignImage,
  WebDevelopmentImage,
} from "../../public/images";
import { theme } from "@/muiConfig/theme";
import { colors } from "@/styles/colors";
import FeedbackCarousel from "@/components/genericComponents/FeedbackCarousel";
import { FEEDBACK_LIST } from "@/components/lists/FeedbacksList";

const ServicesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 32px",
  background: colors.neutral100,
  borderRadius: "24px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    padding: "60px 24px",
    margin: "0 16px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "30px 30px",
    margin: "0px",
  },
}))

const ServicesTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "48px",
  marginBottom: "16px",
  color: colors.textPrimary,
  textAlign: "center",
  letterSpacing: "-0.01em",

  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

const ServicesDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "18px",
  marginBottom: "64px",
  maxWidth: "600px",
  textAlign: "center",
  color: colors.textSecondary,
  lineHeight: 1.6,

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    marginBottom: "48px",
  },
}));

const ServicesList = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "32px",
  maxWidth: "900px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px 24px",
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    borderRadius: "inherit",
    pointerEvents: "none",
  },
  
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    background: "rgba(255, 255, 255, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
}));

const ServiceIconWrapper = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  position: "relative",
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "18px",
  textAlign: "center",
  color: theme.palette.text.primary,
  lineHeight: 1.4,
}));

const BlogsCarousalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "80px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  backgroundColor: "#f8f9fa",

  [theme.breakpoints.down("md")]: {
    padding: "60px 24px",
    gap: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "48px 16px",
    gap: "24px",
  },
}));

const FeedbackCarousalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  backgroundColor: "white",

  [theme.breakpoints.down("md")]: {
    padding: "60px 24px",
    gap: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "48px 16px",
    gap: "24px",
  },
}));

const BlogsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "36px",
  textAlign: "center",
  letterSpacing: "-0.01em",
  lineHeight: 1.3,
  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const FeedbackTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "36px",
  lineHeight: 1.3,
  textAlign: "center",
  letterSpacing: "-0.01em",
  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const HomePage = () => {
  const SERVICES = [
    {
      image: WebDevelopmentImage,
      title: "Web Development",
      imageHeight: "163px",
      imageWidth: "162px",
    },
    {
      image: MobileDevelopmentImage,
      title: "Mobile Development",
      imageHeight: "162px",
      imageWidth: "303px",
    },
    {
      image: UiUxDesignImage,
      title: "UI/UX Design",
      imageHeight: "161px",
      imageWidth: "242.81px",
    },
    {
      image: AiAndMlImage,
      title: "AI and ML",
      imageHeight: "123px",
      imageWidth: "133px",
    },
    {
      image: BigDataImage,
      title: "Big Data",
      imageHeight: "188px",
      imageWidth: "169px",
    },
    {
      image: DevOpsImage,
      title: "DevOps",
      imageHeight: "190px",
      imageWidth: "246px",
    },
  ];

  return (
    <Fragment>
      <HomeHero />
      <GenericWrapper backgroundcolor={theme.palette.common.white}>
        <ServicesContainer id='services'>
          <ServicesTitle>Services we provide</ServicesTitle>
          <ServicesDescription>
            When it comes to design, our approach is simple: Everything is
            Human-centric, be it UI or UX
          </ServicesDescription>
          <ServicesList>
            {SERVICES.map((service, index) => (
              <ServiceCard key={`service ${index}`}>
                <ServiceIconWrapper>
                  <Image 
                    alt={service.title} 
                    src={service.image} 
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </ServiceIconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceCard>
            ))}
          </ServicesList>
        </ServicesContainer>
      </GenericWrapper>
      <MilestonesList
        titleColor={theme.palette.common.black}
        descColor={theme.palette.common.mortar}
        backgroundcolor={theme.palette.common.white}
        circleColor={theme.palette.common.black}
      />
      {/* <BlogsCarousalWrapper>
        <BlogsTitle>Latest Blogs</BlogsTitle>
        <BlogsCarousel carouselList={BLOGSLIST} />
      </BlogsCarousalWrapper> */}

      <FeedbackCarousalWrapper>
        <FeedbackTitle>Client Testimonials</FeedbackTitle>
        <FeedbackCarousel carouselList={FEEDBACK_LIST} />
      </FeedbackCarousalWrapper>
    </Fragment>
  );
};

export default HomePage;
