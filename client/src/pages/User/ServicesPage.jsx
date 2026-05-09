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
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import TuneIcon from "@mui/icons-material/Tune";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    description:
      "Enterprise-grade web apps with modern stack, clean architecture, and pixel-perfect UI.",
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
    description:
      "Complete brand identity with logo, color palette, typography, and design tokens.",
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
    description:
      "Data-driven content that ranks, converts, and builds lasting authority in your niche.",
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
    description:
      "Hollywood-style edits with custom motion graphics, color grading, and sound design.",
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
    description:
      "Performance marketing that scales — ROAS-focused campaigns with weekly reporting.",
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
    description:
      "Intuitive mobile experiences with user research, wireframes, and high-fi Figma prototypes.",
  },
];

const featuredCategories = [
  { label: "Design", icon: "✦", count: "2.4k services", color: "#FF6B6B" },
  { label: "Development", icon: "⬡", count: "5.1k services", color: "#6C63FF" },
  { label: "Marketing", icon: "◈", count: "1.8k services", color: "#43E97B" },
  { label: "Video", icon: "▶", count: "980 services", color: "#FA8231" },
];

function ServicesPage() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#fdfdfd" }}>
 

      <Box sx={{ mt: 14, px: 14 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#17a673",
            letterSpacing: "0.2em",
            fontWeight: 700,
            fontSize: "0.75rem",
            fontFamily: "'DM Sans', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Browse Services
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
            fontSize: { xs: "2.5rem", md: "3.25rem" }, // Responsive sizing
            fontFamily: "'Playfair Display', serif", // A serif font adds "Boutique" elegance
            lineHeight: 1.2,
          }}
        >
          Popular <span style={{ color: "#555" }}>right now</span>
        </Typography>
      </Box>

      <Grid container spacing={6} sx={{ mt: 10, px: 12 }}>
        {services.map((service) => (
          <Grid item sx={{ maxWidth: "400px", width: "100%" }} size={{ md: 4 }}>
            <Card
              sx={{
                bgcolor: "background.paper",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "rgba(10,10,15,0.5)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    "&:hover": { bgcolor: "rgba(10,10,15,0.7)" },
                  }}
                >
                  <FavoriteIcon fontSize="small" />
                </IconButton>

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

              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  p: 2.5,
                }}
              >
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
                    {" "}
                    {service.avatar}
                  </Avatar>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      fontFamily: "'DM Sans'",
                    }}
                  >
                    {" "}
                    {service.seller}
                  </Typography>
                  {service.verified && (
                    <VerifiedIcon sx={{ fontSize: 14, color: "#6C63FF" }} />
                  )}
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: "text.primary",
                    fontFamily: "'Syne'",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans'",
                    display: "block",
                  }}
                >
                  {service.description}
                </Typography>

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

                <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.06)" }} />

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <Rating
                      value={service.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-iconFilled": { color: "#E8FF47" },
                        fontSize: "0.9rem",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontFamily: "'DM Sans'",
                        fontWeight: 500,
                      }}
                    >
                      {service.rating} ({service.reviews})
                    </Typography>
                  </Stack>
                  <Stack alignItems="flex-end">
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontFamily: "'DM Sans'",
                      }}
                    >
                      Starting at
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        fontFamily: "'Syne'",
                        lineHeight: 1,
                      }}
                    >
                      ${service.price}
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  sx={{
                    border: "1px solid #6C63FF",
                    borderRadius: 5,
                    transition: "background-color 0.4s ease, color 0.4s ease",
                    "&:hover": { bgcolor: "#6C63FF", color: "white" },
                  }}
                >
                  View Offer
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
}

export default ServicesPage;
