function loadPage(path) {
  window.location.href = path;
}


// loading overlay-------------------------------------------------------------------------------

function showLoading() {
  if (loadingOverlay.classList.contains('hidden')) {
    loadingOverlay.classList.remove('hidden');
  } 
}

function hideLoading() {
  if (!loadingOverlay.classList.contains('hidden')) {
    loadingOverlay.classList.add('hidden');
  } 
}

// modal operation -----------------------------------------------------------------------------

function openModal(modalid, heading, bodyContent, actionBtns) {
  // Get the modal element by its ID
  var modalElement = document.getElementById(modalid);

  // Dynamically update the modal's title, body, and footer
  modalElement.querySelector(".modal-title").innerHTML = heading;
  modalElement.querySelector(".modal-body").innerHTML = bodyContent;
  modalElement.querySelector(".modal-footer").innerHTML = `
    <button type="button" class="secondaryRedbtn" data-bs-dismiss="modal">Cancel</button>
    ${actionBtns}
  `;

  // Initialize and show the Bootstrap modal
  var myModal = new bootstrap.Modal(modalElement, {
    keyboard: false, // Optional: Disable closing modal with ESC key
  });

  myModal.show();
}

function openModalTest() {
  var body = `
  <p>
    modalbooody
  </p>`;
  var actionBtns = `
<button type="button" class="primarybtn" data-bs-dismiss="modal">Do sth big</button>`;
  openModal("mainModal", "heading", body, actionBtns);
}

function openModalGetEpicDetails() {
  var head = `<h4>Get Epic Details</h4>`
  var body = `
  <input class="form-control" id="" placeholder="Enter Epic External ID">`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Get Details</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalClearEpicDetails() {
  var head = `<h4>Clear Epic Details</h4>`
  var body = `<p>Are you sure want to clear Epic details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalGetFeatureDetails() {
  var head = `<h4>Clear Feature Details</h4>`
  var body = `
  <input class="form-control" id="" placeholder="Enter Feature ID">`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Get Details</button>`;
  openModal("mainModal", head, body, actionBtns);
}


function openModalClearFeatureDetails() {
  var head = `<h4>Clear Feature Details</h4>`
  var body = `<p>Are you sure want to clear feature details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalGetStory() {
  var head = `<h4>Get User Story Details</h4>`
  var body = `
  <input class="form-control" id="" placeholder="Enter User Story External ID">`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Get Details</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalClearStory() {
  var head = `<h4>Clear User Story Details</h4>`
  var body = `<p>Are you sure want to clear User Story details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalClearFdd() {
  var head = `<h4>Clear Functional Design Details</h4>`
  var body = `<p>Are you sure want to clear Functional Design Details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}
function openModalClearHdd() {
  var head = `<h4>Clear Functional Design Details Details</h4>`
  var body = `<p>Are you sure want to clear Functional Design Details Details</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}
function openModalClearLdd() {
  var head = `<h4>Clear Low Level Design Details</h4>`
  var body = `<p>Are you sure want to clear Low Level Design Details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}

function openModalClearManualTest() {
  var head = `<h4>Clear Manual Test Details</h4>`
  var body = `<p>Are you sure want to clear manual test Details?</p>`;
  var actionBtns = `
    <button type="button" class="primarybtn" data-bs-dismiss="modal">Clear</button>`;
  openModal("mainModal", head, body, actionBtns);
}

//html to append or prepend

function prependHtmlToBtnContainers(query, htmlToPrepend) {
  // Select all elements with the class "btn-container"
  const btnContainers = document.querySelectorAll(query);

  // Loop through each element and prepend the HTML
  btnContainers.forEach(function (container) {
    container.innerHTML = htmlToPrepend + container.innerHTML; // Prepend the HTML
  });
}

function appendHtmlToBtnContainers(query, htmlToappend) {
  // Select all elements with the class "btn-container"
  const btnContainers = document.querySelectorAll(query);

  // Loop through each element and prepend the HTML
  btnContainers.forEach(function (container) {
    container.innerHTML = container.innerHTML + htmlToappend; // Prepend the HTML
  });
}

// show and hide tabs=========================================================================================================================

function showTab(TabName) {
  // Hide all divs
  document.querySelectorAll(".tab-content").forEach((div) => {
    div.style.display = "none";
  });

  // Remove active class from all buttons
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.remove("active-nav");
  });

  // Show the clicked tab
  document.getElementById(TabName).style.display = "block";

  // Highlight the corresponding button
  document.getElementById("nav_" + TabName).classList.add("active-nav");

  // Trigger the :focus pseudo-class by setting focus to the element
  // document.getElementById("nav_" + TabName).focus();
}

// function showTab(tabId) {
//   const tabLinks = document.querySelectorAll(".tab-link");
//   // Reset link styles
//   tabLinks.forEach((link) => {
//     link.classList.remove("border-primary");
//     // link.classList.add("text-gray-600");
//   });

//   loadTabContent(`Tabs/${tabId}.html`);

//   const selectedTabLink = document.getElementById(tabId);
//   // document.querySelector(
//   //   `[onclick="showTab('${tabId}')"]`
//   // );
//   console.log("tabid -- ", tabId, selectedTabLink);

//   selectedTabLink.classList.add(
//     "border-primary"
//   ); // Highlight selected tab link
// }
// function loadTabContent(tabFile) {
//   fetch(tabFile)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("tab-contents").innerHTML = data;
//       // showTab(tabFile); // Show the loaded tab content
//     })
//     .catch((error) => console.error("Error loading tab content:", error));
// }

function enableToolTip() {
  // Initialize Bootstrap tooltips using plain JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the data-bs-toggle="tooltip" attribute
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    // Initialize tooltips for each element
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl); // Create a new Tooltip instance for each element
    });
  });
}

function OnDDplatformChange() {
  const platformSelect = document.getElementById("dd_platform");
  const generateButton = document.getElementById("btn_gen_epic");

  console.log(
    "on DD-platformchange function",
    platformSelect.value,
    generateButton.disabled
  );

  // Check if a valid platform option is selected
  if (platformSelect.value) {
    generateButton.disabled = false; // Enable button if valid option is selected
  } else {
    generateButton.disabled = true; // Disable button if no valid option is selected
  }
}

//text vbox text count
function updateCharCount(textboxid, countId) {
  console.log("word count on ", textboxid, countId);
  const textInput = document.getElementById(textboxid);
  const countDisplay = document.getElementById(countId);
  countDisplay.textContent = textInput.value.length; // Update character count

  textInput.textContent = textInput.value
}

function updateText(elementId, value) {
  document.getElementById(elementId).textContent = value;
}
