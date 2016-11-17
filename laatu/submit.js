
// JavaScript Document
function submitdata() {
      $(function() {
          $.ajax({
              type: 'POST',
              url: "submit.php",
              data: $("FORM").serialize(),
              success: function() {
                  alert("It worked!");
              }
          });
      })};
