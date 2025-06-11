import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import QuizIcon from '@mui/icons-material/Quiz';

const MotionBox = motion(Box);

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Instructors',
      description: 'Learn from native speakers and certified language experts',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Live Classes',
      description: 'Interactive sessions with real-time feedback and practice',
    },
    {
      icon: <QuizIcon sx={{ fontSize: 40 }} />,
      title: 'Mock Tests',
      description: 'Regular assessments to track your progress',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Japanese Student',
      image: 'https://source.unsplash.com/random/100x100?portrait=1',
      text: 'The structured learning approach and supportive instructors made learning Japanese enjoyable and effective.',
    },
    {
      name: 'Michael Chen',
      role: 'Korean Student',
      image: 'https://source.unsplash.com/random/100x100?portrait=2',
      text: 'The live classes and mock tests helped me prepare well for my TOPIK exam. Highly recommended!',
    },
    {
      name: 'Emma Wilson',
      role: 'Japanese Student',
      image: 'https://source.unsplash.com/random/100x100?portrait=3',
      text: 'The personalized attention and flexible schedule made it easy to balance learning with my work.',
    },
  ];

  return (
    <Box>
      {/* Language Learning Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Master Japanese & Korean Languages
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {/* Japanese Language Section */}
            <Grid item xs={12} md={6} sx={{ maxWidth: { md: '600px' } }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80"
                    alt="Japanese Language Learning"
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      Japanese Language
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: 'text.secondary' }}
                    >
                      Master Japanese with our comprehensive courses covering JLPT N5 to N1 levels. Learn from native speakers and certified instructors through interactive live classes and regular mock tests.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        component={Link}
                        to="/courses?language=Japanese"
                        variant="contained"
                        size="large"
                      >
                        Explore Japanese Courses
                      </Button>
                      <Button
                        component={Link}
                        to="/signup"
                        variant="outlined"
                        size="large"
                      >
                        Start Learning
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>

            {/* Korean Language Section */}
            <Grid item xs={12} md={6} sx={{ maxWidth: { md: '600px' } }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80"
                    alt="Korean Language Learning"
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 2,
                      }}
                    >
                      Korean Language
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: 'text.secondary' }}
                    >
                      Excel in Korean with our TOPIK-focused courses. From beginner to advanced levels, our expert instructors will guide you through speaking, writing, and cultural understanding.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        component={Link}
                        to="/courses?language=Korean"
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Explore Korean Courses
                      </Button>
                      <Button
                        component={Link}
                        to="/signup"
                        variant="outlined"
                        size="large"
                        color="secondary"
                      >
                        Start Learning
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ maxWidth: { md: '400px' } }}>
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
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6 }}
          >
            What Our Students Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ maxWidth: { md: '400px' } }}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box
                        component="img"
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ mb: 2, fontStyle: 'italic' }}
                      >
                        "{testimonial.text}"
                      </Typography>
                      <Typography variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {testimonial.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Card
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            p: { xs: 4, md: 6 },
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Start Your Language Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Join our community of language learners today
          </Typography>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Get Started Now
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default Home; 