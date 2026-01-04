import { Button } from "@mui/joy";
import LoginIcon from "@mui/icons-material/Login";

const LoginButton = () => {
  return (
    <Button aria-label="Login" variant="outlined" endDecorator={<LoginIcon />}>
      Login
    </Button>
  );
};

export default LoginButton;
