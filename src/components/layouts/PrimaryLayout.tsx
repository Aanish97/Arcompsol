import { ROUTES, TabObject } from "@/utils";
import { Box, Button, Drawer, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import PrimaryLogo from "../icons/PrimaryLogo";
import MenuIcon from "@mui/icons-material/Menu";
import PrimaryFooter from "./PrimaryFooter";
import { colors } from "@/styles/colors";

interface PrimaryLayoutProps {
  children: ReactElement;
}

interface TabProps {
  isselected: string;
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  overflowY: "scroll",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  backdropFilter: "blur(12px)",
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const Header = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  width: "100%",
  display: "flex",
  padding: "16px 32px",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "64px",

  [theme.breakpoints.down("lg")]: {
    padding: "16px 24px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "12px 20px",
  },
}));

const LargeSrceenTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gap: "24px",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Tab = styled(Link)<TabProps & { isletstalktab?: string }>(({ theme, isselected, isletstalktab }) => ({
  fontSize: "15px",
  fontWeight: isselected==="true" ? 500 : 400,
  color: isletstalktab === "true" ? "white" : (isselected==="true"
    ? theme.palette.text.primary
    : theme.palette.text.secondary),
  textDecoration: "none",
  padding: isletstalktab === "true" ? "8px 16px" : "8px 0",
  borderRadius: isletstalktab === "true" ? "8px" : "0",
  background: isletstalktab === "true" ? "#38B089" : "transparent",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  transform: "scale(1)",
  
  "&:hover": {
    color: isletstalktab === "true" ? "white" : theme.palette.text.primary,
    background: isletstalktab === "true" ? "#03432E" : "transparent",
    transform: isletstalktab === "true" ? "scale(1.05)" : "scale(1)",
    boxShadow: isletstalktab === "true" ? "0 4px 12px rgba(3, 67, 46, 0.3)" : "none",
  },
  
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: "0",
    width: (isselected==="true" && isletstalktab !== "true") ? "100%" : "0%",
    height: "1px",
    backgroundColor: theme.palette.text.primary,
    transition: "width 0.2s ease",
    display: isletstalktab === "true" ? "none" : "block",
  },
  
  "&:hover::after": {
    width: isletstalktab === "true" ? "0%" : "100%",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const MuiDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  minWidth: "280px",
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  overflow: "auto",
  backgroundColor: "white",
}));

const DrawerButton = styled(Button)(({ theme }) => ({
  padding: "8px",
  minWidth: "auto",
  color: theme.palette.text.primary,
  borderRadius: "4px",
  transition: "all 0.2s ease",
  
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const TABS: TabObject[] = [
    {
      label: "Home",
      route: ROUTES.HOME,
    },
    {
      label: "Services",
      route: ROUTES.SERVICES,
    },
    {
      label: "Careers",
      route: ROUTES.CAREERS,
    },
    {
      label: "About",
      route: ROUTES.ABOUT,
    },
    {
      label: "Let's Talk",
      route: ROUTES.LETS_TALK,
    },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTabs = () => {
    const router = useRouter();
    
    // Filter tabs based on current route - show Services only on home page
    const visibleTabs = TABS.filter(tab => {
      if (tab.label === "Services" && router.pathname !== '/') {
        return false;
      }
      return true;
    });
    
    return (
      <>
        {visibleTabs.map((tab) => {
          if (tab.route && tab.route.startsWith('#')) {
            const sectionId = tab.route.substring(1); // Remove the # symbol
            return (
              <Tab
                isselected="false"
                isletstalktab="false"
                key={tab.route}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(sectionId);
                }}
              >
                {tab.label}
              </Tab>
            );
          } else if (tab.route) {
            return (
              <Tab
                isselected={`${router.pathname === tab.route}`}
                isletstalktab={`${tab.label === "Let's Talk"}`}
                key={tab.route}
                href={tab.route}
              >
                {tab.label}
              </Tab>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  };
  

  return (
    <Wrapper>
      <MuiDrawer
        anchor={"right"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerContainer>{getTabs()}</DrawerContainer>
      </MuiDrawer>
      <HeaderWrapper>
        <Header>
          <PrimaryLogo />
          <LargeSrceenTabsContainer>{getTabs()}</LargeSrceenTabsContainer>
          <DrawerButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon
              color="inherit"
              fontSize="inherit"
              sx={{ cursor: "pointer" }}
            />
          </DrawerButton>
        </Header>
      </HeaderWrapper>
      <Content>{children}</Content>
      <PrimaryFooter/>
    </Wrapper>
  );
};

export default PrimaryLayout;
