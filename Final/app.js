function loadTabContent(tabFile) {
  fetch(tabFile)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("tab-contents").innerHTML = data;
      // showTab(tabFile); // Show the loaded tab content
    })
    .catch((error) => console.error("Error loading tab content:", error));
}
function showTab(tabId) {
  const tabLinks = document.querySelectorAll(".tab-link");
  // Reset link styles
  tabLinks.forEach((link) => {
    link.classList.remove("text-blue-600", "border-b-2", "border-blue-600");
    link.classList.add("text-gray-600");
  });

  

  loadTabContent(`Tabs/${tabId}.html`);

  const selectedTabLink = document.getElementById(tabId);
  // document.querySelector(
  //   `[onclick="showTab('${tabId}')"]`
  // );
  console.log("tabid -- ", tabId, selectedTabLink);

  selectedTabLink.classList.add(
    "text-blue-600",
    "border-b-2",
    "border-blue-600"
  ); // Highlight selected tab link
}


function OnDDplatformChange() {
  const platformSelect = document.getElementById('dd_platform');
  const generateButton = document.getElementById('btn_gen_epic');

  console.log("on DD-platformchange function", platformSelect.value, generateButton.disabled)

  // Check if a valid platform option is selected
  if (platformSelect.value) {
      generateButton.disabled = false; // Enable button if valid option is selected
  } else {
      generateButton.disabled = true; // Disable button if no valid option is selected
  }
}


//text vbox text count
function updateCharCount(textboxid, countId) {
  console.log("word count on ", textboxid, countId)
  const textInput = document.getElementById(textboxid);
  const countDisplay = document.getElementById(countId);
  countDisplay.textContent = textInput.value.length; // Update character count
}


//load html and javascript
function loadHTMLIntoDiv(url, jsFile) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          // Inject HTML content
          document.getElementById('contentContainer').innerHTML = data;

          // Load external JavaScript if provided
          if (jsFile) {
              const script = document.createElement('script');
              script.src = jsFile;
              script.type = 'text/javascript';
              document.body.appendChild(script);
          }
      })
      .catch(error => {
          console.error('Error loading HTML:', error);
      });
}