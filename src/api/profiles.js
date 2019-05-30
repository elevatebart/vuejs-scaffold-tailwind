const collabs = [
  {
    id: 1,
    firstName: "Reingink",
    lastName: "Jonathan",
    arrived: new Date().getTime(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["vuejs", "javascript", "react"],
    image: "/assets/mael.jpeg",
    missions: [
      {
        client: "Leroy Merlin",
        description: ""
      }
    ]
  },
  {
    id: 2,
    firstName: "Reingink",
    lastName: "Jonathan",
    arrived: new Date().getTime(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["vuejs", "javascript", "react"],
    image: "/assets/mael.jpeg",
    missions: [
      {
        client: "Leroy Merlin",
        description: ""
      }
    ]
  }
];

export default {
  get() {
    return Promise.resolve(collabs);
  }
};
