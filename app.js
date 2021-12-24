
const team = document.querySelector('.team');

devs.map(data =>{
    team.innerHTML += `
    <div class="team-item">
            <img src="${data.photo}" alt="">
            <h1>ID: ${data.id}</h1>
            <h2>Name: ${data.name}</h2>
            <p>Income: ${data.income}</p>
            <p>Skill: ${data.skill}</p>
            <p>Location: ${data.location}</p>
    </div>
    `
});



const studentData = document.querySelector('.student table tbody');

students.map(data => {
    studentData.innerHTML += (`
    <tr>
        <td>${data.roll}</td>
        <td>${data.name}</td>
        <td>${data.bn}</td>
        <td>${data.en}</td>
        <td>${data.math}</td>
        <td>${data.s}</td>
        <td>${data.ss}</td>
        <td>${data.rel}</td>
        <td><img style="width : 60px; height : 60px;" src="${data.photo}" alt=""></td>
    </tr>
    `)
})



//PhoneBook to Dom

const phoneList = document.querySelector('.phonebook table tbody');

phoneBook.map((data,index) => {
console.log(data.photo);
    phoneList.innerHTML += (`
    <tr>
        <td>${index+1}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.relation}</td>
        <td>${data.phone}</td>
        <td><img style="width : 60px; height : 60px;" src="${data.photo}" alt=""></td>
    </tr>
    `);

})


