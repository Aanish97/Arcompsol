import { Box, styled, Typography } from "@mui/material";
import GenericWrapper from "../genericComponents/GenericWrapper";
import CirclesSquare from "../icons/CirclesSquare";
import MilestoneFlag from "../icons/MilestoneFlag";
import { colors } from "@/styles/colors";

interface MileStoneProps {
  titleColor: String;
  descColor: String;
  backgroundcolor: String;
  circleColor: String;
}

interface ListComponentsProps {
  iseven?: string;
  milestonecolor?: String;
}

interface ColorProps {
  milestonecolor: String;
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  padding: "100px 32px",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    padding: "80px 24px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "40px 40px",
  },
}));

const Title = styled(Typography)<ColorProps>(({ theme, milestonecolor }) => ({
  fontSize: "48px",
  fontWeight: 600,
  color: `${milestonecolor}`,
  margin: "0 auto 24px",
  textAlign: "center",
  letterSpacing: "-0.02em",

  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

const Description = styled(Typography)<ColorProps>(
  ({ theme, milestonecolor }) => ({
    fontSize: "18px",
    fontWeight: 400,
    color: `${milestonecolor}`,
    margin: "0 auto 80px",
    maxWidth: "700px",
    textAlign: "center",
    lineHeight: 1.6,
    opacity: 0.9,

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      margin: "0 auto 60px",
    },
  })
);

const ListWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "24px",
  alignItems: "start",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
}));

const ListItemWrapper = styled(Box)<ListComponentsProps>(
  ({ theme }) => ({
    width: "100%",
    height: "310px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "24px",
    background: "linear-gradient(135deg, rgba(56, 176, 137, 0.08) 0%, rgba(3, 67, 46, 0.05) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "16px",
    border: `1px solid rgba(56, 176, 137, 0.2)`,
    boxShadow: "0 4px 20px rgba(56, 176, 137, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(56, 176, 137, 0.05) 0%, rgba(3, 67, 46, 0.02) 100%)",
      borderRadius: "inherit",
      pointerEvents: "none",
    },

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 30px rgba(56, 176, 137, 0.15)",
      background: "linear-gradient(135deg, rgba(56, 176, 137, 0.12) 0%, rgba(3, 67, 46, 0.08) 100%)",
      borderColor: "rgba(56, 176, 137, 0.3)",
    },

    [theme.breakpoints.down("md")]: {
      padding: "20px",
      height: "290px",
    },

    [theme.breakpoints.down("sm")]: {
      height: "270px",
    },
  })
);

const ListItemIntroContainer = styled(Box)<ListComponentsProps>(
  ({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: 1,
    height: "100%",
  })
);

const ListItemHeading = styled(Typography)<ListComponentsProps>(
  ({ theme, milestonecolor }) => ({
    fontSize: "20px",
    fontWeight: 600,
    color: colors.textPrimary,
    textAlign: "center",
    letterSpacing: "-0.01em",
    marginBottom: "8px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  })
);

const ListItemDescription = styled(Typography)<ListComponentsProps>(
  ({ theme, milestonecolor }) => ({
    fontSize: "14px",
    fontWeight: 400,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 1.6,
    opacity: 0.9,

    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  })
);

const FlagAndBorderConatiner = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  order: -1,
}));

const StepNumber = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "16px",
  fontWeight: 600,
  color: "white",
  zIndex: 2,

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const FlagIconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: colors.primaryGradient,
  boxShadow: "0 4px 16px rgba(56, 176, 137, 0.3)",
  position: "relative",
  transition: "all 0.3s ease",
  flexShrink: 0,

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 20px rgba(56, 176, 137, 0.4)",
  },

  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
}));

const RightCircles = styled(CirclesSquare)(({ theme, circleColor }) => ({
  position: "absolute",
  right: 0,
  top: "220px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LeftCircles = styled(CirclesSquare)(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: "150px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MilestonesList = ({
  titleColor,
  descColor,
  backgroundcolor,
  circleColor,
}: MileStoneProps) => {
  const MILESTONS = [
    {
      heading: "Planning and Consulting",
      description:
        "We work with you to understand the scope of your work and find the right solutions to meet your IT challenges with our customized solutions.",
    },
    {
      heading: "Visual and Technical Design",
      description:
        "Our design process starts with understanding your business objectives, goals and priorities so that it helps to find the user needs and align them with real-life user stories.",
    },
    {
      heading: "Development",
      description:
        "We turn your ideas into a reality, while we work on your project it will be placed on the development server where you get to watch the whole process, live.",
    },
    {
      heading: "Testing",
      description:
        "After the development and integration, we go underground for a little while (not literally) to make sure everything is working properly.",
    },
    {
      heading: "Documentation",
      description:
        "The documentation process goes with requirement gathering, authoring, testing, deployment with the documentation part.",
    },
    {
      heading: "Maintenance and Support",
      description:
        "Completing your project is just the beginning - monitoring and ongoing maintenance are parts of the process. We monitor the project performance and perform updates and offer Maintenance and Support at your request.",
    },
  ];

  return (
    <GenericWrapper backgroundcolor={backgroundcolor}>
      <Wrapper>
        <RightCircles circleColor={circleColor} />
        <LeftCircles />
        <Title milestonecolor={titleColor}>How We Work?</Title>
        <Description milestonecolor={descColor}>
          It’s simple: we love seeing your business grow. From planning and
          consulting to documentation and support, Grootan always keeps in close
          touch with our clients and keep them involved in the entire process.
        </Description>
        <ListWrapper>
          {MILESTONS.map((milestone, index) => {
            return (
              <ListItemWrapper key={index}>
                <FlagAndBorderConatiner>
                  <FlagIconWrapper>
                    <StepNumber>{index + 1}</StepNumber>
                  </FlagIconWrapper>
                </FlagAndBorderConatiner>
                <ListItemIntroContainer>
                  <ListItemHeading milestonecolor={titleColor}>
                    {milestone.heading}
                  </ListItemHeading>
                  <ListItemDescription milestonecolor={descColor}>
                    {milestone.description}
                  </ListItemDescription>
                </ListItemIntroContainer>
              </ListItemWrapper>
            );
          })}
        </ListWrapper>
      </Wrapper>
    </GenericWrapper>
  );
};

export default MilestonesList;
