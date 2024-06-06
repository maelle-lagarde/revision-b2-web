// afficher dans votre rendu JS les objets issus de ce tableau en veillant à limiter le contenu de chaque article à 10 de length.
// à chaque fois que vous cliquerez sur un article, une pop-up s’ouvrira avec le contenu inchangé de l’article (length complete).

document.addEventListener('DOMContentLoaded', () => {
    const articlesArray = [
        { id: 1, 
        title: 'Introduction to JavaScript',
        content: 'JavaScript is a versatile programming language used for web development.',
        createdAt: new Date('2024-01-01T10:00:00Z'),
        updatedAt: new Date('2024-01-02T12:00:00Z')
        },
        { id: 2, 
        title: 'Understanding CSS',
        content: 'CSS is used to style HTML elements and make web pages look attractive.',
        createdAt: new Date('2024-01-05T14:00:00Z'),
        updatedAt: new Date('2024-01-06T16:00:00Z')
        },
        { id: 3,
        title: 'Getting Started with HTML',
        content: 'HTML is the standard markup language for creating web pages.',
        createdAt: new Date('2024-01-10T09:00:00Z'),
        updatedAt: new Date('2024-01-11T11:00:00Z')
        }
    ];

    function countLength() {
        articlesArray.forEach(article => {
            let newContent = "";
            for(i = 0; i <= 9; i++) {
                newContent += article.content[i];
            }
            console.log(newContent);
        })
    }
    
    function displayArticles() {
        const articleTable = document.getElementById('articles-table');
        articleTable.innerHTML = '';

        articlesArray.forEach((article) => {
            const row = document.createElement('tr');
            // row.className = article.isClick ? 'yes' : 'no';

            const cellId = document.createElement('td');
            cellId.textContent = article.id;
            row.appendChild(cellId);

            const cellTitle = document.createElement('td');
            cellTitle.textContent = article.title;
            row.appendChild(cellTitle);

            const cellContent = document.createElement('td');
            cellContent.textContent = article.content;
            row.appendChild(cellContent);

            const cellCreatedAt = document.createElement('td');
            cellCreatedAt.textContent = article.createdAt;
            row.appendChild(cellCreatedAt);

            const cellUpdatedAt = document.createElement('td');
            cellUpdatedAt.textContent = article.updatedAt;
            row.appendChild(cellUpdatedAt);

            row.addEventListener('click', () => {
                alert(`Titre: ${article.title}\n\nContenu: ${article.content}\n\nCréé le: ${article.createdAt.toLocaleString()}\nMis à jour le: ${article.updatedAt.toLocaleString()}`);
            });

            articleTable.appendChild(row);
        });
    }
    
    displayArticles();
});