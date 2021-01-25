var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');


document.getElementById("currentDay").innerHTML = currentDay;


var nine = moment().hour(9)

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
})
//load any saved data from LocalStorage - do this for each hour created.
$("#txt9 .description").val(localStorage.getItem("txt9"));
$("#txt10 .description").val(localStorage.getItem("txt10"));
$("#txt11 .description").val(localStorage.getItem("txt11"));
$("#txt12 .description").val(localStorage.getItem("txt12"));
$("#txt13 .description").val(localStorage.getItem("txt13"));
$("#txt14 .description").val(localStorage.getItem("txt14"));
$("#txt15 .description").val(localStorage.getItem("txt15"));
$("#txt16 .description").val(localStorage.getItem("txt16"));
$("#txt17 .description").val(localStorage.getItem("txt17"));






function colorUpdater() {
    var currentTime = moment().hours()
    $('.time-block').each(function () {
        var tabTime = parseInt($(this).attr("hour"))
        if (tabTime < currentTime) {
            $(this).addClass("past")
        }
        else if (tabTime === currentTime) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
colorUpdater()
