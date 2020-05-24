function sendMail(contactForm) {
    emailjs.send("gmail", "travelverse", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "booking_ref": contactForm.bookingref.value,
        "question": contactForm.question.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}