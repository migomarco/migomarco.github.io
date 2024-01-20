
// the code to jump to window viewer 

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


// the code to readjust viewer then open url 

    $(document).ready(function() {
        // Select all the links with class names 
        const links = $(".Diriyah, .Modelo, .Specsavers, .Volvo, .AntiAsian, .rest, .emirates, .johnjohnlab, .frank");

        // Add a click event listener to each link
        links.click(function(event) {
            // Prevent the default link behavior (e.g., navigating to the href)
            event.preventDefault();

            // Get the current href attribute
            const currentHref = $(this).attr("href");

            // Delay before moving to the existing href to allow it to execute (100 milliseconds)
            setTimeout(() => {
                // Run the existing href by navigating to it
                window.location.replace(currentHref);
            }, 100);

            // Delay before moving to the new URL (800 milliseconds)
            setTimeout(() => {
                // Get the current class name
                const currentClassName = $(this).attr("class");

                // Construct the new URL based on the class name
                const newURL = currentClassName + ".html";

                // Navigate to the new URL using replace to avoid adding to the history
                window.location.replace(newURL);
            }, 800);
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