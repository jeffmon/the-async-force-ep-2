(function(){
  var targetButton = document.getElementById("requestResourceButton");
  var searchResult = document.getElementById("resourceId");
  //use searchResult.value

  function getSpecies(url){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(){
      var specResponse = JSON.parse(this.responseText);
      var personSpecies = document.createElement("p");
      personSpecies.innerHTML = "Species: " + specResponse.name;
      contentContainer.appendChild(personSpecies);
    });
    oReq.open("GET", url);
    oReq.send();
  }

  function handlePersonResponse(){
       contentContainer.innerHTML = "";
       var response = JSON.parse(this.responseText);
       var personName = document.createElement("h2");
       personName.innerHTML = response.name;
       contentContainer.appendChild(personName);
       var personGender = document.createElement("p");
       personGender.innerHTML = "Gender: " + response.gender;
       contentContainer.appendChild(personGender);
       getSpecies(response.species);
  }



  function getInfo(){
    var val = document.getElementById("resourceType").value;
    if(val === "people"){
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", handlePersonResponse);
      oReq.open("GET", "http://www.swapi.co/api/people/" + searchResult.value);
      oReq.send();
    }
  }


  targetButton.addEventListener("click", getInfo);























})();

