function redirectByStudentSelection() {
    // this function redirects based on dropdown list selection
    switch (document.getElementById('studentSelection').value) {
        case "simOnlineStudent":
            window.location = "https://sim.test.instructure.com/login/saml/106";
            break;
        case "simStaffStudent":
            window.location = "https://sim.test.instructure.com/login/saml/107";
            break;
        case "simGEStudent":
            window.location = "https://sim.test.instructure.com/login/saml/108";
            break;
    } // end of switch
}

function redirectByInstructorSelection() {
    // this function redirects based on dropdown list selection
    switch (document.getElementById('instructorSelection').value) {
        case "trainer":
            window.location = "https://sim.test.instructure.com/login/canvas";
            break;
        case "associate":
            window.location = "https://sim.test.instructure.com/login/saml/108";
            break;
        case "faculty":
            window.location = "https://sim.test.instructure.com/login/saml/107";
            break;
    } // end of switch
}