import React from "react"

interface Props {
	order: string
	setOrder: React.Dispatch<React.SetStateAction<string>>
}

const orderBy = ["asc", "desc"]

const OrderForm: React.FC<Props> = ({order, setOrder}) => {
	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setOrder(event.target.value)
	}

	return (
		<>
			<p>Order</p>
			<select name="order" id="order" value={order} onChange={onChange}>
				{orderBy.map((by, i) => {
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

export default OrderForm
