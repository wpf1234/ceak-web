"use client"

import { siteConfig } from "@/config/site";
// import { Image as HeroImage } from "@heroui/react"
import Image from "next/image";
import EduItem from "@/components/EduItem";

export default function CooperationPage() {
    return (
      <div className="w-full text-tc">
      {/* 上部分 */}
      <section className="bg-gray-100 px-8 md:px-16 flex flex-col items-center pt-28 pb-56 md:pt-20 md:pb-20 ">
        <div className="max-w-7xl w-full mx-auto ">
          {/* 标题与描述 */}
          <div className="space-y-2 text-left ">
            <p 
            className="text-4xl md:text-6xl md:md:text-8xl text-tc
            font-bold font-[family-name:var(--font-han-sans)] 
            pb-6"
            >
              AI+教育
            </p>
            <p className="text-lg md:text-2xl text-tc font-[family-name:var(--font-sans-light)]">
              人工智能领域的变革为教育系统（从幼儿园到高中，再到高等教育）创造了创新机遇。
            </p>
            <p className="text-lg md:text-2xl text-tc font-[family-name:var(--font-sans-light)]">
              我们以AI+教育全景式赋能为核心，与客户携手合作，改变人们的学习方式，促进教育体系蓬勃发展。
            </p>
          </div>

          {/* 视频区域 */}
          <div className="w-full my-10 rounded-3xl overflow-hidden shadow-lg aspect-video">
            <video
              className="w-full h-full object-cover"
              src="/video/AIVideo.mp4"
              autoPlay
              muted
              playsInline
            />
          </div>

          {/* 底部文字内容 */}
          <div className="text-left text-tc text-lg md:text-2xl tracking-wider leading-loose font-[family-name:var(--font-sans-light)]">
            当传统教育模式难以弥合AI技能供给与需求的裂谷，教学亟需系统性DNA重构。
            我们以 <strong className="font-bold">人工智能战略全景图</strong> 为基座，赋能客户聚焦三大战略转型：
            <strong className="font-bold">重构教学范式</strong>，破解规模化与个性化教育悖论；
            <strong className="font-bold">重塑教师能力</strong>，构建人机协同决策新机制；
            <strong className="font-bold">革新课程体系</strong>，打造动态演化的AI知识图谱与资源生态。
          </div>
        </div>
      </section>

      {/* 中间部分 - 循环渲染 */}
      <section className="py-40 px-4 md:px-8 lg:px-16 space-y-24">
      <div className="w-full mx-auto space-y-24">
          {siteConfig.eduItems.map((section, index) => (
            <EduItem key={index} section={section} index={index} />
          ))}
        </div>
      </section>


      {/* 下部分 - 背景图与悬浮内容 */}
      <section className="relative w-full h-[215px] overflow-hidden px-4 md:px-8 lg:px-16">
        <div className="w-full  mx-auto h-full relative rounded-2xl overflow-hidden">
          {/* 背景图片 */}
          <Image
            src="/images/footer.jpg"
            alt="合作图"
            fill
            className="object-cover w-full h-full rounded-2xl"
            priority
          />

          {/* 文字层 */}
          <div className="absolute inset-0 bg-black/30 flex items-center rounded-2xl">
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-center gap-6 text-white text-center md:text-left px-4">
              {/* 左侧文字 */}
              <div className="text-xl md:text-3xl whitespace-nowrap font-bold font-[family-name:var(--font-han-sans)] leading-snug">
                我们正在建设明天的教育。
              </div>

              {/* 右侧文字 */}
              <div className="text-base md:text-lg font-[family-name:var(--font-sans-light)] max-w-2xl leading-relaxed">
                CEAK与全球领先的组织合作打造新产品、服务和业务，<br/>颠覆教育现在，创造教育未来。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}