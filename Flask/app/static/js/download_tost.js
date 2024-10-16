function Download(url, filename) {
  var progressbarId = `downloadProgress`;
  var percentId = `progressPercent`;
  var innerHTML = `
    <progress id="${progressbarId}" value="0" max="100" ></progress>
    <span id="${percentId}">0%</span>`;
  createToast("toast0", "Info", innerHTML, "info", false, 3000);

  manageDownload(url, progressbarId, percentId, filename);
}

function downloadelementContent(itemId, filemame) {
  console.log("download item ", itemId);
  const item = document.getElementById(itemId);
  let textContent = getInnertext(item);
  textContent = textContent.trim();
  console.log("download item ", itemId);

  const blob = new Blob([textContent], { type: "text/plain" });

  Download(URL.createObjectURL(blob), filemame);
}

function manageDownload(url, progressbarId, percentId, filename) {
  // for test        'https://picsum.photos/1000/1000'
  const progressBar = document.getElementById(progressbarId);
  const progressPercent = document.getElementById(percentId);

  const options = {
    responseType: "blob", // The response will be a Blob (binary large object, e.g., image)
    onDownloadProgress: function (progressEvent) {
      // Calculate the download progress percentage
      const percentCompleted = Math.floor(
        (progressEvent.loaded / progressEvent.total) * 100
      );

      // Update progress bar and percentage text
      progressBar.value = percentCompleted;
      progressPercent.textContent = percentCompleted + "%";
    },
  };

  axios
    .get(url, options)
    .then(function (response) {
      // Create a new Blob object using the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // File name for the download
      document.body.appendChild(link);
      link.click();
      link.remove();
      // Reset the progress bar after the download completes
      // progressBar.value = 0;
      progressPercent.textContent = "Downloaded Successfully";
    })
    .catch(function (error) {
      console.error("Download error:", error);
    });
}

//show tosts---------------------------------------------------------------------------------------------------------------
function createToast(toastId, heading, content, type, autohide, ms) {
  // Get the toast container div
  const toastContainer = document.getElementById("toast-container");
  var icon = ``;
  var colr = ``;
  switch (type) {
    case "info":
      colr = `#3A66AA`;
      icon = `    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 5.6C8.44174 5.6 8.79992 5.24183 8.79992 4.8C8.79992 4.35817 8.44174 4 7.99992 4C7.55809 4 7.19992 4.35817 7.19992 4.8C7.19992 5.24183 7.55809 5.6 7.99992 5.6Z" fill="#3A66AA"/>
                    <path d="M7.43423 6.63443C7.58426 6.4844 7.78774 6.40011 7.99992 6.40011C8.21209 6.40011 8.41557 6.4844 8.5656 6.63443C8.71563 6.78446 8.79992 6.98794 8.79992 7.20011V11.2001C8.79992 11.4123 8.71563 11.6158 8.5656 11.7658C8.41557 11.9158 8.21209 12.0001 7.99992 12.0001C7.78774 12.0001 7.58426 11.9158 7.43423 11.7658C7.2842 11.6158 7.19992 11.4123 7.19992 11.2001V7.20011C7.19992 6.98794 7.2842 6.78446 7.43423 6.63443Z" fill="#3A66AA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94942 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM8 14.4C6.7342 14.4 5.49683 14.0246 4.44435 13.3214C3.39188 12.6182 2.57157 11.6186 2.08717 10.4492C1.60277 9.27972 1.47603 7.9929 1.72298 6.75142C1.96992 5.50994 2.57946 4.36957 3.47452 3.47452C4.36957 2.57946 5.50995 1.96992 6.75142 1.72297C7.9929 1.47603 9.27973 1.60277 10.4492 2.08717C11.6186 2.57157 12.6182 3.39187 13.3214 4.44435C14.0246 5.49682 14.4 6.7342 14.4 8C14.4 9.69738 13.7257 11.3252 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8 14.4Z" fill="#3A66AA"/>
                    </svg>`;

      break;

    default:
      colr = `#3A66AA`;
      icon = `    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 5.6C8.44174 5.6 8.79992 5.24183 8.79992 4.8C8.79992 4.35817 8.44174 4 7.99992 4C7.55809 4 7.19992 4.35817 7.19992 4.8C7.19992 5.24183 7.55809 5.6 7.99992 5.6Z" fill="#3A66AA"/>
                    <path d="M7.43423 6.63443C7.58426 6.4844 7.78774 6.40011 7.99992 6.40011C8.21209 6.40011 8.41557 6.4844 8.5656 6.63443C8.71563 6.78446 8.79992 6.98794 8.79992 7.20011V11.2001C8.79992 11.4123 8.71563 11.6158 8.5656 11.7658C8.41557 11.9158 8.21209 12.0001 7.99992 12.0001C7.78774 12.0001 7.58426 11.9158 7.43423 11.7658C7.2842 11.6158 7.19992 11.4123 7.19992 11.2001V7.20011C7.19992 6.98794 7.2842 6.78446 7.43423 6.63443Z" fill="#3A66AA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94942 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM8 14.4C6.7342 14.4 5.49683 14.0246 4.44435 13.3214C3.39188 12.6182 2.57157 11.6186 2.08717 10.4492C1.60277 9.27972 1.47603 7.9929 1.72298 6.75142C1.96992 5.50994 2.57946 4.36957 3.47452 3.47452C4.36957 2.57946 5.50995 1.96992 6.75142 1.72297C7.9929 1.47603 9.27973 1.60277 10.4492 2.08717C11.6186 2.57157 12.6182 3.39187 13.3214 4.44435C14.0246 5.49682 14.4 6.7342 14.4 8C14.4 9.69738 13.7257 11.3252 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8 14.4Z" fill="#3A66AA"/>
                    </svg>`;

      break;
  }

  // Create the toast HTML dynamically
  const toastHtml = `
      <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-header ">
          <h6 class="me-auto" style= "color: ${colr};" >${icon} ${heading}</h6>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" style= "color: ${colr};"></button>
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
  autohide &&
    setTimeout(() => {
      toastInstance.hide(); // Hide the toast
      toastElement.addEventListener("hidden.bs.toast", () => {
        toastElement.remove(); // Remove the toast from the DOM after it is hidden
      });
    }, ms); // 3000 milliseconds = 3 seconds
}

// Trigger toasts with different headings, content, and types
//   createToast("toast0", 'Info', 'Your action was successful!', 'info');
// createToast("toast1", 'Success', 'Your action was successful!', 'success');
// createToast("toast2", 'Warning', 'This is a warning message!', 'warning');
// createToast("toast3", 'Error', 'Something went wrong.', 'danger');
