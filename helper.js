const printInfo = (msg) => {
    console.log('\x1b[36m%s\x1b[0m', msg);
};

const printError = (msg) => {
    console.log('\x1b[31m', msg);
};

const printWarning = (msg) => {
    console.log('\x1b[22m', msg);
};

const checkEnv = () => {
    const HOST = process.env.HOST || 'localhost';
    const PORT = process.env.PORT || 3000;
    const ENV = process.env.ENV ? process.env.ENV : 'userdev';

    printInfo(`Current [HOST] is ${HOST}`);
    printInfo(`Current [PORT] is ${PORT}`);
    printInfo(`Current [ENV] is ${ENV.toLowerCase()}`);

    return {
        HOST,
        PORT,
        ENV
    };
};

const config = checkEnv();

const helper = {
    printInfo,
    printError,
    printWarning,
    config
};

export default helper;
