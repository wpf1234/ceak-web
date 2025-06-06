"use client";

import { Image as HeroImage } from "@heroui/react";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
    return (
      <div className="flex flex-col w-full">
        {/* 顶部大图 */}
        <section className="w-full h-[40vh] sm:h-[48vh] lg:h-[42vh] relative">
          <HeroImage
            src="/images/aboutUs.jpg"
            alt="关于我们"
            className="w-full h-[40vh] sm:h-[48vh] lg:h-[42vh] object-cover"
            radius="none"
            width="100%"
          />
        </section>
  
        {/* 中上：关于CEAK */}
        <section className="mx-auto ml-0 md:ml-10 px-6 md:px-40 pt-14 md:pt-40 flex flex-col gap-6">
          <p 
          className="text-4xl md:text-5xl md:md:text-8xl font-bold whitespace-nowrap 
          items-start font-[family-name:var(--font-han-sans)] pb-4 md:pb-10"
          >
            关于CEAK
          </p>
          <p 
          className="text-xl md:text-3xl md:md:text-5xl text-tc leading-relaxed
          md:leading-loose items-start font-[family-name:var(--font-sans-light)]"
          >
          思客咨询是一家专注于教育领域智能化革新的前沿咨询机构。我们致力于将先进的人工智能技术与教育教学、科研管理深度融合，驱动教育模式的创新与升级。思客咨询的核心业务围绕“AI+教育”全面展开，为基础教育与高等教育提供一站式人工智能赋能解决方案。我们以推动教育智能化转型为己任，通过定制化的专属解决方案，助力提升教育质量、优化管理效能、增强核心竞争力，引领教育创新未来。
          </p>
        </section>
  
        {/* 中下：我们的使命 */}
        <section className="mx-auto ml-0 md:ml-10 px-6 md:px-40 pt-14 md:pt-40 flex flex-col ">
          <p 
          className="text-4xl md:text-5xl md:md:text-8xl font-bold whitespace-nowrap 
          items-start font-[family-name:var(--font-han-sans)] pb-4 md:pb-10"
          >
            我们的使命
          </p>
          <p 
          className="text-xl md:text-3xl md:md:text-5xl text-tc pt-8 
          leading-relaxed
          md:leading-loose items-start font-[family-name:var(--font-sans-light)]"
          >
          在CEAK，我们用一句简单的宣言概括了我们作为一家教育智能化革新咨询公司的宏伟目标：
          </p>
          <p 
          className="text-xl md:text-3xl md:md:text-5xl md:md:text-5xl text-tc font-bold 
          leading-relaxed
          md:leading-loose items-start font-[family-name:var(--font-sans-light)]"
          >
          Connect evolution, accelerate knowing.   连接变革，加速认知。
          </p>
        </section>
  
        {/* 下：我们的价值观 */}
        <section className="mx-auto ml-0 md:ml-10 px-6 md:px-40 pt-14 md:pt-40 pb-40 flex flex-col gap-10">
          <p 
          className="text-4xl md:text-5xl md:md:text-8xl font-bold whitespace-nowrap 
          items-start font-[family-name:var(--font-han-sans)] pb-3 md:pb-6"
          >
            我们的价值观
          </p>
  
          {/* Icon + 内容列表 */}
          <div className="flex flex-col gap-10">
            {siteConfig.values.map((item, index) => (
              <div
                key={index}
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
  
                {/* 右侧文本 */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-2xl md:text-3xl md:md:text-5xl font-bold text-tc font-[family-name:var(--font-han-sans)] pb-3 md:pb-6">
                    {item.title}
                  </p>
                  <p className="text-xl md:text-3xl md:md:text-5xl text-tc font-[family-name:var(--font-sans-light)] leading-relaxed
                    md:leading-loose">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
    