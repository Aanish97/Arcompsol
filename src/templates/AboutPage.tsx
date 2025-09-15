import {
  Typography,
  styled,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Title from "@/components/genericComponents/Title";
import Description from "@/components/genericComponents/Description";
import TitleBlue from "@/components/genericComponents/TitleBlue";
import DescriptionBlue from "@/components/genericComponents/DescriptionBlue";
import PexelsPhoto from "../../public/images/pexels-photo-by-sora-shimazaki.png";
import { VALUES } from "@/utils";
import MilestonesList from "@/components/lists/MilestonesList";
import { theme } from "@/muiConfig/theme";
import { colors } from "@/styles/colors";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "80px 40px 120px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%), url(${PexelsPhoto.src})`,
  textAlign: "center",
  gap: "32px",
  position: "relative",
  overflow: "hidden",
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${PexelsPhoto.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "brightness(1.1) contrast(1.05)",
    zIndex: -1,
  },
  
  [theme.breakpoints.down("md")]: {
    padding: "60px 24px 80px",
    gap: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 16px 60px",
    gap: "20px",
  },
}));



const WhoWeAreContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 40px 120px",
  backgroundColor: colors.backgroundSecondary,
  gap: "40px",
  textAlign: "center",

  [theme.breakpoints.down("lg")]: {
    padding: "60px 32px 80px",
    gap: "32px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "50px 24px 60px",
    gap: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "40px 16px 50px",
    gap: "24px",
  },
}));

const QualitiesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "32px",
  padding: "0",
  marginTop: "24px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "24px",
  },
}));

const StyledValueCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.backgroundPrimary} 0%, ${colors.neutral50} 100%)`,
  borderRadius: "16px",
  padding: "32px 24px",
  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.08)`,
  border: `1px solid ${colors.borderLight}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    background: colors.primaryGradient,
    borderRadius: "16px 16px 0 0",
  },
  
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 16px 48px rgba(0, 0, 0, 0.12)`,
    border: `1px solid ${colors.borderMedium}`,
  },
  
  [theme.breakpoints.down("md")]: {
    padding: "28px 20px",
    minHeight: "180px",
  },
  
  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
    minHeight: "160px",
  },
}));

const ValueCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.3,
  color: colors.textPrimary,
  marginBottom: "16px",
  letterSpacing: "-0.025em",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.125rem",
    marginBottom: "12px",
  },
}));

const ValueCardDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: colors.textSecondary,
  letterSpacing: "0.01em",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const AboutPage = () => {
  return (
    <>
      <Container>
        <Title title="About Us" />
        <Description desc="At Arcompsol, we believe in a flat hierarchy that is conducive for maximum growth for everyone working for us. If you are motivated by challenges and enjoy an environment that is dynamic, challenging and rewarding, we will always have a place for you." />
      </Container>
      
      <WhoWeAreContainer>
        <TitleBlue title="Who We Are" />
        <DescriptionBlue desc="Who we are is best described by what we value in our coworkers, and who we as individuals continually aspire to be. These personal attributes codify the most important traits we look for in future coworkers." />
        
        <QualitiesContainer>
          {VALUES.map((value, index) => (
            <StyledValueCard key={index}>
              <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
                <ValueCardTitle>
                  {value.heading}
                </ValueCardTitle>
                <ValueCardDescription>
                  {value.description}
                </ValueCardDescription>
              </CardContent>
            </StyledValueCard>
          ))}
        </QualitiesContainer>
      </WhoWeAreContainer>
      
      <MilestonesList
        titleColor={theme.palette.common.black}
        descColor={theme.palette.common.mortar}
        backgroundcolor={theme.palette.common.white}
        circleColor={theme.palette.common.black}
      />
    </>
  );
};

export default AboutPage;
