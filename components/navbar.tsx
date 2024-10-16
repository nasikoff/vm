import {
  Navbar as NextUINavbar,
  NavbarContent,
 
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
 
} from "@nextui-org/navbar";
 
 
import { Link } from "@nextui-org/link";
 
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
 
 
  Logo,
} from "@/components/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathUrl = usePathname();

  return (
    
    <>
    
    
    
    <NextUINavbar maxWidth="xl" className="fixed top-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />

          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

        <ThemeSwitch />

      </NavbarContent>

    </NextUINavbar>
    
    <NextUINavbar maxWidth="xl" className="fixed bottom-5 top-[auto] bg-transparent" style={{backdropFilter:"none"}}>

<NavbarContent  justify="center" className="w-full bg-transparent" style={{backdropFilter:"none"}}>
      
 
      </NavbarContent>
    </NextUINavbar>
    
    </>








  );
};
