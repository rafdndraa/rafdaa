console.log("TEST: welcome.js script has loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("TEST: DOMContentLoaded event fired!");

  const user = localStorage.getItem("username");
  console.log("TEST: Value found in LocalStorage is:", user);

  const authArea = document.getElementById("authArea");
  console.log("TEST: Did we find the authArea HTML element?:", authArea);

  function goLogin() {
    window.location.href = "login/index.html";
  }

  function logout() {
    localStorage.removeItem("username");
    location.reload();
  }

  if (user && authArea) {
    console.log("TEST: Success! Changing HTML contents now...");
    authArea.innerHTML = `
            <p id="userInfo" style="display:inline; margin-right: 10px;">Halo, ${user}</p>
            <button onclick="logout()">Logout</button>
        `;
  } else {
    console.log(
      "TEST: Condition failed. Either 'user' is missing or 'authArea' element is missing.",
    );
  }

  window.goLogin = goLogin;
  window.logout = logout;
});
