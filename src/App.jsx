import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { AppTheme } from "./theme";
import { CheckingAuth } from "./ui/";
import { FlipperRouter } from "./components/router/FlipperRouter";
import { useCheckAuth } from "./hooks";

function App() {

  const status = useCheckAuth();

  if ( status === 'checking' ){
    return <CheckingAuth />
  }

  return (
    <AppTheme >
      <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <FlipperRouter />} />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

      </Routes>
    </AppTheme>
  );
}

export default App;
