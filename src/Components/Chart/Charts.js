import React from "react";
import Chart from "react-apexcharts";
import ChartHeader from "./ChartHeader";



class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [130, 41, 97, 75, 35, 65, 25, 35, 130, 90, 200],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FF5BEF"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 6,
          colors: ["#fff"],
          strokeColors: "#AE8FF7",
          strokeWidth: 3,
          hover: {
            size: 10,
          },
        },
        tooltip: {
          followCursor: false,
          theme: "dark",
          x: {
            show: false,
          },
          marker: {
            show: true,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          show: false,
          // logBase: 20,
          tickAmount: 6,
          min: 6,
        },
      },
    };
  }

  render() {
    return (
      <div className="bg-teal-400 p-3 rounded-2xl">
        <div style={{ width: "100%" }}>
          <ChartHeader/>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="300"
            width="100%"
          />
          <div className="flex justify-end items-center gap-3 pr-2">
            <button className="px-5 py-1 rounded text-purple-700 border-2 border-purple-700 hover:bg-purple-100 ...">
              After Math
            </button>
            <button className="px-5 py-1.5 rounded text-purple-700 bg-purple-200 hover:bg-purple-100 ...">
              Sales
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
