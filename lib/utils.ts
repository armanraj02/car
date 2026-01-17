export const getBasePath = (path: string): string => {
    // Check if we are in production
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/car' : '';

    // Ensure path starts with / if not present
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${basePath}${cleanPath}`;
};
