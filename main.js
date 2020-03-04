const SHA512 = require('crypto-js/sha512');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;

    }

    calculateHash() {
      return SHA512(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();

    }

    mineBlock(difficulty){
      while(this.hash.substring(0,difficulty)!=Array(difficulty+1).join("0")){
        this.nonce++;
        this.hash=this.calculateHash();
      }
      console.log("Block Mined:"+this.hash+"\n")
    }


}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty=4;
  }

  createGenesisBlock(){
    return new Block(0,'18/01/2020',"Genesis Block","0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    //newBlock.hash = newBlock.calculateHash();
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

console.log('Mining Block...1\n');
pwdMgr.addBlock(new Block(1,"19/01/2020",{username:"barathadhithya29@gmail.com",password:"29061999",website:"www.gmail.com"}));

console.log('Mining Block...2\n');
pwdMgr.addBlock(new Block(2,"20/01/2020",{username:"barath.svtfoundation@gmail.com",password:"*+*+*+*",website:"www.gmail.com"}));

console.log('Mining Block...3\n');
pwdMgr.addBlock(new Block(3,"04/03/2020",{username:"barathadhithya29@gmail.com",password:"******",website:"www.facebook.com"}));



//console.log('Is Block is valid?' +pwdMgr.isChainValid());

console.log(JSON.stringify(pwdMgr,null,4));
