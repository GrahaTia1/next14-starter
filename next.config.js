/** @type {import('next').NextConfig} */
const nextConfig = {
    // 这样设置后可以在用Image组件的时候导入外部的图片链接
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"images.pexels.com"
            },
            {
                protocol:'https',
                hostname:"www.pixiv.net"
            },
        ]
    }
}

module.exports = nextConfig
