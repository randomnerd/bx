Package.describe({
  summary: "Bitcoin RPC Client wrapper",
  version: "0.0.1",
  name: "randomnerd:bitcoinrpc"
  // Optional github URL to your source repository.
  //git: "https://github.com/something/something.git",
});

Npm.depends({
  'bitcoin': '2.4.0'
});

Package.onUse(function (api) {
  api.export('BitcoinRPC');
  api.addFiles('bitcoinrpc.js', 'server');
});
