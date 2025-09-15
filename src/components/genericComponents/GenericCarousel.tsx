import { forwardRef, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Typography,
  IconButton,
  styled,
  Box,
  Card,
  Button,
} from "@mui/material";
import { LeftArrowIcon, RightArrowIcon } from "../icons/CarousalArrows";
import Avatar from "@mui/material/Avatar";
import VectorImg from "../../../public/images/vector.png";
import { colors } from "@/styles/colors";

interface BlogPost {
  heading?: string;
  label?: string;
  description?: string;
  benefit?: string;
}

interface CarouselProps {
  carouselList: BlogPost[];
}

interface IconButtonProps {
  backgroundcolor: string;
  backgroundcolorhover: string;
}

const CarousalArrowWrapper = styled(IconButton)<IconButtonProps>(
  ({ backgroundcolor, backgroundcolorhover, theme }) => ({
    backgroundcolor: `${backgroundcolor}`,
    "&:hover": {
      backgroundcolor: `${backgroundcolorhover}`,
    },
  })
);

const ArrowsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
}));

const CarousalWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    flexDirection: "column",
  },
}));

const BlogsCarousalCardWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${colors.backgroundSecondary} 0%, ${colors.backgroundPrimary} 100%)`,
  borderRadius: "24px",
  border: `1px solid ${colors.borderLight}`,
  boxShadow: `0 8px 32px -4px rgba(0, 0, 0, 0.15)`,
}));

const BlogsCarousal = styled(Carousel)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
  },
}));

const CardCarousel = styled(Card)(({ theme }) => ({
  padding: "48px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  background: `linear-gradient(135deg, ${colors.backgroundPrimary} 0%, ${colors.backgroundSecondary} 100%)`,
  border: `1px solid ${colors.borderLight}`,
  boxShadow: `0 12px 24px -4px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)`,
  },

  [theme.breakpoints.down("sm")]: {
    padding: "32px 24px",
    gap: "16px",
  },
}));

const CarousalCardButton = styled(Button)(({ theme }) => ({
  width: "264px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 600,
  background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  color: colors.backgroundPrimary,
  lineHeight: "125%",
  borderRadius: "8px",
  border: "none",
  textTransform: "none",
  transition: "all 0.3s ease",
  
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primaryBlue} 100%)`,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 16px -4px rgba(0, 0, 0, 0.15)`,
  },
  
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CarousalCardSecondButton = styled(Button)(({ theme }) => ({
  width: "264px",
  fontSize: "18px",
  padding: "12px 24px",
  fontWeight: 600,
  background: "transparent",
  color: colors.primaryBlue,
  lineHeight: "1.4",
  textAlign: "center",
  letterSpacing: "0.025em",
  border: `2px solid ${colors.primaryBlue}`,
  borderRadius: "8px",
  textTransform: "none",
  transition: "all 0.3s ease",
  
  "&:hover": {
    background: colors.primaryBlue,
    color: colors.backgroundPrimary,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 16px -4px rgba(0, 0, 0, 0.15)`,
  },
  
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "16px",
  },
}));

const CarousalCardContent = styled(Typography)(({ theme }) => ({
  width: "100%",
  maxWidth: "280px",
  fontSize: "20px",
  fontWeight: 700,
  background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: "1.4",
  textAlign: "center",
  marginBottom: "8px",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    maxWidth: "100%",
  },
}));

const CarousalCardSubContent = styled(Typography)(({ theme }) => ({
  width: "100%",
  maxWidth: "320px",
  fontSize: "16px",
  fontWeight: 400,
  color: colors.textSecondary,
  lineHeight: "1.6",
  textAlign: "center",
  letterSpacing: "0.01em",
  marginBottom: "16px",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    maxWidth: "100%",
  },
}));

const GenericCarousel = ({ carouselList }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleNextClick = () => {
    setActiveIndex(
      activeIndex === carouselList.length - 1 ? 0 : activeIndex + 1
    );
  };

  const handlePrevClick = () => {
    setActiveIndex(
      activeIndex === 0 ? carouselList.length - 1 : activeIndex - 1
    );
  };

  const handleCarouselChange = (now?: number, previous?: number) => {};

  const items = carouselList.map((listItem, index) => {
    // Render two blog posts side by side
    const nextIndex = (index + 1) % carouselList.length;
    const nextListItem = carouselList[nextIndex];
    return (
      <CarousalWrapper key={index}>
        <BlogsCarousalCardWrapper>
          <CardCarousel>
            <Avatar alt="Rounded Image" src={VectorImg.src}></Avatar>
            {listItem.heading && (
              <CarousalCardContent>{listItem.heading}</CarousalCardContent>
            )}
            {listItem.description && (
              <CarousalCardSubContent>
                {listItem.description}
              </CarousalCardSubContent>
            )}
            {listItem.label && (
              <CarousalCardButton variant="outlined">
                {listItem.label}
              </CarousalCardButton>
            )}
            {listItem.benefit && (
              <CarousalCardSecondButton variant="outlined">
                {listItem.benefit}
              </CarousalCardSecondButton>
            )}
          </CardCarousel>
        </BlogsCarousalCardWrapper>
        <BlogsCarousalCardWrapper>
          {nextListItem && (
            <CardCarousel>
              <Avatar alt="Rounded Image" src={VectorImg.src}></Avatar>
              {nextListItem.heading && (
                <CarousalCardContent>
                  {nextListItem.heading}
                </CarousalCardContent>
              )}
              {nextListItem.description && (
                <CarousalCardSubContent>
                  {nextListItem.description}
                </CarousalCardSubContent>
              )}
              {nextListItem.label && (
                <CarousalCardButton variant="outlined">
                  {nextListItem.label}
                </CarousalCardButton>
              )}
              {nextListItem.benefit && (
                <CarousalCardSecondButton variant="outlined">
                  {nextListItem.benefit}
                </CarousalCardSecondButton>
              )}
            </CardCarousel>
          )}
        </BlogsCarousalCardWrapper>
      </CarousalWrapper>
    );
  });

  return (
    <>
      <BlogsCarousal
        animation="fade"
        indicators={false}
        index={activeIndex}
        autoPlay={false}
        onChange={handleCarouselChange}
      >
        {items}
      </BlogsCarousal>
      <ArrowsWrapper>
        <CarousalArrowWrapper
          backgroundcolor="white"
          backgroundcolorhover="#f5f5f5"
          onClick={handlePrevClick}
        >
          <LeftArrowIcon />
        </CarousalArrowWrapper>
        <CarousalArrowWrapper
          backgroundcolor="#0395CE"
          backgroundcolorhover="#2196f3"
          onClick={handleNextClick}
        >
          <RightArrowIcon />
        </CarousalArrowWrapper>
      </ArrowsWrapper>
    </>
  );
};

export default GenericCarousel;
