import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Avatar,
  Stack,
  InputBase,
  Button,
  IconButton,
  Tooltip,
  LinearProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  TuneRounded as FilterIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";
import api from "../../api";
import toast from "react-hot-toast";

const categoryColors = [
  { bg: "#fdf4ff", color: "#9333ea", avatar: "linear-gradient(135deg, #f3e8ff, #e9d5ff)" },
  { bg: "#fff7ed", color: "#c2410c", avatar: "linear-gradient(135deg, #ffedd5, #fed7aa)" },
  { bg: "#eff6ff", color: "#1d4ed8", avatar: "linear-gradient(135deg, #dbeafe, #bfdbfe)" },
  { bg: "#f0fdf4", color: "#15803d", avatar: "linear-gradient(135deg, #dcfce7, #bbf7d0)" },
  { bg: "#fdf2f8", color: "#be185d", avatar: "linear-gradient(135deg, #fce7f3, #fbcfe8)" },
  { bg: "#f0f9ff", color: "#0369a1", avatar: "linear-gradient(135deg, #e0f2fe, #bae6fd)" },
];

const getColorStyle = (index) => categoryColors[index % categoryColors.length];

const CategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
const [open, setOpen] = useState(false);
  const fetchAllCategories = async () => {
    try {
      setLoading(true);
      const res = await api.get("/categories");
      if (res.status === 200 || res.status === 201) {
        setCategories(res.data.categories);
        toast.success("Categories loaded");
      }
    } catch (err) {
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      const res = await api.delete(`/delete/category/${categoryId}`);
      toast.success(res.data.message);
      setCategories(categories.filter((cat) => cat.category_id !== categoryId));
    } catch (err) {
      toast.error("Failed to delete category");
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const filtered = categories.filter((c) =>
    c.category_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, minHeight: "100vh", mt: 10 }}>
      <Paper
        elevation={8}
        sx={{
          borderRadius: "20px",
          border: "1px solid #e8edf5",
          overflow: "hidden",
          background: "#fff",
          boxShadow:
            "0 8px 32px -4px rgba(99,102,241,0.08), 0 2px 8px -2px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 2.5,
            borderBottom: "1px solid #f1f5f9",
            background: "linear-gradient(to right, #fafbff, #f6f8fe)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    width: 8,
                    height: 32,
                    borderRadius: "4px",
                    background: "linear-gradient(180deg, #6366f1, #818cf8)",
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}
                  >
                    Category Catalog
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                    {filtered.length} of {categories.length} categories
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#f1f5f9",
                  px: 2,
                  py: 0.8,
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s",
                  "&:focus-within": {
                    border: "1px solid #6366f1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    background: "#fff",
                  },
                }}
              >
                <SearchIcon sx={{ color: "#94a3b8", fontSize: 18, mr: 1 }} />
                <InputBase
                  placeholder="Search categories..."
                  sx={{ fontSize: "0.85rem", width: 180 }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Box>

              <IconButton
                sx={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  p: 1,
                  color: "#64748b",
                  "&:hover": { background: "#f1f5f9" },
                }}
              >
                <FilterIcon fontSize="small" />
              </IconButton>

              <Button
              onClick={()=>setOpen(!open)}
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                    boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
                  },
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2.5,
                  py: 1,
                  boxShadow: "0 2px 8px rgba(99,102,241,0.25)",
                  transition: "all 0.2s",
                }}
              >
                New Category
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Loading Bar */}
        {loading && (
          <LinearProgress
            sx={{ "& .MuiLinearProgress-bar": { background: "#6366f1" } }}
          />
        )}

        {/* Table */}
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow sx={{ background: "#fafbff" }}>
                {["Category", "Category ID", "Description", "Actions"].map(
                  (h, i) => (
                    <TableCell
                      key={h}
                      align={i === 3 ? "right" : "left"}
                      sx={{
                        fontWeight: 700,
                        color: "#94a3b8",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        py: 2,
                        borderBottom: "2px solid #f1f5f9",
                      }}
                    >
                      {h}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((category, idx) => {
                const colorStyle = getColorStyle(idx);
                const isHovered = hoveredRow === category.category_id;

                return (
                  <TableRow
                    key={category.category_id}
                    onMouseEnter={() => setHoveredRow(category.category_id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    sx={{
                      background: isHovered ? "#fafbff" : "transparent",
                      transition: "background 0.15s ease",
                      "& td": { borderBottom: "1px solid #f1f5f9" },
                      "&:last-child td": { borderBottom: "none" },
                    }}
                  >
                    {/* Category Name + Avatar */}
                    <TableCell sx={{ py: 2 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          variant="rounded"
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            background: colorStyle.avatar,
                            color: colorStyle.color,
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            boxShadow: isHovered
                              ? "0 4px 12px rgba(99,102,241,0.2)"
                              : "none",
                            transition: "box-shadow 0.2s",
                          }}
                        >
                          {category.category_name?.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: "#1e293b",
                            fontSize: "0.9rem",
                          }}
                        >
                          {category.category_name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    {/* Category ID */}
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          color: "#94a3b8",
                          fontFamily: "monospace",
                          background: "#f8fafc",
                          px: 0.8,
                          py: 0.4,
                          borderRadius: "6px",
                          border: "1px solid #e2e8f0",
                          display: "inline-block",
                        }}
                      >
                        CAT-{category.category_id.toString().padStart(3, "0")}
                      </Typography>
                    </TableCell>

                    {/* Description */}
                    <TableCell sx={{ maxWidth: 320 }}>
                      <Typography
                        sx={{
                          fontSize: "0.82rem",
                          color: "#64748b",
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {category.description || (
                          <span style={{ color: "#cbd5e1", fontStyle: "italic" }}>
                            No description provided
                          </span>
                        )}
                      </Typography>
                    </TableCell>

                    {/* Actions */}
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        spacing={0.5}
                        justifyContent="flex-end"
                      >
                        <Tooltip title="Edit category">
                          <IconButton
                            size="small"
                            sx={{
                              color: "#6366f1",
                              background: isHovered ? "#eff0fe" : "transparent",
                              borderRadius: "10px",
                              transition: "all 0.15s",
                              "&:hover": {
                                background: "#e0e2fd",
                                transform: "scale(1.08)",
                              },
                            }}
                          >
                            <EditIcon sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => handleDelete(category.category_id)}
                            size="small"
                            sx={{
                              color: "#ef4444",
                              background: isHovered ? "#fef2f2" : "transparent",
                              borderRadius: "10px",
                              transition: "all 0.15s",
                              "&:hover": {
                                background: "#fee2e2",
                                transform: "scale(1.08)",
                              },
                            }}
                          >
                            <DeleteIcon sx={{ fontSize: 17 }} />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}

              {filtered.length === 0 && !loading && (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 6 }}>
                    <Typography sx={{ color: "#94a3b8", fontWeight: 600 }}>
                      No categories found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <CategoryData open={open} onSetOpen={setOpen}/>
    </Box>
  );
};

export default CategoryData;