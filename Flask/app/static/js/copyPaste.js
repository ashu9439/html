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
        textToCopy = item.innerText || item.textContent;
    }
    return textToCopy
}

function copyToClipboard(textBoxId) {
    const item = document.getElementById(textBoxId);

    let textToCopy = getInnertext(item);

    // Trim final newline and copy to clipboard
    textToCopy = textToCopy.trim();

    // Use the modern Clipboard API
    navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
            // Successfully copied, show toast or notification
            createToast(
                "itemCopied",
                "Item Copied",
                "You have copied an item.",
                "info", 
                false, 
                3000
            );
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
}

