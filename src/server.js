import Hapi from 'hapi';
import Helper from '../helper';

const server = Hapi.server({
    port: Helper.config.PORT,
    host: Helper.config.HOST
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

server.route({
    method: 'GET',
    path: '/',
    handler: () => {
        return 'Hello, world!';
    }
});

init();
