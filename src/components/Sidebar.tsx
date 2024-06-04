"use client";
import { useProject } from "@/context/ProjectContext";
import clsx from "clsx";
import { Text } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Skeleton from "./Skeleton";

export default function Sidebar() {
  const { channels, fetchingChannels } = useProject();
  const pathname = usePathname();

  return (
    <div className="h-full w-sidebarWidth flex-shrink-0 overflow-y-auto bg-foreground-200/80">
      <div className="pr-3 py-5">
        {!fetchingChannels &&
          channels?.map((channel) => {
            return (
              <Link
                href={`/c/${channel?.provider_channel_id}`}
                key={channel?._id}
                className={clsx("px-5 block text-sm py-2 font-medium mb-1 cursor-pointer transition-all rounded-r-full", {
                  "bg-foreground-300 pl-6": pathname.includes(channel?.provider_channel_id),
                  "hover:bg-foreground-300/60 text-foreground/40 hover:text-foreground/60 hover:pl-6": !pathname.includes(channel?.provider_channel_id),
                })}
              >
                <div className="flex gap-3">
                  <Text width={20} /> {channel.name}
                </div>
              </Link>
            );
          })}
        {fetchingChannels &&
          [...Array(4)].map((_, i) => (
            <Skeleton key={i} className="mb-3 rounded-r-full">
              <div className="h-10 w-full" />
            </Skeleton>
          ))}
      </div>
    </div>
  );
}
