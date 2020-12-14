"use strict"

const personalMovieDB = {
    count:0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function(){
        personalMovieDB.count = +prompt('сколько фильмов вы посмотрели?');
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('сколько фильмов вы посмотрели?');
        }
   },
   rememberMyFilms: function(){
    for ( let i =0; i < 2; i++ ){
        const a =prompt('какой последний филь вы смотрели?',''),
              b =prompt('на сколько вы его оцените?','');
            
        if (a != null && b != null && a!= '' && b !=''&& a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else {
            console.log('error');
            i--;
        }
        }
},
detectPersonalLevel: function(){
    console.log(personalMovieDB);
    if( personalMovieDB.count<10 ){
        alert('просмотренно довольно мало фильмов ');
    }else{
        if(personalMovieDB.count>=30){
           alert('вы киноман'); 
        }else {
            if(personalMovieDB.count<30){
                alert('вы классический зритель');
            }else{
                alert('щшибка')
            }
        }
    }
},
showMyDB: function(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
},
toggleVisibleMyDB: function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat = false;
    }else {
        personalMovieDB.privat = true;
    }
},
writeYouGenres(){
    for(let i = 1; i <=  3; i++ ) {
        let genre = prompt(`ваш любимый жанр под  номером ${i}`);
        if (genre === ''|| genre == null){
            console.log('вы ввели неккоектные данные или неввели их вообще');
            i--;
        }else{
            personalMovieDB.genres[ i-1 ] = genre;
        }
        
    }
    personalMovieDB.genres.forEach((item,i,)=>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
}
};

console.log(personalMovieDB);
Comment"jora"
