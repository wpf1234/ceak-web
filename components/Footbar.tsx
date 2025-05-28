import React from "react";

export const FootBar = () => {
  return (
    <footer className="bg-[#18506A] text-white pt-8 pb-4 font-[family-name:var(--font-han-sans)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo & Title */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
            <img
            src="/logo-thin.svg"
            alt="思客咨询 eak Consulting"
            className="h-20 w-auto"
            />
        </div>
        {/* Menu */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg">
          <a href="#" className="hover:underline hover:underline-offset-8">关于我们</a>
          <a href="#" className="hover:underline hover:underline-offset-8">专业服务</a>
          <a href="#" className="hover:underline hover:underline-offset-8">加入我们</a>
          <a href="#" className="hover:underline hover:underline-offset-8">联系我们</a>
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
          <a href="#" className="hover:underline hover:underline-offset-8">法律声明</a>
          <a href="#" className="hover:underline hover:underline-offset-8">使用条款</a>
          <a href="#" className="hover:underline hover:underline-offset-8">Cookie政策</a>
        </div>
      </div>
        <div className="flex flex-col md:flex-row text-gray-300 justify-center text-xs mt-20">
          © 2025 Ceak. All rights reserved. 思客咨询（云南）有限公司 云ICP备xxxxxxxx号-x 云公网安备
        </div>
    </footer>
  );
};
