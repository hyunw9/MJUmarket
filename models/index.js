const person = {
  name: "Gil-dong",
  last: "Hong",
  links: {
    social: {
      instagram: "Hong_Gil_Dong",
    },
    blog: "http",
  },
};
const { instagram } = person.links.social.instagram;
console.log(instagram);
