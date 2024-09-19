import { Bar } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
import { Box } from "@mui/material";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

function BarChart() {
  return (
    <Box sx={{ width: "1200px", height: "600px", flex: 1, ml: 8 }}>
      <Bar
        data={{
          labels: [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100",
            "110",
            "120",
          ],
          datasets: [
            {
              borderRadius: 0,
              data: [70, 56, 50, 45, 65, 70, 78, 38, 90, 60, 20, 60, 40],
              backgroundColor: [
                "#6D78AD",
                "#51CDA0",
                "#DF7970",
                "#4C9CA0",
                "#AE7D99",
                "#C9D45C",
                "#5592AD",
                "#DF874D",
                "#52BCA8",
                "#8E7AA3",
                "#E3CB64",
                "#C77B85",
                "#C39762",
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
            title: {
              display: true,
              text: "Simple Column Chart with Index Labels",
              font: {
                size: 20,
              },
              align: "center",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100, // Adjust the max value according to your dataset
            },
          },
        }}
      />
    </Box>
  );
}

export default BarChart;
