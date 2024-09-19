import { colorArray } from "./utils/colorArray.js"
import { UISelector } from "./utils/UISelector.js"




let ten = ""
let title = ""
let contentmini = "";
let array = []
let newArray = []
let color = "";
const colorMain = "";


UISelector.new1.onclick = function () {
    UISelector.content3.style.display = "flex";
    color = colorArray[Math.floor(Math.random() * 20)];
}
UISelector.tieuDe.onchange = function (e) {
    title = e.target.value;
}
UISelector.noiDung.onchange = function (e) {
    contentmini = e.target.value;
}
UISelector.save.onclick = function () {

    if (title.trim() !== "" && contentmini.trim() !== "") {
        UISelector.content1.innerHTML = "";

        let check = false;

        for (let i = 0; i < array.length; i++) {
            if (title === array[i].tieuDe) {
                check = true;
                alert("Bạn không thể thêm thẻ mới vì đã có tiêu đề này rồi");
                return;
            }
        }
        if (check == false && title !== "") {
            let obj = {
                tieuDe: title,
                noiDung: contentmini,
                colorMain: color
            };
            array.push(obj);
            addCard();
        }
        title = "";
        contentmini = "";
        UISelector.tieuDe.value = "";
        UISelector.noiDung.value = "";
        console.log(array);


        UISelector.content3.style.display = "none";
    }
    else {
        alert("Nhìn cái chóa giề !!!!!");
    }


};

function addCard() {
    array.forEach((item) => {
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.backgroundColor = item.colorMain;
        newCard.innerHTML = item.tieuDe;
        newCard.setAttribute('id', item.tieuDe);
        content1.appendChild(newCard);
        newCard.ondblclick = function () {
            UISelector.content4.style.display = "flex";
            tieuDe1.value = item.tieuDe;
            noiDung1.value = item.noiDung;
            save1.onclick = function () {

                content1.innerHTML = "";

                item.noiDung = noiDung1.value;
                item.tieuDe = tieuDe1.value;
                addCard();

                console.log(array);
                content4.style.display = "none";

            };
            delete1.onclick = () => {
                array = array.filter((newArray) => {
                    return newArray.tieuDe !== item.tieuDe;

                })
                content4.style.display = "none";
                console.log(array);
                newCard.remove();
            }
        }
    })

}
cancel.onclick = function () {
    content3.style.display = "none";
    content1.innerHTML = ""
    addCard();
}
search.onchange = function (e) {
    ten = e.target.value
    if (ten !== "") {
        content1.innerHTML = "";
        tiemKiem(ten);
        newArray.forEach((item) => {
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.style.backgroundColor = item.colorMain;
            newCard.innerHTML = item.tieuDe;
            newCard.setAttribute('id', item.tieuDe);
            content1.appendChild(newCard);
            newCard.ondblclick = function () {
                UISelector.content4.style.display = "flex";
                UISelector.tieuDe1.value = item.tieuDe;
                UISelector.noiDung1.value = item.noiDung;
                UISelector.save1.onclick = function () {

                    // content1.innerHTML = "";
                    newCard.innerHTML = UISelector.tieuDe1.value;
                    item.noiDung = UISelector.noiDung1.value;
                    item.tieuDe = UISelector.tieuDe1.value;
                    // addCard();

                    console.log(newArray);
                    UISelector.content4.style.display = "none";
                    // search.value = "";

                };
                UISelector.delete1.onclick = () => {
                    array = array.filter((newArray) => {
                        return newArray.tieuDe !== item.tieuDe;

                    })
                    UISelector.content4.style.display = "none";
                    console.log(newArray);
                    newCard.remove();
                    UISelector.search.value = "";
                }
            }
        })
    }
    else if (ten === "") {
        UISelector.content1.innerHTML = "";
        addCard();
    }
}

function tiemKiem(ten) {
    newArray = array.filter((item) => {
        return item.tieuDe.toLowerCase().includes(ten.toLowerCase());
    });
    console.log(newArray);
    return newArray;
}
