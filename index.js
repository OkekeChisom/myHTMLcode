let pageNames = [
    "Home",
    "About us",
    "contact us",
    "Homework"
];
for (i = 0; i < pageNames.length; i += 1) {
    if (document.title === pageNames [i]){
        console.log("WE ARE HERE: " + pageNames[i]);
    } else {
        console.log("We are not here: " + pageNames [i]);
    }
}