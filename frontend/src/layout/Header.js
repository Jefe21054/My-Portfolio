import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faServer);

import CustomButton from "../components/CustomButton";

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? theme.palette.background.default : "transparent",
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton 
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{ 
              color: theme.palette.primary.main,
              display: { xs: "block", md: "none" } 
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton size="large" disabled>
              <FontAwesomeIcon 
                icon={faServer} 
                style={{ 
                  color: theme.palette.primary.main,
                  height: 45, 
                  width: 45
                }} 
              />
              <Typography 
                variant="h3" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  marginLeft: "10px",
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: { md: "inline", xs: "none" }
                }}
              >
                Ivan Iglesias
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box 
            sx={{ 
              alignItems: "center",
              display: { md: "flex", xs: "none" } 
            }}
          >
            <CustomButton 
              href="#home"
              text="Home"
            />
            <CustomButton 
              href="#about"
              text="About"
            />
            <CustomButton 
              href="#projects"
              text="Projects"
            />
            <CustomButton 
              href="#technologies"
              text="Technologies"
            />
            <CustomButton
              href="#testimonials"
              text="Testimonials"
            />
            <CustomButton 
              href="#contact"
              text="Contact"
            />
          </Box>
          <Divider
            orientation="vertical"
            sx={{ 
              height: 32, 
              mx: 2,
              display: { lg: "flex", md: "none", xs: "none" } 
            }} 
          />
          <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
            <IconButton 
              aria-label="GitHub" 
              href="https://github.com/Jefe21054"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/in/ivan-iglesias-6192351ba/"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="Mastodon" 
              href="https://fosstodon.org/@jefe21054"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;
