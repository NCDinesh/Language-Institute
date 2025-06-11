import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  alpha,
  Badge,
  Tooltip,
  Button,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  VideoLibrary as VideoLibraryIcon,
  Quiz as QuizIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Language as LanguageIcon,
  EmojiEvents as EmojiEventsIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

const drawerWidth = 280;

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsOpen = (event) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationsAnchor(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Courses', icon: <SchoolIcon />, path: '/courses' },
    { text: 'Live Classes', icon: <VideoLibraryIcon />, path: '/live-classes' },
    { text: 'Mock Tests', icon: <QuizIcon />, path: '/mock-tests' },
    { text: 'Instructors', icon: <PersonIcon />, path: '/instructors' },
  ];

  const notifications = [
    { id: 1, text: 'New course available: Japanese N4 Grammar', time: '2 hours ago' },
    { id: 2, text: 'Live class starting in 30 minutes', time: '3 hours ago' },
    { id: 3, text: 'Your test results are ready', time: '1 day ago' },
  ];

  const MotionListItem = motion(ListItem);

  const renderAuthButtons = () => {
    if (user) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <Tooltip title="Notifications">
            <IconButton
              color="inherit"
              onClick={handleNotificationsOpen}
              sx={{
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.1),
                },
              }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleProfileMenuOpen}
              sx={{
                p: 0.5,
                border: `2px solid ${alpha(theme.palette.common.white, 0.2)}`,
                '&:hover': {
                  border: `2px solid ${alpha(theme.palette.common.white, 0.4)}`,
                },
              }}
            >
              <Avatar
                alt={user?.displayName || 'User'}
                src={user?.photoURL}
                sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 } }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          color="inherit"
          startIcon={<LoginIcon />}
          size={isMobile ? "small" : "medium"}
          sx={{
            borderColor: alpha(theme.palette.common.white, 0.3),
            '&:hover': {
              borderColor: theme.palette.common.white,
              background: alpha(theme.palette.common.white, 0.1),
            },
          }}
        >
          {isMobile ? "Sign In" : "Sign In"}
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="secondary"
          startIcon={<PersonAddIcon />}
          size={isMobile ? "small" : "medium"}
          sx={{
            background: alpha(theme.palette.secondary.main, 0.9),
            '&:hover': {
              background: theme.palette.secondary.main,
            },
          }}
        >
          {isMobile ? "Sign Up" : "Sign Up"}
        </Button>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Top App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          boxShadow: 'none',
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 1, sm: 2 }, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            <LanguageIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
            {isMobile ? "LI" : "Language Institute"}
          </Typography>

          {renderAuthButtons()}
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={isMobile ? handleDrawerToggle : undefined}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
            borderRight: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ...(!open && !isMobile && {
              width: theme.spacing(7),
              overflowX: 'hidden',
            }),
          },
        }}
      >
        {!isMobile && (
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        )}

        <Divider />

        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ px: { xs: 1, sm: 2 } }}>
            {menuItems.map((item, index) => (
              <MotionListItem
                key={item.text}
                disablePadding
                sx={{ mb: 1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={isMobile ? handleDrawerToggle : undefined}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    py: { xs: 1, sm: 1.5 },
                    '&.Mui-selected': {
                      background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                      '&:hover': {
                        background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.secondary.main, 0.15)} 100%)`,
                      },
                      '& .MuiListItemIcon-root': {
                        color: theme.palette.primary.main,
                      },
                      '& .MuiListItemText-primary': {
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      },
                    },
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.05),
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: { xs: 36, sm: 40 },
                      color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  />
                </ListItemButton>
              </MotionListItem>
            ))}
          </List>

          {user && (
            <>
              <Divider sx={{ my: 2 }} />

              <List sx={{ px: { xs: 1, sm: 2 } }}>
                <MotionListItem
                  disablePadding
                  sx={{ mb: 1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <ListItemButton
                    component={Link}
                    to="/achievements"
                    onClick={isMobile ? handleDrawerToggle : undefined}
                    sx={{
                      borderRadius: 2,
                      py: { xs: 1, sm: 1.5 },
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, sm: 40 } }}>
                      <EmojiEventsIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Achievements"
                      primaryTypographyProps={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                    />
                  </ListItemButton>
                </MotionListItem>

                <MotionListItem
                  disablePadding
                  sx={{ mb: 1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <ListItemButton
                    component={Link}
                    to="/settings"
                    onClick={isMobile ? handleDrawerToggle : undefined}
                    sx={{
                      borderRadius: 2,
                      py: { xs: 1, sm: 1.5 },
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, sm: 40 } }}>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Settings"
                      primaryTypographyProps={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                    />
                  </ListItemButton>
                </MotionListItem>

                <MotionListItem
                  disablePadding
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <ListItemButton
                    onClick={() => {
                      if (isMobile) handleDrawerToggle();
                      handleLogout();
                    }}
                    sx={{
                      borderRadius: 2,
                      py: { xs: 1, sm: 1.5 },
                      color: theme.palette.error.main,
                      '&:hover': {
                        background: alpha(theme.palette.error.main, 0.05),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, sm: 40 }, color: 'inherit' }}>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Logout"
                      primaryTypographyProps={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                    />
                  </ListItemButton>
                </MotionListItem>
              </List>
            </>
          )}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(!open && !isMobile && {
            width: { sm: `calc(100% - ${theme.spacing(7)}px)` },
            ml: { sm: `${theme.spacing(7)}px` },
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>

      {/* Profile Menu */}
      {user && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: { xs: 180, sm: 200 },
              borderRadius: 2,
              boxShadow: theme.shadows[3],
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem
            component={Link}
            to="/profile"
            onClick={handleMenuClose}
            sx={{ py: { xs: 1, sm: 1.5 } }}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/settings"
            onClick={handleMenuClose}
            sx={{ py: { xs: 1, sm: 1.5 } }}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleMenuClose();
              handleLogout();
            }}
            sx={{ py: { xs: 1, sm: 1.5 }, color: theme.palette.error.main }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </MenuItem>
        </Menu>
      )}

      {/* Notifications Menu */}
      {user && (
        <Menu
          anchorEl={notificationsAnchor}
          open={Boolean(notificationsAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              width: { xs: 280, sm: 320 },
              maxHeight: 400,
              borderRadius: 2,
              boxShadow: theme.shadows[3],
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem
            sx={{
              py: { xs: 1, sm: 1.5 },
              borderBottom: `1px solid ${theme.palette.divider}`,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Notifications
            </Typography>
          </MenuItem>
          {notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={handleMenuClose}
              sx={{
                py: { xs: 1.5, sm: 2 },
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                },
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 0.5, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                >
                  {notification.text}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                >
                  {notification.time}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          <MenuItem
            component={Link}
            to="/notifications"
            onClick={handleMenuClose}
            sx={{
              py: { xs: 1, sm: 1.5 },
              justifyContent: 'center',
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            View All Notifications
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
};

export default MainLayout; 