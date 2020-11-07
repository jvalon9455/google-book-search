import axios from "axios";

const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCNE8DBRBMcWujEJoyLUm5Qz0wEyKg2eHc&q=`;

export default {
  getBook: function (term) {
    return axios.get(url + term);
  },
};