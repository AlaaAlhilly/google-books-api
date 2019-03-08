import axios from 'axios';

const API = {
    Search:function(subject) {
        let result = axios.get("https://www.googleapis.com/books/v1/volumes?q="+subject);
        console.log(result.items);
        return result;
    },
    getBooks: function () {
        return axios.get('/api/books');
    },
    saveBooks: function (book) {
        return axios.post('/api/books', book);
    },
    deleteBook: function (id) {
        return axios.delete('/api/delete/' + id);
    }
}

export default API;