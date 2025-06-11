import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Avatar,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EventIcon from '@mui/icons-material/Event';

const MotionBox = motion(Box);

const classes = [
  {
    id: 1,
    title: 'Japanese N5 Grammar Practice',
    description: 'Interactive session focusing on essential N5 grammar patterns and usage.',
    instructor: {
      name: 'Yuki Tanaka',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=1',
    },
    date: '2024-03-20T10:00:00',
    duration: '60 min',
    language: 'Japanese',
    level: 'Beginner',
    status: 'upcoming',
    enrolled: 15,
    maxStudents: 20,
    image: 'https://source.unsplash.com/random/400x300?japanese',
  },
  {
    id: 2,
    title: 'Korean TOPIK I Speaking',
    description: 'Practice speaking skills for TOPIK I exam with native Korean instructor.',
    instructor: {
      name: 'Min-ji Park',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=2',
    },
    date: '2024-03-19T14:00:00',
    duration: '90 min',
    language: 'Korean',
    level: 'Beginner',
    status: 'ongoing',
    enrolled: 18,
    maxStudents: 20,
    image: 'https://source.unsplash.com/random/400x300?korean',
  },
  {
    id: 3,
    title: 'Japanese N4 Reading Comprehension',
    description: 'Advanced reading practice with focus on N4 level texts and comprehension.',
    instructor: {
      name: 'Hiroshi Yamamoto',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=3',
    },
    date: '2024-03-18T11:00:00',
    duration: '75 min',
    language: 'Japanese',
    level: 'Intermediate',
    status: 'completed',
    enrolled: 20,
    maxStudents: 20,
    image: 'https://source.unsplash.com/random/400x300?japan',
  },
  {
    id: 4,
    title: 'Korean TOPIK II Writing',
    description: 'Master the writing section of TOPIK II with expert guidance.',
    instructor: {
      name: 'Soo-jin Kim',
      avatar: 'https://source.unsplash.com/random/100x100?portrait=4',
    },
    date: '2024-03-21T15:00:00',
    duration: '90 min',
    language: 'Korean',
    level: 'Advanced',
    status: 'upcoming',
    enrolled: 12,
    maxStudents: 20,
    image: 'https://source.unsplash.com/random/400x300?korea',
  },
];

const LiveClasses = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredClasses = classes.filter((classItem) => {
    if (activeTab === 'all') return true;
    return classItem.status === activeTab;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'primary';
      case 'ongoing':
        return 'success';
      case 'completed':
        return 'default';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ mb: 6 }}
      >
        Live Classes
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="All Classes" value="all" />
          <Tab label="Upcoming" value="upcoming" />
          <Tab label="Ongoing" value="ongoing" />
          <Tab label="Completed" value="completed" />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredClasses.map((classItem, index) => (
          <Grid item xs={12} md={6} key={classItem.id}>
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
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={classItem.image}
                  alt={classItem.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={getStatusLabel(classItem.status)}
                      color={getStatusColor(classItem.status)}
                      size="small"
                    />
                    <Chip
                      label={classItem.language}
                      size="small"
                      color="primary"
                    />
                    <Chip
                      label={classItem.level}
                      size="small"
                      color="secondary"
                    />
                  </Stack>

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2 }}
                  >
                    {classItem.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {classItem.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Avatar
                      src={classItem.instructor.avatar}
                      alt={classItem.instructor.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Typography variant="body2">
                      {classItem.instructor.name}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <EventIcon color="action" />
                    <Typography variant="body2">
                      {formatDate(classItem.date)}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <AccessTimeIcon color="action" />
                    <Typography variant="body2">
                      Duration: {classItem.duration}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <PeopleIcon color="action" />
                    <Typography variant="body2">
                      {classItem.enrolled}/{classItem.maxStudents} students enrolled
                    </Typography>
                  </Stack>

                  <Box sx={{ mt: 'auto' }}>
                    {classItem.status === 'ongoing' ? (
                      <Button
                        component={Link}
                        to={`/live-classes/${classItem.id}`}
                        variant="contained"
                        color="success"
                        startIcon={<PlayCircleIcon />}
                        fullWidth
                      >
                        Join Now
                      </Button>
                    ) : classItem.status === 'upcoming' ? (
                      <Button
                        component={Link}
                        to={`/live-classes/${classItem.id}`}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Register
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        to={`/live-classes/${classItem.id}`}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        View Recording
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LiveClasses; 