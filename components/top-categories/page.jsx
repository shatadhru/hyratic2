"use client";

import React from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Code2,
  Smartphone,
  Palette,
  ImageIcon,
  Bot,
  Video,
  ArrowUpRight,
} from "lucide-react";



const categories = [
  {
    name: "Web Development",
    count: "12k+ Services",
    icon: Code2,
  },
  {
    name: "App Development",
    count: "8k+ Services",
    icon: Smartphone,
  },
  {
    name: "UI/UX Design",
    count: "6k+ Services",
    icon: Palette,
  },
  {
    name: "Graphics Design",
    count: "5k+ Services",
    icon: ImageIcon,
  },
  {
    name: "AI & Automation",
    count: "4k+ Services",
    icon: Bot,
  },
  {
    name: "Video Editing",
    count: "3k+ Services",
    icon: Video,
  },
];





function Categories() {

  return (

    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-3
      xl:grid-cols-6
      gap-4
      "
    >

      {categories.map((item)=>{

        const Icon = item.icon;


        return (

        <Card
  key={item.name}
  className="
    w-full
    h-40
    md:h-36
    md:min-w-[210px]
    cursor-pointer
    rounded-2xl
    border-0
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-primary/10
  "
>


            {/* glow */}
            <div
            className="
            absolute
            inset-0
            bg-primary/5
            opacity-0
            group-hover:opacity-100
            transition
            "
            />



            <CardContent
            className="
            relative
            
            flex
            flex-col
            gap-2
            "
            >



              <div
              className="
              flex
              items-center
              justify-between
              "
              >


                <div
                className="
                h-11
                w-11
                rounded-xl
                bg-primary/10
                flex
                items-center
                justify-center
                group-hover:bg-primary
                transition
                "
                >

                  <Icon
                  size={22}
                  className="
                  text-primary
                  group-hover:text-primary-foreground
                  transition
                  "
                  />

                </div>



                <ArrowUpRight
                size={18}
                className="
                text-muted-foreground
                group-hover:text-primary
                transition
                "
                />


              </div>





              <div>

                <h3
                className="
                font-semibold
                text-sm
                md:text-base
                "
                >

                  {item.name}

                </h3>


                <p
                className="
                text-xs
                text-muted-foreground
                mt-1
                "
                >

                  {item.count}

                </p>


              </div>



            </CardContent>


          </Card>

        )

      })}


    </div>

  );

}







function TopCategories(){


return (

<section
className="
w-full
px-3
sm:px-6
"
>


<div
className="
mb-7
flex
items-center
gap-3
"
>


<div
className="
h-9
w-9
rounded-xl
bg-primary/10
flex
items-center
justify-center
"
>

<span
className="
text-primary
"
>
✦
</span>

</div>




<div>

<h2
className="
font-bold
text-xl
md:text-2xl
tracking-tight
"
>

Top Categories

</h2>


<p
className="
text-xs
text-muted-foreground
"
>

Explore popular services

</p>


</div>




<div
className="
h-px
flex-1
bg-border
"
/>



</div>





<Categories />




</section>

)

}



export default TopCategories;