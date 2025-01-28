import React, { Profiler } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import HeroSection from "./Pages/student/HeroSection";
import StatsSection from "./components/StateSection";
import Courses from "./Pages/student/Courses";
import MyLearning from "./Pages/student/MyLearning";
import Footer from "./components/Footer";
import HS from "./components/Hs";
import Profile from "./Pages/student/Profile";
import Sidebar from "./Pages/admin/Sidebar";
import Dashboard from "./Pages/admin/Dashboard";
import CourseTable from "./Pages/admin/course/CourseTable";
import AddCourse from "./Pages/admin/course/AddCourse";
import EditCourse from "./Pages/admin/course/EditCourse";
import CreateLacture from "./Pages/admin/lecture/CreateLacture";
import EditLecture from "./Pages/admin/lecture/EditLecture";
import CourseDetail from "./Pages/student/CourseDetail";
import CourseProgress from "./Pages/student/CourseProgress";
import SearchPage from "./Pages/student/SearchPage";
import {
  AdminRoute,
  AuthenticatedUser,
  ProtectedRoute,
} from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
// import SearchPage from "./Pages/student/SearchPage";

// Main layout component with Navbar
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Use the MainLayout component
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
            <StatsSection />
            <HS />
            <Footer />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <AuthenticatedUser>
            {" "}
            <Login />
          </AuthenticatedUser>
        ),
      },
      {
        path: "my-learning",
        element: (
          <ProtectedRoute>
            {" "}
            <MyLearning />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            {" "}
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "course/search",
        element: (
          <ProtectedRoute>
            {" "}
            <SearchPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "course-detail/:courseId",
        element: (
          <ProtectedRoute>
            {" "}
            <CourseDetail />
          </ProtectedRoute>
        ),
      },

      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoute>
            {" "}
            <PurchaseCourseProtectedRoute>
              <CourseProgress />
            </PurchaseCourseProtectedRoute>{" "}
          </ProtectedRoute>
        ),
      },

      // adimin routes start from here
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Sidebar />{" "}
          </AdminRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },

          {
            path: "course/:courseId/lecture",
            element: <CreateLacture />,
          },

          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ],
      },
    ],
  },
]);

// Main App Component
export default function Home() {
  return (
    <main>
      <ThemeProvider>

      <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}
