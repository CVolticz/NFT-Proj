// Simple JS middleware to connect to SOLANA node

var web3 = require('@solana/web3.js');
var spltoken = require('@solana/spl-token.js');

(async () => {
    // Establish a connection to a cluster
    var connection = new web3.Connection(
        '',
        'confirmed',
    );
})