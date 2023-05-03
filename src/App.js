import "./App.css";
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./Navigation";
import Search from "./Search";
import DashboardCards from "./DashboardCards";
import EarningsOverview from "./EarningsOverview";
import Revenue from "./Revenue";
import Projects from "./Projects";
import Illustrations from "./Illustrations";
import Development from "./Development";

function App() {
  let cardData = [
    {
      cardName: "Earnings (Monthly)",
      cardValue: "$40,000",
      symbol: "fas fa-calendar fa-2x text-gray-300",
      textColor: 'text-primary',
    },
    {
      cardName: "Earnings (Annual)",
      cardValue: "$215,000",
      symbol: "fas fa-dollar fa-2x text-gray-300",
      textColor: 'text-success',
    },
    {
      cardName: "Tasks",
      cardValue: "50%",
      symbol: "fas fa-clipboard-list fa-2x text-gray-300",
      textColor: 'text-info',
    },
    {
      cardName: "Pending Requests",
      cardValue: "18",
      symbol: "fas fa-comments fa-2x text-gray-300",
      textColor: 'text-warning',
    },
  ];

  let projectsData = [
    {
      projectName: "Server Migration",
      projectProgress: "20%",
      progressColor: "bg-danger",
      width: 20,
    },
    {
      projectName: "Sales Tracking",
      projectProgress: "40%",
      progressColor: "bg-warning",
      width: 40,
    },
    {
      projectName: "Customer Database",
      projectProgress: "60%",
      progressColor: "bg-primary",
      width: 60,
    },
    {
      projectName: "Payout Details",
      projectProgress: "80%",
      progressColor: "bg-info",
      width: 80,
    },
    {
      projectName: "Account Setup",
      projectProgress: "Complete!",
      progressColor: "bg-success",
      width: 100,
    },
  ];

  let colors = [
    {
      colorName: "Primary",
      colorClass: "bg-primary",
      colorText: "#4e73df",
      textClass: "text-white",
    },
    {
      colorName: "Success",
      colorClass: "bg-success",
      colorText: "#1cc88a",
      textClass: "text-white",
    },
    {
      colorName: "Info",
      colorClass: "bg-info",
      colorText: "#36b9cc",
      textClass: "text-white",
    },
    {
      colorName: "Warning",
      colorClass: "bg-warning",
      colorText: "#f6c23e",
      textClass: "text-white",
    },
    {
      colorName: "Danger",
      colorClass: "bg-danger",
      colorText: "#e74a3b",
      textClass: "text-white",
    },
    {
      colorName: "Secondary",
      colorClass: "bg-secondary",
      colorText: "#858796",
      textClass: "text-white",
    },
    {
      colorName: "Light",
      colorClass: "bg-light",
      colorText: "#f8f9fc",
      textClass: "text-black",
    },
    {
      colorName: "Dark",
      colorClass: "bg-dark",
      colorText: "#5a5c69",
      textClass: "text-white",
    },
    
  ];

  let revenueData = [
    {
      revenueName: "Direct",
      textClass: "text-primary",
    },
    {
      revenueName: "Social",
      textClass: "text-success",
    },
    {
      revenueName: "Referral",
      textClass: "text-info",
    },
  ];

  return (
    <div className="App">
      <Navigation />

      <div className="DashboardContent">
        <Search />
        <DashboardCards cardData={cardData} />
        <div className="flex-row">
          <EarningsOverview />
          <Revenue revenueData={revenueData} />
        </div>
        <div className="flex-row">
          <Projects projectsData={projectsData} colors={colors}/>
          <div>
            <Illustrations />
            <Development />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
