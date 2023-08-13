const quarter = {
	id: 1,
	product: "1/4 KG",
	price: 900,
	hour: 0
}
const half = {
	id: 2,
	product: "1/2 KG",
	price: 1710,
	hour: 0
}
const threeQuarter = {
	id: 3,
	product: "3/4 KG",
	price: 2430,
	hour: 0
}
const kilogram = {
	id: 4,
	product: "1 KG",
	price: 3060,
	hour: 0
}

// FECHA ACTUAL
setDate();

// COOLDOWN
let isCooldown = false;

// ESTADISTICAS

let salesAccumulator = 0;
let incomesAccumulator = 0;
