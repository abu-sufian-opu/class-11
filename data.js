const devs = [
    {
      id        : 1,
      name      : 'Abu Sayed',
      skill     : 'MERN stack',
      location  : 'Mirpur',
      income    : 1000,
      photo     :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"  
    },
 
    {
     id         : 2,
     name       : 'Abu Rayhan',
     skill      : 'Laravel',
     location   : 'Azimpur',
     income     : 1200,
     photo      :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXHo361IB4rmJehXrc3f1dH-5aBsTUpAOeA&usqp=CAU"
   },
 
   {
     id         : 3,
     name       : 'Abu Sufian',
     skill      : 'Django',
     location   : 'Mohammadpur',
     income     : 800,
     photo      :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM2Bo80MNui7O5IsxgYBvr25QnvrRNHL9sA&usqp=CAU"
   },
 
   {
     id         : 4,
     name       : 'Achem',
     skill      : 'GoLang',
     location   : 'Lalbagh',
     income     : 1500,
     photo      :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgr5lnUpXrHKMzckvokwlI0-82YVOCOul4A&usqp=CAU"
   },
 
   {
     id         : 5,
     name       : 'Abu Sufian',
     skill      : 'WordPress',
     location   : 'Mirpur',
     income     : 2000,
     photo      :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qdR75o88kuYWDiL8vNqR_pmo33eay6W2Tg&usqp=CAU"
   },
   {
     id         : 6,
     name       : 'Abu Bakkar',
     skill      : 'Java',
     location   : 'Azimpur',
     income     : 1800,
     photo      :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_ShSiIUDuopRlrM_yTydlakKF49uXMK6Xw&usqp=CAU"
   }
 ];



 const students = [
    {
    roll        : 1,
    name        : 'Mamun',
    bn          : 75,
    en          : 70,
    math        : 80,
    s           : 85,
    ss          : 88,
    rel         : 75,
    photo       : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
},
    {
    roll        : 2,
    name        : 'Rayhan',
    bn          : 85,
    en          : 75,
    math        : 30,
    s           : 88,
    ss          : 75,
    rel         : 90,
    photo       : "https://i.pinimg.com/236x/c5/3a/a6/c53aa684465bc61455fd0d21537752fb.jpg"
},

    {
    roll        : 3,
    name        : 'Nur Amin',
    bn          : 85,
    en          : 75,
    math        : 80,
    s           : 88,
    ss          : 88,
    rel         : 90,
    photo       : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o279a1mMoZUswM1JLv3Jo5TaP6SGR6abfVl5lPYa4gDYN1PzK1qnXYqF3Q8lZR8cQ7M&usqp=CAU"
},
    {
    roll        : 4,
    name        : 'Adnan',
    bn          : 85,
    en          : 75,
    math        : 80,
    s           : 88,
    ss          : 88,
    rel         : 90,
    photo       : "https://i.pinimg.com/originals/cd/bd/fc/cdbdfc4dbd32e0996be40e5b9954f4e8.jpg"
},
    {
    roll        : 5,
    name        : 'Sufian',
    bn          : 85,
    en          : 75,
    math        : 80,
    s           : 88,
    ss          : 88,
    rel         : 90,
    photo       : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hCpO7rFN-ZybXViM2MiYf3VusYHsgf1byox3rRxqqaw3J-QpCPSBviCpjpI2wr-G8JI&usqp=CAU"
},
{
    roll        : 6,
    name        : 'Kabir',
    bn          : 95,
    en          : 75,
    math        : 70,
    s           : 78,
    ss          : 88,
    rel         : 92,
    photo       : "https://i.pinimg.com/474x/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg"
}

];


//PhoneBook to DOM

const phoneBook = [
    {
        name      : 'Md Amjad Hossain',
        age       : 65,
        relation  : 'Father',
        phone     : '01912888332',
        photo     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
    },
    {
        name      : 'Sufia Begum',
        age       : 55,
        relation  : 'Mother',
        phone     : '01916145191',
        photo     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
    },
    {
        name      : 'Farhana Limu',
        age       : 28,
        relation  : 'Wife',
        phone     : '01774585216',
        photo     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
    },
    {
        name      : 'Farid Ahmed',
        age       : 45,
        relation  : 'Elder Brother',
        phone     : '01712389870',
        photo     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
    },
    {
        name      : 'Farjana Khatun',
        age       : 27,
        relation  : 'Sister',
        phone     : '01924563342',
        photo     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKtsJDFh8WVqq0deNDCMbzh02mtq7vH04Ng&usqp=CAU"
    }
]