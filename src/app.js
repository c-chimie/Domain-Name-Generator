/* eslint-disable */

window.onload = function() {
  //write your code here
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["fast", "hungry"];
  let noun = ["computer", "ostrich"];
  let domain = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push(" " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain").innerHTML = domainName;
  // document.write(domainName.join(""));
};
