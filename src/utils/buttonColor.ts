export default (variant: string | undefined) => {
	let colorData = {
		primary: '#388E3C',
		secondary: '#fff',
		tartiary: '#388E3C',
	};
	switch (variant) {
		case 'primary':
			colorData = {
				primary: '#388E3C',
				secondary: '#fff',
				tartiary: '#388E3C',
			};
			return colorData;

		case 'secondary':
			colorData = {
				primary: '#F57C00',
				secondary: '#fff',
				tartiary: '#F57C00',
			};
			return colorData;

		case 'legendary':
			colorData = {
				primary: '#C2185B',
				secondary: '#fff',
				tartiary: '#C2185B',
			};
			return colorData;

		default:
			colorData = {
				primary: '#536DFE',
				secondary: '#fff',
				tartiary: '#536DFE',
			};
			return colorData;
	}
};
