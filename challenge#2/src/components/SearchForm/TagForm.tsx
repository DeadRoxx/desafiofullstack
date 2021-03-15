import React from "react"

interface Props {
	tag: string
	setTag: React.Dispatch<React.SetStateAction<string>>
}

const TagForm: React.FC<Props> = ({tag, setTag}) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value)
	}

	return (
		<>
			<p>Tag</p>
			<input type="text" value={tag} onChange={onChange} />
		</>
	)
}

export default TagForm
