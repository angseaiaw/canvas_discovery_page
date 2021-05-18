function redirectBySelection() {
    // this function redirects based on dropdown list selection
    switch (document.getElementById('studentSelection').value) {
        case "simStudent":
            window.location = "https://sim.test.instructure.com/login/saml/107";
            break;
        case "publicStudent":
            window.location = "https://sim.test.instructure.com/login/saml/106";
            break;
    } // end of switch
}