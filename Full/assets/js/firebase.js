import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZuingCwu1Si6LV7ZNK0L5GO7CzCW-UBE",
    authDomain: "stherapist-sound.firebaseapp.com",
    databaseURL: "https://stherapist-sound-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stherapist-sound",
    storageBucket: "stherapist-sound.appspot.com",
    messagingSenderId: "76549922198",
    appId: "1:76549922198:web:9ac5a6e3a42274261451b7",
    measurementId: "G-LTNVEYBC63"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{getDatabase, ref, set, child, update, remove} from"https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
const db = getDatabase();

let Message = document.getElementById('message')
let btn = document.getElementById('Send');

// function InsertData(){
//     if(Name.value != " "){

//         set(ref(db,"Users/"+Name.value),{
//             Name_of_user: Name.value,
//             Surname_of_user: Surname.value,
//             Email: eMail.value
//         })
//         .then(()=>{
//             alert("Відповідь записано");
//             clearFormFields();
//         })
//         .catch((error)=>{
//             alert("Помилка"+error)
//         })
//     }
//     else
// }
btn.addEventListener('click',()=>{
    
    const message = Message.value.trim();
    // Перевірка, чи всі поля не є порожніми
    if (message === '') {
        alert("Будь ласка, заповніть поле");
        return; // Припиняємо виконання функції, якщо є хоча б одне порожнє поле
    }

    // Відправлення даних в Firebase
    set(ref(db,"Users/"+Message.value),{
        Message: message
    })
    .then(() => {
        alert("Дані успішно записано");
        clearFormFields(); // Очищення полів після успішного відправлення
    })
    .catch((error) => {
        alert("Помилка: " + error.message);
    });
})
function clearFormFields() {
        
            Message.value = "";
        }

