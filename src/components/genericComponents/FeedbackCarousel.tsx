import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Typography,
  IconButton,
  styled,
  Box,
  Card,
  Button,
  Link,
} from "@mui/material";
import { WhiteLeftArrowIcon, RightArrowIcon } from "../icons/CarousalArrows";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";


interface BlogPost {
  heading?: string;
  label?: string;
  description?: string;
  benefit?: string;
}

interface CarouselProps {
  carouselList: any[];
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
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  
  "&:nth-of-type(2)": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const BlogsCarousal = styled(Carousel)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  justifyContent: "center",
  height: "100% !important",
}));

const CardCarousel = styled(Card)(({ theme }) => ({
  width: "100%",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "10px",
  padding: "30px 21px",
  minHeight: "280px",
  height: "100%",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
    minHeight: "250px",
  },
}));

const CarousalCardButton = styled(Button)(({ theme }) => ({
  width: "264px",
  padding: "10px 0px",
  fontSize: "14px",
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
  display: "block",
  visibility: "visible",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CarousalCardContent = styled(Typography)(({ theme }) => ({
  width: "264px",
  fontSize: "10px",
  fontWeight: 600,
  color: "#423D51",
  lineHeight: "150%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
  },
}));

const ImageNameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const Name = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#011736",
  fontFamily: "inherit",
  margin: 0,
}));

const FeedbackCarousel = ({ carouselList }: CarouselProps) => {
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
            <ImageNameContainer>
              <Avatar>
                <Image alt="Client Image" src={listItem.avatar} fill />
              </Avatar>
              <Box>
              <Link sx={{textDecoration: 'none'}}>
                
              <Name>{listItem?.name}</Name>
              </Link>
              <Link sx={{textDecoration: 'none', color: '#1b1b1c'}}>

              <Typography sx={{fontSize: "16px", fontWeight: '500'}}>{listItem?.organiztion}</Typography>
              </Link>
              </Box>
            </ImageNameContainer>
            <Typography sx={{fontSize: "16px", fontWeight: '500'}}>{listItem.text}</Typography>
          </CardCarousel>
        </BlogsCarousalCardWrapper>
        <BlogsCarousalCardWrapper>
          {nextListItem && (
            <CardCarousel>
              <ImageNameContainer>
                <Avatar>
                  <Image alt="Client Image" src={nextListItem?.avatar} fill />
                </Avatar>
                <Box>
                  <Link sx={{textDecoration: 'none'}}>
                    <Name>{nextListItem?.name}</Name>
                  </Link>
                  <Link sx={{textDecoration: 'none' , color: '#1b1b1c'}}>

                  <Typography  sx={{fontSize: "16px", fontWeight: '500'}}>{nextListItem?.organiztion}</Typography>
                  </Link>
                </Box>
              </ImageNameContainer>

              <Typography  sx={{fontSize: "16px", fontWeight: '500'}}>{nextListItem.text}</Typography>
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
        autoPlay={true}
        interval={5000}
        onChange={handleCarouselChange}
      >
        {items}
      </BlogsCarousal>
      <ArrowsWrapper>
        <CarousalArrowWrapper
          backgroundcolor="#0E184B"
          backgroundcolorhover="#0E184B"
          onClick={handlePrevClick}
        >
          <WhiteLeftArrowIcon />
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

export default FeedbackCarousel;
