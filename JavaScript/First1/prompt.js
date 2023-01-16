var nameAdmin = "Василь";

alert(nameAdmin);

nameAdmin = prompt("Введіть нове ім'я - ", "Петро");

if (nameAdmin == null | nameAdmin == "") {
    nameAdmin = "Зостався старий адмін";
}

alert(nameAdmin);
