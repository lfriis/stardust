import HomeScene from './home/index';
import AccountScene from './account/index';

const scenes: { name: string; component: any; isPrivate: boolean }[] = [
	{
		name: 'HomeScene',
		component: HomeScene,
		isPrivate: false,
	},
	{
		name: 'AccountScene',
		component: AccountScene,
		isPrivate: false,
	},
];

export default scenes;
