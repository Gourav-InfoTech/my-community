"use client";
import { ApiResE } from "@/enum";
import { getProjectChannelApi, getProjectDetailApi } from "@/network/api";
import { ChannelT, ProjectDetailT } from "@/types";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProjectContextType = {
  channels: ChannelT[];
  activeChannel: ChannelT | null;
  setActiveChannel: (channel: any) => void;
  projectDetail: ProjectDetailT;
  fetchingChannels: boolean;
  domain: string;
  fetchingProject: boolean;
};

const ProjectCtx = React.createContext({} as ProjectContextType);

export default function ProjectContext({ children }: { children: React.ReactNode }) {
  const [domain, setDomain] = useState("");
  const [channels, setChannels] = useState([] as ChannelT[]);
  const [activeChannel, setActiveChannel] = useState<ChannelT | null>(null);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailT>({} as ProjectDetailT);
  const [fetchingChannels, setFetchingChannels] = useState(true);
  const [fetchingProject, setFetchingProject] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const { channel } = useParams();

  useEffect(() => {
    if (!domain) {
      setFetchingProject(false);
      return;
    }
    async function fetchProject() {
      try {
        const res = await getProjectDetailApi({ domain });
        if (res.type === ApiResE.SUCCESS) {
          setProjectDetail(res.data || {});
        }
      } catch (error) {
        console.error(error);
      } finally {
        setFetchingProject(false);
      }
    }
    fetchProject();
  }, [domain]);

  useEffect(() => {
    if (!domain) {
      setFetchingChannels(false);
      return;
    }
    async function fetchChannels() {
      try {
        const res = await getProjectChannelApi({ domain });
        if (res.type === ApiResE.SUCCESS) {
          setChannels(res.data || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setFetchingChannels(false);
      }
    }
    fetchChannels();
  }, [domain]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (process.env.NEXT_PUBLIC_DOMAIN) {
        setDomain(process.env.NEXT_PUBLIC_DOMAIN);
      }
    }
  }, []);

  useEffect(() => {
    if (channels?.length > 0) {
      if (!channel) {
        setActiveChannel(channels[0]);
        router.push(`/c/${channels[0]?.provider_channel_id}`);
      }
    }

    if (pathname.includes("c/")) {
      const channel = channels.find((channel) => pathname.includes(channel?.provider_channel_id));
      setActiveChannel(channel || null);
    }
  }, [activeChannel, channels, pathname, router, fetchingChannels, channel]);

  return (
    <ProjectCtx.Provider
      value={{
        domain,
        channels,
        activeChannel,
        setActiveChannel,
        projectDetail,
        fetchingChannels,
        fetchingProject,
      }}
    >
      {children}
    </ProjectCtx.Provider>
  );
}

export function useProject() {
  return React.useContext(ProjectCtx);
}
