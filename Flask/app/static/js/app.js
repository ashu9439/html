function loadPage(path) {
  window.location.href = path;
}

//show tosts---------------------------------------------------------------------------------------------------------------
function createToast(toastId, heading, content, type) {
  // Get the toast container div
  const toastContainer = document.getElementById("toast-container");

  // Create the toast HTML dynamically
  const toastHtml = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
      <div class="toast-header bg-${type} text-white">
        <strong class="me-auto">${heading}</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${content}
      </div>
    </div>
  `;

  // Append the toast to the toast container
  toastContainer.insertAdjacentHTML("beforeend", toastHtml);

  // Initialize and show the toast using Bootstrap's JS
  const toastElement = document.getElementById(toastId);
  const toastInstance = new bootstrap.Toast(toastElement);
  toastInstance.show();

  // Remove the toast after 3 seconds
  setTimeout(() => {
    toastInstance.hide(); // Hide the toast
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove(); // Remove the toast from the DOM after it is hidden
    });
  }, 3000); // 3000 milliseconds = 3 seconds
}

// Trigger toasts with different headings, content, and types
// createToast("toast0", 'Info', 'Your action was successful!', 'info');
// createToast("toast1", 'Success', 'Your action was successful!', 'success');
// createToast("toast2", 'Warning', 'This is a warning message!', 'warning');
// createToast("toast3", 'Error', 'Something went wrong.', 'danger');

//copy content to clip bord ---------------------------------------------------------------------------------------------------------------
function copyToClipboard(textBoxId) {
  const textarea1 = document.getElementById(textBoxId);

  // Use the modern Clipboard API
  navigator.clipboard
    .writeText(textarea1.value)
    .then(() => {
      // alert("Text copied to clipboard!");
      createToast("itemCopied", 'Item Copied', 'You have copied an item.', 'info');
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
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
}
