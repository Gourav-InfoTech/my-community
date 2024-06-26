import { AttachmentT, MessageRxnsT, MessageT } from "@/types";
import { humanizeTimestamp } from "@/utils/helpers";
import { ChevronRight, CornerDownRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TextItem from "./TextItem";
import MediaItem from "./MediaItem";
import ReplyRef from "./ReplyRef";
import EmojiConvertor from "emoji-js";
export default function Item({ message }: { message: MessageT }) {
  const [convertedReactions, setConvertedReactions] = useState([] as { emoji: string; count: number }[]);

  useEffect(() => {
    if (!message?.reactions || message?.reactions?.length === 0) return;
    const emoji = new EmojiConvertor();
    emoji.replace_mode = "unified";
    emoji.allow_native = true;

    const convertShortcodeToEmoji = (shortcode: string) => emoji.replace_colons(shortcode);

    const newReactionsArray = message?.reactions?.map((item) => ({ emoji: convertShortcodeToEmoji(item.reaction_type), count: item?.count }));

    setConvertedReactions(newReactionsArray || []);
  }, [message?.reactions]);

  return (
    <div id={message?._id} key={message?._id} className="my-6">
      <div className="flex gap-2">
        <div className="self-end flex-shrink-0">
          <Image width={28} height={28} src={message?.user?.profile_pic_url} alt="profile" className="rounded-full" />
        </div>
        <div className="">
          {message?.reference && <ReplyRef to={"#" + message?.reference?._id} message={message?.reference} />}
          <div style={{ background: "linear-gradient(190deg, #202020 0%, #141414 61%)" }} className="break-all py-3 px-4 bg-foreground-200 flex flex-col gap-2 rounded-xl rounded-bl-none text-sm">
            {message?.message && <TextItem message={message?.message} />}
            {message?.attachments?.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {message?.attachments?.map((attachment: AttachmentT) => {
                  return <MediaItem key={attachment?.url} attachment={attachment} />;
                })}
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-2 items-center text-sm">
            <div className="font-semibold">{message?.user?.username}</div>
            <div className="text-xs opacity-40">{humanizeTimestamp(message?.created_at)}</div>
            {message?.edit && <div className="text-xs opacity-40">(Edited)</div>}
          </div>
        </div>
      </div>
      {Boolean(message?.threadCount) && (
        <div className="flex gap-1 items-center ml-2 mt-3">
          <CornerDownRight className="opacity-40 self-start" />
          <div className="bg-foreground-200 p-2 text-sm rounded-md">
            <div className="flex gap-2 items-center">
              <div className="opacity-50">{message?.message}</div>
              <div>
                <div className="text-primary font-semibold text-xs flex gap-1 items-center">
                  {message?.threadCount} {message?.threadCount > 1 ? "Messages" : "Message"} <ChevronRight width={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {convertedReactions?.length > 0 && (
        <div className="flex gap-2 mt-2">
          {convertedReactions?.map((rxn, indx) => {
            return (
              <div key={indx} className="flex gap-1 items-center">
                <div>{rxn?.emoji}</div>
                <div className="text-xs opacity-40">{rxn?.count}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
