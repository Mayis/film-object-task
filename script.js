"use strict";
let numberOfFilms;
do {
	numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
} while (isNaN(numberOfFilms) || numberOfFilms === 0);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let a;
do {
	a = prompt("Նշեք վերջին ֆիլմը, որը դիտել եք");
} while (a === "" || a === null);

let b;
do {
	b = +prompt("1-10 ինչքա՞ն կգնահատեք այդ ֆիլմը", "");
} while (b === 0 || isNaN(b));
let c;
do {
	c = prompt("Նշեք վերջին ֆիլմը, որը դիտել եք");
} while (c === "" || c === null);

let d;
do {
	d = +prompt("1-10 ինչքա՞ն կգնահատեք այդ ֆիլմը", "");
} while (d === 0 || isNaN(d));

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

if (personalMovieDB.privat === false) {
	console.log(personalMovieDB);
} else {
	console.log("its privat");
}

/*
    1. յուզեռի հարցերը պետք ա ավտոմատացնել
    2․ յուզեռը numberOfFilms-ը չպետք ա կարողանա թողել դատարկ, կամ լրացնել ամեն ինչով բացի թվերից (այսինքն մենակ թիվ պետք ա կարողանա գրի)
    3․ եթե յուզեռը a,b,c,d  հարցերին պատասխանում ա դատարկ, ապա իրան էդ հարցը պետք ա նորից տալ էնքան ժամանակ մինչև լրացնի
    4․ ստուգել, եթե personalMovieDB-ի privat-ը ֆոլս ա, ապա կանսոլում ցույց տալ բազան, եթե տրու ա, ապա փակել ցույց չտալ
*/
