"use client";
import { useProject } from "@/context/ProjectContext";
import clsx from "clsx";
import { Text } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const { channels } = useProject();
  const pathname = usePathname();

  return (
    <div className="h-full w-sidebarWidth flex-shrink-0 overflow-y-auto bg-foreground-200/80">
      <div className="pr-3 py-5">
        {channels?.map((channel) => {
          return (
            <Link
              href={`/c/${channel?._id}`}
              key={channel?._id}
              className={clsx("px-5 block text-sm py-2 font-medium mb-1 cursor-pointer transition-all rounded-r-full", {
                "bg-foreground-300 pl-6": pathname.includes(channel?._id),
                "hover:bg-foreground-300/60 text-foreground/40 hover:text-foreground/60 hover:pl-6": !pathname.includes(channel?._id),
              })}
            >
              <div className="flex gap-3">
                <Text width={20} /> {channel.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const CHANNLES = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "Random",
  },
  {
    id: 3,
    name: "Music",
  },
  {
    id: 4,
    name: "Movies",
  },
  {
    id: 5,
    name: "Gaming",
  },
  {
    id: 6,
    name: "Namaye-wa-nan-desuka",
  },
];
