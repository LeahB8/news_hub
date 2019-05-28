const enviroUl = document.querySelector('#enviro_list')
const politicsUl = document.querySelector('#politics_list')
const sportsUl = document.querySelector('#sports_list')
const readingUl = document.querySelector('#reading_list')

const readingBtn = document.querySelector('#reading-btn')
const enviroBtn = document.querySelector('#enviro-btn')
const politicsBtn = document.querySelector('#politics-btn')
const sportsBtn = document.querySelector('#sports-btn')

const readingDiv = document.querySelector('#reading_div')
const enviroDiv = document.querySelector('#enviro_div')
const politicsDiv = document.querySelector('#politics_div')
const sportsDiv = document.querySelector('#sports_div')

//-----------------------------------------//

// let article_id = null

const init = () => {
    fetchNewEnviro().then(x => addEnviroArticles(x))
    fetchNewPolitics().then(x => addPoliticsArticles(x))
    fetchNewSports().then(x => addSportsArticles(x))

    // fetchEnviro().then(x => addEnviroArticles(x))
    // fetchPolitics().then(x => addPoliticsArticles(x))
    // fetchSports().then(x => addSportsArticles(x))
}
//-----------------------------------------//


const addToReadingList = article => {
    let readingLi = document.createElement('li')
    readingLi.innerHTML =  `
        <a href="${article.content}" target="iframe_a" class="w3-hover-text-green">${article.title}</a>
        <button class="ui right floated button">X</button><br><br>
    `
    
    readingLi.querySelector('button').addEventListener('click', () => deleteArticleFromReadingList(readingLi))
    readingUl.append(readingLi)
   }


   const deleteArticleFromReadingList = readingLi => {
       readingLi.remove()
        //server side//    
        // deleteArticle(article)

        //     //* Client side 
        //     let button = event.target
        //     let li = button.parentElement
        //     li.remove();     
        //     let pokemon_id = event.target.id
        //     deletePokemon(pokemon_id)
        //    }
   }





//-----------------------------------------//


// const readingListButton = () => {
    readingBtn.addEventListener('click', () => {
        if (readingDiv.style.display === "none") {
            readingDiv.style.display = "block"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"

        } else {
            readingDiv.style.display = "none"
        }

    })
// }

// const enviroButton = () => {
    enviroBtn.addEventListener('click', () => {
        if (enviroDiv.style.display === "none") {
            enviroDiv.style.display = "block"
            readingDiv.style.display = "none"
            politicsDiv.style.display = "none"
            sportsDiv.style.display = "none"
        } else {
            enviroDiv.style.display = "none"
        }
    })
// }

// const politicsButton = () => {
    politicsBtn.addEventListener('click', () => {
        if (politicsDiv.style.display === "none") {
            politicsDiv.style.display = "block"
            enviroDiv.style.display = "none"
            readingDiv.style.display = "none"
            sportsDiv.style.display = "none"
        } else {
            politicsDiv.style.display = "none"
        }
    })
// }

// const sportsButton = () => {
    sportsBtn.addEventListener('click', () => {
        if (sportsDiv.style.display === "none") {
            sportsDiv.style.display = "block"
            enviroDiv.style.display = "none"
            politicsDiv.style.display = "none"
            readingDiv.style.display = "none"
        } else {
            sportsDiv.style.display = "none"
        }
    })
// }




//-----------------------------------------//


const addEnviroArticles = articles => {
    articles.articles.forEach(article => renderEnviroArticle(article))
}

const renderEnviroArticle = article => {
    // article_id = enviroArticle.id
    let enviroLi = document.createElement('li')
    enviroLi.innerHTML =  `
        <a href="${article.content}" target="iframe_a" class="w3-hover-text-green">${article.title}</a>
        <button class="ui right floated button">Add</button><br><br>
        
    `
    enviroLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    enviroUl.append(enviroLi)

}
//-----------------------------------------//


const addPoliticsArticles = articles => {
    articles.articles.forEach(article => renderPoliticsArticle(article))
}

const renderPoliticsArticle = article => {
    // article_id = politicsArticle.id

    let politicsLi = document.createElement('li')
    politicsLi.innerHTML =  `
    <a href="${article.content}" target="iframe_a" class="w3-hover-text-green">${article.title}</a>
    <button class="ui right floated button">Add</button><br><br>
    `
    politicsLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    politicsUl.append(politicsLi)

}
//-----------------------------------------//


const addSportsArticles = articles => {
    articles.articles.forEach(article => renderSportsArticle(article))
}

const renderSportsArticle = article => {
    // article_id = sportsArticle.id

    let sportsLi = document.createElement('li')
    sportsLi.innerHTML =  `
    <a href="${article.content}" target="iframe_a" class="w3-hover-text-green">${article.title}</a>
    <button class="ui right floated button">Add</button><br><br>
    `
    sportsLi.querySelector('button').addEventListener('click', () => addToReadingList(article))
    sportsUl.append(sportsLi)
}
//-----------------------------------------//



init()





