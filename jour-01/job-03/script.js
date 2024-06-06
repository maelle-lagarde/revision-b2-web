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

function newsortedArray(articles) {
    let length = determineLength(articles);
  
    // Copier les éléments dans un nouveau tableau
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray[i] = articles[i];
    }

    // trier par ordre croissant.

    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < length - 1; i++) {
        if (newArray[i].utilisateur > newArray[i + 1].utilisateur) {
          // Échanger les éléments
          let temp = newArray[i];
          newArray[i] = sortedArray[i + 1];
          newArray[i + 1] = temp;
          swapped = true;
        }
      }
      length--; // Optimisation : le dernier élément est déjà trié
    } while (swapped);
  
    return newArray;
}
  
const articlesSorted = newsortedArray(articles);
  
console.log(articlesSorted);




function sortArray(numbers) {
  let temp = [];
  if 
}

let numbers = [2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6];

console.log(numbers);