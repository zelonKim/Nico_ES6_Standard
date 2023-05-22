/* 
const arr = ["a", "b", "c", "d"]
console.log(arr.at(2)) // c
console.log(arr[2]) // c

console.log(arr.at(-1)) // d
console.log(arr[-1]) // undefined (작동 x)
*/

/////////////////

/*
const user = {
    name: "nico",
    isAdmin: "yes"
};

console.log(user.hasOwnProperty("name")) // true
console.log(user.hasOwnProperty("address")) // false

console.log(Object.hasOwn(user,"name")) // true
console.log(Object.hasOwn(user,"address")) // false

console.log("name" in user); // true
console.log("address" in user); // false 
*/

/////////////////

/* 
try {
    2 + 2;
    throw new Error("DB Connection Failed.");
} catch (e) {
    console.log(e.message);
}
// DB Connection Failed.
*/

/* 
try {
    2 + 2;
    throw new Error("DB Connection Failed.", {
        cause: "Password is wrong."
    });
} catch (e) {
    console.log(e.message);
    console.log(e.cause)
}
// DB Connection Failed.
// Password is wrong. 
*/

/* 
try {
    2 + 2;
    throw new Error("DB Connection Failed.", {
        cause: {
            content: "Password is wrong.",
            value: 1234,
            notice: ["too short"]
        }
    });
} catch (e) {
    console.log(e.cause)
}
// {content: 'Password is wrong.', value: 1234, notice: ['too short']}
*/

/////////////////////


/* 
class Counter {
    constructor() {
        this.count = 0;
    }
    plus() {
        this.count++;
    }
}  
const c = new Counter();
c.plus();
c.plus();
console.log(c.count); // 2
*/



/* 
class Counter {
    count = 0;

    plus() {
        this.count++;
    }
}  
const c = new Counter();
c.plus();
c.plus();
console.log(c.count); // 2
*/



////////////////////////


/* 
class Counter {
    count = 0;

    plus() {
        this.count++;
    }
}  
const c = new Counter();
c.plus();
c.plus();
c.count = 100000; // 클래스 외부에서 필드값 변경 가능
console.log(c.count); // 100000
*/


/* 
class Counter {
    #count = 0;

    plus() {
        this.#count++;
    }
}  
const c = new Counter();
c.plus();
c.plus();
c.#count = 100000; // 클래스 외부에서 필드값 변경 불가
console.log(c.#count); // 오류 발생  
*/


//////////////////

/* 
class Counter {
    count = 0;

    plus() {
        if(this.count === 5) {
            this.reset();
        } else {
            this.count++;
        }
    }
    reset() {
        this.count = 0;
    }
}

const c = new Counter();
c.plus();
c.plus();
console.log(c.count) // 2
c.reset(); // 클래스 외부에서 메소드 사용 가능
console.log(c.count) // 0
*/


/* 
 class Counter {
    #count = 0;

    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
c.plus();
c.plus();
c.#reset(); // 클래스 외부에서 메소드 사용 불가
// 오류 발생  
*/


////////////////////


/* 
class Counter {
    #count = 0;

    get count() { // get 필드명()으로 private 필드값을 클래스 외부에서 얻을 수 있도록 해줌.
        return this.#count;
    }
    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
c.plus();
c.plus();
c.plus();
c.plus();
c.plus();
c.plus();
console.log(c.count); // 0 
*/

///////////////////

/* 
class Counter {
    #count = 0;

    description = "Count up to five"

    get count() { 
        return this.#count;
    }
    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
console.log(c.description) // Count up to five 
*/



/*
 class Counter {
    #count = 0;

    static description = "Count up to five"

    get count() { 
        return this.#count;
    }
    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
console.log(c.description) // undefined 
*/


/*
 class Counter {
    #count = 0;

    static description = "Count up to five"

    get count() { 
        return this.#count;
    }
    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
console.log(Counter.description) // Count up to five 
 */


class Counter {
    #count = 0;
    static description = "Count up to five"
    
    static isMyChild(inst) {
        return inst instanceof Counter;
    }

    get count() { 
        return this.#count;
    }
    plus() {
        if(this.#count === 5) {
            this.#reset();
        } else {
            this.#count++;
        }
    }
    #reset() {
        this.#count = 0;
    }
}

const c = new Counter();
console.log(Counter.isMyChild(c)) // true