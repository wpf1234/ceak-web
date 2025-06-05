"use client";

import { Image } from '@heroui/react';
import { Button } from '@heroui/react';

export default function ContactUs() {
  return (
    <div className=" mx-auto bg-white space-y-16">
      {/* 上部：图片 */}
      <div className="w-full">
        <Image
          src="/images/contact.jpg" // 请替换为实际图片路径
          alt="联系我们"
          radius="none"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* 中部：地址信息 */}
      <div className="text-start space-y-4 px-0 md:px-40">
        <p className="text-3xl md:text-5xl md:md:text-7xl font-bold font-[family-name:var(--font-han-sans)] text-tc">昆明办公室</p>
        <div className="text-base md:text-lg pt-10 font-[family-name:var(--font-han-sans)] text-tcleading-relaxed">
          <p>地址：云南省昆明市东风东路1号东方广场C2座9层</p>
          <p>邮政编号：650021</p>
          <p>联系电话：( +86 ) 0871 - 8xxx xxxx</p>
          <p>邮箱：info@ceakconsulting.com</p>
        </div>
      </div>

      {/* 下部：留言表单 */}
      <div className="space-y-6 px-0 md:px-40 pb-20">
        <div className="text-start space-y-2">
          <p className="text-3xl md:text-5xl md:md:text-7xl font-semibold font-[family-name:var(--font-han-sans)] text-tc">给我们留言</p>
          <p className="text-lg md:text-2xl text-tc font-[family-name:var(--font-han-sans)] py-10">
            感谢您对CEAK的关注，请填写以下信息与我们联系。
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // 在此处理表单提交逻辑
          }}
          className="flex flex-col gap-y-10 px-4 md:px-12"
        >
          {/* 姓名 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <label 
            className="w-full md:w-32 flex text-2xl md:text-4xl 
            items-center md:justify-end justify-start whitespace-nowrap
            text-tc font-medium font-[family-name:var(--font-han-sans)]"
            >
              姓名<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="请输入您的姓名"
              className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* 公司 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <label 
            className="w-full md:w-32 flex text-2xl md:text-4xl 
            items-center md:justify-end justify-start whitespace-nowrap
            text-tc font-medium font-[family-name:var(--font-han-sans)]"
            >
              公司
            </label>
            <input
              type="text"
              placeholder="请输入公司名称"
              className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* 电子邮箱 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <label 
           className="w-full md:w-32 flex text-2xl md:text-4xl 
           items-center md:justify-end justify-start whitespace-nowrap
           text-tc font-medium font-[family-name:var(--font-han-sans)]"
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

          {/* 信息 */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <label 
            className="w-full md:w-32 flex text-2xl md:text-4xl 
            items-center md:justify-end justify-start whitespace-nowrap
            text-tc font-medium font-[family-name:var(--font-han-sans)]"
            >
              信息
            </label>
            <textarea
              placeholder="请输入您的留言内容"
              rows={3}
              className="w-full flex-1 
                text-base md:text-xl 
                py-3 px-4 
                border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          {/* 文件上传 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <label 
            className="w-full md:w-32 flex text-2xl md:text-4xl 
            items-center md:justify-end justify-start whitespace-nowrap
            text-tc font-medium font-[family-name:var(--font-han-sans)]"
            >
              文件
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="flex-1 w-full text-sm text-tc
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-primary file:text-white
                         hover:file:bg-primary/80"
            />
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-6 py-2 text-primary rounded-md"
              color="primary" 
              variant="ghost"
              size='lg'
              radius='lg'
            >
              提交
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
