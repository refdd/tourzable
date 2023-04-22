import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import LinkMaterial from "@mui/material/Link";
import { BiHome, BiListMinus } from "react-icons/bi";
import { GiFlyingTrout } from "react-icons/gi";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs({ links, currentLink }) {
  return (
    <div role="presentation" className="md:px-10" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {links?.map((itemlink, index) => (
          <Link
            className="hover:md:underline transition-all"
            key={index}
            href={itemlink.slug}
          >
            <span className="text-lg ml-2 capitalize "> {itemlink.name}</span>
          </Link>
        ))}

        {/* <LinkMaterial
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/list-Popular-Saudi-Tours"
        >
          <Link href="/list-Popular-Saudi-Tours">
            <span className="text-lg ml-2 capitalize ">
              list Popular Saudi Tours
            </span>
          </Link>
        </LinkMaterial> */}
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {/* <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}

          <span className="text-lg ml-2 capitalize "> {currentLink}</span>
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
