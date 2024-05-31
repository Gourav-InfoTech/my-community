import AudioPlayer from "@/components/AudioPlayer";
import { AttachmentT } from "@/types";
import Image from "next/image";
import React from "react";

export default function MediaItem({ attachment }: { attachment: AttachmentT }) {
  switch (attachment?.type) {
    case "image":
      return (
        <div className=" h-60 relative rounded-md overflow-hidden">
          {/* <Image width={600} height={250} src={attachment?.url} alt="media" className="object-cover" /> */}
          <img src={attachment?.url} alt="media" className="object-cover w-full h-full" />
        </div>
      );
    case "video":
      return (
        <div className="h-60 max-w-lg relative">
          <video src={attachment?.url} controls className="object-cover w-full h-full rounded-lg" />
        </div>
      );
    case "audio":
      return (
        <div className="w-[400px] max-w-[90vw] relative">
          <div className="opacity-80 font-semibold">{attachment?.name}</div>
          {/* <audio src={attachment?.url} controls className="w-full mt-2 rounded-lg" /> */}
          <AudioPlayer src={attachment?.url} />
        </div>
      );
    case "file":
      return (
        <div className="w-full relative flex flex-col justify-center items-center">
          <a href={attachment?.url} target="_blank" rel="noreferrer" className="w-full rounded-lg border border-foreground-400 p-3 bg-foreground-300 text-foreground-900">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"></path>
            </svg>
            <div className="mt-2 text-foreground opacity-80 font-semibold">{attachment?.name}</div>
          </a>
        </div>
      );
    default:
      return null;
  }
}
