// const copyBtns = document.querySelectorAll('.copybtn');

// // Initialize tooltips for all buttons
// copyBtns.forEach((button) => {
//     const tooltip = new bootstrap.Tooltip(button, {
//         trigger: 'manual', // Prevent it from showing on hover
//         title: 'Copied to clipboard!', // Tooltip message
//         placement: 'top' // You can change the placement as needed
//     });
// });



function getInnertext(item) {
    let textToCopy = '';
    // console.log("--------------", item.tagName, item.nodeType, item)

    if (item.tagName == 'BUTTON' || item.tagName == 'A') {
        return textToCopy
    }

    if (item.hasChildNodes()) {
        item.childNodes.forEach((child) => {
            textToCopy += getInnertext(child).trim() + '\n';
        });
    }else {
        // If no child nodes, just copy the innerText or innerHTML
        textToCopy = item.innerText || item.textContent || item.value;
    }
    return textToCopy
}

function copyToClipboard(textBoxId, button) {
    const item = document.getElementById(textBoxId);

    let textToCopy = getInnertext(item);

    // Trim final newline and copy to clipboard
    textToCopy = textToCopy.trim();

    // Use the modern Clipboard API
    navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
            // Successfully copied, show toast or notification
            // createToast("itemCopied","Item Copied","You have copied an item.","info",false,3000);

            const tooltip = new bootstrap.Tooltip(button, {
                trigger: 'manual', 
                title: 'Copied', 
                placement: 'top' 
            });
            tooltip.show();
            setTimeout(() => {
                tooltip.hide();
                tooltip.dispose();
            }, 2000);
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
}

