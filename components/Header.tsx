'use client';

import React from "react";
import { siteConfig } from '../config/site';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@heroui/react";
import {
  usePathname,
} from 'next/navigation';
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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

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

    <div className={`fixed top-0 left-0 right-0 z-50 h-header transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-primary'}`}>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="h-full max-w-layout w-full mx-auto !bg-transparent"
        style={{ minWidth: '360px' , backgroundColor: 'transparent', backdropFilter: 'none' }}
      >
        {/* 左侧 Logo */}
        <div className="relative h-full max-w-layout flex items-center" style={{ minWidth: '200px' }}>
          <Link href="/" className="flex items-center w-full justify-center pl-6 md:pl-20">
            <Image
              src={isScrolled ? "/logo-deep.svg" : "/logo-thin.svg"}
              alt="思客咨询 ceak Consulting"
              className="h-24 w-auto max-w-[220px] mx-auto transition-all duration-300"
            />
          </Link>
        </div>
        {/* 中间横排菜单：绝对居中 */}
        <NavbarContent className="absolute left-1/2 transform -translate-x-1/2 !bg-transparent hidden lg:flex gap-8 whitespace-nowrap ml-48">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.label} className="!bg-transparent">
                <Link
                  href={item.href}
                  className={`font-[family-name:var(--font-han-sans)] 
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                    transition-colors ${
                    isActive
                      ? 'font-bold underline underline-offset-8'
                      : 'font-normal hover:font-bold hover:underline hover:underline-offset-8'
                  } ${isScrolled ? (isActive ? 'text-black decoration-black' : 'text-black hover:decoration-black') : (isActive ? 'text-white decoration-white' : 'text-white hover:decoration-white')}`}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        {/* 汉堡按钮 */}
        <div className="absolute right-0 h-full flex items-center pr-6">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`lg:hidden !bg-transparent transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          />
        </div>
        {/* 折叠菜单内容 */}
        <NavbarMenu className="pt-12 !bg-transparent flex flex-col items-center justify-center h-full">
          {siteConfig.navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem
                key={`${item.label}-${index}`}
                className="flex items-center justify-center w-full py-4"  // 宽度100%，上下padding，水平垂直居中
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-[family-name:var(--font-han-sans)] text-xl md:text-2xl text-black 
                              ${isActive ? 'font-bold underline underline-offset-4' : 'font-normal'}`}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
