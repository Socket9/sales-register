// Agregar registro de 1/4 KG
const quarterBtnEvent = (event) => {
    if (!isCooldown) {
        addRegister(quarter);

        isCooldown = true;

        quarterKgBtn.classList.remove("activated");
        quarterKgBtn.classList.add("disabled");

        setTimeout(() => {
            isCooldown = false;
            quarterKgBtn.classList.remove("disabled");
            quarterKgBtn.classList.add("activated");
        }, 2000); // 5000 milisegundos = 5 segundos
    }
};

// Agregar registro de 1/2 KG
const halfBtnEvent = (event) => {
	if (!isCooldown) {

		addRegister(half);

		isCooldown = true;
    
		halfKgBtn.classList.remove("activated");
		halfKgBtn.classList.add("disabled");
    
		setTimeout(() => {
		    isCooldown = false;
		    halfKgBtn.classList.remove("disabled");
		    halfKgBtn.classList.add("activated");
		}, 2000); // 5000 milisegundos = 5 segundos
	  }
};

// Agregar registro de 3/4 KG
const threeQuarterBtnEvent = (event) => {
	if (!isCooldown) {

		addRegister(threeQuarter);

		isCooldown = true;
    
		threeQuarterKgBtn.classList.remove("activated");
		threeQuarterKgBtn.classList.add("disabled");
    
		setTimeout(() => {
		    isCooldown = false;
		    threeQuarterKgBtn.classList.remove("disabled");
		    threeQuarterKgBtn.classList.add("activated");
		}, 2000); // 5000 milisegundos = 5 segundos
	  }
};

// Agregar registro de 1 KG
const kgBtnEvent = (event) => {
	if (!isCooldown) {

		addRegister(kilogram);

		isCooldown = true;
    
		kgBtn.classList.remove("activated");
		kgBtn.classList.add("disabled");
    
		setTimeout(() => {
		    isCooldown = false;
		    kgBtn.classList.remove("disabled");
		    kgBtn.classList.add("activated");
		}, 2000); // 5000 milisegundos = 5 segundos
	  }
};

const addRegister = (element) => {
    const tableBody = document.getElementById("tableBody");
    const actualHour = new Date();

    // Crear fila
    const newRow = document.createElement("tr");

    // Creo y cargo los td
    const hourItem = document.createElement("td");
    hourItem.innerText = `${actualHour.getHours()}:${actualHour.getMinutes()}`;

    const idItem = document.createElement("td");
    idItem.innerText = element.id;

    const productItem = document.createElement("td");
    productItem.innerText = element.product;

    const priceItem = document.createElement("td");
    priceItem.innerText = `$${element.price}`;

    updateSalesStat();
    updateIncomesStat(element.price);

    newRow.appendChild(hourItem);
    newRow.appendChild(idItem);
    newRow.appendChild(productItem);
    newRow.appendChild(priceItem);

    tableBody.appendChild(newRow);
};

const setDate = () => {
	const dateItem = document.getElementById('date');
	const actualDate = new Date();

	dateItem.innerText = `${actualDate.getDate()}/${actualDate.getMonth()}/${actualDate.getFullYear()}`;
}

const updateSalesStat = () => {
	const totalSalesStat = document.getElementById('totalSales');
	salesAccumulator += 1;
	totalSalesStat.innerText = salesAccumulator;
}

const updateIncomesStat = (amount) => {
	const totalIncomesStat = document.getElementById('totalIncomes');
	incomesAccumulator += amount;
	totalIncomesStat.innerText = `$${incomesAccumulator}`;
}