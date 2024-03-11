const userOptions = [
  {
    ID: 1,
    topic: "Recepies",
    about: "View recepie list",
    description: " ( click to see, add or edit ) ",
    navigation: "/homepage/chef/recepies",
  },
  {
    ID: 2,

    topic: "Ingredients",
    about: "View Ingredients list",
    description: " ( click to see, add or edit ) ",
    navigation: "/homepage/chef/ingredients",
  },
];

let userAcordianData = {
  getCompanies() {
    return userOptions;
  },
};
export default userAcordianData;
