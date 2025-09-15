import { styled, Card, CardContent, Typography } from "@mui/material";
import { colors } from "@/styles/colors";

interface GenericCardProps {
  title: string;
  content: string;
  variant?: 'default' | 'elevated' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

interface CardStyledProps {
  customvariant?: 'default' | 'elevated' | 'outlined';
  customsize?: 'small' | 'medium' | 'large';
}

const StyledCard = styled(Card)<CardStyledProps>(({ theme, customvariant = 'default', customsize = 'medium' }) => {
  const getSizeStyles = () => {
    switch (customsize) {
      case 'small':
        return {
          padding: theme.customSpacing.space5,
          maxWidth: '280px',
        };
      case 'large':
        return {
          padding: theme.customSpacing.space8,
          maxWidth: '420px',
        };
      default:
        return {
          padding: theme.customSpacing.space6,
          maxWidth: '350px',
        };
    }
  };

  const getVariantStyles = () => {
    switch (customvariant) {
      case 'elevated':
        return {
          boxShadow: `0 12px 24px -4px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)`,
          border: 'none',
          background: `linear-gradient(135deg, ${colors.backgroundPrimary} 0%, ${colors.backgroundSecondary} 100%)`,
        };
      case 'outlined':
        return {
          boxShadow: `0 4px 12px -2px rgba(0, 0, 0, 0.1)`,
          border: `2px solid ${colors.primaryGradient}`,
          background: colors.backgroundPrimary,
        };
      default:
        return {
          boxShadow: `0 8px 20px -4px rgba(0, 0, 0, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.1)`,
          border: `1px solid ${colors.borderLight}`,
          background: colors.backgroundPrimary,
        };
    }
  };

  return {
    width: '100%',
    borderRadius: theme.customSpacing.space3,
    transition: 'all 0.25s ease-in-out',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
    
    '&:hover': {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: customvariant === 'elevated' 
        ? `0 24px 32px -8px rgba(0, 0, 0, 0.15), 0 16px 24px -8px rgba(0, 0, 0, 0.1)`
        : `0 16px 28px -4px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)`,
      borderColor: customvariant === 'outlined' ? colors.primaryBlue : undefined,
    },
    
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      padding: theme.customSpacing.space5,
    },
    
    [theme.breakpoints.down('sm')]: {
      padding: theme.customSpacing.space4,
    },
    
    ...getSizeStyles(),
    ...getVariantStyles(),
  };
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.4,
  background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryDark} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '16px',
  letterSpacing: '-0.025em',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    marginBottom: '12px',
  },
}));

const CardContentText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.6,
  color: colors.textSecondary,
  textAlign: 'left',
  letterSpacing: '0.01em',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
}));

const GenericCard = ({ 
  title, 
  content, 
  variant = 'default',
  size = 'medium'
}: GenericCardProps) => {
  return (
    <StyledCard customvariant={variant} customsize={size}>
      <StyledCardContent>
        <CardTitle>
          {title}
        </CardTitle>
        <CardContentText>
          {content}
        </CardContentText>
      </StyledCardContent>
    </StyledCard>
  );
};

export default GenericCard;
