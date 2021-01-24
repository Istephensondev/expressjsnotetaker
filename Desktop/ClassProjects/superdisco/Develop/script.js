var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');


document.getElementById("currentDay").innerHTML = currentDay;


var nine = moment().hour(9)


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

var description = $(this).siblings(".description").val()
console.log(description)