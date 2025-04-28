
let main = document.querySelector(".poo")

fetch(`https://api.github.com/users/TAPalaa/repos`).then((res)=>res.json().then((data)=>data.map((user) => {
    console.log(user.name , user.description	, user.html_url	)


    let a = document.createElement("div")
    a.innerHTML = `
            <div class="poro">
            <a href="${user.html_url}"><h3>${user.name}</h3></a>
            <p>
                ${user.description}
            </p>
          </div>
    
    `

    main.appendChild(a)
})))

