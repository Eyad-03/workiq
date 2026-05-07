import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import {
  CheckCircle,
  Email,
  FavoriteBorder,
  Language,
  LocationOn,
} from '@mui/icons-material';
import NavBar from '../../components/User/NavBar';

export default function ServiceDetailPage() {
  const previousWorks = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      title: 'E-Commerce Dashboard',
      category: 'Web Application',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
      title: 'SaaS Landing Page',
      category: 'UI/UX Design',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      title: 'Task Management Platform',
      category: 'Full Stack Development',
    },
  ];

  const packages = [
    {
      title: 'Basic',
      price: '$149',
      features: ['Responsive Design', '2 Pages', 'Basic SEO'],
    },
    {
      title: 'Standard',
      price: '$299',
      features: ['5 Pages', 'API Integration', 'Responsive UI'],
    },
    {
      title: 'Premium',
      price: '$599',
      features: ['Unlimited Pages', 'Dashboard', 'Priority Support'],
    },
  ];

  return (
    <Box sx={{ background: '#f4f7fb', minHeight: '100vh', py: 20 }}>
        <NavBar/>
      <Container maxWidth="xl">

        {/* TOP SECTION */}
        <Grid container spacing={4} alignItems="flex-start">

          {/* HERO */}
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              <Box
                sx={{
                  minHeight: 540,
                  background:
                    'linear-gradient(135deg,#5B6CFF 0%,#7F56D9 50%,#8B5CF6 100%)',
                  position: 'relative',
                  p: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >

                {/* TOP */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip
                    label="Development"
                    sx={{
                      background: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      backdropFilter: 'blur(10px)',
                      fontWeight: 600,
                    }}
                  />

                  <IconButton
                    sx={{
                      background: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                    }}
                  >
                    <FavoriteBorder />
                  </IconButton>
                </Stack>

                {/* CENTER */}
                <Box>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 900,
                      lineHeight: 1.1,
                      mb: 3,
                      fontSize: {
                        xs: '2.5rem',
                        md: '4.5rem',
                      },
                    }}
                  >
                    Full-Stack Web
                    <br />
                    Application
                    <br />
                    Development
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: 18,
                      lineHeight: 1.9,
                      maxWidth: 700,
                    }}
                  >
                    Build scalable, modern, and high-performance web
                    applications using React, Node.js, and cloud-ready
                    architecture tailored for startups and businesses.
                  </Typography>
                </Box>

                {/* BOTTOM */}
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    spacing={4}
                  >

                    <Stack direction="row" spacing={5}>
                      <Box>
                        <Typography
                          sx={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                          Delivery
                        </Typography>

                        <Typography
                          sx={{
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: 22,
                          }}
                        >
                          7 - 14 Days
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                          Rating
                        </Typography>

                        <Typography
                          sx={{
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: 22,
                          }}
                        >
                          ⭐ 4.9
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                          Starting At
                        </Typography>

                        <Typography
                          sx={{
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: 22,
                          }}
                        >
                          $299
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 4,
                          background: '#fff',
                          color: '#5B6CFF',
                          fontWeight: 700,
                          '&:hover': {
                            background: '#fff',
                          },
                        }}
                      >
                        Continue
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 4,
                          color: '#fff',
                          borderColor: 'rgba(255,255,255,0.3)',
                        }}
                      >
                        Contact
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* PROFILE CARD */}
          <Grid item xs={12} lg={4} >
            <Card
              sx={{
                borderRadius: 5,
                position: 'sticky',
                top: 30,
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                px:13,
                py:5
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack spacing={3} alignItems="center">
                  <Avatar
                    src="https://i.pravatar.cc/300"
                    sx={{ width: 110, height: 110 }}
                  />

                  <Box textAlign="center">
                    <Typography variant="h5" fontWeight={800}>
                      Alex Chen
                    </Typography>

                    <Typography color="text.secondary">
                      Senior Full-Stack Developer
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={4}>
                    <Box textAlign="center">
                      <Typography fontWeight={900}>98%</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Success
                      </Typography>
                    </Box>

                    <Box textAlign="center">
                      <Typography fontWeight={900}>120+</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Projects
                      </Typography>
                    </Box>

                    <Box textAlign="center">
                      <Typography fontWeight={900}>5 Years</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Experience
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider flexItem />

                  <Stack spacing={2} width="100%">
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Email color="primary" />
                      <Typography variant="body2">
                        alexchen@gmail.com
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Language color="primary" />
                      <Typography variant="body2">
                        www.alexportfolio.com
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <LocationOn color="primary" />
                      <Typography variant="body2">
                        San Francisco, USA
                      </Typography>
                    </Stack>
                  </Stack>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      background:
                        'linear-gradient(135deg,#5B6CFF,#7F56D9)',
                    }}
                  >
                    Hire Me
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ABOUT SERVICE */}
        <Card
          sx={{
            mt: 5,
            borderRadius: 6,
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h4" fontWeight={900} mb={3}>
              About This Service
            </Typography>

            <Typography
              sx={{
                lineHeight: 2,
                color: 'text.secondary',
                fontSize: 16,
              }}
            >
              I will create a complete full-stack web application with
              responsive design, authentication systems, APIs,
              dashboards, scalable backend architecture, and modern
              UI/UX tailored for startups and SaaS businesses.
            </Typography>

            <Grid container spacing={2} mt={3}>
              {[
                'React.js',
                'Node.js',
                'MongoDB',
                'REST API',
                'Responsive Design',
                'Authentication',
                'Dashboard UI',
              ].map((skill) => (
                <Grid item key={skill}>
                  <Chip
                    label={skill}
                    sx={{
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      fontWeight: 700,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* PREVIOUS WORK */}
        <Box mt={6}>
          <Typography variant="h4" fontWeight={900} mb={4}>
            Previous Work
          </Typography>

          <Grid container spacing={4}>
            {previousWorks.map((work) => (
              <Grid item xs={12} md={4} key={work.id}>
                <Card
                  sx={{
                    borderRadius: 6,
                    overflow: 'hidden',
                    boxShadow:
                      '0 10px 30px rgba(0,0,0,0.06)',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={work.image}
                    alt={work.title}
                  />

                  <CardContent>
                    <Typography fontWeight={800} mb={1}>
                      {work.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {work.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* PACKAGES */}
        <Box mt={6}>
          <Typography variant="h4" fontWeight={900} mb={4}>
            Service Packages
          </Typography>

          <Grid container spacing={4}>
            {packages.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    borderRadius: 6,
                    p: 2,
                    height: '100%',
                    boxShadow:
                      '0 10px 30px rgba(0,0,0,0.06)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" fontWeight={800}>
                      {item.title}
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight={900}
                      sx={{
                        color: '#5B6CFF',
                        my: 3,
                      }}
                    >
                      {item.price}
                    </Typography>

                    <Stack spacing={2} mb={4}>
                      {item.features.map((feature) => (
                        <Stack
                          key={feature}
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >
                          <CheckCircle
                            sx={{
                              color: '#22C55E',
                              fontSize: 20,
                            }}
                          />

                          <Typography>{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        py: 1.5,
                        borderRadius: 4,
                        background:
                          'linear-gradient(135deg,#5B6CFF,#7F56D9)',
                      }}
                    >
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}