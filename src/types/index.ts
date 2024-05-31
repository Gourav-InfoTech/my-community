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


export type User = {
    _id: string;
    project_id: string;
    provider_server_id: string;
    user_id: string;
    profile_pic_url: string;
    username: string;
    created_at: string;
    updated_at: string;
    __v: number;
}



export type AttachmentT = {
    type: "image" | "video" | "audio" | "file";
    url: string;
    name: string;
}

export type MessageT = {
    _id: string;
    project_id: string;
    provider_channel_id: string;
    provider_server_id: string;
    provider_message_id: string;
    provider_user_id: string;
    message: string;
    attachments: AttachmentT[];
    channel_type: string;
    parent_id: null;
    channel_id: string;
    reference_id: null;
    reactions: MessageRxnsT[];
    created_at: string;
    updated_at: string;
    edit: boolean;
    __v: number;
    user: User;
    threadCount: number;
    reference?: MessageT;
}


export type MessageRxnsT = {
    _id: string;
    message_id: string;
    reaction_type: string;
    count: number;
    __v: number;
    created_at: string;
    updated_at: string;
}

