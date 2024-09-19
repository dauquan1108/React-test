import { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";

const buttons = [
  {
    id: "1",
    name: "Subcription",
    type: "subcription",
  },
  {
    id: "2",
    name: "Revenue",
    type: "revenue",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState<string>("");

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box style={{ height: "100px" }}>
        <Typography variant="h6" color="#115BB2">
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", m: 4 }}>
          {buttons.map((item) => (
            <Button
              key={item.id}
              disableRipple
              sx={{ mr: 2 }}
              onClick={() => {
                navigate(`/dashboard/${item.type}`);
                setButtonActive(item.type);
              }}
              variant={buttonActive === item.type ? "contained" : "outlined"}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
