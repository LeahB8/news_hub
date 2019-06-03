
//---------------------- fetch requests from rails api ----------------------------//

const myServerUrl = 'https://news-hub-server.herokuapp.com/'
const usersUrl = 'https://news-hub-server.herokuapp.com/users/'
const articlesUrl = 'https://news-hub-server.herokuapp.com/articles/'

const fetchUser = id => 
    fetch(usersUrl + `${id}`).then(resp => resp.json())

const addArticleToList = (article, currentUserId) => {
        fetch(articlesUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: article.title,
            content: article.content,
            urlToImage: article.urlToImage,
            author: article.author,
            url: article.url,
            user_id: currentUserId
        })
    }).then(resp => resp.json())
}

const deleteArticle = article => 
    fetch(articlesUrl + `${article.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    }).then(resp => resp.json())


//fetchUserArticles
// do a GET request and get all their articles
// render all their articles

    
    // const createUser = newUser =>
    //     fetch(myServerUrl + 'users', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newUser)
    // }).then(resp => resp.json()).then(user => console.log(user))



//---------------------- fetch requests from external news api -------------------------//

const baseUrl = 'https://newsapi.org/v2/'

const enviro = 'everything?q=climate'
const politics = 'everything?q=politics'
const sports = 'top-headlines?country=gb&category=sports&sortBy=popularity'
const british = 'top-headlines?country=gb&sortBy=popularity'

const apiKey = '&apiKey=331279e9301c48ce88b7db14d49e8db8'


const fetchNewEnviro = () => 
    fetch(baseUrl + enviro + apiKey).then(resp => resp.json())

const fetchNewPolitics = () => 
    fetch(baseUrl + politics + apiKey).then(resp => resp.json())

const fetchNewSports = () => 
    fetch(baseUrl + sports + apiKey).then(resp => resp.json())

const fetchBritish = () => 
    fetch(baseUrl + british + apiKey).then(resp => resp.json())
