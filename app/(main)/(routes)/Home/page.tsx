"use client";
import { NavigationTop } from "@/components/(navigation)/navigation-top/navigation-top";
import { ArrowDown, AwardIcon, CodeIcon, FolderArchive } from "lucide-react";
import "./Home.css";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const router = useRouter();
  const [changepage, setChangePage] = useState("/Home");

  return (
    <>
      <div className="h-full w-full p-5">
        <div className="h-[600px] w-full flex flex-col justify-center items-center relative polygon">
          <div className="h-full w-full background-Home rounded-3xl blur-sm"></div>
          <div className="absolute justify-center items-center flex flex-col gap-3 m-5 font-WorkBench text-cyan-300 text-3xl">
            <h1 className="floatanimation">Welcome to my Portfolio</h1>
            <p className=" text-center font-Oswald text-sm">
              Learn more about me below
            </p>
            <Button
              variant="ghost"
              className=" dark:text-cyan-200 border-2 border-cyan-200 hover:bg-transparent font-Titan p-3 rounded-2xl text-base z-20 relative hoveranimation before:bg-cyan-300"
            >
              <Link
                href="/About"
                className="flex justify-center items-center gap-2"
              >
                <CodeIcon />
                About
              </Link>
            </Button>
          </div>
          <ArrowDown className="absolute bottom-0 m-4 text-cyan-300 floatanimation" />
        </div>
        <div className="h-[600px] flex justify-center items-center gap-9 mt-20 ml-10 FlexChange">
          <Tabs defaultValue="languages">
            <TabsList className="w-full flex gap-3 items-center">
              <TabsTrigger value="languages" className="p-2 flex gap-2">
                <CodeIcon /> Languages
              </TabsTrigger>
              <Separator orientation="vertical" className="h-1/3" />
              <TabsTrigger value="experience" className="p-2 flex gap-2">
                Experience
              </TabsTrigger>
              <Separator orientation="vertical" className="h-1/3" />
              <TabsTrigger value="award" className="p-2 flex gap-2">
                <AwardIcon />
                Award
              </TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>
                    Programming languages I have learnt for last two years.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  I have learnt:
                  <ol className="mt-3">
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>Wordpress</li>
                    <li>Nextjs</li>
                    <li>React</li>
                    <li>C#</li>
                    <li>C++</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Working Experience</CardTitle>
                  <CardDescription>
                    Working experience for last two years.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Working experience:
                  <ol className="mt-3">
                    <li>Spark Internship Programme</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="award">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>
                    My achievements for last two years.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Achievements:
                  <ol className="mt-3">
                    <li>Next.js workshop certificate</li>
                    <li>Flutter workshop certificate</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className=" font-WorkBench text-[40px] TextSize">
              MY ACHIEVEMENTS FOR PAST TWO YEARS
            </h1>
            <p className="font-Titan text-zinc-400">
              What I have done before my internship started
            </p>
          </div>
        </div>
        <div className="h-[300px] w-full polygonv2 flex justify-center items-center flex-col">
          <h1 className="text-[80px] text-cyan-300 font-Titan TextSize">
            Project Made By Me
          </h1>
          <p className="text-cyan-100 font-Oswald">Click button below</p>
          <Button variant="default" className="mt-4">
            <Link className="flex gap-2 px-2" href="/about/project">
              <FolderArchive /> Project
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
