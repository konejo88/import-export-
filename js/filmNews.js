export function filmNews(photo,god,title,zhanr,soderzhanie) {
    return`
    <div class='news'>
    <img src="${photo}" >
    <div class='afisha'>
    <p class='god'>Год выпуска<br> ${god}</p>
    <div class='afishas'>
    <h3>${title}</h3>
    <p>${zhanr}</p>
    <p>${soderzhanie}</p>
    </div>
    </div>
    </div>
    `
    
}
