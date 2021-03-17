import {useCallback, useState} from "react"

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

export default useSearch
