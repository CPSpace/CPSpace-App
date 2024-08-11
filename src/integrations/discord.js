const RPC = require('discord-rpc');
const rpcClient = new RPC.Client({ transport: 'ipc' });
const APPLICATION_ID = '1268040383208751215';
RPC.register(APPLICATION_ID);

function onRpcReady() {
    rpcClient.setActivity({
        details: "Playing Club Penguin",
        state: "Waddle On!",
        startTimestamp: Date.now(),
        largeImageKey: "large4",
        buttons: [
            {
              label: "Play Now!",
              url: "https://play.cpspace.net"
            },
            {
              label: "Join Our Discord!",
              url: "https://discord.gg/space"
            }
          ],
        instance: true,
    });
}

function initDiscordRichPresence() {
    rpcClient.on('ready', onRpcReady);
    rpcClient.login({
        clientId: APPLICATION_ID
    }).catch(console.error);
}

module.exports = { initDiscordRichPresence }