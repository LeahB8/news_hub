const BASE_URL = "https://content.guardianapis.com/search"
const API_KEY = "&api-key=01244650-1da4-41bc-bd3d-3514057cb4ed"
const Enviro = "?q=environment"
const Politics = "?q=politics"
const Sports = "?q=sports"



const fetchEnviro = () =>
fetch(BASE_URL + Enviro + API_KEY).then(resp => resp.json())

const fetchPolitics = () =>
fetch(BASE_URL + Politics + API_KEY).then(resp => resp.json())

const fetchSports = () =>
fetch(BASE_URL + Sports + API_KEY).then(resp => resp.json())


//--------------------------------------------------//


const deleteArticle = article => 
fetch(BASE_URL + `/${article.id}`, {
	method: 'DELETE'
    }).then(resp => resp.json())


//-----------------------------------------------//

const baseUrl = 'https://newsapi.org/v2/'

const enviro = 'everything?q=environment'
const politics = 'everything?q=politics'
const sports = 'top-headlines?country=gb&category=sports&sortBy=popularity'
const british = 'top-headlines?country=gb&sortBy=popularity'

const apiKey = '&apiKey=331279e9301c48ce88b7db14d49e8db8'

// https://newsapi.org/v2/top-headlines?country=us&apiKey=331279e9301c48ce88b7db14d49e8db8

const fetchNewEnviro = () => 
fetch(baseUrl + enviro + apiKey).then(resp => resp.json())

const fetchNewPolitics = () => 
fetch(baseUrl + politics + apiKey).then(resp => resp.json())

const fetchNewSports = () => 
fetch(baseUrl + sports + apiKey).then(resp => resp.json())

const fetchBritish = () => 
fetch(baseUrl + british + apiKey).then(resp => resp.json())
