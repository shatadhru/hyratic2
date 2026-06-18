"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Portal } from "@/components/portal";

import {
  companyLinks,
  companyLinks2,
  productLinks,
  freelanceLinks,
} from "@/components/nav-links";

import { LinkItem } from "@/components/sheard";

import {
  X,
  Menu,
  MessageCircle,
  Bell,
  LayoutDashboard,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";


export function MobileNav() {

  const router = useRouter();

  const [open,setOpen] = React.useState(false);
  const [user,setUser] = React.useState(null);

  const [theme,setTheme] =
    React.useState("system");


  React.useEffect(()=>{

    const unsub =
      onAuthStateChanged(
        auth,
        (u)=>setUser(u)
      );

    return ()=>unsub();

  },[]);



  React.useEffect(()=>{

    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark"
    );


    if(theme==="system"){

      const dark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;


      root.classList.add(
        dark ? "dark":"light"
      );

    }else{

      root.classList.add(theme);

    }

  },[theme]);



  const go=(path)=>{

    router.push(path);
    setOpen(false);

  };



  const active =
    "flex rounded-xl px-3 py-3 text-sm font-medium hover:bg-muted hover:text-[#FE5B00]";



  const MenuGroup=({title,items})=>(

    <div>

      <p className="
        mb-2
        text-xs
        font-bold
        uppercase
        text-muted-foreground
      ">
        {title}
      </p>


      <div className="space-y-1">

        {items.map((link)=>(

          <LinkItem
            key={link.label}
            {...link}
            className={active}
          />

        ))}

      </div>

    </div>

  );



  return (

    <div className="md:hidden">


      <Button
        size="icon"
        variant="outline"
        onClick={()=>setOpen(!open)}
        className="relative z-50 rounded-xl"
      >

        {open 
          ? <X/>
          : <Menu/>
        }

      </Button>



      {open && (

        <Portal className="top-14">


          {/* no blur */}
          <div
            onClick={()=>setOpen(false)}
            className="
              fixed
              inset-0
            "
          />


          <div
            className="
              fixed
              inset-0
              top-16
              z-40
              overflow-y-auto
              bg-white
              dark:bg-black
              p-4
              space-y-5
            "
          >



            {user ? (

              <div className="grid grid-cols-2 gap-2">


                <Button
                  variant="outline"
                  className="rounded-xl"
                  onClick={()=>go("/messages")}
                >
                  <MessageCircle className="mr-2 h-4 w-4"/>
                  Chat
                </Button>


                <Button
                  variant="outline"
                  className="rounded-xl"
                  onClick={()=>go("/notifications")}
                >
                  <Bell className="mr-2 h-4 w-4"/>
                  Alerts
                </Button>


                <Button
                  variant="outline"
                  className="col-span-2 rounded-xl"
                  onClick={()=>go("/hr/dashboard")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4"/>
                  Dashboard
                </Button>


              </div>


            ):(

              <div className="space-y-2">

                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  onClick={()=>go("/auth")}
                >
                  Sign In
                </Button>


                <Button
                  className="
                    w-full
                    rounded-xl
                    bg-[#FE5B00]
                    text-white
                  "
                  onClick={()=>go("/auth")}
                >
                  Get Started
                </Button>

              </div>

            )}




            <div className="
              flex
              justify-between
              items-center
              rounded-xl
              border
              p-3
            ">

              <span>
                Theme
              </span>


              <div className="flex gap-1">


                <Button
                  size="icon"
                  variant={theme==="light"?"default":"ghost"}
                  onClick={()=>setTheme("light")}
                >
                  <Sun size={17}/>
                </Button>


                <Button
                  size="icon"
                  variant={theme==="dark"?"default":"ghost"}
                  onClick={()=>setTheme("dark")}
                >
                  <Moon size={17}/>
                </Button>


                <Button
                  size="icon"
                  variant={theme==="system"?"default":"ghost"}
                  onClick={()=>setTheme("system")}
                >
                  <Laptop size={17}/>
                </Button>


              </div>

            </div>




            <MenuGroup
              title="Product"
              items={productLinks}
            />


            <MenuGroup
              title="Freelance"
              items={freelanceLinks}
            />


            <MenuGroup
              title="Company"
              items={[
                ...companyLinks,
                ...companyLinks2
              ]}
            />


          </div>


        </Portal>

      )}


    </div>

  );

}