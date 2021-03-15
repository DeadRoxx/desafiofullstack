import React from "react"

import LimitForm from "./LimitForm"
import OrderForm from "./OrderForm"
import SortForm from "./SortForm"
import TagForm from "./TagForm"

import Grid from "../Layout/Grid"
import Title from "../Layout/Title"

interface Props {
	tag: string
	limit: number
	order: string
	sort: string
	setTag: React.Dispatch<React.SetStateAction<string>>
	setLimit: React.Dispatch<React.SetStateAction<number>>
	setOrder: React.Dispatch<React.SetStateAction<string>>
	setSort: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm: React.FC<Props> = ({
	tag,
	limit,
	sort,
	order,
	setTag,
	setLimit,
	setOrder,
	setSort
}) => {
	return (
		<div className="search">
			<Title title={"Buscar na API"} />
			<Grid>
				<TagForm tag={tag} setTag={setTag} />
				<LimitForm limit={limit} setLimit={setLimit} />
				<SortForm sort={sort} setSort={setSort} />
				<OrderForm order={order} setOrder={setOrder} />
			</Grid>
		</div>
	)
}

export default SearchForm
