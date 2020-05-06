const current_meeting_location = "Online, <a href='https://auckland.zoom.us/j/893139797'>using Zoom</a>";

function include_location() {
    document.getElementById("about_meeting_location").innerHTML = current_meeting_location;
}


const header =
`
<div id = "mobile_nav">
    <img onclick='show_menu()' class='menu_btn' src ='resources/hamburger.png'>
    <h1>V A R S I T Y</h1>
</div>
<div id = "dropdown_menu" class = "dropdown_content">
    <a href='index.html'>HOME</a>
    <a href='about.html'>ABOUT</a>
    <a href='contact.html'>CONTACT</a>
    <a href='meetings.html'>MEETINGS</a>
    <a href='membership.html'>MEMBERSHIP</a>
    <a href='rsrcs.html'>RESOURCES</a>
    <a href='other.html'>OTHER</a>
</div>
<div class = "top">
    <img src = "resources/tm-logo.jpg">
    <h1>VARSITY TOASTMASTERS</h1>
    <h2>Est. 1999</h2>
</div>
<div id = "desktop_nav">
    <a href='index.html'>Home</a>
    <a href='about.html'>About</a>
    <a href='contact.html'>Contact</a>
    <a href='meetings.html'>Meetings</a>
    <a href='membership.html'>Membership</a>
    <a href='rsrcs.html' id = 'rescources_thing'>Resources</a>
    <a href='other.html'>Other</a>
</div>
`;
document.getElementsByTagName('header')[0].innerHTML = header;

const sider =
`
<h2>University of Auckland Toastmasters Club</h2>
<hr>
<h2>WHERE?</h2>
<p>${current_meeting_location} <br> Wednesdays, 6 - 8pm </p>
<hr>
<h2>Disclaimer</h2>
<p>
    The information on this website is for the sole use of Toastmasters' members. It is not to be used for solicitation and distribution of non-Toastmasters material or information. All rights reserved. Toastmasters International, the Toastmasters International logo and all other Toastmasters International trademarks and copyrights are the sole property of Toastmasters International and may be used only by permission.
</p>
`;
document.getElementById('side').innerHTML = sider;

let curr_year = new Date().getFullYear();
const footer =
`
<div id = "pick_your_pipe">
    <!-- Icons from Freepik Content (https://www.flaticon.com/) -->
    <img src = "resources/fb-icon.svg" onclick="window.location.href= 'https\:\/\/www.facebook.com/varsitytoastmastersuoa/' ">
    <img src = "resources/in-icon.svg" onclick="window.location.href= 'https\:\/\/www.instagram.com/varsitytoastmastersnz/' ">
    <img src = "resources/yt-icon.svg" onclick="window.location.href=  'https\:\/\/www.youtube.com/watch?v=dQw4w9WgXcQ' ">
</div>
<p>&copy Varsity Toastmasters ${curr_year}</p>
`;
document.getElementsByTagName('footer')[0].innerHTML = footer;