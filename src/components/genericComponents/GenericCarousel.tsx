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
  background: "rgba(217, 217, 217, 0.1)",
  borderRadius: "65px",
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
  padding: "80px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    gap: "20px",
  },
}));

const CarousalCardButton = styled(Button)(({ theme }) => ({
  width: "264px",
  padding: "10px 0px",
  fontSize: "16px",
  fontWeight: 900,
  color: "#2F91E0",
  lineHeight: "125%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CarousalCardSecondButton = styled(Button)(({ theme }) => ({
  width: "264px",
  fontSize: "22px",
  padding: "10px 0px",
  fontWeight: 500,
  color: "#4F84B7",
  lineHeight: "33px",
  textAlign: "center",
  letterSpacing: "0.05em",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CarousalCardContent = styled(Typography)(({ theme }) => ({
  width: "264px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#423D51",
  lineHeight: "150%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
  },
}));

const CarousalCardSubContent = styled(Typography)(({ theme }) => ({
  width: "372px",
  fontSize: "16px",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.36)",
  lineHeight: "24px",
  textAlign: "justify",
  letterSpacing: "0.05em",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
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
