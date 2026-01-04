import { AppBar, Toolbar } from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import styles from "./Header.module.css";
import LoginButton from "../LoginButton";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Avatar />
          <h1 className={styles.heading}>Radioroom</h1>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
