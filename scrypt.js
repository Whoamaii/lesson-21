let promptOne = +prompt("X:");
let promptTwo = +prompt("Y:");
let promptThree = prompt("Znak:");
let object = { x: promptOne, y: promptTwo, z: promptThree };
let znakExam = /^[+-/*%]/.test(promptThree);
if (isNaN(promptOne)) {
  promptOne = +prompt("Невірне числове значення! Введіть числове значення X:");
}
if (isNaN(promptTwo)) {
  promptTwo = +prompt("Невірне числове значення! Введіть числове значення Y:");
}
if (znakExam === false) {
  promptThree = prompt(
    "Невірний математичний оператор! Введіть математичний оператор Znak:"
  );
}

class SuperMath {
  objectExam(obj) {
    switch (obj.z) {
      case "+":
        return obj.x + obj.y;
      case "-":
        return obj.x - obj.y;
      case "/":
        return obj.x / obj.y;
      case "*":
        return obj.x * obj.y;
      case "%":
        return obj.x % obj.y;
    }
  }
  input() {
    let conf = confirm("Everything is OK?");
    if (conf) {
      alert(result.objectExam(object));
    } else {
      promptOne = +prompt("Введіть числове значення X:");
      promptTwo = +prompt("Введіть числове значення Y:");
      promptThree = prompt("Введіть математичний оператор Znak:");
      conf = confirm("Everything is OK exactly?");
      alert(result.objectExam(object));
    }
  }
}

const result = new SuperMath({});

result.objectExam(object);
result.input();
