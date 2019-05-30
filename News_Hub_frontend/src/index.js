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

const readingDiv = document.querySelector('#reading_div')
const enviroDiv = document.querySelector('#enviro_div')
const politicsDiv = document.querySelector('#politics_div')
const britishDiv = document.querySelector('#british_div')
const sportsDiv = document.querySelector('#sports_div')
const welcomeDiv = document.querySelector('#welcome')
const contentDiv = document.querySelector('#article_content')



const loginModal = document.querySelector('#login')
const loginButton = document.querySelector('#loginBtn')
const loginForm = document.querySelector('#loginForm')

let currentUserId = 1 // Global current user variable 
let currentUser = {}



//-----------------------------------------//


const init = () => {

    // loginModal.style.display = "block"
    welcomeDiv.style.display = "block"
    enviroDiv.style.display = "none"
    readingDiv.style.display = "none"
    politicsDiv.style.display = "none"
    sportsDiv.style.display = "none"
    britishDiv.style.display = "none"
    contentDiv.style.display = "none"

    fetchNewEnviro().then(x => addEnviroArticles(x))
    fetchNewPolitics().then(x => addPoliticsArticles(x))
    fetchBritish().then(x => addBritishArticles(x))
    fetchNewSports().then(x => addSportsArticles(x))
    fetchUser(currentUserId).then(user => {
        currentUser = user
        addUserArticles(currentUser)
    })
    

    // fetchEnviro().then(x => addEnviroArticles(x))
    // fetchPolitics().then(x => addPoliticsArticles(x))
    // fetchSports().then(x => addSportsArticles(x))
}
//-----------------------------------------//


//-----------------------------------------//


const addToReadingList = article => {
    addArticleToList(article, currentUserId)
   }


   // Function to reassign the Above global function with newly created user.
   function containUserId(user){
        currentUserObject = user
   }




   const deleteArticleFromReadingList = (readingLi, article) => {
        //client side//    
        readingLi.remove()
        //server side//    
        deleteArticle(article)
   }

//-----------------------------------------//


    readingBtn.addEventListener('click', () => {
        if (readingDiv.style.display === "none") {
            readingDiv.style.display = "block"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"


        } else {
            readingDiv.style.display = "none"
        }

    })

    enviroBtn.addEventListener('click', () => {
        if (enviroDiv.style.display === "none") {
            enviroDiv.style.display = "block"
            britishDiv.style.display = "none"
            readingDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"

        } else {
            enviroDiv.style.display = "none"
        }
    })

    politicsBtn.addEventListener('click', () => {
        if (politicsDiv.style.display === "none") {
            politicsDiv.style.display = "block"
            britishDiv.style.display = "none"
            enviroDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"

        } else {
            politicsDiv.style.display = "none"
        }
    })

    britishBtn.addEventListener('click', () => {
        if (britishDiv.style.display === "none") {
            britishDiv.style.display = "block"
            politicsDiv.style.display = "none"
            enviroDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
            welcomeDiv.style.display = "none"

        } else {
            britishDiv.style.display = "none"
        }
    })

    sportsBtn.addEventListener('click', () => {
        if (sportsDiv.style.display === "none") {
            sportsDiv.style.display = "block"
            britishDiv.style.display = "none"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            readingDiv.style.display = "none"
            welcomeDiv.style.display = "none"

        } else {
            sportsDiv.style.display = "none"
        }
    })


    loginForm.addEventListener('submit', (event) => {
            loginModal.style.display = "none"
            fetchUserArticles(event.target.username.value).then(x => addUserArticles(x))

            const newUser = {
                username: loginForm.username.value
            }
            
            newUser.readingDiv.style.display = "block"

            createUser(newUser)
    })

   

    

//-----------------------------------------//


const addEnviroArticles = articles => {
    articles.articles.forEach(article => renderEnviroArticle(article))
}

const renderEnviroArticle = article => {
    let enviroLi = document.createElement('li')
    enviroLi.innerHTML =  `
        <a href="#" class="w3-hover-text-grey w3-text-black">${article.title}</a>
        <button class="ui right floated button">Add</button><br><br>
        
    `
    enviroLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    enviroLi.addEventListener('click', () => renderArticleContent(article))
    enviroUl.append(enviroLi)

}
//-----------------------------------------//


const addPoliticsArticles = articles => {
    articles.articles.forEach(article => renderPoliticsArticle(article))
}

const renderPoliticsArticle = article => {

    let politicsLi = document.createElement('li')
    politicsLi.innerHTML =  `
    <a href="#" class="w3-hover-text-grey w3-text-black">${article.title}</a>
    <button class="ui right floated button">Add</button><br><br>
    `
    politicsLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    politicsLi.addEventListener('click', () => renderArticleContent(article))
    politicsUl.append(politicsLi)

}
//-----------------------------------------//

const addBritishArticles = articles => {
    articles.articles.forEach(article => renderBritishArticle(article))
}

const renderBritishArticle = article => {
    let britishLi = document.createElement('li')
    britishLi.innerHTML =  `
        <a href="#" class="w3-hover-text-grey w3-text-black">${article.title}</a>
        <button class="ui right floated button">Add</button><br><br>
        
    `
    britishLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    britishLi.addEventListener('click', () => renderArticleContent(article))
    britishUl.append(britishLi)

}
//-----------------------------------------//


const addSportsArticles = articles => {
    articles.articles.forEach(article => renderSportsArticle(article))
}

const renderSportsArticle = article => {

    let sportsLi = document.createElement('li')
    sportsLi.innerHTML =  `
    <a href='#' class="w3-hover-text-grey w3-text-black">${article.title}</a>
    <button class="ui right floated button">Add</button><br><br>
    `
    sportsLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    sportsLi.addEventListener('click', () => renderArticleContent(article))
    sportsUl.append(sportsLi)
}
//-----------------------------------------//

const addUserArticles = currentUser =>{
    currentUser.articles.forEach(article => renderUserArticle(article))
}

const renderUserArticle = article => {
    let userArticleLi = document.createElement('li')
    userArticleLi.innerHTML =  `
        <a href='#' class="w3-hover-text-grey w3-text-black">${article.title}</a>
        <button class="ui right floated button">X</button><br><br>
    `
    
    userArticleLi.querySelector('button').addEventListener('click', () => deleteArticleFromReadingList(userArticleLi, article))
    readingUl.append(userArticleLi)
}


//-----------------------------------------//

const renderArticleContent = article => {
    const articleContent = document.querySelector('#article_content')
    contentDiv.style.display = "block"

    articleContent.innerHTML = `
        <img src="${article.urlToImage}"/>
        <br><h1> ${article.title} </h1><br>
        <p>${article.content}</p>
        <a href="${article.url}">Read more...</a>
        <p>Author: ${article.author}</p><br>
        `
}

//-----------------------------------------//


init()





