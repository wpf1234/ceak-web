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
  const bgColor = isPrimary ? "bg-primary" : "bg-gray-100";
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
      className={`w-full max-w-[1700px] min-h-[380px] px-20 py-10 rounded-3xl ${bgColor} ${textColor} hover:shadow-xl`}
    >
      <p className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-han-sans)] mb-6">{job.title}</p>
      <p className="text-xl md:text-3xl mb-6 font-[family-name:var(--font-sans-light)]">{job.description}</p>
      <p className="text-xl md:text-3xl mb-4 font-[family-name:var(--font-sans-light)]">{job.detail}</p>
      <ul className="list-none space-y-2">
        {job.requirements.map((req, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={`w-2 h-2 mt-2 rounded-full ${dotColor}`}></span>
            <span className="text-xl md:text-3xl font-[family-name:var(--font-sans-light)]">{req}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
