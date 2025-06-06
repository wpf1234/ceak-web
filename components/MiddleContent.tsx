"use client"

// import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Image as HeroImage,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import {ServiceCards}  from "./ServiceCards";

export const MiddleContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = siteConfig.rotation.length;

  // 处理下一张幻灯片
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // 处理上一张幻灯片
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 8000); // 每8秒切换一次

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col gap-20">
      {/* 上：轮播卡片 */}
      <section className="w-full h-screen flex flex-col">
        {/* 上方轮播卡片区域，占 90% */}
        <div className="flex-grow-[5] basis-0 flex flex-col items-start justify-start min-h-0 px-2 pt-1">
          <div className="w-full flex items-center h-full bg-gray-100 ">
            {/* 左按钮 */}
            <Button
              className="text-xl text-gray-600 bg-transparent hover:text-primary transition-colors z-10 duration-300 rounded-full"
              onPress={() => handlePrevSlide()}
              isIconOnly
            >
              <ChevronLeftIcon className="w-20 h-20" />
            </Button>

            {/* 轮播内容区域 */}
            <div className="flex-1 rounded-3xl overflow-hidden h-full flex-shrink-0 min-h-0 mt-0 md:mt-0">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {siteConfig.rotation.map((item) => (
                  <Card
                    key={item.img}
                    isBlurred
                    shadow="none"
                    fullWidth
                    className="w-full h-full flex-shrink-0 min-h-0"
                  >
                    <CardBody className="p-0 m-0 h-full min-h-0">
                      <div className="flex flex-col bg-gray-100 md:flex-row w-full h-full min-h-0 py-10 md:py-0">
                        {/* 左图 */}
                        <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center min-h-0">
                          <HeroImage
                            alt="banner"
                            src={item.img}
                            className="object-cover w-full h-full 
                               md:max-h-full 
                              aspect-video md:aspect-auto"
                            radius="lg"
                          />
                        </div>

                        {/* 右内容 */}
                        <div className="w-full md:w-1/2 flex flex-col h-full p-12 md:p-8 gap-6 bg-gray-100 min-h-0">
                          <div className="flex flex-col gap-4 pt-6 pt-10 md:pt-80 md:md:pt-46">
                            <p className="text-3xl md:text-4xl lg:text-6xl text-hc font-bold font-[family-name:var(--font-han-sans)] leading-tight">
                              {item.title1}
                            </p>
                            <p className="text-3xl md:text-4xl lg:text-6xl text-hc font-bold font-[family-name:var(--font-han-sans)] leading-tight">
                              {item.title2}
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl text-tc font-[family-name:var(--font-sans-light)]">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            {/* 右按钮 */}
            <Button
              className="text-xl text-gray-600 bg-transparent hover:text-primary transition-colors z-10 duration-300 rounded-full"
              onPress={() => handleNextSlide()}
              isIconOnly
            >
              <ChevronRightIcon className="w-20 h-20" />
            </Button>
          </div>
        </div>

        {/* 下方 CEAK 聚焦，占 10% */}
        <div className="flex-grow basis-[10%] flex items-center justify-center w-full px-4 mt-4 md:mt-6">
          <div
            className="w-full max-w-xl bg-white rounded-3xl shadow border px-6 py-4
              flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-x-10"
          >
            <div className="text-sm md:text-xl text-gray-700 font-[family-name:var(--font-han-sans)] uppercase tracking-widest font-medium whitespace-nowrap">
              CEAK聚焦
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 whitespace-nowrap overflow-x-auto">
              {siteConfig.breadcrumbs.map((item) => (
                <a
                  key={item}
                  className="text-sm md:text-xl font-bold uppercase text-tc font-[family-name:var(--font-han-sans)] border-b-2 border-black/80 hover:border-primary transition-all cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 中上：服务卡片 */}
      <ServiceCards />

      {/* 中下：关于CEAK */}
      <section className="w-full flex flex-col md:flex-row items-center gap-8 mt-32">
        {/* ✅ 主结构：文字 + 图片 */}
        <div className="flex h-full flex-col md:flex-row gap-6 w-full mt-1 md:mt-12">
          {/* 左侧文字区域 */}
          <div className="flex-1 flex flex-col justify-between h-full relative px-4">
            <div>
              <p className="text-5xl md:text-8xl text-tc mb-8 text-nowrap font-[family-name:var(--font-han-sans)]">关于CEAK</p>
              <p className="text-tc text-lg md:text-2xl text-dmd leading-relaxed md:leading-relaxed font-[family-name:var(--font-sans-light)] pt-2 md:pt-6">
                专注于为高校提供人工智能领域的全方位咨询与解决方案，涵盖AI课程建设、精品课拍摄、教师赋能、应用规划及项目孵化等服务。我们汇聚教育、技术与产业专家，致力于推动AI与学科的深度融合，助力高校提升教学质量与科研创新能力，打造面向未来的教育新生态。思客咨询，以专业与创新陪伴高校共创卓越。
              </p>
            </div>

            {/* 桌面端按钮：显示在文字区域右下角 */}
            <div className="py-5 mt-24 flex justify-start hidden md:flex">
              <button
                className="group relative flex items-center border-2 border-black text-black font-bold px-6 py-2 rounded overflow-hidden transition-colors duration-300 hover:bg-black/10 hover:text-black"
                style={{ fontFamily: "var(--font-han-sans)" }}
                onClick={() => window.location.href = "/about"}
              >
                <span className="absolute left-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
                <span className="relative ml-2 flex items-center font-[family-name:var(--font-han-sans)] transition-transform duration-300 group-hover:translate-x-2">
                  了解更多
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-4 opacity-100 group-hover:opacity-0">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* 右侧图片区域 */}
          <div className="flex-1 flex rounded-3xl justify-center mt-4 md:mt-0">
            <HeroImage
              src="/images/about.jpg"
              alt="关于CEAK"
              width="100%"
              height="100%"
              className="object-cover md:object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 移动端按钮：显示在底部中间 */}
        <div className="w-full flex justify-center md:hidden mt-8">
          <button
            className="group relative flex items-center border-2 border-black text-black font-bold px-6 py-2 rounded overflow-hidden transition-colors duration-300 hover:bg-black/10 hover:text-black"
            style={{ fontFamily: "var(--font-han-sans)" }}
            onClick={() => window.location.href = "/about"}
          >
            <span className="absolute left-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
            <span className="relative ml-2 flex items-center font-[family-name:var(--font-han-sans)] transition-transform duration-300 group-hover:translate-x-2">
              了解更多
            </span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-4 opacity-100 group-hover:opacity-0">
              →
            </span>
          </button>
        </div>
      </section>
      
      {/* 下：职业发展 */}
      <section className="w-full flex flex-col md:flex-row items-center bg-gray-100 gap-8 mt-32 mb-16">
        {/* ✅ 响应式修改：主结构支持手机端纵排 */}
        <div className="flex h-full flex-col md:flex-row gap-6 w-full">
          
          {/* 左侧图片区域 */}
          <div className="flex-1 flex justify-center mt-0 md:mt-0">
            <HeroImage
              src="/images/career.jpg"
              alt="职业发展"
              className="object-cover w-full h-full"
              radius="none"
            />
          </div>

          {/* 右侧内容区域 */}
          <div className="flex-1 flex flex-col justify-between h-full relative px-4 md:px-8">
            <div>
              <div className="text-sm md:text-lg text-tc font-[family-name:var(--font-sans-light)] mt-12 md:mt-20">
                职业发展
              </div>
              <p className="text-4xl md:text-6xl text-tc mt-6 md:mt-10 font-[family-name:var(--font-han-sans)]">
                用AI共创未来教育新篇章
              </p>
              <p className="text-tc text-xl md:text-2xl mt-6 md:mt-9 font-[family-name:var(--font-sans-light)] leading-relaxed">
                促进公司、行业和社会的创新认知
              </p>
            </div>

            {/* 按钮区域 */}
            <div className="py-5 mt-16 md:mt-36 flex md:justify-end justify-center mb-10">
              <Button
                className="bg-primary text-sm md:text-base font-[family-name:var(--font-han-sans)] text-white"
                onPress={() => window.location.href = "/career"}
                size="md"
              >
                申请职业机会
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
