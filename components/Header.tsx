'use client';

import React from "react";
import NextLink from 'next/link';
import { siteConfig } from '../config/site';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
// import {
//   Button,
//   Input,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Checkbox,
//   Link
// } from "@heroui/react";
// import {
//   SearchIcon,
//   EyeSlashFilledIcon,
//   EyeFilledIcon,
//   MailIcon,
// } from "../components/icons"

// import { useDisclosure } from "@heroui/use-disclosure";

export const Header = () => {
  // const { isOpen, onOpen, onOpenChange} = useDisclosure();

  // const [ isVisible, setIsVisible] = React.useState(false);

  // const toggleVisibility = () => setIsVisible(!isVisible);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (

    // <header className="bg-primary shadow fixed top-0 left-0 w-full z-50">
    //   <nav className="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Global">
    //     {/* Logo */}
    //     <NextLink href="/" className="flex items-center">
    //       <img
    //         src="/logo-thin.svg"
    //         alt="思客咨询 eak Consulting"
    //         className="h-10 w-auto"
    //       />
    //     </NextLink>
    //     {/* Navigation Items */}
    //     <div className="flex gap-8">
    //       {siteConfig.navItems.map((item) => (
    //         <NextLink
    //           key={item.label}
    //           href={item.href}
    //           className="font-[family-name:var(--font-han-sans)] text-white transition-colors font-normal hover:font-bold hover:underline hover:decoration-white hover:underline-offset-8"
    //         >
    //           {item.label}
    //         </NextLink>
    //       ))}
    //     </div>
    //     {/* 搜索以及登录按钮 */}
    //     {/* <div className="flex items-center gap-4">
    //       <Input
    //         classNames={{
    //           base: "max-w-full sm:max-w-[10rem] h-10",
    //           mainWrapper: "h-full",
    //           input: "text-small",
    //           inputWrapper:
    //             "h-full font-normal text-default-500 bg-default-200 dark:bg-default-100",
    //         }}
    //         placeholder="搜索…"
    //         size="sm"
    //         startContent={<SearchIcon size={
    //           18
    //         } className='text-primary'/>}
    //         type="search"
    //       />
    //       <Button
    //         radius="lg"
    //         className="bg-orange-200 text-primary font-semibold font-[family-name:var(--font-han-sans)] hover:bg-orange-400 transition"
    //         as={Link}
    //         onPress={onOpen}
    //       >
    //         LOG IN
    //       </Button>
    //       <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} backdrop="blur">
    //         <ModalContent>
    //         {(onClose) => (
    //         <>
    //           <ModalHeader className="flex flex-col gap-1 text-center font-sans">Log in</ModalHeader>
    //           <ModalBody>
    //             <Input
    //               endContent={
    //                 <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
    //               }
    //               label="Email"
    //               placeholder="Enter your email"
    //               variant="bordered"
    //             />
    //             <Input
    //               endContent={
    //                 <button
    //                   aria-label="toggle password visibility"
    //                   className="focus:outline-none"
    //                   type="button"
    //                   onClick={toggleVisibility}
    //                 >
    //                   {isVisible ? (
    //                     <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
    //                   ) : (
    //                     <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
    //                   )}
    //                 </button>
    //               }
    //               label="Password"
    //               placeholder="Enter your password"
    //               type={isVisible ? "text" : "password"}
    //               variant="bordered"
    //             />
    //             <div className="flex justify-between font-sans mt-2">
    //               <Checkbox
    //                 classNames={{
    //                   label: "text-small",
    //                 }}
    //               >
    //                 Remember me
    //               </Checkbox>
    //               <Link color="primary" href="#" size="sm">
    //                 Forgot password?
    //               </Link>
    //             </div>
    //           </ModalBody>
    //           <ModalFooter>
    //             <Button color="danger" variant="flat" onPress={onClose}>
    //               Close
    //             </Button>
    //             <Button color="primary" onPress={onClose}>
    //               Sign in
    //             </Button>
    //           </ModalFooter>
    //         </>
    //         )}
    //         </ModalContent>
    //       </Modal>
    //     </div> */}
    //   </nav>
    // </header>
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className="bg-primary fixed top-0 left-0 right-0 z-50 h-32"
      style={{ minWidth: "260px" }} // 确保全局最小宽度
    >
      {/* 内部容器：三栏布局 */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 md:px-10 py-4">
        
        {/* 左侧 Logo */}
        <div className="flex-shrink-0">
          <NextLink href="/" className="flex items-center">
            <img
              src="/logo-thin.svg"
              alt="思客咨询 ceak Consulting"
              className="h-28 w-auto max-w-[169px]"
            />
          </NextLink>
        </div>

        {/* 中间横排菜单：绝对居中 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8 whitespace-nowrap">
          {siteConfig.navItems.map((item) => (
            <NextLink
              key={item.label}
              href={item.href}
              className="font-[family-name:var(--font-han-sans)] text-white text-xl transition-colors font-normal hover:font-bold hover:underline hover:decoration-white hover:underline-offset-8"
            >
              {item.label}
            </NextLink>
          ))}
        </div>

        {/* 汉堡按钮 */}
        <div className="flex-shrink-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-white"
          />
        </div>
      </div>

      {/* 折叠菜单内容 */}
      <NavbarMenu className="mt-20">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextLink
              className="w-full"
              color={
                index === 2 
                ? "primary" 
                : index === siteConfig.navItems.length - 1 
                ? "danger" : "foreground"
              }
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
