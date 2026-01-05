import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { motion } from "framer-motion";

// Chart configuration
const chartOptions = (series) => ({
  series,
  chart: {
    type: "line",
    height: "100%",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 60,
    tickAmount: 6,
    labels: {
      style: { colors: "#9CA3AF", fontSize: "12px" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  legend: { show: false },
  markers: {
    size: 4,
    strokeWidth: 2,
    hover: { size: 6 },
  },
  tooltip: {
    enabled: true,
    x: { show: false },
  },
});

const ChartCard = () => {
  useEffect(() => {
    const seriesWithoutSolar = [
      {
        name: "CO2 Consumption",
        data: [12, 10, 15, 20, 40, 60],
        color: "#F97316",
      },
      {
        name: "Electricity Bill",
        data: [0, 10, 30, 25, 40, 55],
        color: "#22C55E",
      },
      {
        name: "Nature Harm",
        data: [18, 25, 30, 32, 35, 38],
        color: "#9CA3AF",
      },
    ];

    const seriesWithSolar = [
      {
        name: "CO2 Consumption",
        data: [60, 50, 30, 20, 15, 12],
        color: "#F97316",
      },
      {
        name: "Electricity Bill",
        data: [55, 40, 35, 25, 15, 0],
        color: "#22C55E",
      },
      {
        name: "Nature Harm",
        data: [35, 33, 30, 28, 25, 18],
        color: "#9CA3AF",
      },
    ];

    const withoutSolar = new ApexCharts(document.querySelector("#chart-without-solar"), chartOptions(seriesWithoutSolar));
    const withSolar = new ApexCharts(document.querySelector("#chart-with-solar"), chartOptions(seriesWithSolar));

    withoutSolar.render();
    withSolar.render();

    return () => {
      withoutSolar.destroy();
      withSolar.destroy();
    };
  }, []);

  // ChartBox Component with motion
  const ChartBox = ({ title, chartId, highlightColor, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.02 }}
      className="w-full md:w-1/2 p-4"
    >
      <div className="bg-[#f8f7f0] rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
        <h3 className={`text-xl font-semibold mb-4 ${highlightColor}`}>{title}</h3>
        <div className="w-full h-[200px] bg-black rounded-lg overflow-hidden shadow-inner relative">
          <div id={chartId} className="w-full h-full" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex justify-around items-center mt-6 flex-wrap gap-3"
        >
          {[
            { color: "bg-green-400", label: "Electricity Bill" },
            { color: "bg-orange-400", label: "CO2 Consumption" },
            { color: "bg-gray-400", label: "Nature Harm" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="flex items-center space-x-2"
            >
              <span className={`h-4 w-4 rounded-full ${item.color}`}></span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full text-white bg-gray-900 px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-2xl font-bold text-center mb-6"
      >
        Visual Representation of how solar can reduce Electricity Bills and Save Environment
      </motion.h2>

      <div className="flex flex-col md:flex-row w-full h-auto p-6 md:p-12 gap-6">
        <ChartBox title="Without Solar" chartId="chart-without-solar" highlightColor="text-orange-600" delay={0.3} />
        <ChartBox title="With Solar" chartId="chart-with-solar" highlightColor="text-green-600" delay={0.6} />
      </div>
    </section>
  );
};

export default ChartCard;
