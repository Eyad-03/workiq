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
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import { useEffect } from "react";

const featuredCategories = [
  { label: "Design", icon: "✦", count: "2.4k services", color: "#FF6B6B" },
  { label: "Development", icon: "⬡", count: "5.1k services", color: "#6C63FF" },
  { label: "Marketing", icon: "◈", count: "1.8k services", color: "#43E97B" },
  { label: "Video", icon: "▶", count: "980 services", color: "#FA8231" },
];

function ServicesPage() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const {catId} =useParams()

  const fetchAllServices = async () => {
    try {
      const res = await api.get(`/servicesByCategory/${catId}`);
      setServices(res.data.services);
      console.log(res.data.services)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(function () {
    fetchAllServices();
  }, []);

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
                  backgroundImage: `url(${service.service_image})`,
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
                  label={service.category_name}
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
                       bgcolor:'#6C63FF',
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {" "}
                    {service.provider_nickname}
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
                    {service.provider_name}
                  </Typography>

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
                  {service.service_name}
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
                  {service.service_description}
                </Typography>

                <Stack direction="row" spacing={0.8} flexWrap="wrap" gap={0.8}>
                  {/* service.tags.map((tag) => (
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
                  ))*/}
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
                      {service.rating} ({service.review_count})
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
                      ${service.starting_price}
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  onClick={() => navigate(`/service/detail/${service.service_id}`)}
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
