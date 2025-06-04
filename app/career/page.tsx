'use client';

import { 
  Button, 
  Image as HeroImage, 
} from '@heroui/react'; // 示例组件
import { siteConfig } from '@/config/site';
import ApplicationSection from '@/components/Application';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';


export default function CareerPage() {
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: 'easeOut' },
    },
  }; 
  // const refs = useRef<(((node?: Element | null) => void) | null)[]>([]); // ✅ 添加类型注解
  const refs = useRef<React.RefCallback<Element>[]>([]);  //官方类型
  refs.current =  [];

  return (
    <div className="w-full flex flex-col">
      {/* 上部分：顶部图片 + 推荐入口 */}
      <section className="w-full">
        {/* 上：图片区域 */}
        <div className="w-full h-[40vh] sm:h-[48vh] lg:h-[42vh] relative">
          <HeroImage
            src="/images/careerDev.jpg"
            alt="职业发展"
            className="w-full h-[40vh] sm:h-[48vh] lg:h-[42vh] object-cover"
            radius="none"
            width="100%"           
          />
        </div>

        {/* 下：推荐入口区域，宽度与图片一致 */}
        <div className="w-full  bg-primary text-white px-8 py-12 flex flex-col md:flex-row items-center md:justify-between justify-center">
          <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-han-sans)] text-center md:text-center flex-1">
            根据您的简历获得工作推荐
          </p>
          <a href="#application" className="mt-4 md:mt-0">
            <Button
              className="bg-[#083041fc] text-white hover:bg-white hover:text-primary font-[family-name:var(--font-han-sans)]"
              radius="none"
              size="lg"
              variant="solid"
            >
              申请
            </Button>
          </a>
        </div>
      </section>

      {/* 中上部分：梯形背景 + 人才技能卡片 */}
      <section className="relative bg-gray-300 py-32 px-4 clip-trapezoid">
        {/* 上部：标题 + 内容 */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <p className="text-3xl md:text-5xl text-tc font-bold mb-6 font-[family-name:var(--font-han-sans)]">
            浏览我们正在寻找的人才技能
          </p>
          <p className="text-md md:text-xl text-tc font-[family-name:var(--font-han-sans)]">
            我们为您提供所需的工具，帮助您找到最适合自己的工作，并为您提供自由和支持，帮助您将职业生涯提升到一个新的水平。
          </p>
        </div>

        {/* 下部：技能卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.skills.slice(0, 5).map((skill, idx) => (
            <div
              key={idx}
              className="bg-white max-w-[460px] min-h-[300px] w-full p-8 shadow text-left cursor-pointer
                        transform transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-3xl md:text-5xl text-tc font-bold mb-4">{skill.title}</p>
              <p className="text-xl md:text-2xl text-tc">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 中下部分：招聘岗位展示 */}
      <section className="w-full px-6 py-20">
        <p className="text-4xl md:text-5xl md:md:text-7xl font-bold mb-12 text-start font-[family-name:var(--font-han-sans)]">
          我们正在寻找
        </p>

        <div className="flex flex-col gap-10 items-center ">
          {siteConfig.jobs.slice(0, 3).map((job, idx) => {
            const isPrimary = idx % 2 === 0;
            const bgColor = isPrimary ? 'bg-primary' : 'bg-gray-300';
            const textColor = isPrimary ? 'text-white' : 'text-tc';
            const dotColor = isPrimary ? 'bg-white' : 'bg-tc';
            const [ref, inView] = useInView();
            refs.current[idx] = ref;

            return (
              <motion.div
                ref={ref}
                variants={slideInFromRight}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                key={idx}
                className={`w-full max-w-[1700px] min-h-[380px] px-10 py-8 rounded-2xl ${bgColor} ${textColor} hover:shadow-xl`}
              >
                {/* 标题 + 简述 */}
                <p className="text-3xl md:text-5xl font-bold mb-6">{job.title}</p>
                <p className="text-2xl md:text-3xl mb-6">{job.description}</p>

                {/* 申请要求 */}
                <p className="text-xl md:text-3xl mb-4">{job.detail}</p>

                {/* 详细要求列表 */}
                <ul className="list-none space-y-2">
                  {job.requirements.map((req: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-2 h-2 mt-2 rounded-full ${dotColor}`}></span>
                      <span className="text-xl md:text-3xl">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 下部分：立即申请表单 */}
      <ApplicationSection />
    </div>
  );
}
