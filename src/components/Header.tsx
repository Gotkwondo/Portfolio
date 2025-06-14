// components/Header.tsx
import { NAVIGATION_DATA } from '@/constants/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" fontWeight="bold">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              JuHyeon.dev
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {NAVIGATION_DATA.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="primary"
                target={item.newTab ? "_blank" : "_self"}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IoMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;