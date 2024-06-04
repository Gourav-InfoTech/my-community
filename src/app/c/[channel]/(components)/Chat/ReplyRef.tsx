import { MessageT } from "@/types";
import { CornerUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ReplyRef({ message, to }: { message: MessageT; to: string }) {
  return (
    <Link href={to} className="flex items-center gap-2 text-sm mt-3">
      <CornerUpRight className="opacity-40" />
      <div className="flex gap-2 items-center mb-2">
        <div>
          <Image width={24} height={24} src={message?.user?.profile_pic_url} alt="profile" className="rounded-full" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="font-semibold">{message?.user?.username}</div>
          <div className="opacity-70 text-xs">{message?.message}</div>
        </div>
      </div>
    </Link>
  );
}
