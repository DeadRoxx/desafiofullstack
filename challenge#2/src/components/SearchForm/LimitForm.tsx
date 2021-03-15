import React from "react"

interface Props {
	limit: number
	setLimit: React.Dispatch<React.SetStateAction<number>>
}

const LimitForm: React.FC<Props> = ({limit, setLimit}) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLimit(event.currentTarget.valueAsNumber)
	}

	return (
		<>
			<p>Limit</p>
			<input type="number" value={limit} onChange={onChange} />
		</>
	)
}

export default LimitForm
