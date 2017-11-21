class Random {
    constructor (seed) {
        
        if (typeof seed === 'string') {
            seed = parseInt(seed.toLowerCase().replace(/[^a-z0-9]/,''), 36);
        }
        this._seed = seed;
        this._rnd = new MersenneTwister(seed);
    }
    
    random (a, b) {
        var min = 0;
        var max = 1;
        if (arguments.length === 1) {
            max = a;
        }
        else if (arguments.length === 2){
            min = a;
            max = b;
        }
        var scale = max-min;
        return min + scale * this._rnd.random();
    }
    
    randomItr (iteration) {
        var rnd = new MersenneTwister(this._seed);
        var val;
        for (var i = 0; i < iteration; i++) {
            val = rnd.random();
        }
        return val;
    }
    
    choose (arr) {
        return arr[ Math.floor(this.random(arr.length)) ];
    }
}