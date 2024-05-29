import * as React from "react";
import { SVGProps } from "react";
const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <linearGradient id="a" x1="66.67%" x2="41.67%" y1="16.67%" y2="75%">
      <stop offset={0} stopColor="#37aee2" />
      <stop offset={1} stopColor="#1e96c8" />
    </linearGradient>
    <linearGradient id="b" x1="65.97%" x2="85.12%" y1="43.69%" y2="80.24%">
      <stop offset={0} stopColor="#eff7fc" />
      <stop offset={1} stopColor="#fff" />
    </linearGradient>
    <circle cx={8} cy={8} r={8} fill="url(#a)" />
    <path fill="#c8daea" d="M6.533 11.667c-.259 0-.215-.098-.304-.345l-.762-2.508 5.866-3.48" />
    <path fill="#a9c9dd" d="M6.533 11.667c.2 0 .289-.092.4-.2L8 10.429l-1.33-.802" />
    <path
      fill="url(#b)"
      d="m6.67 9.627 3.223 2.382c.368.203.634.098.725-.341l1.313-6.184c.134-.54-.206-.783-.558-.624L3.667 7.832c-.526.21-.522.504-.095.635l1.977.617 4.578-2.888c.216-.131.415-.06.252.084"
    />
  </svg>
);
export default TelegramIcon;
