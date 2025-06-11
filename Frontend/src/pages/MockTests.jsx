import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Tabs,
  Tab,
  useTheme,
  alpha,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import ImageIcon from '@mui/icons-material/Image';

const MotionBox = motion(Box);

// Using reliable Unsplash image IDs with specific sizes and quality
const mockTests = [
  {
    id: 1,
    title: 'JLPT N5 Practice Test',
    description: 'Full-length practice test for Japanese Language Proficiency Test N5 level.',
    language: 'Japanese',
    level: 'N5',
    duration: '120 min',
    questions: 50,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
  },
  {
    id: 2,
    title: 'TOPIK I Practice Test',
    description: 'Comprehensive practice test for Test of Proficiency in Korean (TOPIK) Level I.',
    language: 'Korean',
    level: 'TOPIK I',
    duration: '180 min',
    questions: 70,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
  },
  {
    id: 3,
    title: 'JLPT N4 Practice Test',
    description: 'Complete practice test for Japanese Language Proficiency Test N4 level.',
    language: 'Japanese',
    level: 'N4',
    duration: '150 min',
    questions: 60,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
  },
  {
    id: 4,
    title: 'TOPIK II Practice Test',
    description: 'Advanced practice test for Test of Proficiency in Korean (TOPIK) Level II.',
    language: 'Korean',
    level: 'TOPIK II',
    duration: '180 min',
    questions: 80,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
  },
];

const MockTests = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [imageErrors, setImageErrors] = useState({});

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleImageError = (testId) => {
    setImageErrors((prev) => ({
      ...prev,
      [testId]: true,
    }));
  };

  const filteredTests = mockTests.filter((test) => {
    if (activeTab === 'all') return true;
    return test.language.toLowerCase() === activeTab;
  });

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
          Mock Tests
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}
        >
          Practice with our comprehensive mock tests designed to help you excel in your language proficiency exams
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 120,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Tab label="All Tests" value="all" />
            <Tab label="Japanese" value="Japanese" />
            <Tab label="Korean" value="Korean" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredTests.map((test, index) => (
            <Grid item xs={12} md={6} key={test.id}>
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
                      height: 200,
                      background: test.gradient,
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
                        background: `url(${imageErrors[test.id] ? test.fallbackImage : test.image}) center/cover`,
                        opacity: 0.8,
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <img
                      src={imageErrors[test.id] ? test.fallbackImage : test.image}
                      alt={test.title}
                      style={{ display: 'none' }}
                      onError={() => handleImageError(test.id)}
                    />
                    {imageErrors[test.id] && (
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
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        label={test.language}
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                        }}
                      />
                      <Chip
                        label={test.level}
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.secondary.main, 0.1),
                          color: theme.palette.secondary.main,
                          fontWeight: 500,
                        }}
                      />
                    </Stack>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 2,
                      }}
                    >
                      {test.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {test.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ mb: 1, color: theme.palette.text.secondary }}
                      >
                        Duration: {test.duration}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        Questions: {test.questions}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        '&:hover': {
                          background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                        },
                      }}
                    >
                      Start Test
                    </Button>
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

export default MockTests; 