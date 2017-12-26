import { basename } from "path";

export class Url extends React.Component {
    static getInitialProps(req) {
        console.log('req: ', req)
        const protocol =
            req && req.headers.host.indexOf('localhost') > -1
                ? 'http'
                : req ? req.protocol : '';
        const baseURL = req
            ? `${protocol}://${req.headers.host}`
            : window.location.origin;
        return { baseURL };

    }
    render() {
        const { baseURL } = this.props;
        console.log("base url = ", baseURL)
        return <div>{baseURL}</div>;
    }
}
