const addToDatabase = id =>{
    const exists = getDataBase(); 
    let shopping_card = {};
    if (!exists) {
        shopping_card[id] = 1;
    }
    else{
        shopping_card = JSON.parse(exists);
        if (shopping_card[id]) {
            const newCount = shopping_card[id] +  1;
            shopping_card[id] = newCount;
        }
        else{
            shopping_card[id] = 1;
        }
    }
    setDataBase(shopping_card);
    
}

const getDataBase = () => localStorage.getItem("shopping_card");

const setDataBase = card =>{
    localStorage.setItem("shopping_card",JSON.stringify(card));
}

const removeToDatabase = id =>{
    const exists = getDataBase();
    if (exists) {
        const shopping_card = JSON.parse(exists);
        delete shopping_card[id];
        setDataBase(shopping_card);
    }
}












// const addToDatabase = id =>{
//     const exists = localStorage.getItem("shopping_card");
//     let shopping_card = {};
//     if (!exists) {
//         shopping_card[id] = 1;
//     }
//     else{
//         shopping_card = JSON.parse(exists);
//         if (shopping_card[id]) {
//             const newCount = shopping_card[id] + 1;
//             shopping_card[id] = newCount;
//         }
//     }
//     localStorage.setItem("shopping_card",JSON.stringify(shopping_card));
// }

export { addToDatabase, removeToDatabase };

