// components/ValueItem.tsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image as HeroImage } from "@heroui/react";

const slideVariant = {
  hidden: { opacity: 0, x: -50, y: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
};

interface ValueItemProps {
  item: {
    icon: string;
    title: string;
    desc: string;
  };
}

export default function ValueItem({ item }: ValueItemProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={slideVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-start gap-6"
    >
      {/* 左侧 Icon */}
      <div className="w-auto h-full shrink-0 self-center">
        <HeroImage
          src={item.icon}
          alt={item.title}
          width={100}
          height={100}
          className="object-contain w-full h-full"
          radius="none"
        />
      </div>

      {/* 右侧文字内容 */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-2xl md:text-3xl md:md:text-5xl font-bold text-tc font-[family-name:var(--font-han-sans)] pb-3 md:pb-6">
          {item.title}
        </p>
        <p className="text-xl md:text-3xl md:md:text-5xl text-tc font-[family-name:var(--font-sans-light)] leading-relaxed md:leading-loose">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
