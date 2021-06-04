var gifSearch = require('gif-search');

module.exports = function(client, prefix){
    client.on('message', (message) =>
        {
            try {
                if(message.content.includes(prefix)) {
                    const commandBody = message.content.slice(prefix.length);
                    const args = commandBody.split(' ');
                    const command = args.shift().toLowerCase();

                    if(command === "monkey" || command === "singe"){
                        gifSearch.setAPIKey(process.env.GIFTOKEN);
                        gifSearch.random('monkey').then(gifUrl =>
                            {
                                message.channel.send(gifUrl);
                            }
                        )
                    }
                }
            } catch (e) {
                e.print();
            }
        }
    )
}
