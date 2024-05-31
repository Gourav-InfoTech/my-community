import MDText from "@/components/MDText";
import { MessageT } from "@/types";
import React from "react";

export default function TextItem({ message }: { message: string }) {
  return <MDText text={message} />;
}
