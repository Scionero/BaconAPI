async function getBacon() {
    //Base API URL
    var apiString = "https://baconipsum.com/api/";
    //User selects number of paragraphs to show
    var newPara = document.getElementById("newPara").value;
    //Adds type of text to return to the base API and number of paragraphs to show
    apiString = apiString + "?type=all-meat&paras=" + newPara;
    //Waits for the return from the API
    var response = await fetch(apiString);
    //
    document.getElementById("rawData").innerHTML = "";
    document.getElementById("formattedData").innerHTML = "";
    var jsonData = await response.json();
    document.getElementById("rawData").innerHTML = JSON.stringify(jsonData);
    for (var para in jsonData) {
        document.getElementById("formattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
    }
}