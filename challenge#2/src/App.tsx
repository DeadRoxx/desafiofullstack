import React, {
	ChangeEventHandler,
	EventHandler,
	useCallback,
	useState
} from "react"
import SearchForm from "./components/SearchForm/Index"
import SearchResults from "./components/SearchResults"
import "./styles/App.css"

const Logo: React.FC = () => (
	<div className="stackoverflow-logo">
		<h1>StackOverflow</h1>
	</div>
)

const useSearch = () => {
	const [tag, setTag] = useState<string>("")
	const [limit, setLimit] = useState<number>(0)
	const [order, setOrder] = useState<string>("desc")
	const [sort, setSort] = useState<string>("activity")

	const [founded, setFounded] = useState<FoundedPost[]>([
		{
			title: "default post title",
			link: "http://stackoverflow.com.br"
		}
	])

	const onSearch = useCallback(() => {
		console.log("searching")
	}, [])

	return {
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
	}
}

const Container: React.FC = ({children}) => {
	return <div className={"container"}>{children}</div>
}
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
		<Container>
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
		</Container>
	)
}

export default App
