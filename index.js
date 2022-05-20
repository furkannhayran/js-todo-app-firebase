import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
var edit = true;

   var data = [];
   var allData = [];
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

let params = new URLSearchParams( window.location.search)
    const selectId =  Array.from(params.keys())
    var numberSelectId = Number(selectId)


    const saves = document.getElementById('saves')
      
      var names = document.getElementById('names')
      var info = document.getElementById('info')
      var text = document.getElementById('text')
      var precedences = document.getElementById('precedences')
      var cases = document.getElementById('cases')
      var startDate = document.getElementById('startDate')
      var endDate = document.getElementById('endDate')


      window.onload = function editFunc(){
        var editButton = document.getElementById('saves')
        editButton.addEventListener('click',function(){
         location.href  = "homePage.html"
        })
      }

      const dbref = ref(db);
      get(child(dbref,`ToDo/${numberSelectId}` ))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.val())
        })
        if(data[4] === undefined){
          names.value = "";
        }else{
          names.value = data[4];
          info.value = data[3];
          text.value = data[7];
          precedences.value = data[5];
          cases.value = data[0];
          startDate.value = data[6];
          endDate.value = data[1];
        }
           
      })
      saves.addEventListener('click',function(){
        update(ref(db,`ToDo/${numberSelectId}`),{ 
          
            names : names.value,
            info : info.value,
            text : text.value,
            precedences : precedences.value,
            cases : cases.value,
            startDate : startDate.value,
            endDate : endDate.value
          })
          window.location.reload()
          .then(() => {
          }).catch((err) => {
            alert(err)
          });
          
      })
