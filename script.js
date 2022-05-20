import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";

  var data=[];
  const allData= [];
  var id = Math.floor(Math.random()*1000);
  const firebaseConfig = {
    apiKey: "AIzaSyA8q2cQ5BilFS0ATFHtT_Z4NgTfpj2-qfE",
    authDomain: "js-todo-2db46.firebaseapp.com",
    databaseURL: "https://js-todo-bc5f0-default-rtdb.firebaseio.com/",
    projectId: "js-todo-2db46",
    storageBucket: "js-todo-2db46.appspot.com",
    messagingSenderId: "64586001074",
    appId: "1:64586001074:web:ff5239791c6775efd9f7ab",
    measurementId: "G-5T7XB6T1B8"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  import {getDatabase, ref, set, get, child, update, remove } 
  from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
  const db = getDatabase();

  window.onload = function getAllData(){
    const dbref = ref(db);

    get(child(dbref,"ToDo")).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val())
      })
      data.forEach((item)=>{
        allData.push(item) 
      })
      createFunc()
    })
  }
  function createFunc(){
    if(allData !== ""){
      allData.forEach((index)=>{
        const {names, info, text, precedences, cases, startDate, endDate ,id} = index;
        const content = document.getElementById ('content')
        const main = document.createElement('div')
        var button = document.createElement('button')
        var updateButton = document.createElement('button')
        updateButton.innerHTML = "Düzenle"
        button.innerHTML = "Sil"
        main.classList.add('main')
        main.innerHTML = 
        `
        <p id="id">id : ${id} </p>
        <p id="names">name : ${names} </p>
        <p id="info">bilgi : ${info} </p>
        <p id="text">Konu : ${text} </p>
        <p id="precedences">Öncelik : ${precedences} </p>
        <p id="cases">Durum : ${cases} </p>
        <p id="startDate">Başlangıç Tarihi : ${startDate} </p>
        <p id="endDate">Bitiş Tarihi : ${endDate} </p>
        `
        content.appendChild(main)
        main.appendChild(button);
        main.appendChild(updateButton);   
        button.onclick = removeData;
        updateButton.onclick = updateDatas;
        
      })
    }
  }
       // silme işlemi
      function removeData(oEvent){
        const selectId =  oEvent.target.parentElement.children.item(0).innerText.slice(5)
        console.log(typeof selectId)
        remove(ref(db, "ToDo/"+ selectId))
        .then(() => {
          location.reload();
        }).catch((err) => {
          alert(err)
        });
      }
      // düzenleme işlemi
      function  updateDatas(oEvent){
        const selectId =  oEvent.target.parentElement.children.item(0).innerText.slice(5)
        console.log("asd")
     
         location.href  = `index.html?${selectId}`

      }
       // kayıt işlemi
      $('#save').click(function(){
        set(ref(db, "ToDo/"+id),{
          names : $('#names').val(),
          info : $('#info').val(),
          text : $('#text').val(),
          precedences : $('#precedences').val(),
          cases : $('#cases').val(),
          startDate : $('#startDate').val(),
          endDate : $('#endDate').val(),
          id: id,
        })
        .then(() => {
          alert("Başarılı")
        }).catch((err) => {
          alert(err)
        });
        location.reload();
        getAllData()
        
      })









