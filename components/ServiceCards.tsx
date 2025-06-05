"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { siteConfig } from "@/config/site";
import {
  Image as HeroImage,
  Card,
  CardFooter,
} from "@heroui/react";

export const ServiceCards = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
//   const total = siteConfig.services.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  // ✅ 仅在小屏启用自动轮播
  useEffect(() => {
    if (!isMobile) return;
  
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % siteConfig.services.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="w-full flex flex-col gap-6 relative">
      {/* 标题 */}
      <p className="text-5xl md:text-7xl text-tc font-bold whitespace-nowrap font-[family-name:var(--font-han-sans)] mb-8 z-10">
        探索我们的服务
      </p>

      {/* ✅ SVG 背景梯形 */}
      <svg
        className="absolute top-8 left-0 w-full pointer-events-none z-0 mt-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ height: "min(600px, 50vw)", minHeight: "600px" }}
      >
        <polygon fill="#104862" points="0,0 100,0 100,85 0,100" />
      </svg>

      {/* ✅ 卡片区域 */}
      <div className="w-full relative z-10 px-0 md:px-8 pt-8">
        {isMobile ? (
        // ✅ 小屏自动轮播（单张卡片）
        <div className="w-full overflow-hidden">
            <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${siteConfig.services.length * 25}%`,
            }}
            >
            {siteConfig.services.map((s) => (
                <div
                key={s.title}
                className="w-full flex-shrink-0 "
                >
                {/* <ServiceCard data={s} /> */}
                <div className="w-full max-w-[95%] mx-auto ">
                    <ServiceCard data={s}  />
                </div>
                </div>
            ))}
            </div>
        </div>
        ) : (
          // ✅ 大屏横向并排
          <div className="flex gap-4">
            {siteConfig.services.map((s) => (
              <div key={s.title} className="flex-1">
                <ServiceCard data={s}  />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ 小圆点分页（仅移动端显示） */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-2 z-10">
          {siteConfig.services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* ✅ 常驻底部按钮 */}
      <div className="mt-4 pl-4 md:pl-8">
        <button
          className="group relative inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-2 rounded overflow-hidden transition-colors duration-300 hover:bg-white/10 hover:text-white hover:border-white"
          style={{ fontFamily: "var(--font-han-sans)" }}
          onClick={() => window.location.href = "/cooperation"}
        >
          {/* 左侧滑入箭头 */}
          <span className="absolute left-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>

          {/* 主体文本（位移） */}
          <span className="relative ml-2 flex items-center font-[family-name:var(--font-han-sans)] transition-transform duration-300 group-hover:translate-x-2">
            了解更多
          </span>

          {/* 右侧滑出箭头 */}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-4 opacity-100 group-hover:opacity-0">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

// ✅ 单个服务卡片封装（建议提取）
const ServiceCard = ({ 
  data 
}: { 
  data: { title: string; desc: string; img: string } ;
}) => (
  <Card
    className="flex flex-col justify-between items-center relative 
    bg-white/10 overflow-hidden min-h-[320px] md:min-h-[380px] lg:min-h-[420px] 
    h-auto group "
    radius="none"
  >
    {/* 背景图 */}
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <HeroImage
        src={data.img}
        alt={data.title}
        className="w-full h-full object-cover group-hover:blur-sm transition-all duration-300"
        width="100%"
        height="100%"
        radius="none"
      />
    </div>

    {/* 卡片底部标题 */}
    <CardFooter
      className="relative w-[calc(100%-32px)] mx-4 py-4 px-4 border-1 border-white/20 bg-gray-200/90 backdrop-blur-sm rounded-xl z-10
                 transition-all duration-300 transform group-hover:-translate-y-full group-hover:opacity-0 mt-auto mb-4 flex justify-center text-center text-sm md:text-base"
    >
      <p className="text-2xl md:text-xl text-tc font-bold font-[family-name:var(--font-han-sans)] ">{data.title}</p>
    </CardFooter>

    {/* 悬浮内容（完整展示） */}
    <div className="absolute inset-0 w-full h-full bg-gray-200/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-y-auto">
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <p className="text-xl md:text-3xl text-tc font-bold font-[family-name:var(--font-han-sans)] mb-4 text-left">{data.title}</p>
          <p className="text-tc text-base md:text-xl text-left font-[family-name:var(--font-sans-light)] whitespace-pre-wrap">{data.desc}</p>
        </div>
      </div>
    </div>
  </Card>
);

// const ServiceCard = ({ data }: { data: { title: string; desc: string; img: string } }) => {
//   return (
//     <Card
//       radius="none"
//       className="relative overflow-hidden 
//       group bg-transparent w-full 
//       aspect-[9/16] flex flex-col justify-end z-10"
//     >
//       {/* 背景图：按比例填充，16:9 图适配 9:16 容器 */}
//       <HeroImage
//         src={data.img}
//         alt={data.title}
//         radius="none"
//         width="100%"
//         height="100%"
//         className="absolute inset-0 w-full h-full object-cover group-hover:blur-sm transition-all duration-300 z-0"
//       />

//       {/* 卡片底部标题 */}
//       <CardFooter
//         className="relative z-10 mx-4 mb-4 py-4 px-4 bg-gray-200/90 backdrop-blur-sm rounded-xl text-center transition-all duration-300 transform group-hover:-translate-y-full group-hover:opacity-0"
//       >
//         <p className="text-xl md:text-2xl text-tc font-bold font-[family-name:var(--font-han-sans)]">
//           {data.title}
//         </p>
//       </CardFooter>

//       {/* 悬浮内容（完整展示） */}
//       <div className="absolute inset-0 z-20 bg-gray-200/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
//         <div className="h-full p-6 flex flex-col justify-between">
//           <div>
//             <p className="text-xl md:text-2xl font-bold text-tc font-[family-name:var(--font-han-sans)] mb-4">
//               {data.title}
//             </p>
//             <p className="text-base md:text-xl text-tc font-[family-name:var(--font-sans-light)] whitespace-pre-wrap">
//               {data.desc}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };