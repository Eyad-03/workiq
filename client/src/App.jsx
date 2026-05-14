import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import UserProfile from "./pages/User/UserProfile";
import Payment from "./pages/User/Payment";
import Cart from "./pages/User/Cart";
import Home from "./pages/User/Home";
import ServicesPage from "./pages/User/ServicesPage";
import Test from "./pages/User/test";
import ServiceDetailPage from "./pages/User/ServiceDetailPage";
import UserLayout from "./pages/User/UserLayout";
import DashBoard from "./pages/Shared/DashBoard";
import Edit from "./pages/Admin/Edit";
import { Toaster } from "react-hot-toast";
import ProviderProfile from "./pages/provider/ProviderProfile";
import UserData from "./components/Admin/UserData";

function App() {
  return (
    <>
        {/* User pages */}
        <Toaster position="top-center" />
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services/:catId" element={<ServicesPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/service/detail/:serviceId" element={<ServiceDetailPage />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          {/* ------------------------ Admin pages -------------------------------*/}


            <Route element={<DashBoard />}>
            <Route path="/user/data" element={<UserData />} />
            
          </Route>

            {/*------------------- Provider pages ---------------------------- */}
          <Route element={<DashBoard />}>
            <Route path="/edit" element={<Edit />} />
            <Route path="/provider/profile" element={<ProviderProfile/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
