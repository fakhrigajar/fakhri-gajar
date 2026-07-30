import { useState } from "react";
import { ConfigProvider } from "antd";
import "../assets/styles/tailwind.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getToken } from "../lib/adminApi";
import { antdThemeConfig } from "./antdTheme";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(() => Boolean(getToken()));

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {loggedIn ? (
        <AdminDashboard onLogout={() => setLoggedIn(false)} />
      ) : (
        <AdminLogin onSuccess={() => setLoggedIn(true)} />
      )}
    </ConfigProvider>
  );
}

export default AdminApp;
