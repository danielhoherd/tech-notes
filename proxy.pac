function FindProxyForURL(url, host) {
  if ((isInNet(host, "192.168.9.0", "255.255.255.0")) &&
      (! isInNet(myIpAddress(), "192.168.9.0", "255.255.255.0"))) {
    return "SOCKS5 localhost:47000" ;
  } else {
    return "DIRECT" ;
  }
}
