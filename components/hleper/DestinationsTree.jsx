import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Link from "next/link";

function DestinationsTree() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultExpandIcon={<ChevronRightIcon />}
      defaultCollapseIcon={<ExpandMoreIcon />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Destinations ">
        {/* asia */}
        <TreeItem sx={{ marginTop: "" }} nodeId="2" label="Asia">
          <TreeItem nodeId="4" label="Jordan" />
          <TreeItem nodeId="5" label="Dubai" />
          <TreeItem nodeId="6" label="Nepal" />
          <TreeItem nodeId="7" label="Bhutan" />
          <TreeItem nodeId="8" label="Sri Lanka" />
          <TreeItem nodeId="9" label="Oman" />
        </TreeItem>
        <TreeItem sx={{ marginTop: "10px" }} nodeId="3" label="Africa">
          <TreeItem nodeId="4" label="Egypt" />
          <TreeItem nodeId="5" label="Morocco" />
          <TreeItem nodeId="6" label="Tanzania Safari" />
          <TreeItem nodeId="7" label="Uganda Safari" />
          <TreeItem nodeId="8" label=" Rwanda Safari" />
          <TreeItem nodeId="9" label="Tunisia" />
        </TreeItem>
        {/* Europe */}
        <TreeItem sx={{ marginTop: "10px" }} nodeId="112" label="Europe">
          <TreeItem nodeId="4" label="Turkey" />
          <TreeItem nodeId="5" label="Greece" />
          <TreeItem nodeId="6" label="Spain" />
          <TreeItem nodeId="7" label="Italy" />
        </TreeItem>
        {/* Latin America */}
        <TreeItem sx={{ marginTop: "10px" }} nodeId="11" label="Latin America">
          <TreeItem nodeId="4" label="Chile" />
          <TreeItem nodeId="5" label="Peru" />
          <TreeItem nodeId="6" label="Mexico" />
          <TreeItem nodeId="7" label="Argentina" />
          <TreeItem nodeId="8" label="Costa Rica" />
        </TreeItem>
        {/*  Multi-Country Trips */}
        <TreeItem
          sx={{ marginTop: "10px" }}
          nodeId="113"
          label=" Multi Country Trips"
        >
          <TreeItem nodeId="4" label="Middle East Tours" />
          <TreeItem nodeId="5" label="Middle East & Mediterranean Tours" />
          <TreeItem nodeId="6" label=" Middle East & Africa Tours" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}

export default DestinationsTree;
