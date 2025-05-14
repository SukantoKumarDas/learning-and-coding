class Currier {
    charge() {
        throw new Error('This method should be overridden!');
    }
}

class Fedex extends Currier {
    charge(x) {
        return x*10;
    }
}

class DHL extends Currier {
    charge(x) {
        return x*20;
    }
}

class UPS extends Currier {
    charge(x) {
        return x*30;
    }
}

// Calculate the shipping charge
class Shipping {
    constructor(currier, weight) {
        this.currier = currier;
        this.weight = weight
    }

    calculateCharge() {
        return this.currier.charge(this.weight);
    }

    setCurrier(currier) {
        this.currier = currier;
    }
}

const package = {form: "USA", to: "Canada", weight: 10};
// const currier = new Fedex();
// const charge = currier.charge(package.weight);
// console.log(`The charge for shipping from ${package.form} to ${package.to} is $${charge}`);

const shipping = new Shipping(new Fedex(), package.weight);
console.log(`Shiipping charge using Fedex is $${shipping.calculateCharge()}`);

shipping.setCurrier(new DHL())
console.log(`Shipping charge using DHL is $${shipping.calculateCharge()}`);

shipping.setCurrier(new UPS())
console.log(`Shipping charge using UPS is $${shipping.calculateCharge()}`);