const axios = require('axios')

module.exports = {
	Query: {
		search: async (
			_,
			{tag, limit = null, order = 'desc', sort = 'activity'}
		) => {
			const response = await axios({
				method: 'get',
				url: `https://api.stackexchange.com/2.2/questions?page=1&${
					limit ? `pagesize=${limit}` : ''
				}&order=${order}&sort=${sort}&tagged=${tag}&site=stackoverflow`
			})

			return response.data.items
		}
	}
}
