import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  alpha,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

const MotionBox = motion(Box);

const Dashboard = () => {
  const theme = useTheme();

  // Mock data for dashboard
  const userProgress = {
    completedCourses: 2,
    enrolledCourses: 3,
    upcomingClasses: 2,
    completedTests: 1,
    averageScore: 85,
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Japanese N5 Complete Course',
      progress: 75,
      nextClass: '2024-03-20T10:00:00',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
    },
    {
      id: 2,
      title: 'Korean TOPIK I Preparation',
      progress: 30,
      nextClass: '2024-03-21T14:00:00',
      gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    },
    {
      id: 3,
      title: 'Japanese N4 Grammar',
      progress: 15,
      nextClass: '2024-03-22T11:00:00',
      gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: 'Japanese N5 - Lesson 8',
      instructor: 'Yuki Tanaka',
      date: '2024-03-20T10:00:00',
      duration: '60 min',
      gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
    },
    {
      id: 2,
      title: 'Korean TOPIK I - Reading Practice',
      instructor: 'Min-ji Park',
      date: '2024-03-21T14:00:00',
      duration: '90 min',
      gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
    },
  ];

  const recentTests = [
    {
      id: 1,
      title: 'JLPT N5 Practice Test',
      score: 85,
      date: '2024-03-15',
      totalQuestions: 50,
      correctAnswers: 42,
      gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const StatCard = ({ title, value, icon: Icon, gradient }) => (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        background: gradient,
        color: 'white',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ fontSize: 32, mr: 1 }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography component="p" variant="h3" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
    </Paper>
  );

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Welcome back, Student!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your progress and continue your language learning journey
          </Typography>
        </Paper>

        {/* Progress Overview */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Enrolled Courses"
              value={userProgress.enrolledCourses}
              icon={SchoolIcon}
              gradient="linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Completed Courses"
              value={userProgress.completedCourses}
              icon={EmojiEventsIcon}
              gradient="linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Upcoming Classes"
              value={userProgress.upcomingClasses}
              icon={VideoLibraryIcon}
              gradient="linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Average Score"
              value={`${userProgress.averageScore}%`}
              icon={TrendingUpIcon}
              gradient="linear-gradient(135deg, #FA709A 0%, #FEE140 100%)"
            />
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Enrolled Courses */}
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  <SchoolIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  Your Courses
                </Typography>
                <List sx={{ p: 0 }}>
                  {enrolledCourses.map((course) => (
                    <React.Fragment key={course.id}>
                      <ListItem
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                          },
                        }}
                      >
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: course.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                            }}
                          >
                            <SchoolIcon />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {course.title}
                            </Typography>
                          }
                          secondary={
                            <Box sx={{ mt: 1 }}>
                              <LinearProgress
                                variant="determinate"
                                value={course.progress}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                                  '& .MuiLinearProgress-bar': {
                                    background: course.gradient,
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 0.5 }}
                              >
                                Progress: {course.progress}%
                              </Typography>
                            </Box>
                          }
                        />
                        <Box sx={{ minWidth: 120, textAlign: 'right' }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                          >
                            Next Class:
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                            }}
                          >
                            {formatDate(course.nextClass)}
                          </Typography>
                        </Box>
                      </ListItem>
                      <Divider sx={{ my: 1 }} />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component={Link}
                  to="/courses"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  View All Courses
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Upcoming Classes */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  <VideoLibraryIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                  Upcoming Classes
                </Typography>
                <List sx={{ p: 0 }}>
                  {upcomingClasses.map((classItem) => (
                    <React.Fragment key={classItem.id}>
                      <ListItem
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.secondary.main, 0.05),
                          },
                        }}
                      >
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: classItem.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                            }}
                          >
                            <VideoLibraryIcon />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {classItem.title}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 0.5 }}
                              >
                                {classItem.instructor}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme.palette.secondary.main,
                                  fontWeight: 600,
                                  mt: 0.5,
                                }}
                              >
                                {formatDate(classItem.date)}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider sx={{ my: 1 }} />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component={Link}
                  to="/live-classes"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  View All Classes
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Recent Test Results */}
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  <QuizIcon sx={{ mr: 1, color: theme.palette.success.main }} />
                  Recent Test Results
                </Typography>
                <List sx={{ p: 0 }}>
                  {recentTests.map((test) => (
                    <React.Fragment key={test.id}>
                      <ListItem
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.success.main, 0.05),
                          },
                        }}
                      >
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: test.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                            }}
                          >
                            <QuizIcon />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {test.title}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mt: 0.5 }}
                            >
                              Date: {test.date}
                            </Typography>
                          }
                        />
                        <Box sx={{ minWidth: 200, textAlign: 'right' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              mb: 0.5,
                            }}
                          >
                            <StarIcon
                              sx={{
                                color: theme.palette.warning.main,
                                mr: 0.5,
                                fontSize: 20,
                              }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                color: theme.palette.success.main,
                                fontWeight: 'bold',
                              }}
                            >
                              {test.score}%
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {test.correctAnswers} / {test.totalQuestions} correct
                          </Typography>
                        </Box>
                      </ListItem>
                      <Divider sx={{ my: 1 }} />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component={Link}
                  to="/mock-tests"
                  size="large"
                  variant="contained"
                  startIcon={<EmojiEventsIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
                      opacity: 0.9,
                    },
                  }}
                >
                  Take More Tests
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 