"use client";
import { useProject } from "@/context/ProjectContext";
import { ApiResE } from "@/enum";
import { getChannelMessageApi } from "@/network/api";
import { MessageT } from "@/types";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Item from "./Item";
import Image from "next/image";

export default function Chat({ channelId }: { channelId: string }) {
  const [messages, setMessages] = useState([] as MessageT[]);
  const [page, setPage] = useState(1);
  const { domain } = useProject();
  const toBottom = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getMessages() {
      if (!domain || !channelId) return;
      try {
        const res = await getChannelMessageApi({ domain, provider_channel_id: channelId, limit: "30", page: page?.toString() });
        if (res.type === ApiResE.SUCCESS) {
          setMessages(res?.data?.reverse() || []);
        }
      } catch (error) {
        console.log(error, "error");
      }
    }
    getMessages();
  }, [domain, channelId, page]);

  useLayoutEffect(() => {
    if (toBottom.current) {
      toBottom.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-[80%] mx-auto">
        {messages.map((message) => {
          return <Item key={message?._id} message={message} />;
        })}
        <div ref={toBottom} />
      </div>
    </div>
  );
}
