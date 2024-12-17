function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "mshasib.com") || dnsDomainIs(host, "google.com") || dnsDomainIs(host, "newconfig.nocaptchaai.com") || dnsDomainIs(host, "nocaptchaai.com") || dnsDomainIs(host, "telegram.org")) {
        return "DIRECT";
    }
    return "SOCKS5 x406.fxdx.in:15552";
}
