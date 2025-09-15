import { FOOTER_SECTIONS } from "@/utils";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { LogoWhite } from "../../../public/images";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CircularProgress from '@mui/material/CircularProgress';
import { colors } from "@/styles/colors";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import FacebookIcon from "../icons/FacebookIcon";
import axios from "axios";
import { useState } from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#1a1a1a",
}));

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "80px 32px 40px",

  [theme.breakpoints.down("lg")]: {
    padding: "60px 24px 32px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "48px 16px 24px",
  },
}));

const UpperContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "80px",
  gap: "48px",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    marginBottom: "64px",
    gap: "32px",
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
  fontSize: "36px",
  maxWidth: "600px",
  textAlign: "center",
  color: "white",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1.3,

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  maxWidth: "520px",
  padding: "40px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  flexDirection: "column",
  gap: "24px",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "inherit",
    zIndex: -1,
  },

  [theme.breakpoints.down("sm")]: {
    padding: "32px 24px",
    gap: "20px",
    maxWidth: "100%",
  },
}));

const InputField = styled("input", {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: "100%",
  height: "56px",
  borderRadius: "12px",
  border: hasError ? "1px solid #ff6b6b" : "1px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  padding: "16px 20px",
  fontSize: "16px",
  color: "white",
  outline: "none",
  transition: "all 0.3s ease",

  "&:focus": {
    borderColor: hasError ? "#ff6b6b" : "rgba(255, 255, 255, 0.6)",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: hasError ? "0 0 0 2px rgba(255, 107, 107, 0.2)" : "0 0 0 2px rgba(255, 255, 255, 0.1)",
  },

  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.7)",
  },
}));

const MultilineInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: "100%",
  borderRadius: "12px",
  fontSize: "16px",

  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    border: hasError ? "1px solid #ff6b6b" : "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "white",
    transition: "all 0.3s ease",

    "& fieldset": {
      border: "none",
    },

    "&:hover": {
      background: "rgba(255, 255, 255, 0.12)",
    },

    "&.Mui-focused": {
      background: "rgba(255, 255, 255, 0.15)",
      borderColor: hasError ? "#ff6b6b" : "rgba(255, 255, 255, 0.6)",
      boxShadow: hasError ? "0 0 0 2px rgba(255, 107, 107, 0.2)" : "0 0 0 2px rgba(255, 255, 255, 0.1)",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "16px 20px",
    color: "white",

    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
      opacity: 1,
    },
  },
}));

const LetsTalkButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "56px",
  marginTop: "16px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  background: "#38B089",
  color: "white",
  border: "none",
  boxShadow: "none",
  transition: "all 0.3s ease",

  "&:hover": {
    background: "#03432E",
    transform: "translateY(-1px)",
  },

  "&:disabled": {
    background: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.5)",
    transform: "none",
  },
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
  margin: "0 auto 0 60px",

  [theme.breakpoints.down("lg")]: {
    gap: "40px",
    margin: "0 auto 0 40px",
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
  fontWeight: 600,
  fontSize: "16px",
  color: "white",
  marginBottom: "8px",
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const Tab = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  textDecoration: "none",
  color: "rgba(255, 255, 255, 0.8)",
  transition: "color 0.2s ease",

  "&:hover": {
    color: "white",
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "32px auto 0",
  textAlign: "center",
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

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#ff6b6b",
  fontWeight: 400,
  marginTop: "4px",
}));

const StyledPhoneInput = styled(PhoneInput, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: "56px",
  borderRadius: "12px",
  border: hasError ? "1px solid #ff6b6b" : "1px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  padding: "0 20px",
  transition: "all 0.3s ease",
  
  "&:focus-within": {
    borderColor: hasError ? "#ff6b6b" : "rgba(255, 255, 255, 0.6)",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: hasError ? "0 0 0 2px rgba(255, 107, 107, 0.2)" : "0 0 0 2px rgba(255, 255, 255, 0.1)",
  },
  
  "& .PhoneInputInput": {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: "16px",
    color: "white",
    outline: "none",
    marginLeft: "8px",
    
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  
  "& .PhoneInputCountrySelect": {
    border: "none",
    background: "transparent",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    
    "&:focus": {
      outline: "none",
    },
  },
  
  "& .PhoneInputCountrySelectArrow": {
    color: "rgba(255, 255, 255, 0.7)",
    marginLeft: "4px",
  },
  
  "& .PhoneInputCountryIcon": {
    marginRight: "8px",
  },
  
  "& .PhoneInputCountryIconImg": {
    width: "20px",
    height: "15px",
  },
}));

const PrimaryFooter = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [mobile, setMobile] = useState<string | undefined>('');
  const [disable , setDisable] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
    mobile: ''
  })
  const validateMobileNumber = (mobile: string | undefined) => {
    if (!mobile) {
      return { isValid: false, errorMessage: 'Mobile number is required' };
    }
    
    try {
      const isValid = isValidPhoneNumber(mobile);
      if (isValid) {
        return { isValid: true, errorMessage: '' };
      } else {
        return { isValid: false, errorMessage: 'Please enter a valid phone number with country code' };
      }
    } catch (error) {
      return { isValid: false, errorMessage: 'Please enter a valid phone number with country code' };
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      body: '',
      mobile: ''
    };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const mobileValidation = validateMobileNumber(mobile);
    if (!mobileValidation.isValid) {
      newErrors.mobile = mobileValidation.errorMessage;
    }

    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!body.trim()) {
      newErrors.body = 'Message is required';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSend = async ()=>{
    if (!validateForm()) {
      return;
    }
    
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

      alert("Email sent successfully! We'll get back to you soon.")
      // Clear the input fields after successful submission
      setEmail('');
      setName('');
      setSubject('');
      setBody('');
      setMobile('');
      setErrors({
        name: '',
        email: '',
        subject: '',
        body: '',
        mobile: ''
      });

      return response;
    } catch (err) {
      setDisable(false)
      alert("Failed to send email. Please try again later.")
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
            <InputContainer>
              <InputField 
                value={name} 
                type={"text"} 
                onChange={(e)=> setName(e.target.value)} 
                placeholder="Name" 
                hasError={!!errors.name}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </InputContainer>
            
            <InputContainer>
              <InputField 
                value={email} 
                type={"email"} 
                onChange={(e)=> setEmail(e.target.value)} 
                placeholder="Email Address" 
                hasError={!!errors.email}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputContainer>
            
            <InputContainer>
              <StyledPhoneInput
                value={mobile}
                onChange={setMobile}
                placeholder="Mobile No"
                defaultCountry="US"
                hasError={!!errors.mobile}
                international
                countryCallingCodeEditable={false}
              />
              {errors.mobile && <ErrorText>{errors.mobile}</ErrorText>}
            </InputContainer>
            
            <InputContainer>
              <InputField 
                type={"text"} 
                value={subject} 
                onChange={(e)=> setSubject(e.target.value)} 
                placeholder="Why are you interested" 
                hasError={!!errors.subject}
              />
              {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
            </InputContainer>
            
            <InputContainer>
              <MultilineInput
                multiline
                rows={4}
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                placeholder="Let us know your project about!"
                hasError={!!errors.body}
              />
              {errors.body && <ErrorText>{errors.body}</ErrorText>}
            </InputContainer>
            
            <LetsTalkButton onClick={handleSend} variant="secondary" disabled={disable}>
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
