import { post } from "..";

//   /api/v1/getProjectDetail
export async function getProjectDetailApi({ domain }: { domain: string }) {
    return post({
        route: "/api/v1/getProjectDetail",
        data: JSON.stringify({ domain }),
        config: {
            headers: {
                "Content-Type": "application/json"
            },
        },
    });
}

export async function getProjectChannelApi({ domain }: { domain: string }) {
    return post({
        route: "/api/v1/getProjectChannel",
        data: JSON.stringify({ domain }),
        config: {
            headers: {
                "Content-Type": "application/json"
            },
        },
    });
}

export async function getChannelMessageApi(raw: { domain: string; channel_id: string, message_id?: string, page: string, limit: string }) {
    return post({
        route: "/api/v1/getChannelMessage",
        data: JSON.stringify(raw),
        config: {
            headers: {
                "Content-Type": "application/json"
            },
        },
    });
}