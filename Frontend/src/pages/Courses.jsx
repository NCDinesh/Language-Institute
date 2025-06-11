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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';

const MotionBox = motion(Box);

const courses = [
  {
    id: 1,
    title: 'Japanese N5 Complete Course',
    description: 'Master the basics of Japanese language with our comprehensive N5 course.',
    instructor: 'Yuki Tanaka',
    duration: '12 weeks',
    level: 'Beginner',
    language: 'Japanese',
    price: 299,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
  },
  {
    id: 2,
    title: 'Korean TOPIK I Preparation',
    description: 'Prepare for TOPIK I exam with our structured course and practice materials.',
    instructor: 'Min-ji Park',
    duration: '16 weeks',
    level: 'Beginner',
    language: 'Korean',
    price: 349,
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
  },
  {
    id: 3,
    title: 'Japanese N4 Grammar',
    description: 'Advanced grammar concepts for Japanese N4 level proficiency.',
    instructor: 'Hiroshi Yamamoto',
    duration: '10 weeks',
    level: 'Intermediate',
    language: 'Japanese',
    price: 399,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
  },
  {
    id: 4,
    title: 'Korean TOPIK II Writing',
    description: 'Master the writing section of TOPIK II with expert guidance.',
    instructor: 'Soo-jin Kim',
    duration: '14 weeks',
    level: 'Advanced',
    language: 'Korean',
    price: 449,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80',
    gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
  },
];

const Courses = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filters, setFilters] = useState({
    search: '',
    language: '',
    level: '',
  });
  const [activeTab, setActiveTab] = useState('all');
  const [imageErrors, setImageErrors] = useState({});

  const handleFilterChange = (field) => (event) => {
    setFilters({
      ...filters,
      [field]: event.target.value,
    });
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleImageError = (courseId) => {
    setImageErrors((prev) => ({
      ...prev,
      [courseId]: true,
    }));
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesLanguage = !filters.language || course.language === filters.language;
    const matchesLevel = !filters.level || course.level === filters.level;
    return matchesSearch && matchesLanguage && matchesLevel;
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
          align="center"
          sx={{ mb: 6, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          Our Courses
        </Typography>

        {/* Filters */}
        <Box sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4} sx={{ maxWidth: { md: '300px' } }}>
              <TextField
                fullWidth
                label="Search Courses"
                value={filters.search}
                onChange={handleFilterChange('search')}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ maxWidth: { md: '300px' } }}>
              <FormControl fullWidth size="small">
                <InputLabel>Language</InputLabel>
                <Select
                  value={filters.language}
                  label="Language"
                  onChange={handleFilterChange('language')}
                >
                  <MenuItem value="">All Languages</MenuItem>
                  <MenuItem value="Japanese">Japanese</MenuItem>
                  <MenuItem value="Korean">Korean</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4} sx={{ maxWidth: { md: '300px' } }}>
              <FormControl fullWidth size="small">
                <InputLabel>Level</InputLabel>
                <Select
                  value={filters.level}
                  label="Level"
                  onChange={handleFilterChange('level')}
                >
                  <MenuItem value="">All Levels</MenuItem>
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Course Grid */}
        <Grid container spacing={3} justifyContent="center">
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={course.id} sx={{ maxWidth: { sm: '400px', md: '400px' } }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: '100%' }}
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
                      height: { xs: 160, sm: 200 },
                      background: course.gradient,
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
                        background: `url(${imageErrors[course.id] ? course.fallbackImage : course.image}) center/cover`,
                        opacity: 0.8,
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <img
                      src={imageErrors[course.id] ? course.fallbackImage : course.image}
                      alt={course.title}
                      style={{ display: 'none' }}
                      onError={() => handleImageError(course.id)}
                    />
                    {imageErrors[course.id] && (
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
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 2, sm: 3 } }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        label={course.language}
                        size="small"
                        color="primary"
                      />
                      <Chip
                        label={course.level}
                        size="small"
                        color="secondary"
                      />
                    </Stack>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        lineHeight: 1.3,
                        height: { xs: '3.9rem', sm: '3.9rem' },
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        height: { xs: '3rem', sm: '3rem' },
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {course.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      Instructor: {course.instructor}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Duration: {course.duration}
                    </Typography>
                    <Box
                      sx={{
                        mt: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        }}
                      >
                        ${course.price}
                      </Typography>
                      <Button
                        component={Link}
                        to={`/courses/${course.id}`}
                        variant="contained"
                        color="primary"
                        size={isMobile ? "small" : "medium"}
                        sx={{
                          whiteSpace: 'nowrap',
                          minWidth: { xs: '100px', sm: '120px' },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
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

export default Courses; 