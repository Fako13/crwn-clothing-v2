import { Group, FormInputStyle, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<FormInputStyle {...otherProps} />
			{label && (
				<FormInputLabel shrink={otherProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
