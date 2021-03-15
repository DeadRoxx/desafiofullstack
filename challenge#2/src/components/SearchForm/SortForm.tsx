import React from "react"

interface Props {
	sort: string
	setSort: React.Dispatch<React.SetStateAction<string>>
}

const sortBy = ["activity", "creation", "votes", "hot", "week", "month"]

const SortForm: React.FC<Props> = ({sort, setSort}) => {
	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSort(event.target.value)
	}

	return (
		<>
			<p>Sort</p>
			<select name="sort" id="sort" value={sort} onChange={onChange}>
				{sortBy.map((by, i) => {
					return (
						<option key={i} value="by">
							{by}
						</option>
					)
				})}
			</select>
		</>
	)
}

export default SortForm
