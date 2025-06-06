"use client";

import { Dialog, DialogPanel, DialogTitle, Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function CookieSettings({
  defaultOpen,
  onClose,
}: {
  defaultOpen: boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(defaultOpen);

  // Cookie 开关状态
  const [functionalCookies, setFunctionalCookies] = useState(true); // 必需，默认启用
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const handleSave = () => {
    const settings = {
      functional: functionalCookies,
      analytics: analyticsCookies,
      marketing: marketingCookies,
    };
    localStorage.setItem("cookie-settings", JSON.stringify(settings));
    setOpen(false);
    onClose();
  };

  const handleAcceptAll = () => {
    setAnalyticsCookies(true);
    setMarketingCookies(true);
    handleSave();
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        onClose();
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full">
          <DialogTitle className="text-2xl font-semibold text-gray-900 mb-4">
            Cookie 设置
          </DialogTitle>

          <p className="text-base text-tc mb-6  ">
            我们使用 cookie 提升您的浏览体验，您可以自定义不同类型的 cookie 设置。
          </p>

          <div className="space-y-4">
            {/* 功能类 Cookies */}
            <div className="flex items-start justify-between gap-4 border-b pb-3">
              <div>
                <p className="font-medium text-tc">必要功能 Cookie</p>
                <p className="text-sm text-gray-500">
                  网站运行所必需，无法关闭。
                </p>
              </div>
              <Switch
                checked={true}
                disabled
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-400 cursor-not-allowed"
              >
                <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition" />
              </Switch>
            </div>

            {/* 分析类 Cookies */}
            <div className="flex items-start justify-between gap-4 border-b pb-3">
              <div>
                <p className="font-medium text-tc">分析类 Cookie</p>
                <p className="text-sm text-gray-500">
                  用于收集用户行为数据，帮助我们优化服务。
                </p>
              </div>
              <Switch
                checked={analyticsCookies}
                onChange={setAnalyticsCookies}
                className={`${
                  analyticsCookies ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    analyticsCookies ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            {/* 营销类 Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-800">广告与营销 Cookie</p>
                <p className="text-sm text-gray-500">
                  用于个性化广告推荐，并衡量广告效果。
                </p>
              </div>
              <Switch
                checked={marketingCookies}
                onChange={setMarketingCookies}
                className={`${
                  marketingCookies ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    marketingCookies ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          {/* 底部按钮 */}
          <div className="mt-8 flex justify-between items-center gap-4">
            <button
              onClick={() => {
                setOpen(false);
                onClose();
              }}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              关闭
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
              >
                保存设置
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-primaryHover hover:bg-primary text-white rounded-md"
              >
                接受全部
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
