
  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function() {
    // Store the correct password
    const correctPassword = "123";

    // Show the overlay initially
    $("#overlay").removeClass("hidden");

    // Function to handle the password submission
    $("#submitButton").click(function() {
        const enteredPassword = $("#passwordInput").val();
        if (enteredPassword === correctPassword) {
            // Hide the overlay and remove blur on content
            
            $("#overlay").css("visibility", "hidden");
            $("#Blur").css("filter", "blur(0px)");
            

        } else {
            alert("Incorrect password. Please try again.");
        }
    });

    // Function to access blurred version (no password required)
    $("#accessBlurredVersion").click(function(event) {
        event.preventDefault();
        // Add blur on content
        $("#overlay").css("visibility", "hidden");
       
    });

    // Add event listener for Enter key press
    $("#passwordInput").keypress(function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            $("#submitButton").click(); // Trigger click on #submitButton
        }
    });
});