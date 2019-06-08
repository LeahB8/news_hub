//---------------- finding elements and defining constants --------------//

const enviroUl = document.querySelector('#enviro_list')
const politicsUl = document.querySelector('#politics_list')
const sportsUl = document.querySelector('#sports_list')
const britishUl = document.querySelector('#british_list')
const readingUl = document.querySelector('#reading_list')

const readingBtn = document.querySelector('#reading-btn')
const enviroBtn = document.querySelector('#enviro-btn')
const politicsBtn = document.querySelector('#politics-btn')
const sportsBtn = document.querySelector('#sports-btn')
const britishBtn = document.querySelector('#british-btn')
const homeBtn = document.querySelector('#home_button')

const readingDiv = document.querySelector('#reading_div')
const enviroDiv = document.querySelector('#enviro_div')
const politicsDiv = document.querySelector('#politics_div')
const britishDiv = document.querySelector('#british_div')
const sportsDiv = document.querySelector('#sports_div')
const welcomeDiv = document.querySelector('#welcome')
const contentDiv = document.querySelector('#article_content')

// const loginModal = document.querySelector('#login')
// const loginButton = document.querySelector('#loginBtn')
// const loginForm = document.querySelector('#loginForm')

let currentUserId = 1 
let currentUser = {}


//-------------------- initialise method ---------------------//

const init = () => {

    // loginModal.style.display = "block"
    welcomeDiv.style.display = "block"
    enviroDiv.style.display = "none"
    readingDiv.style.display = "none"
    politicsDiv.style.display = "none"
    sportsDiv.style.display = "none"
    britishDiv.style.display = "none"
    contentDiv.style.display = "none"
    fetchUser(currentUserId).then(user => {
        currentUser = user
        updateReadingList()
    }).then(fetchCalls)
}

    const fetchCalls = () => {
        fetchNewEnviro().then(addEnviroArticles)
        fetchNewPolitics().then(addPoliticsArticles)
        fetchBritish().then(addBritishArticles)
        fetchNewSports().then(addSportsArticles)
    }


//--------------------- buttons & event listeners --------------------//
    
//     const _hidediv = null

//    const toggleDivs = div => {
//         if(_hidediv){
//              _hidediv()
//         }
//         const div = document.getElementById(id)
//         div.style.display = 'block'
//         _hidediv = () => { div.style.display = 'none' }
//     }
    

    readingBtn.addEventListener('click', () => {
            readingDiv.style.display = "block"
            enviroDiv.style.display = "none"
            britishDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"
            contentDiv.style.display = "none"
    })

    enviroBtn.addEventListener('click', () => {
            enviroDiv.style.display = "block"
            britishDiv.style.display = "none"
            readingDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"
            contentDiv.style.display = "none"
    })

    politicsBtn.addEventListener('click', () => {
            politicsDiv.style.display = "block"
            britishDiv.style.display = "none"
            enviroDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"
            contentDiv.style.display = "none"
    })

    britishBtn.addEventListener('click', () => {
            britishDiv.style.display = "block"
            politicsDiv.style.display = "none"
            enviroDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"
            contentDiv.style.display = "none"
    })

    sportsBtn.addEventListener('click', () => {
            sportsDiv.style.display = "block"
            britishDiv.style.display = "none"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            readingDiv.style.display = "none"
            welcomeDiv.style.display = "none"
            contentDiv.style.display = "none"
    })


    homeBtn.addEventListener('click', () => {
            welcomeDiv.style.display = "block"
            britishDiv.style.display = "none"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
            contentDiv.style.display = "none"
    })

    // loginForm.addEventListener('submit', (event) => {
    //         loginModal.style.display = "none"
    //         fetchUserArticles(event.target.username.value).then(x => addUserArticles(x))

    //         const newUser = {
    //             username: loginForm.username.value
    //         }
            
    //         newUser.readingDiv.style.display = "block"

    //         createUser(newUser)
    // })

//------------------- client side create & delete articles ----------------------//


const deleteArticleFromReadingList = (article) => {

    //client side//
    article = currentUser.articles.find(currentArticle => currentArticle.url === article.url)
    // articleToDelete = currentUser.articles.find(article => article.url === articleLi.dataset.url)
    currentUser.articles = currentUser.articles.filter(currentArticle => currentArticle.id !== article.id)
    updateReadingList()
    //server side//
    return deleteArticle(article)
        // .then(() => addUserArticles(currentUser))
}
//---------------------- rendering all articles -------------------//

   
const renderArticle = (article, ul) => {
    let articleLi = document.createElement('li')
    articleLi.dataset.url = article.url

    articleLi.innerHTML =  `
        <a href="#article_content" class="w3-hover-text-grey w3-text-black">
            ${article.title}
        </a>
        <button class="ui right floated button">
            ${ inReadingLi(article) ? "X" : "Add" }
        </button>
        <br><br>
    `
    articleLi.querySelector('button').addEventListener('click', () => {
        // debugger
        if (inReadingLi(article)) {
            deleteArticleFromReadingList(article)
                .then(() => {
                    articleLi.querySelector('button').innerText = "Add"

                })
        } else {
            addArticleToList(article, currentUserId)
                .then((article) => {
                    articleLi.querySelector('button').innerText = "X"
                    currentUser.articles.push(article)
                    updateReadingList()
                    // readingUl.append(articleLi)
            })
        }

    })
    articleLi.querySelector('a').addEventListener('click', () => renderArticleContent(article))
    ul.append(articleLi)
}

//---------------- checking whether an article is in the user's reading list -----------------//

    const inReadingLi = article => {
        if (currentUser.articles.map(article => article.url).includes(article.url)) {
            return true
        } else {
            return false
        }
    }

//---------------------- rendering environmental articles -------------------//


const addEnviroArticles = articles => {
    enviroUl.innerHTML = ``
    articles.articles.forEach(article => renderArticle(article, enviroUl))
}

//-------------------- rendering politics articles ---------------------//


const addPoliticsArticles = articles => {
    politicsUl.innerHTML = ``
    articles.articles.forEach(article => renderArticle(article, politicsUl))
}

//------------------ rendering UK articles -----------------------//

const addBritishArticles = articles => {
    britishUl.innerHTML = ``
    articles.articles.forEach(article => renderArticle(article, britishUl))
}

//--------------------- rendering sports articles --------------------//


const addSportsArticles = articles => {
    sportsUl.innerHTML = ``
    articles.articles.forEach(article => renderArticle(article, sportsUl))
}

//-------------------- rendering user's articles ---------------------//

const updateReadingList = () =>{
    readingUl.innerHTML = ``
    currentUser.articles.forEach(article => renderArticle(article, readingUl))
}

// const renderUserArticle = article => {
//     let userArticleLi = document.createElement('li')
//     userArticleLi.innerHTML =  `
//         <a href='#' class="w3-hover-text-grey w3-text-black">${article.title}</a>
//         <button class="ui right floated button">X</button><br><br>
//     `
    
//     userArticleLi.querySelector('button').addEventListener('click', () => deleteArticleFromReadingList(userArticleLi, article))
//     userArticleLi.addEventListener('click', () => renderArticleContent(article))
//     readingUl.append(userArticleLi)
// }


//------------------- rendering article content ----------------------//

const renderArticleContent = article => {
    const articleContent = document.querySelector('#article_content')
    contentDiv.style.display = "block"

    articleContent.innerHTML = `
        <button class="ui right floated button">X</button><br>
        <img id="article_img" src="${article.urlToImage}" style="width:80%" height="300">
        <br><h1> ${article.title} </h1><br>
        <p>${article.content}</p>
        <a target="_blank" href="${article.url}">Read more...</a>
        <p>Author: ${article.author}</p><br>
        `

    articleContent.querySelector('button').addEventListener('click', () => contentDiv.style.display = "none")
}

//------------------ calling initialise -----------------------//


init()
