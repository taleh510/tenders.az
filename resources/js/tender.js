document.querySelectorAll(".show-btn ").forEach(a => {
    a.addEventListener("click", () => {
        document.querySelectorAll(".content").forEach(t => {
            t.style.display = "none";
        })
        let id = a.getAttribute("data-open");
        document.getElementById(id).style.display = 'block';
    });
})

// document.querySelectorAll(".show-btn ").forEach(a => {
//     a.addEventListener("click", () => {
//         document.querySelectorAll(".content").forEach(t => {
//             t.style.display = "none";
//         })
//         let id = a.getAttribute("data-open");
//         document.getElementById(id).style.display = 'block';
//     });
// })




const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});



// index.html counter

$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({ end: 1000, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 1000, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 1000, duration: 3000 });
$('#number4').jQuerySimpleCounter({ end: 1000, duration: 3000 });
$('#number5').jQuerySimpleCounter({ end: 1000, duration: 3000 });
$('#number6').jQuerySimpleCounter({ end: 1000, duration: 3000 });


// index.html modal register disabled input //

function toggleEnable(el1) {
    document.getElementById(el1).disabled = false;
}

function toggleDisable(el1) {
    document.getElementById(el1).disabled = true;
}