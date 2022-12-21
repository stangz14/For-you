  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {  getFirestore , collection , getDocs,addDoc,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaJR2g8E5a18H3N5JRMGuFXKH8WSelDKQ",
    authDomain: "for-you-1c2a6.firebaseapp.com",
    projectId: "for-you-1c2a6",
    storageBucket: "for-you-1c2a6.appspot.com",
    messagingSenderId: "881461513726",
    appId: "1:881461513726:web:15e404420cdd76023544af",
    measurementId: "G-B8WG0Y7PKV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)



  async function getdiary(db){
    const diaCol = collection(db,'diary')
    const diaSnapshot = await getDocs(diaCol)
    return diaSnapshot
}

function showData(employee){

    console.log(employee.data());

}

var n = 0;
var a = [];
const data = await getdiary(db)
data.forEach(employee=>{
    // console.log(employee.data());
    // showData(employee)
    a[n] = employee.data();
    n= n + 1
    return a;

})

console.log(a);

var product = a ;
// export {product};