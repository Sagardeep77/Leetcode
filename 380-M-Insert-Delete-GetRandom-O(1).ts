class RandomizedSet {
    private set;
    constructor() {
        this.set = new Set();
    }

    insert(val: number): boolean {
        if(!this.set.has(val)){
            this.set.add(val);
            return true;
        }
        
        return false;
    }

    remove(val: number): boolean {
        return this.set.delete(val)
    }

    getRandom(): number {
        const size = this.set.size;
        
        const keys:number[] = Array.from(this.set);
        if(size === 1) return keys[0];
        return keys[Math.floor(Math.random() * size)];
        
    }
}
