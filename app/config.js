// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "mongolab",
        url: "mongodb://srramcosmos:bbYjwPsmbMsr2QGPaxlONvytmu1m8CfC1WgfZetp0s0sLfNH5dEUQZQ3S6p184KZ75YrTPaDjae3h8mGhHPdrg==@srramcosmos.documents.azure.com:10255/?ssl=true&sslverifycertificate=false",
        port: 27017
    },

    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    },

    localtest:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    }

};
