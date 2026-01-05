import { Button } from "@mui/joy";
import LoginIcon from "@mui/icons-material/Login";

const LoginButton = () => {
  return (
    <Button
      sx={{ color: "white", ":hover": { color: "#1976d2" } }}
      component="a"
      aria-label="Login"
      variant="outlined"
      endDecorator={<LoginIcon />}
    >
      Login
    </Button>
  );
};

export default LoginButton;
