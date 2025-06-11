import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  IconButton,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import ImageIcon from '@mui/icons-material/Image';

const MotionBox = motion(Box);

const instructors = [
  {
    id: 1,
    name: 'Yuki Tanaka',
    role: 'Japanese Language Expert',
    languages: ['Japanese', 'English'],
    bio: 'Certified JLPT examiner with 10 years of teaching experience.',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    courses: ['Japanese N5 Complete Course', 'Japanese N4 Grammar'],
  },
  {
    id: 2,
    name: 'Min-ji Park',
    role: 'Korean Language Specialist',
    languages: ['Korean', 'English', 'Japanese'],
    bio: 'Former TOPIK examiner with expertise in Korean language education.',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    courses: ['Korean TOPIK I Preparation', 'Korean TOPIK II Writing'],
  },
  {
    id: 3,
    name: 'Hiroshi Yamamoto',
    role: 'Japanese Grammar Expert',
    languages: ['Japanese', 'English', 'Korean'],
    bio: 'Specialized in teaching advanced Japanese grammar and writing.',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    courses: ['Japanese N4 Grammar', 'Japanese Writing Workshop'],
  },
  {
    id: 4,
    name: 'Soo-jin Kim',
    role: 'Korean Writing Specialist',
    languages: ['Korean', 'English'],
    bio: 'Expert in Korean writing and composition with a focus on TOPIK preparation.',
    experience: '9 years',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    courses: ['Korean TOPIK II Writing', 'Korean Business Writing'],
  },
];

const Instructors = () => {
  const theme = useTheme();
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (instructorId) => {
    setImageErrors((prev) => ({
      ...prev,
      [instructorId]: true,
    }));
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Our Instructors
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}
        >
          Learn from experienced language experts who are passionate about teaching
        </Typography>

        <Grid container spacing={4}>
          {instructors.map((instructor, index) => (
            <Grid item xs={12} md={6} key={instructor.id}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 4,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 300,
                      background: instructor.gradient,
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url(${imageErrors[instructor.id] ? instructor.fallbackImage : instructor.image}) center/cover`,
                        opacity: 0.9,
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <img
                      src={imageErrors[instructor.id] ? instructor.fallbackImage : instructor.image}
                      alt={instructor.name}
                      style={{ display: 'none' }}
                      onError={() => handleImageError(instructor.id)}
                    />
                    {imageErrors[instructor.id] && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: 'white',
                          textAlign: 'center',
                          zIndex: 1,
                        }}
                      >
                        <ImageIcon sx={{ fontSize: 40, mb: 1 }} />
                        <Typography variant="body2">Image Loading...</Typography>
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {instructor.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ mb: 2, fontWeight: 500 }}
                    >
                      {instructor.role}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {instructor.languages.map((language) => (
                        <Chip
                          key={language}
                          label={language}
                          size="small"
                          sx={{
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {instructor.bio}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ mb: 2, color: theme.palette.text.secondary }}
                    >
                      Experience: {instructor.experience}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Courses:
                      </Typography>
                      <List dense>
                        {instructor.courses.map((course) => (
                          <ListItem
                            key={course}
                            sx={{
                              py: 0.5,
                              '&:hover': {
                                bgcolor: alpha(theme.palette.primary.main, 0.05),
                              },
                            }}
                          >
                            <ListItemText
                              primary={course}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 'auto', pt: 2 }}
                    >
                      <IconButton
                        component="a"
                        href={instructor.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: theme.palette.primary.main,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={instructor.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: theme.palette.info.main,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.info.main, 0.1),
                          },
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Instructors; 