import { FOOTER_SECTIONS } from "@/utils";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { LogoWhite } from "../../../public/images";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Facebook } from "@mui/icons-material";
import CircularProgress from '@mui/material/CircularProgress';

import FacebookIcon from "../icons/FacebookIcon";
import axios from "axios";
import { useState } from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: `radial-gradient(100% 62.73% at 49.59% 49.6%, #00A9F4 0%, #00000A 100%)`,
}));

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "100px 80px 80px",

  [theme.breakpoints.down("lg")]: {
    padding: "70px 30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 15px",
  },
}));

const UpperContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  marginBottom: "300px",
  gap: "89px",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    marginBottom: "150px",
    gap: "40px",
  },
}));

const UpperLeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "100px",

  [theme.breakpoints.down("md")]: {
    gap: "40px",
  },
}));

const UpperLeftBottomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "calc(100% + 80px)",
  padding: "76px 60px 76px 32px",
  gap: "120px",
  justifyContent: "flex-end",
  margin: "0px 0px 0px -80px",
  background:
    "linear-gradient(90.25deg, rgba(255, 255, 255, 0) 0.28%, rgba(124, 154, 179, 0) 99.84%, rgba(0, 59, 108, 0) 99.85%, #1B4269 99.85%)",

  [theme.breakpoints.down("lg")]: {
    margin: 0,
    padding: "40px",
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    gap: "40px",
    width: "100%",
    justifyContent: "flex-start",
    padding: 0,
    flexWrap: "wrap",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "43px",
  maxWidth: "500px",
  textAlign:"center",
  color: theme.palette.background.paper,
  fontWeight: 500,
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  maxWidth: "398px",
  padding: "42px 27px 59px",
  background: theme.palette.background.paper,
  boxShadow: "2px 10px 28px rgba(75, 0, 129, 0.12)",
  flexDirection: "column",
  gap: "22px",
  borderRadius: "22px",

  [theme.breakpoints.down("sm")]: {
    padding: "30px 15px",
    width: "calc(100% - 30px)",
  },
}));

const InputField = styled("input")(({ theme }) => ({
  // width: "100%",
  height: "50px",
  borderRadius: "4px",
  border: `1.2px solid ${theme.palette.common.heather}`,
  padding: "13px",
  fontSize: "16px",
}));

const MultilineInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  borderRadius: "4px",
  fontSize: "16px",
}));

const LetsTalkButton = styled(Button)(({ theme }) => ({
  width: "250px",
  height: "50px",
  margin: "11px auto 0",
}));

const BottomWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "90%",

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  width: "42px",
  height: "46px",
  position: "relative",
}));

const SectionsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "100px",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    gap: "40px",
  },

  [theme.breakpoints.down("md")]: {
    margin: 0,
  },

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    width: "calc(50% -15px)",
  },
}));

const TabHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "20px",
  color: theme.palette.background.paper,
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const Tab = styled(Link)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "20px",
  textDecoration: "none",
  color: theme.palette.background.paper,
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "17px",
  color: theme.palette.background.paper,
  margin: "30px auto 0",
}));

const LocationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "270px",
  width: "100%",
  gap: "60px",
}));

const LocationHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "30px",
  color: theme.palette.background.paper,
}));

const LocationDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "24px",
}));

const LocationDetailText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "16px",
  color: theme.palette.background.paper,
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  fontSize: "29px",
  gap: "15px",
  color: theme.palette.background.paper,
}));

const PrimaryFooter = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [mobile, setMobile] = useState('');
  const [disable , setDisable] = useState(false)
  const handleSend = async ()=>{
    
    try {
      setDisable(true)
      const response = await axios.post('/api/email',{
        email,
        subject,
        body,
        name, 
        mobile,
      })
      setDisable(false)

      alert("Email Send Successfully!")
      // Clear the input fields after successful submission
      setEmail('');
      setName('');
      setSubject('');
      setBody('');
      setMobile('');

      return response;
    } catch (err) {
      setDisable(false)
      console.error(err)
    }
  }
  return (
    <Wrapper>
      <Container>
        <UpperContainer>
        <Title>Love to hear from you, Get in touch!</Title>
          {/* <UpperLeftContainer>
            <UpperLeftBottomContainer>
              {FOOTER_LOCATIONS.map((location, index) => (
                <LocationContainer key={`location-${index}`}>
                  <LocationHeading>{location.location}</LocationHeading>
                  <LocationDetailsContainer>
                    <LocationDetailText>{location.address}</LocationDetailText>
                    <LocationDetailText>{location?.phone}</LocationDetailText>
                    {
                      location?.phone2 && 
                    <LocationDetailText>{location?.phone2}</LocationDetailText>

                    }
                  </LocationDetailsContainer>
                </LocationContainer>
              ))}
            </UpperLeftBottomContainer>
          </UpperLeftContainer> */}
          <Form id="contact-form">
            <InputField value={name} type={"text"} 
            onChange={(e)=> setName(e.target.value)} 
            placeholder="Name" />
            <InputField value={email} type={"email"} onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address" />
            <InputField type={"text"} value={mobile}
            onChange={(e)=> setMobile(e.target.value)} 
             placeholder="Mobile No" />
            <InputField type={"text"} value={subject} onChange={(e)=> setSubject(e.target.value)} placeholder="Why are you interested" />
            <MultilineInput
              multiline
              rows={4}
              value={body}
              onChange={(e)=> setBody(e.target.value)}
              placeholder="Let us know your project about!"
            />
            <LetsTalkButton onClick={handleSend}  variant="secondary" disabled={disable}>
              { !disable ? 
              "Let's Talk" :
              <CircularProgress/> }
            </LetsTalkButton>
          </Form>
        </UpperContainer>
        <BottomWrapper>
          <LogoWrapper>
            <Image fill alt="Arcompsol" src={LogoWhite} />
          </LogoWrapper>
          <SectionsWrapper>
            {FOOTER_SECTIONS.map((section) => (
              <SectionContainer key={`section-${section.heading}`}>
                <TabHeading>{section.heading}</TabHeading>
                <TabsContainer>
                  {section.tabs.map((tab) => (
                    <Tab key={`tab-${tab.label}`} href={tab.route}>
                      {tab.label}
                    </Tab>
                  ))}
                </TabsContainer>
              </SectionContainer>
            ))}
          </SectionsWrapper>
          <SectionContainer>
            <TabHeading>Follow us</TabHeading>
            <SocialIconsContainer>
            import Link from '@mui/material/Link';

            <Link href="" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </Link>

            <Link href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon fontSize="inherit" color="inherit" />
            </Link>

            <Link href="https://www.instagram.com/arcompsol?igsh=MWUwdnB4dXNicjAzbQ==" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="inherit" color="inherit" />
            </Link>

            <Link href="https://www.linkedin.com/company/86436337/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="inherit" color="inherit" />
            </Link>

            </SocialIconsContainer>
          </SectionContainer>
        </BottomWrapper>
        <CopyrightText>
        @Copyright to Arcompsol Private Limited
        </CopyrightText>
      </Container>
    </Wrapper>
  );
};

export default PrimaryFooter;
