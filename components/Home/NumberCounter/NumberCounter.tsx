'use client';
import { useInView } from 'react-intersection-observer'; // Correct import
import CountUp from 'react-countup';

// Types for StatsData
type StatItem = {
  endCountNum: number;
  endCountText: string;
  text: string;
};

// Counter Data
const StatsData: StatItem[] = [
  {
    endCountNum: 18,
    endCountText: "+",
    text: "Years Of Experience",
  },
  {
    endCountNum: 8500,
    endCountText: "+",
    text: "Projects Done",
  },
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Water Quality Improved",
  },
  {
    endCountNum: 8300,
    endCountText: "+",
    text: "Satisfied Customers",
  },
];

// Counter Component
const NumberCounter: React.FC = () => {
  return (
    <section className="bg-sky-50 text-black py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {StatsData.map((item, index) => {
          // Define the types of ref and inView
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <div className="flex flex-col items-center" key={index} ref={ref}>
              <p className="text-3xl font-semibold">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    duration={3}
                    suffix={item.endCountText}
                  />
                )}
              </p>
              <p className="text-gray-700 lg:text-lg text-center">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NumberCounter;
