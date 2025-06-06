"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCookie } from "./cookie-context"; // 引入 context

export const FootBar = () => {
  const { openSettings } = useCookie(); // 从 context 中获取 openSettings 函数

  return (
    <footer 
    className="bg-primary text-white 
                pt-6 pb-4 mt-8
                font-[family-name:var(--font-han-sans)]"
    >
      <div 
      className="max-w-7xl mx-auto flex flex-col md:flex-row 
                items-center justify-between relative"
      >
        {/* Logo & Title */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
            <Image
            src="/logo-thin.svg"
            alt="思客咨询 eak Consulting"
            className="h-20 w-auto"
            width={100}
            height={100}
            />
        </div>
        {/* Menu 响应式排列 */}
        <nav className="flex flex-col md:flex-row gap-2 md:gap-0 text-lg text-bold font-[family-name:var(--font-han-sans)] justify-start items-start ">
          <Link href="/about">关于我们</Link>
          <Link href="/cooperation" className="md:mx-6">专业服务</Link>
          <Link href="/career">加入我们</Link>
          <Link href="/contact" className="md:ml-6">联系我们</Link>
        </nav>
        {/* QR Code */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="w-32 h-32 bg-white rounded-md flex items-center justify-center">
            {/* 这里放置二维码图片 */}
            <Image 
            src="/globe.svg" 
            alt="二维码" 
            className="w-28 h-28 object-cover" 
            width={100}
            height={100}
            />
          </div>
          <span className="text-sm text-gray-200 font-[family-name:var(--font-sans-light)] mt-2">关注CEAK，随时随地了解新动态</span>
        </div>
      </div>
      {/* 分割线 */}
      <div className="max-w-7xl mx-auto border-t border-gray-400 my-6" />
      {/* 底部链接 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 text-base font-[family-name:var(--font-sans-light)]">
        <div className="flex gap-8 mb-2 md:mb-0">
          <Link href="/legal" className="underline underline-offset-8">法律声明</Link>
          <Link href="/privacy" className="underline underline-offset-8">隐私政策</Link>
          <button
          onClick={openSettings}
          className="underline underline-offset-8 text-left"
        >
          Cookie设置
        </button>
        </div>
      </div>
      <div 
      className="flex flex-wrap justify-center items-center 
      gap-x-2 gap-y-1 text-gray-300 text-center text-sm font-[family-name:var(--font-sans-light)]
      mt-20 px-4"
      >
        <span>© 2025 Ceak. All rights reserved.</span>
        <span>思客咨询（云南）有限公司</span>
        <span>云ICP备xxxxxxxx号-x</span>
        <span>云公网安备</span>
      </div>
    </footer>
  );
};
