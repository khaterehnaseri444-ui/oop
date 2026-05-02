class Laptops {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.available = true;
  }

  displayData() {
    const status = this.available ? "available" : "not available";
    console.log(
      `Laptop Name : ${this.name} | Laptop Price : ${this.price} | Laptop Status : ${status}`,
    );
  }
}

class HP extends Laptops {
  constructor(name, price, model, hard) {
    super(name, price);
    this.model = model;
    this.hard = hard;
  }

  displayData() {
    super.displayData();
    console.log(`Laptop Model : ${this.model} | Laptop Hard : ${this.hard}`);
  }
}

class MACBook extends Laptops {
  constructor(name, price, model, screen) {
    super(name, price);
    this.model = model;
    this.screen = screen;
  }

  displayData() {
    super.displayData();
    console.log(`MAC Model : ${this.model} | MAC ScreEn : ${this.screen}`);
  }
}

const myHP = new HP("hp laptop", "$600", "G8", "SSD");
myHP.displayData();

const myMAC = new MACBook("MAC Laptop", "$900", "apple", "touch");
myMAC.displayData();
