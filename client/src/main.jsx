import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "sonner";
import { useLoadUserQuery } from "./features/api/authApi";
import LoaderSpiner from "./components/ui/LoadingSpiner"; 

const Custom = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return <>{isLoading ? <LoaderSpiner /> : <> {children}</>}</>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  </StrictMode>
);
