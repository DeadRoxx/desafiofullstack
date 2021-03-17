import React, {useCallback, useState} from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import "./styles/App.css"
import Logo from "./components/Logo"
import useSearch from "./hooks/useSearch"

const App: React.FC = () => {
	const {
		tag,
		setTag,
		limit,
		setLimit,
		sort,
		setSort,
		order,
		setOrder,
		founded,
		onSearch
	} = useSearch()

	return (
		<>
			<Logo />
			<SearchForm
				tag={tag}
				limit={limit}
				order={order}
				sort={sort}
				setTag={setTag}
				setLimit={setLimit}
				setOrder={setOrder}
				setSort={setSort}
			/>
			<SearchResults results={founded} />
		</>
	)
}

export default App
