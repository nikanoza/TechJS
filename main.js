
fetch('results-summary-component-main/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const htmlElements = data.map((item, index) => {
            return `
                <div class="element">
                    <div class="left-content">
                        <img src="${item.icon}" alt="">
                        <h1>${item.category}</h1>
                    </div>
                    <div class="right-content">
                        <span><p class="res">${item.score}</p><p class="of">/ 100</p></span>
                    </div>
                </div>
            `;
        });

        const htmlString = htmlElements.join('');

        const content = document.querySelector('#content');
        content.innerHTML = htmlString;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
