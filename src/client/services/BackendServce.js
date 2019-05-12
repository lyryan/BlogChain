const addToDB = async (article) => {
    fetch('http://localhost:3030/insert', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(article)
})
}

const searchDB = async(searchparam) => {
    fetch(`http://localhost:3030/${searchparam}`).then((response) => response.json())
        .then((responseData) => {
        return responseData;
        }).catch(err => console.log(err));

}

const getAll = async() => {
    fetch(`http://localhost:3030/getall`).then((response) => response.json())
        .then((responseData) => {
        return responseData;
        }).catch(err => console.log(err));
}

export {
    addToDB,
    searchDB,
    getAll,
};