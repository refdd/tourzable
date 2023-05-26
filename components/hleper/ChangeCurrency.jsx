import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { BsGlobe } from "react-icons/bs";
import { useSSR, useTranslation } from "react-i18next";
import { useStateContext } from "@/contexts/ContextProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiCurrencyLine } from "react-icons/ri";
export default function ChangeCurrency({ isTop, InSinglePage }) {
  const { setDirection } = useStateContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currency, setCurrency] = React.useState("USD");
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { locale, locales } = router;
  const path = router.pathname;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleChangeCurrnecy = () => {
    if (InSinglePage) {
      if (router.query.slug) {
        router.replace({
          pathname: `${router.query.slug}`,
          query: { currency: currency },
        });
      }
    } else {
      console.log("router.query.slug");

      router.push({ pathname: path, query: { currency: currency } });
    }
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="language">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <RiCurrencyLine
              onClose={handleClose}
              className="text-MainYeloow text-xl"
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            bgcolor: isTop ? "background.paper" : "#d3d3d3",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            zIndex: 100000,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: isTop ? "background.paper" : "#d3d3d3",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            setCurrency("USD");
            handleClose;
            HandleChangeCurrnecy();
          }}
          sx={{ textTransform: "capitalize" }}
        >
          USD
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrency("SAR");
            handleClose;
            HandleChangeCurrnecy();
          }}
          sx={{ textTransform: "capitalize" }}
        >
          SAR
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            handleClose;
          }}
          sx={{ textTransform: "capitalize" }}
        >
          {locales.map((lng) => {
            return (
              <Link href="/" locale={lng} className="flex flex-col space-y-4">
                {lng}
              </Link>
            );
          })}
        </MenuItem> */}
      </Menu>
    </React.Fragment>
  );
}
