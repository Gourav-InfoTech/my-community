import { ProvidersE } from "@/enum";

export type ProjectDetailT = {
    _id: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    invite_url: string;
    provider_server_id: string;
    type: ProvidersE
}


export type ChannelT = {
    _id: string;
    project_id: string;
    name: string;
    provider_server_id: string;
    provider_channel_id: string;
    created_at: string;
    updated_at: string;
    __v: number;
}