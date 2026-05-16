import {
  Box,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TextareaAutosize,
  MenuItem,
} from "@mui/material";
import api from "../../api";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

function AddCategory({ open, onSetOpen }) {
  const { user, loading } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  console.log(user);

  const [newCategory, setNewCategory] = useState({
    category_name: "",
    category_description: "",
    image_url: "",
  });

 
  const handleSubmit = async () => {
    try {
      const res = await api.post("/create/category", newCategory);
      if (res.status !== 201) {
        toast.error(res.data.message);
      }
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          padding: 1,
          width: "100%",
          maxWidth: "450px",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 800, color: "#0f172a" }}>
        Add New Category
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }} k>
          <TextField
            fullWidth
            label="Category Name"
            onChange={(e) =>
              setNewCategory({ ...newCategory, category_name: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="URL image"
            onChange={(e) =>
              setNewCategory({ ...newCategory, image_url: e.target.value })
            }
          />

          <TextareaAutosize
            minRows={4}
            maxRows={8}
            fullWidth
            placeholder="Write Category description"
            onChange={(e) =>
              setNewCategory({
                ...newCategory,
                category_description: e.target.value,
              })
            }
          />
        </Stack>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => onSetOpen(false)}
            sx={{ color: "#64748b", fontWeight: 700 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              borderRadius: "10px",
              fontWeight: 700,
              px: 3,
            }}
          >
            Create Service
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddCategory;
