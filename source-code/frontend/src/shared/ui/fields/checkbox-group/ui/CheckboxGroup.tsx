import { forwardRef } from "react";

import parse from "html-react-parser";

import s from "./CheckboxGroup.module.scss";

import { Checkbox } from "../../checkbox/ui/Checkbox";
import { InputWrapper } from "../../input-wrapper";
import type { CheckboxGroupProps } from "../model/types";

export const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
	(
		{
			items,
			value,
			onChange,
			errorMessage,
			isRequired,
			label,
			chooseAllCheckbox,
			chooseAllCheckboxDisabled,
			disabled,
		},
		ref
	) => {
		const handleChange = (checkboxValue: string) => {
			if (value.includes(checkboxValue)) {
				const newValue = value.filter((item) => item !== checkboxValue);
				onChange(newValue);
			} else {
				const newValue = [...value, checkboxValue];
				onChange(newValue);
			}
		};

		const notDisabledItems = items.filter((item) => !item.disabled);

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.block}>
					{chooseAllCheckbox && (
						<Checkbox
							disabled={disabled || chooseAllCheckboxDisabled}
							isError={!!errorMessage}
							checked={notDisabledItems.length === value.length}
							value={chooseAllCheckbox}
							onChange={() =>
								onChange(
									notDisabledItems.length === value.length
										? []
										: notDisabledItems.map((item) => item.value)
								)
							}
						>
							{chooseAllCheckbox}
						</Checkbox>
					)}
					{items.map((item, i) => (
						<Checkbox
							disabled={item.disabled || disabled}
							isError={!!errorMessage}
							checked={value.includes(item.value)}
							key={i}
							ref={ref}
							value={item.value}
							onChange={(e) => handleChange(e.target.value)}
						>
							{typeof item.label === "string" ? parse(item.label) : item.label}
						</Checkbox>
					))}
				</div>
			</InputWrapper>
		);
	}
);

CheckboxGroup.displayName = "CheckboxGroup";
