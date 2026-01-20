function changeNav(tab)
{
    var navLinks = document.getElementsByTagName("nav")[0];
    for (var i = 0; i < navLinks.children.length; i++)
    {
        navLinks.children[i].classList.replace("active", "inactive");
        navLinks.children[i].children[0].children[0].style.fill = "";
    }
    document.getElementById(tab).classList.replace("inactive", "active");
}

function buildCalendar()
{
    var days = document.getElementsByClassName("days")[0];
    for (var i = 0; i < days.children.length; i++)
    {
        if(days.children[i].innerText == "15")
        {
            days.children[i].classList.add("active-day");
        }
        else
        {
            if(i == 0 || i == 1 || i > 32)
            {
                days.children[i].classList.add("inavailable-day");
            }
            else
            {
                days.children[i].classList.add("available-day");
            }
        }
    }
}

function rightNav()
{
    var navLinks = document.getElementsByClassName("top-cards")[0].children[1];
    var x = navLinks.children[0].clientWidth + parseInt(window.getComputedStyle(navLinks).gap) + (window.innerWidth <= 1000 ? 2 : 3);
    navLinks.scrollBy((-1 * x), 0);
}

function leftNav()
{
    var navLinks = document.getElementsByClassName("top-cards")[0].children[1];
    var x = navLinks.children[0].clientWidth + parseInt(window.getComputedStyle(navLinks).gap) + (window.innerWidth <= 1000 ? 2 : 3);
    navLinks.scrollBy(x, 0);
}

function rightHi()
{
    var hiCards = document.getElementsByClassName("hi-cards")[0].children[1];
    var x = hiCards.children[0].clientWidth + parseInt(window.getComputedStyle(hiCards).gap)  + (window.innerWidth <= 1000 ? 0 : 3);
    hiCards.scrollBy((-1 * x), 0);
}

function leftHi()
{
    var hiCards = document.getElementsByClassName("hi-cards")[0].children[1];
    var x = hiCards.children[0].clientWidth + parseInt(window.getComputedStyle(hiCards).gap) + (window.innerWidth <= 1000 ? 0 : 3);
    hiCards.scrollBy(x, 0);
}

function play_pauseVideo()
{
    var video = document.getElementsByTagName("video")[0];
    if(video.paused || video.ended)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}