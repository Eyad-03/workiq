import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import api from "../../api";
import toast from "react-hot-toast";



const UserData = () => {
  const [users, setUser] = useState([]);

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return { color: "#ff4d4f", bg: "#fff1f0" };
      case "provider":
        return { color: "#1890ff", bg: "#e6f7ff" };
      default:
        return { color: "#595959", bg: "#f5f5f5" };
    }
  };

  const fetchAllUser = async () => {
    try {
      const res = await api.get("/allUsers");
      if (res.status !== 201) {
        toast.error(res.data.message);
      }

      setUser(res.data.users);
      console.log(res.data.users)
      toast.success(res.data.message)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(function () {
    fetchAllUser();
  }, []);

  return (
    <Box sx={{ p: 4, display: "flex" }}>
      <TableContainer
        component={Paper}
        sx={{
          mt: 10,
          maxWidth: 900,
          borderRadius: "16px", // Softer corners
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.26)", // Modern soft shadow
          border: "1px solid #edf2f7",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a202c" }}>
            User Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {users.length} Total Users
          </Typography>
        </Box>

        <Table aria-label="user data table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f8fafc" }}>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#64748b",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                }}
              >
                User
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#64748b",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#64748b",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const roleStyle = getRoleColor(user.role);
                return (

                    <TableRow
                    key={user.userid}
                    sx={{
                        "&:hover": { bgcolor: "#f1f5f9", transition: "0.3s" },
                        cursor: "pointer",
                    }}
                    >
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                            width: 32,
                            height: 32,
                            fontSize: "1rem",
                            bgcolor: "#0f172a",
                        }}
                        >
                        {user.name.charAt(0)}
                      </Avatar>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, color: "#334155" }}
                        >
                       {user.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#64748b" }}>{user.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      size="small"
                      sx={{
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          color: roleStyle.color,
                          bgcolor: roleStyle.bg,
                          border: "none",
                        }}
                        />
                  </TableCell>
                </TableRow>
                    )
              
            })}
            </TableBody>
            </Table>
            </TableContainer>
            </Box>
  );
};

export default UserData;
