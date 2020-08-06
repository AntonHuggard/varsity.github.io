const current_meeting_location = "Univeristy of Auckland's city campus, in the Humanities building (Arts 1). <br> Room 206-215.";
const current_cost_for_new_members = 100;
const current_ongoing_cost = 80;

function include_location() {
    document.getElementById("about_meeting_location").innerHTML = current_meeting_location;
}

function get_costs() {
    document.getElementById("cost_for_new_members").innerHTML = current_cost_for_new_members.toString();
    document.getElementById("ongoing_cost").innerHTML = current_ongoing_cost.toString();
}

function change_dir(path) {
    const header =
        `
        <div id = "mobile_nav">
            <img onclick='show_menu()' class='menu_btn' src ='${path}resources/hamburger.png'>
            <h1>V A R S I T Y</h1>
        </div>
        <div id = "dropdown_menu" class = "dropdown_content">
            <a href='${path}index.html'>HOME</a>
            <a href='${path}about.html'>ABOUT</a>
            <a href='${path}contact.html'>CONTACT</a>
            <a href='${path}membership.html'>MEMBERSHIP</a>
            <a href='${path}rsrcs.html'>RESOURCES</a>
            <a href='${path}voting.html'>VOTING</a>
            <a href='${path}other.html'>OTHER</a>
        </div>
        <div class = "top">
            <img src = "${path}resources/tm-logo.jpg">
            <h1>VARSITY TOASTMASTERS</h1>
            <h2>Est. 1999</h2>
        </div>
        <div id = "desktop_nav">
            <a href='${path}index.html'>Home</a>
            <a href='${path}about.html'>About</a>
            <a href='${path}contact.html'>Contact</a>
            <a href='${path}membership.html'>Membership</a>
            <a href='${path}rsrcs.html' id = 'rescources_thing'>Resources</a>
            <a href='${path}other.html'>Other</a>
        </div>
        `;
    document.getElementsByTagName('header')[0].innerHTML = header;

    let curr_year = new Date().getFullYear();
    const footer =
        `
        <div id = "pick_your_pipe">
            <!-- Icons from Freepik Content (https://www.flaticon.com/) -->
            <img src = "${path}resources/fb-icon-00114a.svg" onclick="window.location.href= 'https\:\/\/www.facebook.com/varsitytoastmastersuoa/' ">
            <img src = "${path}resources/ig-icon-dark.svg" onclick="window.location.href= 'https\:\/\/www.instagram.com/varsitytoastmastersnz/' ">
            <img src = "${path}resources/yt-icon-light.svg" onclick="window.location.href=  'https\:\/\/www.youtube.com/watch?v=dQw4w9WgXcQ' ">
        </div>
        <p>&copy Varsity Toastmasters ${curr_year}</p>
        `;
    document.getElementsByTagName('footer')[0].innerHTML = footer; // putting the content inside the footer tag


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
    <a href='membership.html'>MEMBERSHIP</a>
    <a href='rsrcs.html'>RESOURCES</a>
    <a href='voting.html'>VOTING</a>
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
<hr>
<h2>ONLINE VOTING</h2>
<p>
    At the end of each meeting, we decide who is voted off the island! <br><br>
    This week's voting form is <a href='voting.html'>here!</a>
</p>
`;
document.getElementById('side').innerHTML = sider;

let curr_year = new Date().getFullYear();
    const footer =
        `
        <div id = "pick_your_pipe">
            <!-- Icons from Freepik Content (https://www.flaticon.com/) -->
            <img src = "resources/fb-icon-00114a.svg" onclick="window.location.href= 'https\:\/\/www.facebook.com/varsitytoastmastersuoa/' ">
            <img src = "resources/ig-icon-dark.svg" onclick="window.location.href= 'https\:\/\/www.instagram.com/varsitytoastmastersnz/' ">
            <img src = "resources/yt-icon-light.svg" onclick="window.location.href=  'https\:\/\/www.youtube.com/watch?v=dQw4w9WgXcQ' ">
        </div>
        <p>&copy Varsity Toastmasters ${curr_year}</p>
        `;
    document.getElementsByTagName('footer')[0].innerHTML = footer; // putting the content inside the footer tag