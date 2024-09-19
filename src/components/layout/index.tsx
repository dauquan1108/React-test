import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";

// Component
import Menu from "./Menu";
import Home from "../Home";
import Settings from "../Settings";
import Dashboard from "../Dashboard";
import PostsManagement from "../PostsManagement";
import BarChart from "../Dashboard/Content/BarChart";
import LineChart from "../Dashboard/Content/LineChart";

const routes = [
  {
    id: "1",
    path: "/",
    element: <Home />,
  },
  {
    id: "2",
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        id: "2.1",
        path: "subcription",
        element: <LineChart />,
      },
      {
        id: "2.2",
        path: "revenue",
        element: <BarChart />,
      },
    ],
  },
  {
    id: "3",
    path: "/posts",
    element: <PostsManagement />,
  },
  {
    id: "4",
    path: "/settings",
    element: <Settings />,
  },
];

const drawerWidth = 240;

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Menu drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          p: 3,
          flexGrow: 1,
          height: "100vh",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Routes>
          {routes.map((item) => (
            <Route key={item.id} path={item.path} element={item.element}>
              {item?.children?.length &&
                item.children.map((itemChildren) => (
                  <Route
                    key={itemChildren.id}
                    path={itemChildren.path}
                    element={itemChildren.element}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </Box>
    </Box>
  );
}

export default Layout;
