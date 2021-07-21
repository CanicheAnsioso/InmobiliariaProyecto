var houseImages = [
	'http://192.168.1.40:5500/Imagenes/Casa11.jpeg',
	'http://192.168.1.40:5500/Imagenes/Interior1.jpg',
	'http://192.168.1.40:5500/Imagenes/Interior3.jpg',
	'http://192.168.1.40:5500/Imagenes/Interior2.jpg',
	'http://192.168.1.40:5500/Imagenes/Interior4.jpeg',
];

var selectedHouseImageIndex = 0;

const onClickImage = image => {
	const imageSRC = image.src;
	let imageIndex = houseImages.findIndex(image => image === imageSRC);
	if (imageIndex === -1) imageIndex = 0;
	console.log(image, imageSRC, imageIndex, houseImages)
	changeSelectedHouseImage(imageIndex);
};

const changeSelectedHouseImage = imageIndex => {
	selectedHouseImageIndex = imageIndex;
	document.getElementById('fullImage').setAttribute('src', houseImages[selectedHouseImageIndex]);
};
