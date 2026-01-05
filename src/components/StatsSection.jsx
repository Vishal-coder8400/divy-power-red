import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  BriefcaseIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { id: 1, label: "Winning Awards", target: 20, Icon: TrophyIcon },
  { id: 2, label: "Completed Projects", target: 10000, Icon: BriefcaseIcon },
  { id: 3, label: "Team Members", target: 300, Icon: UsersIcon },
  { id: 4, label: "Clients Review", target: 400, Icon: ChatBubbleBottomCenterTextIcon },
];

function StatCard({ target, label, Icon, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const steps = target >= 1000 ? target / 100 : target;
    const increment = target >= 1000 ? 100 : 1;
    const stepTime = Math.max(20, Math.floor(duration / steps));

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      className="flex items-center gap-4 p-4  -mt-12 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="h-16 w-16 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
        <Icon className="h-8 w-8 text-green-700" />
      </div>
      <div className="text-left">
        <h3 className="text-3xl font-semibold text-gray-900">
          {target >= 1000 ? `${(count / 1000).toFixed(0)}K+` : `${count}+`}
        </h3>
        <p className="text-gray-700 text-lg">{label}</p>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="bg-[#f8f7f0] py-20  -mt-24 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              target={stat.target}
              label={stat.label}
              Icon={stat.Icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
