const emojiGallery = document.getElementById("emoji-gallery");
const emojis = [
    "&#128513;", "&#128517;", "&#128518;", "&#128519;", "&#128526;", "&#128527;",
    "&#128538;", "&#128541;", "&#128579;", "&#128589;", "&#128593;", "&#128641;"
];

for (const emoji of emojis) {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";
    emojiItem.innerHTML = `<p>${emoji}</p><p class="emoji-code">${getEmojiCode(emoji)}</p>`;
    emojiGallery.appendChild(emojiItem);
}

function getEmojiCode(emoji) {
       const codePoint = emoji.codePointAt(0);
       const hexCode = codePoint.toString(16);
    return hexCode;
}