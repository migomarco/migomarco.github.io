$(document).ready(function () {
  // Smooth scroll for same-page links
  $("a[href^='#']").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // Smooth scroll to the target section
      $('html, body').animate(
        { scrollTop: $(hash).offset().top },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Smooth scroll and hide elements for links with the single class 'smooth-scroll'
  $(".smooth-scroll").on('click', function (event) {
    event.preventDefault();

    // Get the current href attribute (URL)
    const currentHref = $(this).attr("href");

    // Find the closest parent <div> (e.g., box11, box2, etc.)
    const parentDiv = $(this).closest('div[id^="box"]');
    const scrollToPosition = parentDiv.offset().top;

    // Add a class to trigger hiding of elements
    parentDiv.addClass('hide-elements');

    // Smooth scroll to the parent div before navigating
    $('html, body').animate(
      { scrollTop: scrollToPosition }, // Scroll to the position of the parent div
      800, // Duration of animation
      function () {
        // Navigate to the href
        window.location.href = currentHref;
      }
    );
  });
});


// Password code 

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