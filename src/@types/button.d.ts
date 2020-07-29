interface IButtonProps {
	variant?: 'primary' | 'secondary' | 'legendary' | undefined;
	fontSize?: number;
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}
