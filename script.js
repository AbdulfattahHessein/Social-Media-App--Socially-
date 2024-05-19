const menuItems = document.querySelectorAll(".menu-item");
const notificationsPopup = document.querySelector(".notifications-popup");

// ========== messages =================
const messagesNotification = document.querySelector("#messages-notification");
const messagesContainer = document.querySelector(".messages");

const messages = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// ============== theme ===============
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
const backgrounds = document.querySelectorAll(".background");

// ================ Search messages =================
messageSearch.addEventListener("input", () => {
  const val = messageSearch.value;
  messages.forEach((message) => {
    let name = message.querySelector("h5").innerHTML.toLocaleLowerCase();
    let messageText = message.querySelector("p").innerHTML.toLocaleLowerCase();
    if (name.includes(val) || messageText.includes(val)) {
      message.style.display = "flex";
    } else {
      message.style.display = "none";
    }
  });
});

// ================ Notifications =================
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    if (item.id != "notifications") {
      notificationsPopup.style.visibility = "hidden";
      notificationsPopup.style.opacity = "0";
    } else {
      notificationsPopup.style.visibility = "visible";
      notificationsPopup.style.opacity = "1";

      document.querySelector(
        `#notifications .notifications-count`
      ).style.display = "none";
    }
  });
});

// ================= Messages =======================
messagesNotification.addEventListener("click", () => {
  messagesContainer.style.boxShadow = "0 0 1rem var(--color-primary)";
  document.querySelector(
    `#messages-notification .notifications-count`
  ).style.display = "none";
  setTimeout(() => {
    messagesContainer.style.boxShadow = "none";
  }, 2000);
});

// =========== Theme customization =================

// Open modal
theme.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

// Close modal
themeModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
});

// Font size
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      //   root.style.setProperty("--sticky-top-left", "5.4rem");
      //   root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      //   root.style.setProperty("--sticky-top-left", "5.4rem");
      //   root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      //   root.style.setProperty("--sticky-top-left", "-2rem");
      //   root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      //   root.style.setProperty("--sticky-top-left", "-5rem");
      //   root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      //   root.style.setProperty("--sticky-top-left", "-12rem");
      //   root.style.setProperty("--sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});
removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// Color

function changeActiveColorClass() {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
}

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    changeActiveColorClass();
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background color
function changeBGColor() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBGColor();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBGColor();
});

// // ================== Functions ===================

// function openTab(tabName) {
//   for (let tab of tabs) {
//     tab.classList.remove("active-tab");
//   }
//   for (let tabContent of tabContents) {
//     tabContent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-tab");
//   document.getElementById(tabName).classList.add("active-tab");
// }

// let themeSettings = document.querySelector(".theme-settings");
// let toggleBtn = document.querySelector(".toggle-settings");

// toggleBtn.addEventListener("click", () => {
//   themeSettings.classList.toggle("open");
// });
// // Reset theme
// resetTheme.addEventListener("click", () => {
//   let conf = confirm("Are you sure you want to reset theme?");
//   if (conf) {
//     localStorage.setItem("primary-color", "252");
//     localStorage.setItem("secondary-color", "252");
//     window.location.reload();
//   }
// });
