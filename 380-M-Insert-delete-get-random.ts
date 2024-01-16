class RandomizedSet {
    private members:number[] = [];
    private map:Map<number,number> = new Map();
    constructor() {
        
    }

    insert(val: number): boolean {
        if(!this.map.has(val)){
            this.members.push(val);
            this.map.set(val,this.members.length - 1);
            return true;
        }
        return false;
    }

    remove(val: number): boolean {
        if(this.map.has(val)){
            const index = this.map.get(val);
            this.map.delete(val);
            this.members.splice(index,1);
                        //update the index of all the 

            for(let x = index; x < this.members.length; x++){
                this.map.set(this.members[x], x);
            }
            return true;
        }
        return false;
    }

    getRandom(): number {
        const getRandomIndex = Math.floor(Math.random() * this.members.length);

        return this.members[getRandomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */