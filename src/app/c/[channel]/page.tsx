// import { headers } from "next/headers";
import React from "react";
import Chat from "./(components)/Chat";
// import { getChannelMessageApi } from "@/network/api";
// import { ApiResE } from "@/enum";

// async function getMessages(domain: string, channel_id: string) {
//   if (!domain || !channel_id) return;
//   try {
//     console.log(domain, channel_id, "domain, channel_id");
//     const res = await getChannelMessageApi({ domain, channel_id, limit: "20", page: "1" });
//     if (res.type === ApiResE.SUCCESS) {
//       return res.data;
//     }
//   } catch (error) {
//     console.log(error, "error");
//   }
// }

export default async function ChannelPage({ params }: { params: { channel: string } }) {
  // const headersList = headers();
  // const host = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DOMAIN : headersList.get("host");
  // const data = await getMessages(host || "", params?.channel);
  return <Chat channelId={params?.channel} />;
}
