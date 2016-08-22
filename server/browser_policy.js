BrowserPolicy.content.disallowConnect();

var rootUrl = __meteor_runtime_config__.ROOT_URL;
console.log('ROOT_URL: ' + rootUrl);

//Allow DDP connections for local development
if (rootUrl == 'http://localhost:3000/') {
  BrowserPolicy.content.allowConnectOrigin(rootUrl);
  BrowserPolicy.content.allowConnectOrigin(rootUrl.replace(/http(s?)/, 'ws$1'));
  BrowserPolicy.content.allowOriginForAll('http://localhost:3002');
  BrowserPolicy.content.allowConnectOrigin('ws://localhost:3002');
}

if (rootUrl == 'http://dstock.io/') {
  BrowserPolicy.content.allowConnectOrigin('http://dstock.io');
  BrowserPolicy.content.allowConnectOrigin('ws://dstock.io');
  BrowserPolicy.content.allowConnectOrigin('http://*.dstock.io');
  BrowserPolicy.content.allowConnectOrigin('ws://*.dstock.io');
}

if (rootUrl == 'https://dstock.io/') {
  BrowserPolicy.content.allowConnectOrigin('https://dstock.io');
  BrowserPolicy.content.allowConnectOrigin('wss://dstock.io');
  BrowserPolicy.content.allowConnectOrigin('https://*.dstock.io');
  BrowserPolicy.content.allowConnectOrigin('wss://*.dstock.io');
}

if (rootUrl == 'http://daostock.com/') {
  BrowserPolicy.content.allowConnectOrigin('http://daostock.com');
  BrowserPolicy.content.allowConnectOrigin('ws://daostock.com');
  BrowserPolicy.content.allowConnectOrigin('http://*.daostock.com');
  BrowserPolicy.content.allowConnectOrigin('ws://*.daostock.com');
}

if (rootUrl == 'https://daostock.com/') {
  BrowserPolicy.content.allowConnectOrigin('https://daostock.com');
  BrowserPolicy.content.allowConnectOrigin('wss://daostock.com');
  BrowserPolicy.content.allowConnectOrigin('https://*.daostock.com');
  BrowserPolicy.content.allowConnectOrigin('wss://*.daostock.com');
}

BrowserPolicy.content.allowOriginForAll('https://mc.yandex.ru');
BrowserPolicy.content.allowOriginForAll('https://www.google-analytics.com');
BrowserPolicy.content.allowOriginForAll('https://chart.googleapis.com');
BrowserPolicy.content.allowOriginForAll('https://fonts.googleapis.com');
BrowserPolicy.content.allowOriginForAll('https://fonts.gstatic.com');
BrowserPolicy.content.allowFontDataUrl();
