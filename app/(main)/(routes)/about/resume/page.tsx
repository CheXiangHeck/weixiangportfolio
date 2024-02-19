import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import {
  BookIcon,
  BriefcaseIcon,
  DotIcon,
  FolderArchiveIcon,
  GithubIcon,
  HashIcon,
  LinkIcon,
  LinkedinIcon,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import "./resume.css";

export default function Page() {
  return (
    <div className="h-full">
      <div className="h-[full] w-full pt-[70px] pb-[70px] p-5">
        <div className=" outline outline-neutral-500 h-[1500px]">
          <div className="h-[300px] relative">
            <div className="h-[200px] w-full absolute bottom-0 bg-neutral-600 flex items-center">
              <div className=" rounded-md w-fit m-14 p-5 gap-2 flex flex-col text-white">
                <h1 className="font-Oswald text-8xl">Che Wei Xiang</h1>
                <p className=" font-Oswald text-3xl">Software Engineer</p>
              </div>
              <img className="w-[200px] h-[200px] rounded-full bg-black absolute top-[-100px] right-0 m-5"></img>
            </div>
          </div>
          <div className="w-full h-[1150px]">
            <div className="h-full flex">
              <div className="h-full w-1/5 flex flex-col ml-10 pt-[70px] text-xl">
                <div className="flex gap-3 w-full justify-center items-center">
                  <DotIcon />
                  <h1 className="font-Kanit">Details</h1>
                  <DotIcon />
                </div>
                <p>
                  98, Jalan Saujana Tropika,70300, Seremban 2,Negeri Sembilan
                </p>
                <h1 className="font-Oswald mt-5 text-base">
                  Contact: +6011-16161257
                </h1>
                <h1 className="font-Oswald">
                  <a
                    href="mailto: chehi716@gmail.com"
                    className="flex text-base"
                  >
                    Email: chehi716@gmail.com{" "}
                    <LinkIcon className="text-blue-300 ml-2" />
                  </a>
                </h1>
                <div className="flex flex-col items-center mt-20">
                  <div className="flex font-Kanit justify-center items-center">
                    <DotIcon />
                    Social Media
                    <DotIcon />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Link
                      href="https://www.linkedin.com/in/wei-xiang-apu/"
                      className="flex gap-3"
                    >
                      <LinkedinIcon /> Wei Xiang{" "}
                      <LinkIcon className="text-blue-300" />
                    </Link>
                    <Link
                      href="https://github.com/CheXiangHeck"
                      className="flex gap-3"
                    >
                      <GithubIcon /> CheHeck{" "}
                      <LinkIcon className="text-blue-300" />
                    </Link>
                    <Link
                      href="https://github.com/CheXiangHeck"
                      className="flex gap-3"
                    >
                      <WhatsAppOutlined /> +6011-1616 1257
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-full w-full p-5 ml-10 pl-10 mt-10">
                <div className="h-[15%] w-full flex gap-3">
                  <div className="h-full w-[5%] flex flex-col items-center gap-3">
                    <UserCircle2 className="text-cyan-300 w-[100%] h-[55px]" />
                    <div className="dark:bg-white bg-black h-full w-[1px]"></div>
                  </div>
                  <div className="w-full h-full">
                    <h1 className="h-[30px] flex items-center text-5xl font-Titan">
                      Profile
                    </h1>
                    <p className="mt-5 pr-10 font-Oswald text-xl">
                      I am a Software Engineer student currently studying at
                      Asia Pacific University. I have been learning coding for
                      past two years, I am confident to say that I have a lot of
                      ideas on solving a problem for the company, skills to
                      assist others on their project. I am looking forward to
                      work for a company which I could show my capability and my
                      abilities, rather than desribing myself with words and how
                      I do it I prefer to prove myself.
                    </p>
                  </div>
                </div>
                <div className="h-[20%] w-full flex gap-3 mt-5">
                  <div className="h-full w-[5%] flex flex-col items-center gap-3">
                    <BriefcaseIcon className="text-cyan-300 w-[100%] h-[55px]" />
                    <div className="dark:bg-white bg-black h-full w-[1px]"></div>
                  </div>
                  <div className="w-full h-full">
                    <h1 className="h-[30px] flex items-center text-5xl font-Titan">
                      Work Experience
                    </h1>
                    <div className="mt-5 pr-10">
                      <h1 className="text-3xl font-Kanit">
                        Graphic Designer, Asia Pacific University, Kuala Lumpur
                      </h1>
                      <p className="font-Oswald text-zinc-300 dark:text-zinc-500">
                        10 January 2024 - 26 April 2024
                      </p>
                      <ul className="font-Oswald text-xl list-disc pl-5">
                        <li>
                          Provided some designing of poster for the Spark
                          Internship purposes.
                        </li>
                        <li>Created some websites using React and Nextjs.</li>
                        <li>Gained some training section related to AI.</li>
                        <li>Learned how to use figma for wireframe usage.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="h-[22%] w-full flex gap-3 mt-5">
                  <div className="h-full w-[5%] flex flex-col items-center gap-3">
                    <BookIcon className="text-cyan-300 w-[100%] h-[55px]" />
                    <div className="dark:bg-white bg-black h-full w-[1px]"></div>
                  </div>
                  <div className="w-full h-full">
                    <h1 className="h-[30px] flex items-center text-5xl font-Titan">
                      Education
                    </h1>
                    <div className="mt-5 pr-10">
                      <h1 className="text-2xl font-Kanit">
                        Software Engineering, Asia Pacific University of
                        Technology & Innovation
                      </h1>
                      <p className="font-Oswald text-zinc-300 dark:text-zinc-500">
                        8 March 2022 - Uncertain
                      </p>
                      <p className="font-Oswald text-xl">Status: Undergoing</p>
                      <h1 className="text-3xl font-Kanit mt-5">
                        UEC, Chung Hua High School
                      </h1>
                      <p className="font-Oswald text-zinc-300 dark:text-zinc-500">
                        18 January 2016 - 15 February 2022
                      </p>
                      <p className="font-Oswald text-xl">Status: Graduated</p>
                    </div>
                  </div>
                </div>
                <div className="h-[20%] w-full flex gap-3 mt-5">
                  <div className="h-full w-[5%] flex flex-col items-center gap-3">
                    <FolderArchiveIcon className="text-cyan-300 w-[100%] h-[55px]" />
                    <div className="dark:bg-white bg-black h-full w-[1px]"></div>
                  </div>
                  <div className="w-full h-full">
                    <h1 className="h-[30px] flex items-center text-5xl font-Titan">
                      Project
                    </h1>
                    <div className="mt-5 pr-10">
                      <h1 className="text-3xl font-Kanit">
                        Freshly Dropped, Own Project
                      </h1>
                      <p className="font-Oswald text-zinc-300 dark:text-zinc-500">
                        10 Jan 2024 - 20 Jan 2024
                      </p>
                      <ul className="font-Oswald text-xl list-disc pl-5">
                        <li>Created using React, and Supabase.</li>
                        <li>Made during internship period.</li>
                        <li>More information check on project</li>
                      </ul>
                      <p className="font-Oswald text-xl">Status: Completed</p>
                    </div>
                  </div>
                </div>
                <div className="h-[10%] w-full flex gap-3 mt-5">
                  <div className="h-full w-[5%] flex flex-col items-center gap-3">
                    <HashIcon className="text-cyan-300 w-[100%] h-[55px]" />
                    <div className="dark:bg-white bg-black h-full w-[1px]"></div>
                  </div>
                  <div className="w-full h-full">
                    <h1 className="h-[30px] flex items-center text-5xl font-Titan">
                      References
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
