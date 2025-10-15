function FindProxyForURL(url, host) {
      if (url.startsWith("http:")) {
          return "PROXY http-proxy.mydomain.com:8080";
            } else if (url.startsWith("ftp:")) {
                return "PROXY ftp-proxy.mydomain.com:443";
                  } else if (url.startsWith("gopher:")) {
                      return "PROXY gopher-proxy.mydomain.com:4083";
                        } else if (url.startsWith("https:") || url.startsWith("snews:")) {
                            return "PROXY security-proxy.mydomain.com:8080";
                              }
                                return "DIRECT";
                                } 
