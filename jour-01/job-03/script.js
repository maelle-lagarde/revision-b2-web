// retourner un nouveau tableau dans lequel les articles sont triés en fonction des users qui les ont créer.

const articles =
[
    { titre: "Article 1", utilisateur: "user1" },
    { titre: "Article 2", utilisateur: "user2" },
    { titre: "Article 3", utilisateur: "user1" },
    { titre: "Article 4", utilisateur: "user3" },
    { titre: "Article 5", utilisateur: "user2" }
];

function determineLength(arr) {
    let length = 0;
    while (arr[length] !== undefined) {
      length++;
    }
    return length;
}

function newsortedArrayay(articles) {
    let length = determineLength(articles);
  
    // Copier les éléments dans un nouveau tableau
    let sortedArray = [];
    for (let i = 0; i < length; i++) {
      sortedArray[i] = articles[i];
    }
  
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < length - 1; i++) {
        if (sortedArray[i].utilisateur > sortedArray[i + 1].utilisateur) {
          // Échanger les éléments
          let temp = sortedArray[i];
          sortedArray[i] = sortedArray[i + 1];
          sortedArray[i + 1] = temp;
          swapped = true;
        }
      }
      length--; // Optimisation : le dernier élément est déjà trié
    } while (swapped);
  
    return sortedArray;
}
  
const articlesSorted = newsortedArrayay(articles);
  
console.log(articlesSorted);