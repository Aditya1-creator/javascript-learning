function getUserdata(username){
  return fetch(`https://api.github.com/users/${username}`).then(raw=>{
     if(!raw.ok){                                                          // why{} here because we have to chech username exist or not means if raw .ok -> check username exist or not 
        throw new Error(" User not found")
     }
     return raw.json();

  })
}

function getRepo(username){
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw=>{
    if(!raw.ok){
        throw new Error(" User not found")
    }
    return raw.json();
  })

}
function decorateUserdata(data) {
    let card = `
       
        <div class="bg-slate-900 text-white p-6 rounded-xl mt-6">

    <!-- Profile Picture -->
    <img src="${data.avatar_url}"
         alt="Profile Picture"
         class="w-20 h-20 rounded-full">

    <!-- User Information -->
    <h2 class="text-2xl font-bold mt-4">
        ${data.name || data.login}
    </h2>

    <p class="text-blue-400">@${data.login}</p>

    <p class="mt-2 text-gray-400">
        ${data.bio || "No bio available"}
    </p>

    <p class="mt-3">
        Location: ${data.location || "Not available"}
    </p>

    <p class="mt-2">
        Website: ${data.blog || "Not available"}
    </p>

    <!-- Statistics -->
    <div class="mt-6 flex gap-6 flex-wrap">

        <div>
            <p>Repositories</p>
            <p class="text-xl font-bold">${data.public_repos}</p>
        </div>

        <div>
            <p>Followers</p>
            <p class="text-xl font-bold">${data.followers}</p>
        </div>

        <div>
            <p>Following</p>
            <p class="text-xl font-bold">${data.following}</p>
        </div>

    </div>

    <!-- Account Information -->
    <p class="mt-5">
        Member since: ${new Date(data.created_at).toLocaleDateString("en-IN")}
    </p>

    <!-- GitHub Profile Link -->
    <a href="${data.html_url}"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-lg">
        View GitHub Profile
    </a>

</div>
    `;
   

    document.querySelector('#profile').innerHTML = card;
    document.querySelector('#profile').classList.remove('hidden');
    document.querySelector('#emptyState').classList.add('hidden');
}

 // repodata is an array of repository objects returned by GitHub API.
// Each repo object contains properties like name and html_url.

// slice(0, 5) selects the first 5 repositories.
// forEach() loops through each repository one by one.
// repo.name gives the repository name; repo.html_url gives its URL.

// repoHTML += adds each repository's HTML to a string.
// container.innerHTML displays that HTML inside the repositories div.
// classList.remove('hidden') makes the repository heading visible.

 function decoraterepodata(repodata){
    let container = document.querySelector('#repositories');
    let heading = document.querySelector('#repositoryHeading');

    let repoHTML = "";

    repodata.slice(0, 5).forEach(function(repo) {
        repoHTML += 
            `
            <a href="${repo.html_url}"
               target="_blank"
               
              class="text-blue-400 underline">
              ${repo.name}
            </a>
            `
        ;
    });
        container.innerHTML = repoHTML;
        heading.classList.remove('hidden');
        
    }





let searchbtn = document.querySelector('#searchButton');
let user = document.querySelector('#usernameInput');
let form = document.querySelector('#searchForm');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = user.value.trim();

    if (username.length === 0) {
        alert("Please enter a GitHub username");
        return;
    }

    getUserdata(username)
        .then(function(data) {
            decorateUserdata(data);
        })
        .catch(function(error) {
            console.error(error);
            alert(error.message);
        });
        
     getRepo(username).then(function(repodata){    // getrepo return array of repo not a single object so decorateUserdata() expects a user object, not an array of repositories so we use another function decoraterepodata to handle it .
            decoraterepodata(repodata);
        })
        .catch(function(error) {
            console.error(error);
            alert(error.message);
        });
});
  


// getUserdata("aditya")
//     .then(function(data) {
//         console.log(data.name);
//     });   // for testing 
