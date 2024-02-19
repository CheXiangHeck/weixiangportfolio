"use client";

import { useEffect } from "react";
import "./Start.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { project } from "@/components/projectInfo/project";

export default function Page() {
  const projects = project();
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`anotherhome`);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative font-Titan overflow-hidden text-[50px] textchange">
        PORTFOLIO
      </div>
      <div className="font-Oswald text-xl flex">
        Loading<p className="relative tracking-widest Loading">...</p>
      </div>
      <div className="absolute bottom-0 m-5 font-Sixty">
        Created By CheXiangHeck
      </div>
    </div>
  );
}
