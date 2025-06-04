// components/JobCard.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface JobCardProps {
  job: {
    title: string;
    description: string;
    detail: string;
    requirements: string[];
  };
  isPrimary: boolean;
  animation?: any;
}

export const JobCard = ({ job, isPrimary, animation }: JobCardProps)  => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const bgColor = isPrimary ? "bg-primary" : "bg-gray-300";
  const textColor = isPrimary ? "text-white" : "text-tc";
  const dotColor = isPrimary ? "bg-white" : "bg-tc";

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`w-full max-w-[1700px] min-h-[380px] px-10 py-8 rounded-2xl ${bgColor} ${textColor} hover:shadow-xl`}
    >
      <p className="text-3xl md:text-5xl font-bold mb-6">{job.title}</p>
      <p className="text-2xl md:text-3xl mb-6">{job.description}</p>
      <p className="text-xl md:text-3xl mb-4">{job.detail}</p>

      <ul className="list-none space-y-2">
        {job.requirements.map((req, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={`w-2 h-2 mt-2 rounded-full ${dotColor}`}></span>
            <span className="text-xl md:text-3xl">{req}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
