import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./StatsSection.css";

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });    

  return (
    <div
      ref={ref}
      className="stats-section bg-white text-gray-800 dark:bg-[#020817] dark:text-gray-100 transition-colors duration-300 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-b border-gray-300"
    >
      <div className="stats-item flex flex-col items-center">
        <div className="icon online-courses mb-4"></div>
        <div className="stats-content text-center">
          <h2 className="text-3xl font-bold">
            {inView && (
              <>
                <CountUp start={0} end={100} duration={2} />+
              </>
            )}
          </h2>
          <p className="text-sm mt-2">ONLINE COURSES</p>
        </div>
      </div>
      <div className="stats-item flex flex-col items-center">
        <div className="icon students-enrolled mb-4"></div>
        <div className="stats-content text-center">
          <h2 className="text-3xl font-bold">
            {inView && (
              <>
                <CountUp start={0} end={10} duration={2.5} />k+
              </>
            )}
          </h2>
          <p className="text-sm mt-2">STUDENTS ENROLLED</p>
        </div>
      </div>
      <div className="stats-item flex flex-col items-center">
        <div className="icon experts-instructors mb-4"></div>
        <div className="stats-content text-center">
          <h2 className="text-3xl font-bold">
            {inView && (
              <>
                <CountUp start={0} end={50} duration={2} />+
              </>
            )}
          </h2>
          <p className="text-sm mt-2">EXPERTS INSTRUCTORS</p>
        </div>
      </div>
      <div className="stats-item flex flex-col items-center">
        <div className="icon hours-content mb-4"></div>
        <div className="stats-content text-center">
          <h2 className="text-3xl font-bold">
            {inView && (
              <>
                <CountUp start={0} end={300} duration={1.5} />+
              </>
            )}
          </h2>
          <p className="text-sm mt-2">HOURS CONTENT</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
