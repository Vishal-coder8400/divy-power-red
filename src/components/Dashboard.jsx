import React from "react";
import { motion } from "framer-motion";
import './Home.css';

function Dashboard() {
  const dashboardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="hidden sm:block px-4 py-8 bg-[#F8F7F0] min-h-[900px] -mt-32">
      <div className="bg-[#D9D9D9] rounded-xl shadow-xl p-6 sm:p-8 max-w-7xl mx-auto ">
        {/* ✅ Inner Box Starts */}
        <div className="bg-white rounded-xl p-0 sm:p-2 shadow-md ">
          {/* Heading */}
          <motion.h2
            className="text-xl sm:text-xl lg:text-3xl text-center font-bold text-black mb-10 GetfontHome"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            3 KW Live Solar System Dashboard – Monitor Your Energy in Real-Time
          </motion.h2>

          {/* Dashboard Grid */}
          <motion.div
            className="GetfontHomeDash grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3"
            variants={dashboardVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Current Power Card */}
            <section className="bg-gray-100 rounded-lg p-3 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-gray-600">Current Power, kW</p>
                <i className="fas fa-external-link-alt text-gray-600 text-xs" />
              </div>
              <p className="text-3xl font-light text-gray-900 mb-2">2.48</p>
              <div className="space-y-1 text-xs text-gray-600">
                {[
                  { label: "Solar", value: "2.74", color: "bg-orange-500" },
                  { label: "Grid", value: "2.74", color: "bg-gray-700" },
                  { label: "Battery", value: "0.34", color: "bg-gray-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span>{item.label}</span>
                    <span className="ml-auto font-light text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2 font-light">
                <span>3 Nov</span>
                <span>9 Nov</span>
              </div>
              <div className="bar-chart flex items-end gap-1 mt-1">
                {[...Array(7).fill(40), ...Array(7).fill(40)].map((h, i) => (
                  <div
                    key={i}
                    className={`w-1.5 ${i < 7 ? "bg-orange-500" : "bg-gray-700"} rounded-t`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </section>

            {/* Other Cards */}
            {[
              {
                title: "Production, kW",
                value: "14.5",
                color: "orange-500",
                progress: "50%",
                subText: "Low",
              },
              {
                title: "Consumption, kW",
                value: "28.4",
                color: "gray-700",
                progress: "70%",
                subText: "Normal",
              },
              {
                title: "Site Power, kWh",
                values: [
                  { label: "Product", value: "1.93" },
                  { label: "Consump", value: "3.86" },
                ],
                breakdown: [
                  { label: "to Home", value: "3.93", color: "bg-gray-700" },
                  { label: "from Solar", value: "3.93", color: "bg-orange-500" },
                  { label: "from Grid", value: "3.93", color: "bg-gray-400" },
                ],
              },
              {
                title: "Alerts",
                value: "1.5",
                alerts: [
                  { label: "Voltage", color: "bg-orange-500" },
                  { label: "Inverter", color: "bg-gray-300" },
                  { label: "System", color: "bg-gray-300" },
                ],
              },
              { title: "Co2", value: "21", subText: "Emissions Saved" },
              { title: "Mi", value: "24", subText: "Driven on Sunshine" },
              { title: "DI", value: "29", subText: "Solar on Rays" },
            ].map((item, index) => (
              <section
                key={index}
                className="bg-gray-100 rounded-lg p-3 flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-gray-600">{item.title}</p>
                  <i className="fas fa-external-link-alt text-gray-600 text-xs" />
                </div>
                <p className="text-3xl font-light text-gray-900 mb-1">{item.value}</p>

                {item.subText && <p className="text-xs text-gray-600">{item.subText}</p>}

                {item.progress && (
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span>{item.subText}</span>
                    <div className="flex-1 h-[2px] bg-gray-300 relative rounded overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-[2px] bg-${item.color}`}
                        style={{ width: item.progress }}
                      />
                    </div>
                    <span>50</span>
                    <span>100</span>
                  </div>
                )}

                {item.values && (
                  <div className="flex justify-between mb-2">
                    {item.values.map((v, i) => (
                      <div key={i}>
                        <p className="text-xl font-light text-gray-900">{v.value}</p>
                        <p className="text-xs text-gray-400">{v.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.breakdown && (
                  <div className="space-y-1 text-xs text-gray-600 mb-2">
                    {item.breakdown.map((bd, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${bd.color}`} />
                        <span>{bd.label}</span>
                        <span className="ml-auto font-light text-gray-700">{bd.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.alerts && (
                  <div className="flex gap-2 text-xs text-gray-400 mt-2">
                    {item.alerts.map((a, i) => (
                      <div key={i} className="flex-1">
                        <p className="mb-0.5">{a.label}</p>
                        <div className={`h-3 ${a.color} rounded`} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </motion.div>

          {/* Summary Paragraph at Bottom */}
          <motion.p
            className="text-2xl GetfontHome sm:text-xl lg:text-sm font-thin text-center text-gray-800 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Optional summary text here */}
          </motion.p>
        </div>
        {/* ✅ Inner Box Ends */}
      </div>
    </div>
  );
}

export default Dashboard;
