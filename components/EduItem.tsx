// components/EduSectionItem.tsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Image as HeroImage} from "@heroui/react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface EduSectionItemProps {
  section: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function EduSectionItem({ section, index }: EduSectionItemProps) {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
    >
      {/* 左侧区域 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-6">
        {isEven ? (
          <>
            <p className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-han-sans)]">
              {section.title}
            </p>

            {/* 小屏下图片 */}
            <div className="md:hidden">
              <HeroImage
                src={section.image}
                alt={section.title}
                width="100%"
                height="100%"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            <p className="text-lg md:text-2xl text-tc leading-relaxed font-[family-name:var(--font-sans-light)] pt-6">
              {section.description}
            </p>
          </>
        ) : (
          <HeroImage
            src={section.image}
            alt={section.title}
            width="100%"
            height="100%"
            className="rounded-2xl w-full h-auto object-cover"
          />
        )}
      </div>

      {/* 右侧区域 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-6">
        {isEven ? (
          <HeroImage
            src={section.image}
            alt={section.title}
            width="100%"
            height="100%"
            className="rounded-2xl w-full h-auto object-cover hidden md:block"
          />
        ) : (
          <>
            <p className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-han-sans)]">
              {section.title}
            </p>

            <div className="md:hidden">
              <HeroImage
                src={section.image}
                alt={section.title}
                width="100%"
                height="100%"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            <p className="text-lg md:text-2xl text-tc leading-relaxed font-[family-name:var(--font-sans-light)] pt-6">
              {section.description}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}
