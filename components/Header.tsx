'use client';

import React from "react";
import NextLink from 'next/link';
import { siteConfig } from '../config/site';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
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
  const [isScrolled, setIsScrolled] = React.useState(false);

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


    <div className={`fixed flex items-center justify-between top-0 left-0 right-0 z-50 h-20 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-primary'}`}>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="h-full w-full"
        style={{ minWidth: '360px', background: 'transparent' }}
      >
        {/* 左侧 Logo */}
        <div className="absolute left-0 h-full flex items-center" style={{ minWidth: '200px' }}>
          <NextLink href="/" className="flex items-center w-full justify-between">
            <img
              src={isScrolled ? "/logo-deep.svg" : "/logo-thin.svg"}
              alt="思客咨询 ceak Consulting"
              className="h-20 w-auto max-w-[220px] mx-auto transition-all duration-300"
            />
          </NextLink>
        </div>
        {/* 中间横排菜单：绝对居中 */}
        <NavbarContent className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8 whitespace-nowrap">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.label}>
              <NextLink
                href={item.href}
                className={`font-[family-name:var(--font-han-sans)] text-xl transition-colors font-normal hover:font-bold hover:underline hover:underline-offset-8 ${isScrolled ? 'text-black hover:decoration-black' : 'text-white hover:decoration-white'}`}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        {/* 汉堡按钮 */}
        <div className="absolute right-0 h-full flex items-center pr-6">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          />
        </div>
        {/* 折叠菜单内容 */}
        <NavbarMenu className="pt-12">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className="w-full text-tc font-[family-name:var(--font-han-sans)] font-normal text-2xl "
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
    </div>
  );
}
