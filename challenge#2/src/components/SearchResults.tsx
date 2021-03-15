import React from "react"

interface Props {
	results: Array<FoundedPost>
}

const SearchResults: React.FC<Props> = ({results}) => {
	return (
		<>
			<div className="results-container">
				{results.map((result, i) => (
					<div>
						{result.title}
						<a href={result.link}>{result.title}</a>
					</div>
				))}
			</div>
		</>
	)
}

export default SearchResults
