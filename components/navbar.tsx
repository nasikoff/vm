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
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
 
 
  Logo,
} from "@/components/icons";


export const Navbar = () => {
  const pathUrl = usePathname();

  return (
    
 
    
    
    
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
      <NavbarContent  justify="center" className="w-full bg-transparent" style={{backdropFilter:"none"}}>
      
      <div  className="w-auto justify-evenly flex gap-4 justify-start ml-2 px-5 py-4 bg-content1  outline-none bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none">
                {siteConfig.navItems.map((item) => (
                  <NavbarItem className="flex justify-center w-[60px]" style={{backdropFilter:"none"}}>
      
                    <NextLink
                      className={pathUrl === item.href
                        ? "text-[#338EF7] content-navi "
                        : "opacity-70 "} 
                      color="foreground"
                      href={item.href}
      
                    >
                      <div className="">{item.svg}</div> 
                    </NextLink>
                  </NavbarItem>
                ))}
              </div>
            </NavbarContent>
    </NextUINavbar>
    
     


    
    
 








  );
};
