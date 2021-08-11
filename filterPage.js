const filterForm = document.getElementById('filterForm');

const properties = [
	{
		transactionType: 'venta',
		propetyType: 'departamento',
		city: 'mardelplata',
		refnumber: '123',
		rooms: '2',
		dorms: '1',
		parkingLot: 'yes',
		bathrooms: '1',
		coin: 'usd',
		credit: 'no',
		price: 4000,
	},
	{
		transactionType: 'alquilertemporario',
		propetyType: 'chalet',
		city: 'santateresita',
		refnumber: '321',
		rooms: '3',
		dorms: '2',
		parkingLot: 'no',
		bathrooms: '2',
		coin: 'ars',
		credit: 'yes',
		price: 10000,
	},
];

const handleSubmit = event => {
	event.preventDefault();
	var data = new FormData(filterForm);
	const formValues = {};
	for (const [name, value] of data) {
		formValues[name] = value;
	}
    const filteredProperties = filterProperties(properties, formValues)
    console.log(filteredProperties)
};

const filterProperties = (properties, filters) => {
	const filterEquality = (name, array) => (filters[name] ? array.filter(propiety => propiety[name] === filters[name]) : array);

	const transactionTypeFiltered = filterEquality('transactionType', properties);
	const propetyTypeFiltered = filterEquality('propetyType', transactionTypeFiltered);
	const cityFiltered = filterEquality('city', propetyTypeFiltered);
	const refNumberFiltered = filterEquality('refnumber', cityFiltered);
	const roomsFiltered = filterEquality('rooms', refNumberFiltered);
	const dormsFiltered = filterEquality('dorms', roomsFiltered);
	const parkingLotFiltered = filterEquality('parkingLot', dormsFiltered);
	const bathroomsFiltered = filterEquality('bathrooms', parkingLotFiltered);
	const coinFiltered = filterEquality('coin', bathroomsFiltered);
	const creditFiltered = filterEquality('credit', coinFiltered);

	const fromFiltered = filters.from ? creditFiltered.filter(propiety => propiety.price >= filters.from) : creditFiltered;
	const toFiltered = filters.to ? fromFiltered.filter(propiety => propiety.price <= filters.to) : fromFiltered;

	return toFiltered;
};
