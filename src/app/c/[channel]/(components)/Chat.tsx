"use client";
import { useProject } from "@/context/ProjectContext";
import { ApiResE } from "@/enum";
import { getChannelMessageApi } from "@/network/api";
import React, { useEffect, useState } from "react";

export default function Chat({ data, channelId }: { data: any; channelId: string }) {
  const [messages, setMessages] = useState([] as any[]);
  const { domain } = useProject();

  useEffect(() => {
    async function getMessages() {
      if (!domain || !channelId) return;
      try {
        const res = await getChannelMessageApi({ domain, channel_id: channelId, limit: "20", page: "1" });
        if (res.type === ApiResE.SUCCESS) {
          setMessages(res.data);
        }
      } catch (error) {
        console.log(error, "error");
      }
    }
    getMessages();
  }, [domain, channelId]);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  return <div>{}</div>;
}
