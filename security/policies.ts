export module Policies {
    const key: string = "6ffbf7ec41952eb6cfbb5057c9b938ca8da1d5cbde3edc51ef19c60c2c1450f9";

    export function verifyHost(host: string | undefined, hostValue: string) {
        return (host != hostValue) ? false : true;
    }

    export function verifyApiKey(apiKey: string | undefined) {
        let response = { error: true, msg: "No API Key", status: 403 };

        if (apiKey) {
            if (apiKey !== key) {
                response.status = 401;
                response.msg = "Not a valid API Key";
            } else {
                response.error = false;
            }
        }

        return response;
    }
}