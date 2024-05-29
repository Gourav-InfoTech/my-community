"use client";
import { useProject } from "@/context/ProjectContext";
import { ProvidersE } from "@/enum";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Appbar() {
  const { projectDetail } = useProject();

  function getProviderIcon(type: ProvidersE) {
    switch (type) {
      case ProvidersE.DISCORD:
        return "/discord.svg";

      case ProvidersE.SLACK:
        return "/slack.svg";

      case ProvidersE.TELEGRAM:
        return "/telegram.svg";

      default:
        return null;
    }
  }

  return (
    <div className="h-appbarHeight bg-foreground-100">
      <div className="flex justify-between items-center h-full px-5 md:px-10">
        <div className="flex gap-3 items-center">
          {getProviderIcon(projectDetail?.type) && <Image src={getProviderIcon(projectDetail?.type) || ""} alt="provider" width={28} height={28} />}
          <div className="font-semibold">{projectDetail?.name}</div>
        </div>
        {projectDetail?.invite_url && (
          <div>
            <Link href={projectDetail?.invite_url} target="_blank" className="flex gap-2 px-4 py-2 text-foreground/90 rounded-md group bg-foreground-200 hover:bg-foreground-300 transition-colors">
              Join
              <ArrowRight className="group-hover:translate-x-1 transition-all" width={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
