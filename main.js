const SHA512 = require('crypto-js/sha512');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();

    }

    calculateHash() {
      return SHA512(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

    }


}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0,'18/01/2020',"Genesis Block","0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true;
  }




}


let pwdMgr = new Blockchain();
pwdMgr.addBlock(new Block(1,"19/01/2020",{username:"barathadhithya29@gmail.com",password:"29061999",website:"www.gmail.com"}));
pwdMgr.addBlock(new Block(2,"20/01/2020",{username:"barath.svtfoundation@gmail.com",password:"123654",website:"www.gmail.com"}));

console.log('Is Block is valid?' +pwdMgr.isChainValid());

console.log(JSON.stringify(pwdMgr,null,4));
