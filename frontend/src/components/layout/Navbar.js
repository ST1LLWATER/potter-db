import Image from "next/image";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import Link from "../Link";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box display="flex">
            <Image src="/images/logo.svg" width={25} height={25} alt="logo" />
            <Typography
              variant="h5"
              noWrap
              sx={{
                ml: 1,
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              Potter DB
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
