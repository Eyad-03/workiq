import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  Rating,
  InputBase,
  IconButton,
  Tabs,
  Tab,
  Badge,
  Divider,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import TuneIcon from "@mui/icons-material/Tune";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#E8FF47" },
    secondary: { main: "#FF6B6B" },
    background: { default: "#0A0A0F", paper: "#13131A" },
    text: { primary: "#F5F5F7", secondary: "#8A8A9A" },
  },
  typography: {
    fontFamily: "'Syne', sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontFamily: "'DM Sans', sans-serif" },
    body2: { fontFamily: "'DM Sans', sans-serif" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "rgba(232,255,71,0.25)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,255,71,0.15)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 600,
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
        },
      },
    },
  },
});

const categories = ["All", "Design", "Development", "Writing", "Video", "Marketing", "Music"];

const services = [
  {
    id: 1,
    title: "Full-Stack Web Application Development",
    seller: "Alex Chen",
    avatar: "AC",
    avatarColor: "#6C63FF",
    verified: true,
    pro: true,
    rating: 4.9,
    reviews: 312,
    price: 299,
    deliveryDays: 7,
    category: "Development",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Enterprise-grade web apps with modern stack, clean architecture, and pixel-perfect UI.",
  },
  {
    id: 2,
    title: "Brand Identity & Visual Design System",
    seller: "Mia Santos",
    avatar: "MS",
    avatarColor: "#FF6B6B",
    verified: true,
    pro: false,
    rating: 5.0,
    reviews: 189,
    price: 450,
    deliveryDays: 10,
    category: "Design",
    tags: ["Branding", "Figma", "UI/UX"],
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Complete brand identity with logo, color palette, typography, and design tokens.",
  },
  {
    id: 3,
    title: "SEO Content Strategy & Copywriting",
    seller: "James Park",
    avatar: "JP",
    avatarColor: "#43E97B",
    verified: false,
    pro: false,
    rating: 4.7,
    reviews: 94,
    price: 149,
    deliveryDays: 3,
    category: "Writing",
    tags: ["SEO", "Copywriting", "Blog"],
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    description: "Data-driven content that ranks, converts, and builds lasting authority in your niche.",
  },
  {
    id: 4,
    title: "Cinematic Video Editing & Motion Graphics",
    seller: "Lena Müller",
    avatar: "LM",
    avatarColor: "#FA8231",
    verified: true,
    pro: true,
    rating: 4.8,
    reviews: 227,
    price: 349,
    deliveryDays: 5,
    category: "Video",
    tags: ["After Effects", "Premiere", "Motion"],
    image: "linear-gradient(135deg, #fa8231 0%, #f7b731 100%)",
    description: "Hollywood-style edits with custom motion graphics, color grading, and sound design.",
  },
  {
    id: 5,
    title: "Growth Marketing & Paid Ads Strategy",
    seller: "Riya Sharma",
    avatar: "RS",
    avatarColor: "#A29BFE",
    verified: true,
    pro: true,
    rating: 4.9,
    reviews: 156,
    price: 599,
    deliveryDays: 14,
    category: "Marketing",
    tags: ["Meta Ads", "Google Ads", "Analytics"],
    image: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
    description: "Performance marketing that scales — ROAS-focused campaigns with weekly reporting.",
  },
  {
    id: 6,
    title: "Mobile App UI/UX Design (iOS & Android)",
    seller: "Kai Nakamura",
    avatar: "KN",
    avatarColor: "#00CEC9",
    verified: true,
    pro: false,
    rating: 4.6,
    reviews: 73,
    price: 399,
    deliveryDays: 8,
    category: "Design",
    tags: ["iOS", "Android", "Prototyping"],
    image: "linear-gradient(135deg, #00cec9 0%, #0984e3 100%)",
    description: "Intuitive mobile experiences with user research, wireframes, and high-fi Figma prototypes.",
  },
];

const featuredCategories = [
  { label: "Design", icon: "✦", count: "2.4k services", color: "#FF6B6B" },
  { label: "Development", icon: "⬡", count: "5.1k services", color: "#6C63FF" },
  { label: "Marketing", icon: "◈", count: "1.8k services", color: "#43E97B" },
  { label: "Video", icon: "▶", count: "980 services", color: "#FA8231" },
];

export default function Freelance() {
  const [activeTab, setActiveTab] = useState(0);
  const [favorites, setFavorites] = useState({});
  const [search, setSearch] = useState("");

  const toggleFav = (id) => setFavorites((f) => ({ ...f, [id]: !f[id] }));

  const filtered = services.filter((s) => {
    const matchCat = activeTab === 0 || s.category === categories[activeTab];
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>

        {/* NAV */}
        <Box
          component="nav"
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backdropFilter: "blur(20px)",
            bgcolor: alpha("#0A0A0F", 0.85),
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #E8FF47, #43E97B)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BoltIcon sx={{ fontSize: 18, color: "#0A0A0F" }} />
                </Box>
                <Typography variant="h6" sx={{ letterSpacing: "-0.02em", color: "text.primary" }}>
                  Freelink
                </Typography>
              </Stack>

              <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
                {["Explore", "How it Works", "Become a Seller", "Pricing"].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      "&:hover": { color: "text.primary" },
                      transition: "color 0.2s",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <Button variant="text" sx={{ color: "text.secondary" }}>Sign In</Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    color: "#0A0A0F",
                    px: 3,
                    "&:hover": { bgcolor: alpha("#E8FF47", 0.85) },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* HERO */}
        <Box sx={{ position: "relative", overflow: "hidden", pt: 10, pb: 8 }}>
          {/* Background blobs */}
          <Box sx={{
            position: "absolute", top: "-20%", left: "60%",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <Box sx={{
            position: "absolute", top: "10%", left: "-10%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <Container maxWidth="xl">
            <Stack alignItems="center" spacing={4} textAlign="center">
              <Chip
                icon={<StarIcon sx={{ fontSize: "14px !important", color: "#E8FF47 !important" }} />}
                label="Trusted by 100,000+ businesses worldwide"
                sx={{
                  bgcolor: alpha("#E8FF47", 0.1),
                  color: "#E8FF47",
                  border: "1px solid rgba(232,255,71,0.2)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", md: "5rem" },
                  lineHeight: 1.05,
                  maxWidth: 800,
                }}
              >
                Hire the world's{" "}
                <Box component="span" sx={{
                  background: "linear-gradient(90deg, #E8FF47, #43E97B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  top talent
                </Box>{" "}
                on demand
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 520, fontSize: "1.1rem", lineHeight: 1.7 }}
              >
                From design to development, writing to marketing — find expert freelancers ready to bring your ideas to life.
              </Typography>

              {/* Search */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  p: "6px 6px 6px 20px",
                  width: "100%",
                  maxWidth: 580,
                  "&:focus-within": {
                    borderColor: "rgba(232,255,71,0.4)",
                    boxShadow: "0 0 0 3px rgba(232,255,71,0.08)",
                  },
                  transition: "all 0.2s",
                }}
              >
                <SearchIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                <InputBase
                  placeholder="Search services, skills, or freelancers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    flex: 1,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "text.primary",
                    "& input::placeholder": { color: "text.secondary" },
                  }}
                />
                <IconButton
                  sx={{
                    bgcolor: alpha("#E8FF47", 0.1),
                    border: "1px solid rgba(232,255,71,0.2)",
                    color: "#E8FF47",
                    borderRadius: "10px",
                    "&:hover": { bgcolor: alpha("#E8FF47", 0.2) },
                  }}
                >
                  <TuneIcon fontSize="small" />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    color: "#0A0A0F",
                    borderRadius: "10px",
                    px: 3,
                    py: 1.2,
                    "&:hover": { bgcolor: alpha("#E8FF47", 0.85) },
                  }}
                >
                  Search
                </Button>
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                {["Logo Design", "React Developer", "SEO Writing", "Video Editing"].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    onClick={() => setSearch(tag)}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.04)",
                      color: "text.secondary",
                      border: "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.08)", color: "text.primary" },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* CATEGORY CARDS */}
        <Container maxWidth="xl" sx={{ pb: 6 }}>
          <Grid container spacing={2}>
            {featuredCategories.map((cat) => (
              <Grid item xs={6} md={3} key={cat.label}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    p: 3,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: alpha(cat.color, 0.4),
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 40px ${alpha(cat.color, 0.15)}`,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>{cat.icon}</Typography>
                  <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700 }}>{cat.label}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: "'DM Sans'" }}>
                    {cat.count}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* SERVICES SECTION */}
        <Container maxWidth="xl" sx={{ pb: 10 }}>
          <Stack direction="row" alignItems="flex-end" justifyContent="space-between" mb={4}>
            <Box>
              <Typography variant="overline" sx={{ color: "#E8FF47", letterSpacing: "0.12em", fontFamily: "'DM Sans'" }}>
                Browse Services
              </Typography>
              <Typography variant="h3" sx={{ mt: 0.5 }}>Popular right now</Typography>
            </Box>
            <Button endIcon={<ArrowForwardIcon />} sx={{ color: "primary.main", fontFamily: "'Syne'" }}>
              View all
            </Button>
          </Stack>

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            sx={{
              mb: 5,
              "& .MuiTabs-indicator": { bgcolor: "primary.main", height: 3, borderRadius: 2 },
              "& .MuiTab-root": {
                color: "text.secondary",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.9rem",
                minWidth: "auto",
                px: 2,
                "&.Mui-selected": { color: "primary.main" },
              },
              "& .MuiTabs-flexContainer": { gap: 1 },
            }}
          >
            {categories.map((cat, i) => (
              <Tab key={cat} label={cat} value={i} />
            ))}
          </Tabs>

          {/* Cards Grid */}
          <Grid container spacing={3}>
            {filtered.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <Card sx={{ bgcolor: "background.paper", height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Image */}
                  <Box
                    sx={{
                      height: 180,
                      background: service.image,
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 2,
                    }}
                  >
                    {/* Pro badge */}
                    {service.pro && (
                      <Chip
                        icon={<WorkspacePremiumIcon sx={{ fontSize: "14px !important" }} />}
                        label="PRO"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          bgcolor: alpha("#E8FF47", 0.15),
                          backdropFilter: "blur(10px)",
                          color: "#E8FF47",
                          border: "1px solid rgba(232,255,71,0.3)",
                          fontWeight: 700,
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                        }}
                      />
                    )}

                    {/* Favorite */}
                    <IconButton
                      onClick={() => toggleFav(service.id)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        bgcolor: "rgba(10,10,15,0.5)",
                        backdropFilter: "blur(10px)",
                        color: favorites[service.id] ? "#FF6B6B" : "white",
                        "&:hover": { bgcolor: "rgba(10,10,15,0.7)" },
                      }}
                    >
                      {favorites[service.id] ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                    </IconButton>

                    {/* Category chip */}
                    <Chip
                      label={service.category}
                      size="small"
                      sx={{
                        bgcolor: "rgba(10,10,15,0.5)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.15)",
                        fontFamily: "'DM Sans'",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1.5, p: 2.5 }}>
                    {/* Seller */}
                    <Stack direction="row" alignItems="center" spacing={1.2}>
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                          bgcolor: service.avatarColor,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                        }}
                      >
                        {service.avatar}
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", fontFamily: "'DM Sans'" }}>
                        {service.seller}
                      </Typography>
                      {service.verified && (
                        <VerifiedIcon sx={{ fontSize: 14, color: "#6C63FF" }} />
                      )}
                    </Stack>

                    {/* Title */}
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, lineHeight: 1.4, color: "text.primary", fontFamily: "'Syne'" }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", lineHeight: 1.6, fontFamily: "'DM Sans'", display: "block" }}
                    >
                      {service.description}
                    </Typography>

                    {/* Tags */}
                    <Stack direction="row" spacing={0.8} flexWrap="wrap" gap={0.8}>
                      {service.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.04)",
                            color: "text.secondary",
                            border: "1px solid rgba(255,255,255,0.07)",
                            fontSize: "0.68rem",
                            height: 22,
                          }}
                        />
                      ))}
                    </Stack>

                    <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

                    {/* Rating + Price */}
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" alignItems="center" spacing={0.8}>
                        <Rating
                          value={service.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{ "& .MuiRating-iconFilled": { color: "#E8FF47" }, fontSize: "0.9rem" }}
                        />
                        <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: "'DM Sans'", fontWeight: 500 }}>
                          {service.rating} ({service.reviews})
                        </Typography>
                      </Stack>
                      <Stack alignItems="flex-end">
                        <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: "'DM Sans'" }}>
                          Starting at
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 800, color: "primary.main", fontFamily: "'Syne'", lineHeight: 1 }}
                        >
                          ${service.price}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        mt: "auto",
                        borderColor: "rgba(232,255,71,0.3)",
                        color: "primary.main",
                        "&:hover": {
                          bgcolor: alpha("#E8FF47", 0.06),
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      View Offer · {service.deliveryDays}d delivery
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filtered.length === 0 && (
            <Box textAlign="center" py={10}>
              <Typography variant="h5" sx={{ color: "text.secondary" }}>No services found</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, fontFamily: "'DM Sans'" }}>
                Try a different search or category
              </Typography>
            </Box>
          )}
        </Container>

        {/* CTA BANNER */}
        <Box sx={{ bgcolor: "background.paper", borderTop: "1px solid rgba(255,255,255,0.06)", py: 10 }}>
          <Container maxWidth="md">
            <Stack alignItems="center" spacing={3} textAlign="center">
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" } }}>
                Ready to build something{" "}
                <Box component="span" sx={{
                  background: "linear-gradient(90deg, #E8FF47, #43E97B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  amazing?
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 440, fontSize: "1.05rem", fontFamily: "'DM Sans'" }}>
                Join over 100,000 businesses working with top-rated freelancers every day.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "primary.main",
                    color: "#0A0A0F",
                    px: 4,
                    py: 1.6,
                    fontSize: "1rem",
                    "&:hover": { bgcolor: alpha("#E8FF47", 0.85) },
                  }}
                >
                  Find a Freelancer
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "text.primary",
                    px: 4,
                    py: 1.6,
                    fontSize: "1rem",
                    "&:hover": { borderColor: "rgba(255,255,255,0.3)", bgcolor: "rgba(255,255,255,0.04)" },
                  }}
                >
                  Become a Seller
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
