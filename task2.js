function removeKey(obj, k) {
  for (let key in obj) if (key === k) delete obj[key];
  return obj;
}
const laptop = {
  id: 2,
  price: 4000,
  name: "mac",
  os: "mac os x",
};
console.log(removeKey(laptop, "os"));
