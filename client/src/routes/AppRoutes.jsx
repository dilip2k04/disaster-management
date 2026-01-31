import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/user/Dashboard";
import Alerts from "../pages/user/Alerts";
import AdminDashboard from "../pages/admin/AdminDashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import AppLayout from "../components/AppLayout";
import AdminAlerts from "../pages/admin/AdminAlerts";
import AdminUsers from "../pages/admin/AdminUsers";
import SafetyMap from "../pages/user/SafetyMap";
import Todo from "../pages/user/Todo";
import Missing from "../pages/user/Missing";
import MissingAdmin from "../pages/admin/MissingAdmin";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Layout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="user">
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/safety-map"
          element={
            <ProtectedRoute role="user">
              <AppLayout>
                <SafetyMap />
              </AppLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/alerts"
          element={
            <ProtectedRoute role="user">
              <AppLayout>
                <Alerts />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/todo"
          element={
            <ProtectedRoute role="user">
              <AppLayout>
                <Todo />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        
        <Route path="/missing" element={<AppLayout><Missing/></AppLayout>} />


        {/* Admin Layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AppLayout>
                <AdminDashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/alerts"
          element={
            <ProtectedRoute role="admin">
              <AppLayout>
                <AdminAlerts />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <AppLayout>
                <AdminUsers />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/admin/missing" element={
          <ProtectedRoute role="admin">
            <AppLayout><MissingAdmin/></AppLayout>
          </ProtectedRoute>
        }/>

      </Routes>
    </BrowserRouter>
  );
}
