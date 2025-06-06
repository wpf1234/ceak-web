// components/CookieBanner.tsx
"use client";
import { useState, useEffect } from "react";
import CookieSettings from "./CookieSettings";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[720px] bg-white shadow-xl rounded-xl border border-gray-200 px-6 py-4 z-50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 text-sm text-tc font-[family-name:var(--font-san-light)]">
              我们使用 cookies 来优化您的浏览体验，分析网站流量，并用于个性化推荐。
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleOpenSettings}
                className="text-sm underline text-blue-600 hover:text-blue-800 transition"
              >
                管理偏好
              </button>
              <button
                onClick={() => {
                  handleCloseBanner();
                }}
                className="text-sm bg-primaryHover hover:bg-primary text-white px-4 py-2 rounded-md shadow"
              >
                接受全部
              </button>
            </div>
          </div>
        </div>
      )}

    {/* Cookie 设置弹窗 */}
    {showSettings && (
      <CookieSettings
      defaultOpen={true}
      onClose={() => setShowSettings(false)}
      />
    )}
  </>
  );
}
