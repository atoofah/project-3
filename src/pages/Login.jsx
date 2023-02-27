import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import CookieService from "../services/CookieService";

const LoginPage = () => {
  const token = CookieService.get("project_3_token");
  if (token) return <Navigate to="/" />;

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
