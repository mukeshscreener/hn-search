(function () {
	function getResults() {
			return {
				search: "",
				results: null,
				async fetchResults() {
					await fetch("https://hn.algolia.com/api/v1/search?query=" + this.search)
						.then(res => res.json())
						.then(data => {
							this.results = data.hits;
						})
				}
			}
	}	
	window.getResults = getResults
})()