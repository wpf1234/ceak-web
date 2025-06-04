import React from "react";

export const FootBar = () => {
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
            <img
            src="/logo-thin.svg"
            alt="思客咨询 eak Consulting"
            className="h-20 w-auto"
            />
        </div>
        {/* Menu 响应式排列 */}
        <nav className="flex flex-col md:flex-row gap-2 md:gap-0 text-lg text-bold justify-start items-start ">
          <a href="/about">关于我们</a>
          <a href="/cooperation" className="md:mx-6">专业服务</a>
          <a href="/career">加入我们</a>
          <a href="/contact" className="md:ml-6">联系我们</a>
        </nav>
        {/* QR Code */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="w-32 h-32 bg-white rounded-md flex items-center justify-center">
            {/* 这里放置二维码图片 */}
            <img src="/qr-placeholder.png" alt="二维码" className="w-28 h-28 object-cover" />
          </div>
          <span className="text-xs text-gray-200 mt-2">关注CEAK，随时随地了解新动态</span>
        </div>
      </div>
      {/* 分割线 */}
      <div className="max-w-7xl mx-auto border-t border-gray-400 my-6" />
      {/* 底部链接 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 text-sm">
        <div className="flex gap-8 mb-2 md:mb-0">
          <a href="#" className="underline underline-offset-8">法律声明</a>
          <a href="#" className="underline underline-offset-8">使用条款</a>
          <a href="#" className="underline underline-offset-8">Cookie政策</a>
        </div>
      </div>
        <div className="flex flex-col md:flex-row text-gray-300 justify-center text-xs mt-20">
          © 2025 Ceak. All rights reserved. 思客咨询（云南）有限公司 云ICP备xxxxxxxx号-x 云公网安备
        </div>
    </footer>
  );
};
