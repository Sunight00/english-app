async function quiz(){
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
    const data = await response.json();
    console.log(data.results);

    
    const x = data.results.map(quiz => {
        return template(quiz);
    })
    document.querySelector('.quiz').insertAdjacentHTML("afterbegin",x.join());
}

quiz();




function template(quiz) {
    return `
        <fieldset>
        <p>${quiz.question}</p>
        <input type="radio" name="${quiz.question}" value="True">
        <label for="True">True</label><br>
        <input type="radio" name="${quiz.question}" value="False">
        <label for="False">False</label>
        </fieldset>
    `;
}