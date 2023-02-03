(function() {
    const input = document.getElementById("inputID");
    const lastMessage = document.getElementById("messageID");
    const btn = document.getElementById("btnID");

    btn.addEventListener("click", function() {
        lastMessage.textContent = input.value;
        input.value = "";
    });

})();