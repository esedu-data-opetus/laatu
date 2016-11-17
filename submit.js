
// JavaScript Document
function submitdata() {
  document.getElementById("vastauksetDiv").className = "visible";
      $(function() {
          $.ajax({
              type: 'POST',
              url: "submit.php",
              data: $("FORM").serialize(),
              success: function() {
                return "success";
              }
          });
      })};
