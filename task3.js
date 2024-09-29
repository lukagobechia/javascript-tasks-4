function description(car) {
    const description = `Car manufacturer is ${car.make}, model is ${car.model}, release year is ${car.year}`
    return description;
}
const car = {
    make: "bmw",
    model: "m5",
    year: 2024
};
  
console.log(description(car));
  