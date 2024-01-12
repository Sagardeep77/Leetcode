function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    let b = 1;

    yield a;
    yield b;
    while(1){
        let c = a + b;
        a = b;
        b = c;
        yield c;
    }
};