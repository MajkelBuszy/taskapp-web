type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const returnCorrectRequest = (method: Method, body: unknown): RequestInit => {
    if (method === 'GET') {
        return {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }

    return {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
};

export const sendApiRequest = async <T>(
    url: string,
    method: Method,
    body: unknown = {},
): Promise<T> => {
    const response = await fetch(url, returnCorrectRequest(method, body));

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return (await response.json()) as Promise<T>;
};
