import { filmNews } from "./filmNews.js"
import { liveFilm } from "./livefilm.js"
const all=document.querySelector('.all')
function app () {
    return`
    <div class='blocks'>
    ${liveFilm('Любимые фильмы:','Гарри Поттер','Матрица','Пираты Карибского моря','Человек-паук: Нет пути домой'  )}
    ${filmNews('/photos/harry1.jpg','2000','Гарри Поттер','Фэнтази','Серия фильмов о Гарри Поттере — серия фильмов, основанных на книгах о Гарри Поттере английской писательницы Дж. К. Роулинг. Серия выпущена компанией Warner Bros. и состоит из одиннадцати фильмов в жанре фэнтези')}
    ${filmNews('/photos/Matrix1.jpg','2002','Матрица','Боевик','«Матрица» (англ. The Matrix) — американо-австралийский научно-фантастический боевик, снятый братьями Вачовски по собственному сценарию и спродюсированный Джоэлом Сильвером.')}
    ${filmNews('/photos/pirates1.jpg','2003','Пираты Карибского моря: Проклятие Чёрной жемчужины','Приключения','«Пираты Карибского моря: Проклятие Чёрной жемчужины» приключенческий фильм о пиратах, действие которого разворачивается на Карибах в первой половине XVIII века. ')}
    ${filmNews('/photos/spider1.jpg','2021','Человек-паук: Нет пути домой','Фантастика','«Челове́к-пау́к: Нет пути́ домо́й» (англ. Spider-Man: No Way Home) — американский супергеройский фильм, основанный на персонаже комиксов Marvel Человеке-пауке ')}
    </div>
    `
}
all.innerHTML=app()

const news=document.querySelectorAll('.news')
         for (let index = 0; index < news.length; index++) {
        const element = news[index];
               console.log(element);
                  } 
const one=document.querySelectorAll('.films>input')
//    for (let index = 0; index < one.length; index++) {
//         const element = one[index];
    //    element.addEventListener('click',check)
    //    function check () {       
    //    }
//        element.addEventListener('click',()=>{
//         console.log(element);
//        }) 
one.forEach((x,y)=>{
    x.addEventListener("click",()=>{
        news.forEach((z)=>{
           z.classList.remove("activ")          
         })
        one.forEach((x)=>{   
        x.classList.remove("activ")
        })
    one[y].classList.add("activ")
    news[y].classList.add("activ")
    })
    })
   

    
    // if (one.aktiv.checked) {
    //     news[y].classList.add("activ")
        
    //  }