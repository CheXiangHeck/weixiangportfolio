"use client";

import "./anotherhome.css";
import { project } from "@/components/projectInfo/project";
import { useState, useEffect } from "react";
import { checklist } from "@/components/checklist/checklist";
import { useRouter } from "next/navigation";

export default function page() {
  const [page, setPage] = useState("");
  const [projects, setProjects] = useState("");
  const router = useRouter();

  useEffect(() => {
    const pagetimeout = setTimeout(() => {
      sessionStorage.setItem("Project", "/" + projects);
      router.push(page);
    }, 1000);
  }, [page]);

  return (
    <>
      <div className=" bg-black h-full w-full fixed home-polygon z-50 flex justify-center items-center">
        <h1 className="font-Sixty md:text-9xl text-8xl Start-Text colorfont">
          Home
        </h1>
      </div>
      <div className="h-full w-full overflow-y-scroll scrollbarhidden snap-both snap-mandatory relative">
        <div className="h-full w-full flex items-center justify-center snap-center">
          <div className="w-full h-full flex justify-center items-center flex-col cursor-default fadein-animation">
            <h1 className="font-Oswald text-6xl">Hi, I'm Wei Xiang</h1>
            <p className="font-Kanit text-3xl">I am a Software Engineer</p>
          </div>
          <div className="absolute font-Sixty text-xs m-6 cursor-default left-0 bottom-0 flex flex-col justify-center items-center gap-3">
            Scroll
            <div className="w-[25px] h-[20px] arrowdown bg-white"></div>
            <div className="w-[25px] h-[20px] arrowdown"></div>
          </div>
        </div>
        <div className="h-full w-full snap-center relative">
          <div className="background-image absolute w-full h-full -z-10"></div>
          <div className="h-full grid grid-cols-3 content-Home  justify-center">
            <div className="md:col-span-2 col-span-1 p-3 header-text-hovereffect overflow-hidden hover:scale-105">
              <div
                tabIndex={1}
                className="border-2 h-full rounded-3xl p-3 bg-black cursor-pointer"
                onClick={() => {
                  setPage("about");
                }}
              >
                <div className="h-full">
                  <div className="h-full flex items-end relative">
                    <div className="flex flex-col">
                      <h1 className="font-Oswald text-6xl text z-10">
                        About Me
                      </h1>
                      <p className="text-[#3BFFA0] text-xs font-Kanit">
                        Short Description about me
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full p-3 col-span-1 scrollbarhidden">
              <div className="h-full w-full bg-black rounded-3xl transition-all scrollbarhidden overflow-y-scroll"></div>
            </div>
            <div className="md:col-span-3 col-span-1 p-3 my-3 project-slider">
              <div className="w-[100%] h-[90%] flex gap-5">
                {project().map((proj, index) => (
                  <div
                    tabIndex={1}
                    className="h-[full] w-[300px] min-[300px] rounded-3xl hover:scale-105 hover:text-[#3BFFA0] transition-all cursor-pointer relative overflow-hidden flex-shrink-0 bg-black"
                    // onClick={() => setProjects(proj.projectname); () => setPage(`about/project`)}
                  >
                    <div className="w-full h-full flex ml-3 items-center">
                      <img
                        className="w-[90%] h-[60%] rounded-3xl"
                        src={proj.projectimage}
                      ></img>
                    </div>
                    <div className="pl-3 absolute font-Kanit w-full bottom-0 text-xl">
                      {proj.projectname}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
