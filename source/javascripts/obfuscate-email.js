(function() {

  $(document).ready(function() {

    // Insert the email address using javascript to [hopefully]
    // thwart spammers.
    $("#obfuscate-email").text(['dave', '@', 'factorialsystems.ca'].join(''));

  });

})();
