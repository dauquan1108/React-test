import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

function LineChart() {
  return (
    <Box sx={{ width: "1200px", height: "600px", flex: 1, ml: 8 }}>
      <Line
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "High - 2013",
              data: [28, 29, 33, 36, 32, 32, 33],
              borderColor: "#77b6ea",
              pointBorderColor: "white",
              backgroundColor: "#77b6ea",
              pointBackgroundColor: "#77b6ea",
              pointRadius: 6,
              borderWidth: 3,
              pointBorderWidth: 2,
            },
            {
              label: "Low - 2013",
              data: [12, 11, 14, 18, 17, 13, 13],
              borderColor: "#545454",
              backgroundColor: "#545454",
              pointBorderColor: "white",
              pointBackgroundColor: "#545454",
              pointRadius: 6,
              borderWidth: 3,
              pointBorderWidth: 2,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Average High & Low TemPerature",
            },

            legend: {
              display: true,
              position: "top",
              align: "end",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 20,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Month",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Temperature",
              },
            },
          },
        }}
      />
    </Box>
  );
}

export default LineChart;
