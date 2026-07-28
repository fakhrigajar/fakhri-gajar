import { useState } from "react";
import "../assets/styles/tailwind.css";
import "remixicon/fonts/remixicon.css";
import { getToken } from "../lib/adminApi";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(() => Boolean(getToken()));

  if (!loggedIn) {
    return <AdminLogin onSuccess={() => setLoggedIn(true)} />;
  }

  return <AdminDashboard onLogout={() => setLoggedIn(false)} />;
}

export default AdminApp;
