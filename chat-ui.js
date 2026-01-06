document.addEventListener("DOMContentLoaded", () => {
  const msgs = (window.DrMamdoohConfig && window.DrMamdoohConfig.welcomeMessages) || [];
  const welcome = msgs.length ? msgs[Math.floor(Math.random() * msgs.length)] : "مرحباً! كيف أقدر أساعدك؟";
  addBotMessage(welcome);
  showQuickReplies();
});

function goBack() {
  window.history.back();
}

function handleKeyPress(event) {
  if (event.key === "Enter") sendMessage();
}

let quickRepliesTimer = null;

function hideQuickReplies() {
  const qr = document.getElementById("quickReplies");
  if (qr) qr.classList.add("hidden");
}

function showQuickReplies() {
  const qr = document.getElementById("quickReplies");
  if (qr) qr.classList.remove("hidden");
}

/* ✅ يرجّع الأزرار بعد 15 ثانية */
function scheduleQuickRepliesReturn() {
  if (quickRepliesTimer) clearTimeout(quickRepliesTimer);
  quickRepliesTimer = setTimeout(() => {
    showQuickReplies();
  }, 15000); // 15 ثانية
}

function sendQuickReply(text) {
  const input = document.getElementById("messageInput");
  input.value = text;
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = (input.value || "").trim();
  if (!text) return;

  hideQuickReplies();
  addUserMessage(text);
  input.value = "";

  const typing = document.getElementById("typingIndicator");
  if (typing) typing.classList.add("active");

  setTimeout(() => {
    const reply = window.askDrMamdooh ? window.askDrMamdooh(text) : "في مشكلة بتحميل الدكتور ممدوح.";
    if (typing) typing.classList.remove("active");
    addBotMessage(reply);

    // ✅ بعد ما يرد البوت، رجّع الأزرار بعد 15 ثانية
    scheduleQuickRepliesReturn();
  }, 600);
}

function cleanText(t) {
  if (!t) return "";
  return t
    .toString()
    .replace(/\*\*/g, "")
    .replace(/__+/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* ✅ يحوّل أي رابط داخل النص لـ <a> clickable */
function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    const safe = url.replace(/"/g, "&quot;");
    return `<a href="${safe}" target="_blank" rel="noopener noreferrer">${safe}</a>`;
  });
}

function addUserMessage(text) {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;

  const container = document.createElement("div");
  container.className = "message-container user";
  container.innerHTML = `<div class="message"></div>`;
  container.querySelector(".message").textContent = cleanText(text);

  chatMessages.appendChild(container);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(text) {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;

  const container = document.createElement("div");
  container.className = "message-container bot";
  container.innerHTML = `
    <img src="face.png" alt="robot" class="robot-avatar" />
    <div class="message"></div>
  `;

  const msg = container.querySelector(".message");
  const cleaned = cleanText(text);

  // ✅ بدل textContent (اللي بيمنع الروابط) استخدم innerHTML بعد linkify
  msg.innerHTML = linkify(cleaned);

  chatMessages.appendChild(container);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
