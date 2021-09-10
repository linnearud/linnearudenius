const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const backendServiceHost = "http://localhost:4000";

async function toJSON(response) {
    const body = await response.text();
    return body ? JSON.parse(body) : null;
}

function perform(endpoint, options) {
    const fullUrl = backendServiceHost + "/api" + endpoint;
    return fetch(fullUrl, options).then(toJSON);
}

export function get(endpoint) {
    return perform(endpoint, { headers: headers, method: "GET" });
}
