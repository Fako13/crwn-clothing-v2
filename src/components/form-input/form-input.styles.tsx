import styled from 'styled-components';

const SUB_COLOR = `grey`;
const MAIN_COLOR = `black`;

const shrinkLabel = `
	top: -14px;
	font-size: 12px;
	color: ${MAIN_COLOR};
`;

type FormInputLabelProps = {
	shrink?: boolean;
};

export const Group = styled.div`
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: ${SUB_COLOR};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${({ shrink }) => shrink && shrinkLabel}
`;

export const FormInputStyle = styled.input`
	background: none;
	background-color: white;
	color: ${SUB_COLOR};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${SUB_COLOR};
	// margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLabel}
	}
`;
