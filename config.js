// local devloper connection
// const config = {
//     app: {
//         port: 5000
//     },
//     db: {
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'elearnin_myshopee_pyramid'
//     }
// };

// production connection
const config = {
    app: {
        port: 3000
    },
    db: {
        host: '103.235.105.88',
        user: 'elearnin_root',
        password: 'elearnin@123',
        database: 'elearnin_myshopee_pyramid'
    }
};

module.exports = config;