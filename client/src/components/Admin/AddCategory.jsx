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

function AddService({ open, onSetOpen }) {
  const { user, loading } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  console.log(user);

  const [newService, setNewService] = useState({
    service_name: "",
    category_name: "",
    service_description: "",
    service_image: "",
    provider_name: user.name,
    provider_id: user.role ==='admin' ? null:user.userid,
    starting_price: '',
  });

  useEffect(() => {
    if (user) {
      setNewService((prev) => ({
        ...prev,
        provider_name: user.name,
        provider_id: user.userid,
      }));
    }
  }, [user]);

  const fetchAllCategory = async () => {
    try {
      const res = await api.get("/categories");
      if (res.status !== 200) {
        toast.error(res.data.message);
      }
      setCategories(res.data.categories);
      console.log(res.data.categories);
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(function () {
    fetchAllCategory();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await api.post("/create/service", newService);
      if (res.status !== 201) {
        toast.error(res.data.message);
      }
      toast.success(res.data.message);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const handlAddService = async () => {
    try {
      const res = await api.post("", newService);

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
        Add New Service
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }} k>
          <TextField
            fullWidth
            label="Service Name"
            onChange={(e) =>
              setNewService({ ...newService, service_name: e.target.value })
            }
          />
          <TextField
            fullWidth
            select
            label="Category"
            onChange={(e) =>
              setNewService({ ...newService, category_name: e.target.value })
            }
          >
            {categories.map((option) => (
              <MenuItem key={option.category_id} value={option.category_name}>
                {option.category_name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="URL image"
            onChange={(e) =>
              setNewService({ ...newService, service_image: e.target.value })
            }
          />

          <TextField
            onChange={(e) =>
              setNewService({ ...newService, starting_price: e.target.value })
            }
            fullWidth
            type="number"
            label="Starting Price"
            InputProps={{ startAdornment: <Box sx={{ mr: 1 }}>$</Box> }}
          />

            {user.role==='admin' &&

              <TextField
              onChange={(e) =>
                setNewService({ ...newService, provider_id: e.target.value })
              }
              fullWidth
              label="Provider id"
              
              />
            }

          <TextareaAutosize
            minRows={4}
            maxRows={8}
            fullWidth
            placeholder="write service description"
            onChange={(e) =>
              setNewService({
                ...newService,
                service_description: e.target.value,
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

export default AddService;
