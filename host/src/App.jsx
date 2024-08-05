import React, { useState, useRef } from "react";
import Button from "remoteApp/Button";
import DemoApp from "remote2/DemoApp";
import MappZen from "mappZen/MappZen";
import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Ballooning from "./Ballooning";
import Navbar from "./components/Navbar";
import SideNavItems from "./components/SideNav";
import ChatBot from "./components/ChatBot";
// import Inspections from "inspection/Inspections";
// import Ballooning from "ballooning/Dashboard";
// import BallooningPlans from "ballooning/Plans";
// import BallooningPlanParameters from "ballooning/PlanParameters";
import { LoginForm } from "./components/LoginPage";
import Upgrade from "./pages/utility/Upgrade";

const loadComponent = (importFunc) => {
  return React.lazy(() =>
    importFunc().catch((error) => {
      console.error("Failed to load remote component:", error);
      return { default: () => <Upgrade /> };
    })
  );
};

const MappEye = lazy(() => import("mappEye/MappEye"));
const Dashboard = loadComponent(() => import("ballooning/Dashboard"));
const Plans = loadComponent(() => import("ballooning/Plans"));
const PlanParameters = loadComponent(() => import("ballooning/PlanParameters"));
const Inspections = loadComponent(() => import("inspection/Inspections"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <div>404 Not Found</div>
            </Layout>
          }
        />
        <Route path="/login" element={<LoginForm />} errorElement={<div>404 Not Found</div>} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/ballooning"
          element={
            <Layout>
              {" "}
              <Dashboard />{" "}
            </Layout>
          }
        />
        <Route
          path="/plans"
          element={
            <Layout>
              {" "}
              <Plans />{" "}
            </Layout>
          }
        />
        <Route
          path="/plan_parameters/:PlanId"
          element={
            <Layout>
              {" "}
              <PlanParameters />{" "}
            </Layout>
          }
        />
        <Route
          path="/mappZen"
          element={
            <Layout>
              {" "}
              <MappZen />{" "}
            </Layout>
          }
        />
        <Route
          path="/configuration"
          element={
            <Layout>
              <DemoApp />
            </Layout>
          }
          // errorElement={<div>404 Not Found</div>}
        />
        <Route
          path="/mappEye"
          element={
            <Layout>
              <MappEye />
            </Layout>
          }
        />
        <Route
          path="/inspection"
          element={
            <Layout>
              <Inspections />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <h1> Home Page </h1>
    </div>
  );
}

export default App;

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row h-[calc(100vh-40px)]">
        <SideNavItems />
        <ChatBot />
        <div className="flex flex-col w-full h-[100%] overflow-y-auto">
          {/* Childrens */}
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
