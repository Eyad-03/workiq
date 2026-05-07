import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Link,
  Grid,
  Card,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import VideocamIcon from "@mui/icons-material/Videocam";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DrawIcon from "@mui/icons-material/Draw";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NavBar from "../../components/User/NavBar";
import office from "../../image/office.png";
import Footer from "../../components/User/Footer";

const popularInfo = [
  {
    icon: <CodeIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Code",
  },
  {
    icon: <VideocamIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Video",
  },
  {
    icon: <ShowChartIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Digital Marketing",
  },
  {
    icon: <TextSnippetIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Translate",
  },
  {
    icon: <DrawIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Graphic Design",
  },
  {
    icon: <LocalGroceryStoreIcon sx={{ color: "#17a673", fontSize: "40px" }} />,
    serviceName: "Cart",
  },
];

const features = [
  {
    title: "Heading 1",
    description:
      "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum.",
  },
  {
    title: "Heading 2",
    description:
      "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum.",
  },
  {
    title: "Heading 3",
    description:
      "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum.",
    active: true,
  },
];

const categories = [
  {
    title: "Graphic & Design",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
  },
  {
    title: "Cartoon Animation",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
  },
  {
    title: "Illustration",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
  },
  {
    title: "Flyers & Vouchers",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=400",
  },
  {
    title: "Logo Design",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
  },
  {
    title: "Social graphics",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400",
  },
  {
    title: "Article writing",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
  },
  {
    title: "Video Editing",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
  },
];

function Home() {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#fdfdfd" }}>
      <NavBar />

      <Box
        sx={{
          background: "linear-gradient(135deg, #2c4a73 0%, #162a4a 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 15 },
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                  maxWidth: "500px",
                }}
              >
                The Standards chunk of Lorem Ipsum
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, fontWeight: 300, opacity: 0.9, maxWidth: "450px" }}
              >
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#1cc88a",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: "#17a673" },
                }}
              >
                Reproduced Bef
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src=""
                sx={{
                  width: "100%",
                  pt: "100%", // Creates a square aspect ratio
                  bgcolor: "#c4c4c4",
                  borderRadius: 1,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 15 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 600 }}>
          Most Popular Service
        </Typography>

        <Grid
          container
          spacing={5}
          sx={{ display: "flex", justifyContent: "center", p: 10 }}
        >
          {popularInfo.map((item) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                  boxShadow: "10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff", // Neumorphism light touch
                  border: "none",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1cc88a 0%, #13855c 100%)",
                    color: "white",
                    "& .MuiSvgIcon-root": { color: "white" },
                  },
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(28, 200, 138, 0.1)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.serviceName}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "#e0e9e9", py: 10 }}>
        <Container>
          <Grid container spacing={19} alignItems="center">
            <Grid>
              <Typography
                variant="h5"
                sx={{ color: "#3f51b5", fontWeight: "bold", mb: 4 }}
              >
                Discover Our Outstanding Features
              </Typography>
              <Stack spacing={5}>
                {features.map((item) => (
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      bgcolor: "white",
                      borderRadius: 2,
                      maxWidth: 400,
                      width: "100%",
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <CheckCircleIcon sx={{ color: "#2e7d32", mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0 }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Grid>

            <Grid>
              <img src={office} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
          Here are Something You'd Need
        </Typography>

        <Grid container spacing={3}>
          {categories.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  height: 160,
                  borderRadius: 4, // 4 * 8px = 32px or use '16px'
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                  // The Overlay
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    zIndex: 1, // Ensures text is above the overlay
                    position: "relative",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
