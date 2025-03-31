//forma vieja con require
const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
    })
}

// Funcion autoconvocada asincronica (funcion agnostica sin nombre y se autoconvoca)
// en si, se llama funcion agnostica autoconvocada. Agnostica por que no tiene nombre y autoconvocada porque la ejecutamos con los ()
// tiene que ser asincrona porque si no, habra errores
(async () => {
    main();
})();