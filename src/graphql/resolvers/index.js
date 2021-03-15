const axios = require("axios")

module.exports = {
	Query: {
		search: async (_, {tag, limit = 10, order = "desc", sort = "activity"}) => {
			const response = await axios({
				method: "get",
				url: `https://api.stackexchange.com/2.2/questions?page=1&pagesize=${limit}&order=${order}&sort=${sort}&tagged=${tag}&site=stackoverflow`
			})

			return response.data.items
		}
	}
}
