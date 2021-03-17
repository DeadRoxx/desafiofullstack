interface Props {
	title: string
}

const Title: React.FC<Props> = ({title}) => (
	<div style={{margin: "8px"}}>
		<p id="search-title">{title}</p>
	</div>
)

export default Title
