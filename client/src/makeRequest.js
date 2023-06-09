import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer 369663bb760870c1ebc88a33a9981943a926d9fb4332c25992cdf6fae7e04248dc225b7fe8cf01664941edd81fad3b83befa8b0b4881592eee537f49b20bcf684029b1707adb0b5c7018cea53c4eb8b3bacee8fe766e9366e2fdccc1a2c28aa3652bf62818e684ab19cd400ba50963dc888bf19b6de72cd1b341073c820fc5b5",
  },
});
