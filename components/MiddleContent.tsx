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
import { ServiceCards } from "./ServiceCards";

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
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-20">
      {/* 上：轮播卡片 */}
      <section 
        className="w-full max-w-screen-2xl h-auto sm:h-[80vh] flex flex-col pt-20 gap-0"
      >
        {/* 轮播卡片 */}
        <div className="w-full flex-1 flex flex-col pt-20 items-start justify-start">
          <div className="w-full flex items-center min-h-[220px] md:min-h-[320px] lg:min-h-[400px]">
            {/* 左侧按钮 */}
            <Button
              className="text-xl text-gray-400 bg-transparent hover:text-primary transition-colors duration-300 rounded-full"
              onPress={() => handlePrevSlide()}
              isIconOnly
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </Button>

            {/* 轮播卡片区域 */}
            <div className="flex-1 rounded-3xl overflow-hidden h-full flex-shrink-0">
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
                    className="w-full h-full flex-shrink-0"
                  >
                    <CardBody className="p-0 m-0 h-full">
                      <div className="flex flex-col md:flex-row w-full h-full">
                        {/* 左图：h-full 覆盖所有父级 */}
                        <div className="w-full md:w-1/2 h-full bg-white">
                          <HeroImage
                            alt="banner"
                            src={item.img}
                            className="object-cover w-full h-full"
                            width="100%"
                            height="100%"
                            radius="none"
                          />
                        </div>

                        {/* 右文 */}
                        <div className="w-full md:w-1/2 flex flex-col p-8 justify-between overflow-visible h-full">
                          <div>
                            <p className="text-7xl md:text-4xl lg:text-5xl text-hc font-bold font-[family-name:var(--font-han-sans)]">
                              {item.title1} <br />{item.title2}
                            </p>
                            <p className="text-xl md:text-base lg:text-lg text-tc mt-4 font-[family-name:var(--font-han-sans)]">
                              {item.content}
                            </p>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button
                              className="bg-primary text-sm md:text-base font-[family-name:var(--font-han-sans)] text-white"
                              href="#"
                              radius="full"
                              size="sm"
                            >
                              了解更多
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            {/* 右侧按钮 */}
            <Button
              className="text-xl text-gray-400 bg-transparent hover:text-primary transition-colors duration-300 rounded-full"
              onPress={() => handleNextSlide()}
              isIconOnly
            >
              <ChevronRightIcon className="w-8 h-8" />
            </Button>
          </div>
        </div>

        {/* CEAK聚焦部分 */}
        <div className="min-h-[80px] w-full md:w-1/2 mx-auto">
          <div className="w-full bg-white rounded-2xl shadow border px-6 py-3 flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-x-8">
            <div className="text-xl text-gray-700 font-[family-name:var(--font-han-sans)] uppercase tracking-widest font-medium whitespace-nowrap">
              CEAK聚焦
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 whitespace-nowrap overflow-x-auto">
              {siteConfig.breadcrumbs.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xl font-bold uppercase text-tc font-[family-name:var(--font-han-sans)] border-b-2 border-black/80 hover:border-primary transition-all cursor-pointer"
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
        {/* ✅ 响应式修改：主结构支持手机端纵排 */}
        <div className="flex h-full flex-col md:flex-row gap-6">
          {/* 左侧文字区域 */}
          <div className="flex-1 flex flex-col justify-between h-full relative">
            <div>
              <p className="text-7xl text-tc font-bold mb-8 font-[family-name:var(--font-han-sans)]">关于CEAK</p>
              <p className="text-tc text-base text-dmd font-[family-name:var(--font-han-sans)] leading-relaxed">
                专注于为高校提供人工智能领域的全方位咨询与解决方案，涵盖AI课程建设、精品课拍摄、教师赋能、应用规划及项目孵化等服务。我们汇聚教育、技术与产业专家，致力于推动AI与学科的深度融合，助力高校提升教学质量与科研创新能力，打造面向未来的教育新生态。思客咨询，以专业与创新陪伴高校共创卓越。
              </p>
            </div>
            {/* 了解更多按钮 */}
            <div className="py-5 mt-24 flex justify-start">
              <button
                  className="group flex items-center border-2 border-black text-black font-bold px-6 py-2 rounded transition-colors duration-300 hover:bg-black/10
                  hover:text-black hover:border-black relative overflow-hidden self-start"
                  style={{ fontFamily: "var(--font-han-sans)" }}
              >
                  {/* ✅ 动画容器 */}
                  <span className="block relative w-full overflow-hidden">
                  {/* 默认状态：了解更多 → */}
                  <span className="flex items-center justify-center gap-2 transition-transform duration-500 group-hover:translate-x-full">
                      了解更多
                      {/* <ArrowRight className="w-4 h-4" /> */}
                      <span className="ml-2">→</span>
                  </span>

                  {/* 悬停状态：→ 了解更多 */}
                  <span className="flex items-center justify-center gap-2 absolute top-0 left-0 w-full transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0">
                      {/* <ArrowRight className="w-4 h-4" /> */}
                      <span className="mr-2">→</span>
                      了解更多
                  </span>
                  </span>
              </button>
            </div>
          </div>

          {/* 右侧图片区域 */}
          {/* ✅ 响应式修改：图片上移以适配竖排 */}
          <div className="flex-1 flex rounded-3xl justify-center mt-4 md:mt-0">
            <HeroImage
              src="/images/about.jpg"
              alt="关于CEAK"
              width="100%"
              height="100%"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      
      {/* 下：职业发展 */}
      {/* ✅ 响应式修改：主结构支持手机端纵排 */}
      <section className="w-full flex flex-col md:flex-row items-center bg-gray-100 gap-8 my-10">
        {/* 左侧图片 */}
        <div className="flex flex-col md:flex-row w-full">
          {/* 左侧图片区域 */}
          <div className="flex flex-1 justifu-center shadow">
            <HeroImage
            src="/images/career.jpg"
            alt="职业发展"
            width="100%"
            height="100%"
            className="object-cover w-full h-full"
            radius="none"
            />
          </div>

          {/* 右侧内容区域 */}
          {/* ✅ 响应式修改：内容区域适配手机端纵排 */}
          <div className="flex flex-1 flex-col justify-between relative md:ml-5 ml-0 px-4 md:p-8">
            <div>
              <div className="text-base text-tc font-[family-name:var(--font-han-sans)] mt-20">职业发展</div>
              <p className="text-5xl text-tc font-bold mt-10 font-[family-name:var(--font-han-sans)]">用AI共创未来教育新篇章</p>
              <p className="text-tc text-2xl mt-9 font-[family-name:var(--font-han-sans)]">
                促进公司、行业和社会的创新认知
              </p>
            </div>

            <div className="flex justify-end mt-36 mr-2 mb-10">
              <Button
                className="bg-primary text-tiny md:text-sm lg:text-base font-[family-name:var(--font-han-sans)] text-white"
                href="#"
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
