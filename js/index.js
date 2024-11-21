






var url = document.getElementById('websiteURL');
var nameWeb = document.getElementById('webName');

var webSiteList = [];

 

function addWebSite() {
     if (!url.value.startsWith('http') || nameWeb.value.length< 3  ) {
        alert('Please enter a valid URL starting with http:// or https:// and the name  ');
        return;
    }
    

    var webSite = {
        WebsiteName: nameWeb.value,
        Visit: url.value,
    };

    // Add the website to the list
    webSiteList.push(webSite);

    localStorage.setItem("    websitememory"      ,  JSON.stringify(webSiteList)      )
    
    // Call function to display data in table
    displayData();

    // Clear form fields
    clearForm();
}

function clearForm() {
    // Reset input fields
    nameWeb.value = "";
    url.value = "";
}

function displayData() {
    var cartona = "";

    // Loop through all websites in the list and create rows
    for (var i = 0; i < webSiteList.length; i++) {
        cartona += `
            <tr>
                <td>${i + 1}</td>
                <td>${webSiteList[i].WebsiteName}</td>
                <td><a href="${webSiteList[i].Visit}" target="_blank" class="visit-btn">Visit</a></td>
                <td><button class="delete-btn" onclick="deleteWebsite(${i})">Delete</button></td>
            </tr>
        `;
    }

     document.getElementById("rowDta").innerHTML = cartona;
}

function deleteWebsite(index) {
     webSiteList.splice(index, 1);
    
     displayData();
}



// 



