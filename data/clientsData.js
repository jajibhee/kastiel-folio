import { v4 as uuidv4 } from 'uuid';

// Import images
import CubanaImage from '../public/images/cubana-group.png';
import FynImage from '../public/images/fynanze.png';

export const clientsHeading = 'Some of the brands I worked with'

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Amazon',
		img: CubanaImage,
	},
	{
		id: uuidv4(),
		title: 'Sony',
		img: FynImage,
	},
	// {
	// 	id: uuidv4(),
	// 	title: 'Adidas',
	// 	img: AdidasImage,
	// },
	// {
	// 	id: uuidv4(),
	// 	title: 'FILA',
	// 	img: FilaImage,
	// },
	// {
	// 	id: uuidv4(),
	// 	title: 'NB',
	// 	img: NBImage,
	// },
	// {
	// 	id: uuidv4(),
	// 	title: 'SAMSUNG',
	// 	img: SamsungImage,
	// },
	// {
	// 	id: uuidv4(),
	// 	title: 'CANON',
	// 	img: CanonImage,
	// },
	// {
	// 	id: uuidv4(),
	// 	title: 'PUMA',
	// 	img: PumaImage,
	// },
];
