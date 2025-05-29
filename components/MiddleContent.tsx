"use client"

// import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Image as HeroImage,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@heroui/react";
import { useState, useEffect } from "react";

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
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
      {/* 上：轮播卡片+面包屑 */}
      <section className="w-full flex flex-col gap-6 mt-5 pr-10">
        {/* 轮播卡片（此处用静态图片+左右箭头占位，后续可替换为轮播组件） */}
        <div className="w-full flex items-center gap-1 min-h-[320px] md:min-h-[400px] lg:min-h-[480px]">
          <Button
          className="text-3xl text-gray-400 bg-transparent hover:text-primary transition-colors duration-300"
          onPress={() => handlePrevSlide()}
          isIconOnly
          >
            {/* 这里可以替换成一个向左的Icon */}
            {'<'}
          </Button>
          <div className="rounded-3xl overflow-hidden w-full h-[220px] md:h-[320px] lg:h-[400px] flex-shrink-0 relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {siteConfig.rotation.map((item) => (
                <Card
                  key={item.img}
                  isBlurred
                  shadow="sm"
                  fullWidth
                  className="w-full flex-shrink-0"
                >
                  <CardBody className="p-0">
                    <div className="flex h-full">
                      {/* 左侧图片区域 */}
                      <div className="w-1/2 h-full">
                        <HeroImage
                          alt="banner"
                          className="object-cover w-full h-full"
                          height={400}
                          shadow="md"
                          src={item.img}
                          width="100%"
                        />
                      </div>
                      
                      {/* 右侧内容区域 */}
                      <div className="w-1/2 flex flex-col justify-between p-8">
                        <div>
                          <h1 className="font-[family-name:var(--font-han-sans)] text-xl md:text-2xl lg:text-3xl font-bold">
                            {item.title1} <br />{item.title2}
                          </h1>
                          <p className="text-small md:text-base lg:text-lg font-[family-name:var(--font-han-sans)] mt-4 text-gray-600">
                            {item.content}
                          </p>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            className="bg-primary text-tiny md:text-sm lg:text-base font-[family-name:var(--font-han-sans)] text-white"
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
          <Button
          className="text-3xl text-gray-400 bg-transparent hover:text-primary transition-colors duration-300"
          onPress={() => handleNextSlide()}
          isIconOnly
          >
            {/* 这里可以替换成向右的一个Icon */}
            {'>'}
          </Button>
        </div>
        {/* 面包屑 */}
        <div className="flex gap-3 mt-4 justify-center">
          {siteConfig.breadcrumbs.map((item) => (
            <a
              key={item}
              // href={`/${encodeURIComponent(item)}`}
              className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* 中上：服务卡片 */}
      <section className="w-full flex flex-col gap-6 relative">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-han-sans)] mb-4 z-10">探索我们的服务</h1>
        {/* 梯形背景层 */}
        <div
          className="absolute left-0 top-8 w-full pointer-events-none bg-primary mt-10"
          style={{
            zIndex: 0,
            height: "min(500px, 40vw)",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          }}
        />
        {/* 卡片内容层 */}
        <div className="w-full p-8 flex flex-col md:flex-row gap-6 relative z-10">
          {siteConfig.services.map((s) => (
            <Card
              key={s.title}
              className="flex-1 bg-white/10  flex flex-col items-center justify-between p-0 h-[320px] relative overflow-hidden group"
              radius="none"
            >
              <div className="absolute inset-0 w-full h-full">
                <HeroImage
                  src={s.img}
                  alt={s.title}
                  className="object-cover w-full h-full transition-all duration-300 group-hover:blur-sm"
                  width="100%"
                  height="100%"
                  radius="none"
                />
              </div>
              <CardFooter className="absolute bottom-4 w-[calc(100%_-_32px)] mx-4 justify-center border-1 border-white/20 overflow-hidden py-2 rounded-xl shadow z-10 bg-gray-200/90 backdrop-blur-sm">
                <p className="text-center text-black font-bold text-lg">{s.title}</p>
              </CardFooter>
              
              {/* 悬浮时显示的内容 */}
              <div className="absolute inset-0 w-full h-full bg-gray-200/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 z-20">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-left">{s.title}</h3>
                    <p className="text-gray-600 text-sm text-left line-clamp-4">{s.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                    >
                      了解更多
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* 新增：了解更多按钮，左对齐 */}
        <div className="mt-1 pl-8 ml-8">
          <button
            className="group flex items-center border-2 border-white text-white font-bold px-6 py-2 rounded transition-colors duration-300 hover:bg-white/10
              hover:text-white hover:border-white relative overflow-hidden self-start -ml-8"
            style={{ fontFamily: "var(--font-han-sans)" }}
          >
            <span className="flex items-center transition-transform duration-1000 group-hover:translate-x-4">
              了解更多
              <span className="ml-2">→</span>
            </span>
          </button>
        </div>
      </section>

      {/* 中下：关于CEAK */}
      <Card
          shadow="sm"
          fullWidth
          className="w-full h-full flex-shrink-0"
        >
          <CardBody className="p-0">
            <div className="flex h-full">
              {/* 左侧文字区域 */}
              <div className="flex-1 flex flex-col justify-between h-full relative pt-8 pl-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-han-sans)]">关于CEAK</h2>
                  <p className="text-gray-700 text-base text-sm font-[family-name:var(--font-han-sans) leading-relaxed">
                  专注于为高校提供人工智能领域的全方位咨询与解决方案，涵盖AI课程建设、精品课拍摄、教师赋能、应用规划及项目孵化等服务。我们汇聚教育、技术与产业专家，致力于推动AI与学科的深度融合，助力高校提升教学质量与科研创新能力，打造面向未来的教育新生态。思客咨询，以专业与创新陪伴高校共创卓越。
                  </p>
                </div>
                {/* 新增：了解更多按钮（黑色），左下角对齐 */}
                <div className="py-5 mt-24 flex justify-start">
                  <button
                    className="group flex items-center border-2 border-black text-black font-bold px-6 py-2 rounded transition-colors duration-300 hover:bg-black/10
                      hover:text-black hover:border-black relative overflow-hidden self-start"
                    style={{ fontFamily: "var(--font-han-sans)" }}
                  >
                    <span className="flex items-center transition-transform duration-1000 group-hover:translate-x-4">
                      了解更多
                      <span className="ml-2">→</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* 右侧图片区域*/}
              <div className="flex-1 flex justify-end items-right h-full pl-8">
                <div className="rounded-3xl overflow-hidden w-full h-full shadow flex items-end">
                  <HeroImage
                    src="/images/about.jpg"
                    alt="关于CEAK"
                    width="100%"
                    height="100%"
                    className="object-cover w-full h-full"
                    radius="sm"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

      {/* 下：职业发展 */}
        {/* 左侧图片 */}
        <Card
          shadow="sm"
          fullWidth
          className="w-full h-full bg-gray-100 flex-shrink-0"
          radius="none"
        >
          <CardBody className="p-0">
            <div className="flex h-full">
              {/* 左侧图片区域 */}
              <div className="w-1/2 h-full overflow-hidden shadow">
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
              <div className="w-1/2 flex flex-col justify-start h-full ml-10 p-8">
                <div>
                  <div className="text-sm text-gray-500 font-[family-name:var(--font-han-sans)] mb-2">职业发展</div>
                  <h1 className="text-2xl font-bold mb-2 font-[family-name:var(--font-han-sans)]">用AI共创未来教育新篇章。</h1>
                  <p className="text-gray-700 text-base mb-6 font-[family-name:var(--font-han-sans)]">
                    促进公司、行业和社会的创新认知
                  </p>
                </div>

                <div className="flex justify-end mt-24 mr-5">
                  <Button
                    className="bg-primary text-tiny md:text-sm lg:text-base font-[family-name:var(--font-han-sans)] text-white"
                    href="#"
                    size="sm"
                  >
                    申请职业机会
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
    </div>
  );
} 