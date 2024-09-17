class Fruit {
  constructor(name = "Unknown fruit", color = "Unknown color", sweetness = 5) {
    this.name = name;
    this.color = color;

    if (sweetness > 10) {
      this.sweetness = 10;
    } else if (sweetness < 0) {
      this.sweetness = 0;
    } else {
      this.sweetness = sweetness;
    }
  }
}

class Apple extends Fruit {
  constructor(
    goodForCider = false,
    goodForJuice = false,
    name,
    color,
    sweetness
  ) {
    super(name, color, sweetness);

    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
}

// Przykład 1: Podanie wszystkich wartości
const apple1 = new Apple(true, false, "antonowka", "yellow", 5);
console.log(apple1);

// Przykład 2: Brakujące wartości (domyślne zostaną użyte)
const apple2 = new Apple();
console.log(apple2);

// Przykład 3: Poziom słodkości większy niż 10 (zostanie ustawiony na 10)
const apple3 = new Apple(true, true, "golden", "green", 15);
console.log(apple3);

// Przykład 4: Poziom słodkości mniejszy niż 0 (zostanie ustawiony na 0)
const apple4 = new Apple(false, false, "reneta", "red", -5);
console.log(apple4);
