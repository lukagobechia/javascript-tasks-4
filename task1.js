function mergeObjects(obj1,obj2) {
    const obj3 = {...obj1,...obj2}
    return obj3
}

const phones = {
    id: 1,
    price: 2000,
    name: "iPhone 15 pro",
    year:2023
}
const laptops = {
    id: 2,
    price: 4000,
    name: "mac",
    os: "mac os x"
}
console.log(mergeObjects(phones,laptops))