import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const menus = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts Management", path: "/posts" },
  { name: "Settings", path: "/settings" },
];
interface MenuProps {
  drawerWidth: number;
}

function Menu(props: MenuProps) {
  const { drawerWidth } = props;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menus.map((menu) => (
            <ListItem
              key={menu.name}
              disablePadding
              style={{ borderBottom: "1px solid #e0e0e0" }}
            >
              <ListItemButton component={Link} to={menu.path}>
                <ListItemText
                  primary={menu.name}
                  style={{ textAlign: "end" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Menu;
