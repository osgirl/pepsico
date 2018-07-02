function makeName({ first, last, salute = "Mr" }) {
  return `${salute}. ${first},${last}`;
}

let params = { salute: "mrs", last: "ragala", first: "bala" };
makeName(params);
