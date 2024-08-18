import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

// Initialize QueryClient
const queryClient = new QueryClient();

// Styles
const containerStyles = "p-5 w-full h-full min-h-screen flex flex-col md:flex-row";
const mainStyles = "flex basis-4/5 flex-col items-center h-full w-full";
const titleStyles = "text-5xl  py-8";
const contentStyles = "flex justify-center w-full h-full";

// Page  Title
const PageTitle = ({ path }:any) => {
  let title;
  switch (path) {
    case "/contacts":
      title = "Contacts";
      break;
    case "/chartandmaps":
      title = "Charts And Maps";
      break;
    default:
      title = "Contacts";
  }
  return <h1 className={titleStyles}>{title}</h1>;
};

const MainContent = ({ path }:any) => (
  <main className={mainStyles}>
    <PageTitle path={path} />
    <div className={contentStyles}>
      <Outlet />
    </div>
  </main>
);

// Main App Component
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/createContact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={containerStyles}>
        <Navbar />
        <MainContent path={location.pathname} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
