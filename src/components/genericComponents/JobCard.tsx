import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  styled,
  Chip,
} from "@mui/material";
import { colors } from "@/styles/colors";
import { LocationOnOutlined, WorkOutline, GroupOutlined } from "@mui/icons-material";

interface JobCardProps {
  title: string;
  team: string;
  location: string;
  description?: string;
  onApply?: () => void;
}

const StyledJobCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.backgroundPrimary} 0%, ${colors.backgroundSecondary} 100%)`,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: "16px",
  boxShadow: `0 8px 24px -4px rgba(0, 0, 0, 0.15), 0 4px 12px -4px rgba(0, 0, 0, 0.1)`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)`,
    borderColor: colors.primaryBlue,
  },
  
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  height: "100%",
  
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    gap: "16px",
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: "1.3",
  marginBottom: "8px",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const JobInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "16px",
}));

const JobInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: colors.textSecondary,
  fontSize: "14px",
  fontWeight: 500,
}));

const JobDescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: colors.textSecondary,
  lineHeight: "1.6",
  marginBottom: "auto",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const ApplyButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  color: colors.backgroundPrimary,
  fontWeight: 600,
  fontSize: "16px",
  padding: "12px 24px",
  borderRadius: "8px",
  textTransform: "none",
  transition: "all 0.3s ease",
  marginTop: "auto",
  
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primaryBlue} 100%)`,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 16px -4px rgba(0, 0, 0, 0.15)`,
  },
}));

const TeamChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.primaryBlue}20 0%, ${colors.primaryDark}20 100%)`,
  color: colors.primaryBlue,
  fontWeight: 600,
  fontSize: "12px",
  height: "28px",
  border: `1px solid ${colors.primaryBlue}40`,
  
  "& .MuiChip-label": {
    padding: "0 12px",
  },
}));

const JobCard: React.FC<JobCardProps> = ({
  title,
  team,
  location,
  description,
  onApply,
}) => {
  return (
    <StyledJobCard>
      <StyledCardContent>
        <Box>
          <JobTitle>{title}</JobTitle>
          <TeamChip
            label={team}
            icon={<GroupOutlined sx={{ fontSize: "16px !important" }} />}
            size="small"
          />
        </Box>
        
        <JobInfoContainer>
          <JobInfoItem>
            <WorkOutline sx={{ fontSize: "18px", color: colors.primaryBlue }} />
            <Typography variant="body2" fontWeight={500}>
              {title}
            </Typography>
          </JobInfoItem>
          <JobInfoItem>
            <LocationOnOutlined sx={{ fontSize: "18px", color: colors.primaryBlue }} />
            <Typography variant="body2" fontWeight={500}>
              {location}
            </Typography>
          </JobInfoItem>
        </JobInfoContainer>
        
        {description && (
          <JobDescription>
            {description}
          </JobDescription>
        )}
        
        <ApplyButton
          variant="contained"
          onClick={onApply}
          fullWidth
        >
          Apply Now
        </ApplyButton>
      </StyledCardContent>
    </StyledJobCard>
  );
};

export default JobCard;