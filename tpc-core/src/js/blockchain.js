import Web3 from "web3";

var Blockchain = {
    create: function(password){
        if(password.length < 8){
            return false;
        }else{
            var dk = keythereum.create();
            return keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv)
        }
        
    }
};

export default { Blockchain };