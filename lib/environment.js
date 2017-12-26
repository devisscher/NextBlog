export const environment = process.env.NODE_ENV;
export const twitter = { key: process.env.TWITTER_KEY };

export class baseURL {
    static async getInitialProps({ req }) {
        const protocol =
            req && req.headers.host.indexOf('localhost') > -1
                ? 'http'
                : req ? req.protocol : '';
        const baseURL = req
            ? `${protocol}://${req.headers.host}`
            : window.location.origin;
        return { baseURL };
    }
}
