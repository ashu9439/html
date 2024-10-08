function appendTextboxWithCopy(elementId, heading, content) {
  // Get the target element by its ID
  const targetElement = document.getElementById(elementId);

  // Check if the element exists
  if (targetElement) {
    // Append the HTML content to the element's inner HTML
    targetElement.innerHTML += `
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-xl font-semibold"> ${heading}</h1>
            <button class="text-sm text-blue-500 px-2 py-1 rounded-lg">
                Copy
            </button>
        </div>
        <!-- Textarea -->
        <div class="w-full p2">
            ${content}
        </div>`;
  } else {
    console.error(`Element with ID '${elementId}' not found.`);
  }
}
