/*
    firebase
    firestore > collection > document > field
    B1: lắp đặt config có sẵn trên firestore vào
    B2: thêm các hàm ở thư viện của firestore https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js
    B3: kết nối đến firestore = hàm getFireStore //let database = getFirestore(app);
    B4: tận dụng các hàm ở thư viện của firestore để thêm xóa sửa cập nhật các document
*/

import { UISelector } from "./utils/UISelector.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getArray } from "./index.js";
import {
    getFirestore,
    setDoc,
    addDoc,
    doc,
    collection,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";




const firebaseConfig = {
    apiKey: localVariable.APIKEY,
    authDomain: localVariable.AUTHDOMAIN,
    projectId: localVariable.PROJECTID,
    storageBucket: localVariable.STORAGEBUCKET,
    messagingSenderId: localVariable.MESSAGINGSENDERID,
    appId: localVariable.APPID
};




const app = initializeApp(firebaseConfig);

let database = getFirestore(app);
// const usersRef = collection(database, "users");


export function add(tieude, noidung, color) {
    setDoc(doc(database, "users", tieude), {
        tieude: tieude,
        noiDung: noidung,
        color: color
    })
        .then(() => {
            console.log("add data thanh cong");

        })
        .catch(() => {
            console.log("m code ngu");

        })
    alert("user added");
}
export function updateData(tieude, noidung, color) {
    dataFirestore();
    updateDoc(doc(database, "users", tieude), {
        tieude: tieude,
        noiDung: noidung,
        color: color
    })
        .then(console.log("cap nhat du lieu thanh cong"))
        .catch(() => {
            console.log("cap nhat du lieu that bai");
        });
}


let users = [];

export async function getAllData() {
    users = [];
    const querySnapshot = await getDocs(collection(database, "users"));
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {

        console.log(doc._document.data.value.mapValue.fields.tieude.stringValue);

        users.push({
            tieuDe: doc._document.data.value.mapValue.fields.tieude.stringValue,
            noiDung: doc._document.data.value.mapValue.fields.noiDung.stringValue,
            color: doc._document.data.value.mapValue.fields.color.stringValue
        });
    });
    console.log(users);
}

export function dataFirestore() {
    return users;

}

export async function remove(tieude) {
    await deleteDoc(doc(database, "users", tieude))
        .then(() => {
            console.log("xoa du lieu thanh cong");
        })
        .catch(() => {
            console.log("xoa that bai");
        });

}




