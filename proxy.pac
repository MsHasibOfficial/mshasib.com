function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "mshasib.com") || dnsDomainIs(host, "google.com")) {
        return "DIRECT";
    }
    return "SOCKS5 x406.fxdx.in:15552";
}
