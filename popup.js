document.addEventListener("DOMContentLoaded", function () {
    // Set the width and height of the popup container
    var container = document.getElementById("container");
    container.style.width = "900px"; // Ayarlamak istediğiniz genişlik
    container.style.height = "900x"; // Ayarlamak istediğiniz yükseklik
  
    // Rest of your existing code...
    var checkButton = document.getElementById("translateBtn");
    checkButton.addEventListener(
      "click",
      function () {
        var lang = document.getElementById("lang").value;
        chrome.storage.sync.set({ lang: lang }, function () {
          console.log("Value is set to " + lang);
        });
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { method: "translate" },
              function (response) {
                if (response.method == "translate") {
                  // Do something after translation...
                }
              }
            );
          }
        );
      },
      false
    );
  });