// اختيار العناصر بشكل صحيح باستخدام الـ id
const searchBtn = document.querySelector("#search-btn");
const usernameInput = document.querySelector("#username-input");
const reposTable = document.querySelector("#repos-table");
const tbody = reposTable.querySelector("tbody");
const loadingIndicator = document.querySelector("#loading");

// متغير لتخزين اسم المستخدم
let currentUsername = "";

// دالة لعرض رسالة الخطأ
function showError(message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.textContent = message;
    document.querySelector("#container").prepend(alertDiv);
    
    setTimeout(() => alertDiv.remove(), 3000);
}

// دالة لتنظيف الجدول
function clearTable() {
    tbody.innerHTML = "";
}

// دالة لعرض بيانات المستودعات
function displayRepos(repos) {
    clearTable();
    
    repos.forEach(repo => {
        const row = tbody.insertRow();
        row.insertCell().textContent = repo.name;
        row.insertCell().textContent = repo.stargazers_count;
        row.insertCell().textContent = repo.watchers_count;
        row.insertCell().textContent = repo.description || "لا يوجد وصف";
        row.insertCell().textContent = repo.language || "غير محدد";
        row.insertCell().textContent = repo.url;
    });
}

// دالة لجلب البيانات من API
async function fetchRepos(username) {
    try {
        loadingIndicator.style.display = "block";
        
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
            throw new Error("فشل في جلب البيانات: " + response.status);
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            showError("لا يوجد مستودعات لهذا المستخدم");
            return;
        }
        
        displayRepos(data);
    } catch (error) {
        showError(error.message);
        console.error("حدث خطأ:", error);
    } finally {
        loadingIndicator.style.display = "none";
    }
}

// حدث النقر على زر البحث
searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    
    currentUsername = usernameInput.value.trim();
    
    if (!currentUsername) {
        showError("الرجاء إدخال اسم مستخدم");
        return;
    }
    
    await fetchRepos(currentUsername);
});



























<div class="ser" id="1">
<h1 class="opa">Services</h1>
<div class="p">
    Don't be busy, be productive
</div>
<br><br><br>
<div class="sero">

    <div class="see">

        <h3>front end dev</h3>
        <p>
          انا شبه محترف في الفرونت اند او برمجة الواجهات الامامية عملت على الكثير من المشاريع الناجحة و تعلمت الكثير من اللغات 
        </p>
        <h3>back end dev</h3>
        <p>
          تعلمت ما يكفي لادخل مجال الباك اند او مبرمج الواجهات الخلفية ليس لي الكثير من المشاريع فيه
        </p>
    </div>
    <div class="see">

        <h3>editing videos</h3>
        <p>
          انا متوسط تقريبا في هذا المجال تعلمت ما يكفي للدخول لهذا المجال و لي الكثير من المشاريع الناجحة
        </p>
    </div>
    <div class="see">

      <img src="Screenshots/_6bea2f0b-7b80-4ac5-a39c-417aa5be44fd.jpeg" alt="mountain">
      <div class="ise"></div>
    </div>
</div>
</div>






<div class="poro">
            <a href=""><h3></h3></a>
            <p>

            </p>
          </div>





          fetch(`https://api.github.com/users/TAPalaa/repos`).then((res)=>res.json().then((data)=>data.map((user) => {
    let a = document.createElement("div")
    a.innerHTML = `
              <div class="poro">
            <a href="${data.html_url}"><h3>${data.name}</h3></a>
            <p>
                ${data.description}
            </p>
          </div>
    
    `

    main.appendChild(a)

})))