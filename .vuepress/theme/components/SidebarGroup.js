export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^[a-z]+:/i;

export function normalize(path) {
    return decodeURI(path)
        .replace(hashRE, "")
        .replace(extRE, "");
}

export function getHash(path) {
    const match = path.match(hashRE);
    if (match) {
        return match[0];
    }
}

export function isActive(route, path) {
    const routeHash = decodeURIComponent(route.hash);
    const linkHash = getHash(path);
    if (linkHash && routeHash !== linkHash) {
        return false;
    }
    const routePath = normalize(route.path);
    const pagePath = normalize(path);
    return routePath === pagePath;
}
