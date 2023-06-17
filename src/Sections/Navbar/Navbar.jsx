import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const pages = [
  { name: "Front-Facace", address: "/front-facade" },
  { name: "Full-House", address: "/full-house" },
  { name: "Accessories", address: "/accessories" },
  { name: "Contact-Us", address: "/contact-us" },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [color, setColor] = React.useState("transparent");

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className="root-layout">
        <header>
          <AppBar position="sticky" id="sticky" sx={{ backgroundColor: color, color: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <img className="navbar-logo" src={logo} alt="logo" />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/home"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  id="navbar-logo"
                >
                  PRINT
                  <span style={{ color: "red" }}>3</span>
                  <span style={{ color: "blue" }}>D</span>
                  VERSE
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="menu-navbar"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page.name}>
                          <Typography textAlign="center">
                            <Link to={page.address}>{page.name}</Link>
                          </Typography>
                        </MenuItem>
                      ))}
                    </div>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/home"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  id="navbar-logo-small-screen"
                >
                  PRINT
                  <span style={{ color: "red" }}>3</span>
                  <span style={{ color: "blue" }}>D</span>
                  VERSE
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: { xs: "none", md: "flex-end" },
                    alignItems: { xs: "none", md: "center" },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      id="navbar-page"
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        display: "block",
                      }}
                    >
                      <NavLink
                        sx={{
                          color: color === "transparent" ? "blue" : "white",
                        }}
                        to={page.address}
                      >
                        {page.name}
                      </NavLink>
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
