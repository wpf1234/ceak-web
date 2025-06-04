'use client';

import {  Button } from '@heroui/react';

export default function ApplicationSection() {

  return (
    <section id="application" className="w-full px-6 py-20 bg-white">
      <p className="text-4xl md:text-5xl md:md:text-7xl font-bold mb-10 text-left font-[family-name:var(--font-han-sans)]">
        立即申请
      </p>

      <div className="bg-gray-300 w-full max-w-[1440px] min-h-[800px] mx-auto p-12 rounded-3xl shadow-md">
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="flex flex-col gap-y-10 px-4 md:px-12"
            style={{ minHeight: 'auto' }} // 避免 h-full 拉伸子元素
            >
            {/* 下面是各个输入行 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                职位
                <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="如：AI课程研发专家"
                required
                className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* 其他条目同理，保持 min-h-[56px] 或你需要的高度 */}
            {/* 姓名 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label 
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                姓名
                <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="请输入您的姓名"
                required
                className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* 电子邮箱 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label 
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                电子邮箱
                </label>
                <input
                type="email"
                placeholder="example@example.com"
                className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* 电话 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label 
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                电话号码
                <span className="text-red-500">*</span>
                </label>
                <input
                type="tel"
                placeholder="请输入手机号码"
                required
                className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* 毕业院校 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label 
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                毕业院校
                </label>
                <input
                type="text"
                placeholder="请输入毕业学校全称"
                className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* 简历上传 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:h-20">
                <label 
                className="w-full md:w-32 flex items-center md:justify-end 
                justify-start whitespace-nowrap 
                text-xl md:text-2xl md:md:text-4xl text-tc 
                font-[family-name:var(--font-han-sans)]"
                >
                简历上传
                <span className="text-red-500">*</span>
                </label>
                <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="flex-1 block text-sm text-gray-700
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-primary file:text-white
                            hover:file:bg-primary/80"
                />
            </div>

          {/* 提交按钮，右下角 */}
          <div className="flex justify-end mt-4">
            <Button
              type="submit"
              className="text-primary text-sm px-6 py-2"
              color='primary'
              radius="md"
              variant="ghost"
            >
              提交申请
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
