const insert = document.getElementById("insert");

window.addEventListener('keydown', (e)=>{
    console.log(e.key, e.keyCode, e.code)
    insert.innerHTML = `
        <table class="color">
            <thead>
                <th> Key </th>
                <th> Key Code </th>
                <th> Code</th>
            </thead>
            <tbody>
                <td>${e.key === " " ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tbody>
        </table>
    `
})

console.log(insert);