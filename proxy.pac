function FindProxyForURL(url, host) {
    // Domains to route through the public network
    if (dnsDomainIs(host, "whoer.net") || dnsDomainIs(host, "mshasib.com")) {
        return "DIRECT"; // Use the public network without a proxy
    }

    // All other domains route to the private network
    return "PROXY 10.0.0.1:8080"; // Replace 10.0.0.1:8080 with your private network's proxy
}
