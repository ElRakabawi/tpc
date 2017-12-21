import Web3 from "web3";
import Wallet from 'ethereumjs-wallet';
import tx from "ethereumjs-tx";
import download from "js-file-download";

window.Blockchain = {
    create: function(password){
        if(password.length < 8){
            return false;
        }else{
            var wallet = Wallet.generate();
            var v3 = wallet.toV3(password);
            if(v3){
                download(JSON.stringify(v3), "identity.json");
                return v3;   
            }
        }
        
    },
    decrypt: function(json, password){
        return Wallet.fromV3(json, password);
    }
};