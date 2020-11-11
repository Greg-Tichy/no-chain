class Block {
    constructor(prevHash, timestamp, myHash, data) {
        this.prevHash = prevHash;
        this.timestamp = timestamp;
        this.myHash = myHash;
        this.data = data;
    }
    ToString() {
            return `Block:
             prevHash  = ${this.prevHash.substring(0, 10)}
             timestamp = ${this.timestamp}
             myHash    = ${this.myHash.substring(0, 10)}
             data      = ${this.data}`;
    }
}

module.exports = Block;