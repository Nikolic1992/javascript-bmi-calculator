function bmi(weight, height) {
  let result = weight / (height * height); // This is the formula for BMI weight / (height * height)

  // I like to use ternary operator a lot :)
  return result < 18.5
    ? "Underweight"
    : result <= 25
    ? "Normal"
    : result <= 30
    ? "Overweight"
    : "Obese";
}
console.log(bmi(10, 1.6)); // Output will be Underweight
