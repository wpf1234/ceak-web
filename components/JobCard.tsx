// components/JobCard.tsx
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Job } from "@/types";

interface JobCardProps {
  job: Job;
  index: number;
}

export const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const isPrimary = index % 2 === 0;
  const bgColor = isPrimary ? "bg-primary" : "bg-gray-300";
  const textColor = isPrimary ? "text-white" : "text-tc";
  const dotColor = isPrimary ? "bg-white" : "bg-tc";

  const [ ref, inView ] = useInView({triggerOnce: true, threshold: 0.1});

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
};
