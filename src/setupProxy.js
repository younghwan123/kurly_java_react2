// setupProxy.js  파일이름

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) => {
    WrapComponent.use(
        "/signup_db",
        createProxyMiddleware({
            "target":"http://dkfbej1745.dothome.co.kr",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/jsp",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/kurly",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/bbs",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
    
}