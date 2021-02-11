function prompt_info(msg) {
    message_box = document.getElementById("message-box")
    message_box.innerHTML = msg
    alert_box = document.getElementById("alert-box")
    alert_box.style.display = "block"
}
function close_box() {
    document.getElementById("alert-box").style.display = "none"
}

function setPanel() {
    var Editbutton = $("#editbutton")
    var Stylebutton = $("#stylebutton")
    var Savebutton = $("#savebutton")
    var Editpanel = $("#editpanel")
    var Stylepanel = $("#stylepanel")
    var Savepanel = $("#savepanel")
    Stylepanel.hide()
    Savepanel.hide()
    Editpanel.show()
    Editbutton.addClass("active")

    Editbutton.click(function () {
        Editbutton.addClass("active")
        Stylebutton.removeClass("active")
        Savebutton.removeClass("active")
        Editpanel.show()
        Stylepanel.hide()
        Savepanel.hide()
    })
    Stylebutton.click( function () {
        Editbutton.removeClass("active")
        Stylebutton.addClass("active")
        Savebutton.removeClass("active")
        Editpanel.hide()
        Stylepanel.show()
        Savepanel.hide()
    })
    Savebutton.click(function () {
        Editbutton.removeClass("active")
        Stylebutton.removeClass("active")
        Savebutton.addClass("active")
        Editpanel.hide()
        Stylepanel.hide()
        Savepanel.show()
    })
}