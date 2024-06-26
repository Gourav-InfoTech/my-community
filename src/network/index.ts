
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT ? "http://192.168.18.46:1111" : "https://huhuhaha.com"

export const post = ({ route, data, config, revalTag }: { route: string; revalTag?: string[], data: any; config?: { headers: any }; }) => {
    return fetch(ENDPOINT + route, {
        method: "POST", // or 'PUT'
        headers: {
            ...config?.headers,
        },
        cache: "force-cache",
        ...(revalTag ? { next: { tags: revalTag } } : {}),
        body: data,
    })
        .then(async (response) => {
            const jst = await response.json();
            return jst;
        })
        .catch((err) => {
            // console.log('POST err', err);
            throw err;
        });
};
export const patch = ({ route, data, config }: { route: string; data: any; config: { headers: any } }) => {
    return fetch(ENDPOINT + route, {
        method: "PATCH", // or 'PUT'
        headers: {
            ...config.headers,
        },
        body: data,
    })
        .then(async (response) => {
            if (response.ok) {
                return response.json();
            } else {
                const err = await response.json();
                throw err;
            }
        })
        .catch((err) => {
            // console.log('POST err', err);
            throw err;
        });
};
export const get = ({ route, config }: { route: string; config: { headers: any } }) => {
    return fetch(ENDPOINT + route, {
        method: "GET", // or 'PUT'
        ...config,
    })
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

export const put = ({ route, data, config }: { route: string; data: any; config: { headers: any } }) => {
    return fetch(ENDPOINT + route, {
        method: "PUT",
        headers: {
            ...config.headers,
        },
        body: data,
    })
        .then(async (response) => {
            if (response.ok) {
                return response.json();
            } else {
                const err = await response.json();
                throw err;
            }
        })
        .catch((err) => {
            throw err;
        });
};
export const deleteReq = ({ route, config }: { route: string; config: { headers: any } }) => {
    return fetch(ENDPOINT + route, {
        method: "DELETE",
        headers: {
            ...config.headers,
        },
    })
        .then(async (response) => {
            if (response.ok) {
                return response.text();
            } else {
                const err = await response.json();
                throw err;
            }
        })
        .catch((err) => {
            throw err;
        });
};