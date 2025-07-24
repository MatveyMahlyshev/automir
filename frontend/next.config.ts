import type {NextConfig} from "next";

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [new URL('https://599be291-f201-4e35-85ae-8243838d4b56.selstorage.ru/**')],
    }
};

export default nextConfig;
