import {
	BaseButton,
	GoogleSignInButton,
	invertedButton,
	ButtonSpinner,
} from './button.styles.jsx';

export enum BUTTON_TYPE_CLASSES {
	base,
	google,
	inverted,
}

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
	buttonType: BUTTON_TYPE_CLASSES;
	isLoading: boolean;
}

const getButton = (
	buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base
) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: invertedButton,
	}[buttonType]);

const Button = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}: IButton) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
