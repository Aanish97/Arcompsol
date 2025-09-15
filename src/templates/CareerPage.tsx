import { Typography, styled, Box, Button } from "@mui/material";
import PexelsPhoto from "../../public/images/pexels-photo-by-sora-shimazaki.png";
import { BENEFITS, QUALITIES } from "@/utils";
import { CURRENT_OPENINGS, JobOpening } from "@/components/lists/OpeningsList";
import JobCard from "@/components/genericComponents/JobCard";
import { colors } from "@/styles/colors";
import Divider from "@mui/material/Divider";
import Title from "@/components/genericComponents/Title";
import Description from "@/components/genericComponents/Description";
import TitleBlue from "@/components/genericComponents/TitleBlue";
import DescriptionBlue from "@/components/genericComponents/DescriptionBlue";
import GenericCard from "@/components/genericComponents/GenericCard";
import BenefitsCarousel from "@/components/genericComponents/GenericCarousel";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "1498px",
  height: "700px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.46) 52.66%, #FFFFFF 100%)",

  [theme.breakpoints.down("md")]: {
    width: "90vw",
    height: "61.92vw",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "75px 20px 100px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.46) 52.66%, #FFFFFF 100%), url(${PexelsPhoto.src})`,
  [theme.breakpoints.down("md")]: {
    padding: "30px 15px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  background:
    "linear-gradient(90deg, #1E2D44 1.08%, rgba(2, 40, 28, 0.99) 107.35%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparentont-weight",
  fontSize: "48px",
  lineHeight: "170%",
  textAlign: "center",
  maxWidth: "778px",
  marginBottom: "25px",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "130%",
  },
}));

const ExploreOpportunitiesButton = styled(Button)(({ theme }) => ({
  width: "268px",
  height: "58px",
  textTransform: "uppercase",
  fontSize: "16px",
  background: `linear-gradient(to right, #238464, #03432E, #238464)`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "42px",
  },
}));

const WantToWorkContainer = styled(Box)(({ theme }) => ({
  // minWidth: "calc(33.33% - 14px)",
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  flex: 1,
  justifyContent: "flex-end",
  padding: "40px 100px 100px",

  [theme.breakpoints.down("lg")]: {
    padding: "40px 50px 80px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "40px 15px",
  },
}));

const QualitiesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    padding: "30px 0px",
  },
}));

const OpeningsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  flex: 1,
  justifyContent: "flex-end",
  padding: "40px 100px 100px",
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    padding: "40px 50px 80px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "40px 15px",
  },
}));

const OpeningsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "225%",
  alignSelf: "left",
  maxWidth: "500px",
  marginBottom: "23px",
  background: `linear-gradient(to left, #4F84B7, #9DCDFB)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "0.37em",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "130%",
  },
}));

const JobCardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "32px",
  marginTop: "40px",
  marginBottom: "40px",
  
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
}));

const JobsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

const JobsSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: colors.textPrimary,
  marginBottom: "16px",
  textAlign: "center",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const OpeningsOuterWrappeer = styled(Box)(({ theme }) => ({
  boxShadow: "0px 4px 60px 10px rgba(0, 0, 0, 0.05)",
  padding: "100px",

  [theme.breakpoints.down("lg")]: {
    padding: "50px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "15px",
  },
}));

const BenefitsCarousalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  background:
    "radial-gradient(100% 100% at 49.59% 49.6%, #1F795C 100%, #95FFDC 100%)",

  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const BenefitsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "24px",
  textAlign: "left",
  letterSpacing: "0.37em",
  lineHeight: "54px",
  textTransform: "uppercase",
  marginLeft: "100px",
  color: theme.palette.common.white,
}));

const CareerPage = () => {
  const router = useRouter();


  useEffect(() => {
    if (router.query?.vision) {
      const elm = document.getElementById('work-with-us')
      if (elm) {
        elm?.scrollIntoView({
          behavior: 'smooth',
        })
        setTimeout(()=>{
          router.replace('/careers')

        }, 5000)
      }

    }
  }, [router.query?.vision]);


  return (
    <>
      <Container>
        <Title title="Careers At Arcompsol" />
        <Heading>Be a Part Of Something Great</Heading>
        <Description desc="At Arcompsol, we believe in a flat hierarchy that is conducive for maximum growth for everyone working for us. If you are motivated by challenges and enjoy an environment that is dynamic, challenging and rewarding, we will always have a place for you." />
        <ExploreOpportunitiesButton variant="primary"
        onClick={()=> {
          const elm = document.getElementById('openings')
          elm?.scrollIntoView(
            {
              behavior: 'smooth'
            }
          )
        }}>
          Explore Opportunities
        </ExploreOpportunitiesButton>
      </Container>
      <WantToWorkContainer id="work-with-us">
        <TitleBlue title="Want to work with us?" />

        <DescriptionBlue desc="You should have three qualities" />
        <QualitiesContainer>
          {QUALITIES.map((quality, index) => (
            <GenericCard
              key={index}
              title={quality.heading}
              content={quality.description}
              variant="elevated"
              size="medium"
            />
          ))}
        </QualitiesContainer>
      </WantToWorkContainer>
      <BenefitsCarousalWrapper>
        <BenefitsTitle>Benefits</BenefitsTitle>
        <BenefitsCarousel carouselList={BENEFITS} />
      </BenefitsCarousalWrapper>
      <OpeningsContainer id="openings">
        <OpeningsTitle>Current Openings</OpeningsTitle>
        <OpeningsOuterWrappeer>
          <JobsSection>
            <JobsSectionTitle>
              Join our team and work on exciting projects with cutting-edge technologies
            </JobsSectionTitle>
            <JobCardsGrid>
              {CURRENT_OPENINGS.map((job: JobOpening) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  team={job.team}
                  location={job.location}
                  description={job.description}
                  onApply={() => {
                    // Handle job application
                    console.log(`Applying for ${job.title}`);
                    // You can add navigation to application form or email functionality here
                  }}
                />
              ))}
            </JobCardsGrid>
          </JobsSection>
        </OpeningsOuterWrappeer>
      </OpeningsContainer>
    </>
  );
};

export default CareerPage;
