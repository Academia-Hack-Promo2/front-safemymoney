$(function () {
  var host = "http://localhost:3000";
  
  ////////////////////////////////////
  // Everything to handle Transaction Type
  
  ////////////////////////////////////
  // Everything to handle newCategory
  var newCategory = $('#newCategory');
  var categories = $('#categories');
  
  (function () {
    $.ajax({
      type: 'get',
      url: host + '/categories',
      success: function (data) {
        for (var i = 0; i < data.length; i++ ) {
          $(categories).after(
                '<option value="' + data[i].id + '">'
                + data[i].category_title + 
                '</option>');
        } // Close For
      }, // Close Success(ajax)
      error: function(data) {
          console.log(data);
      } // Close Error
    }); // Close AJAX
  }()); // Close Anon-Function
  
  newCategory.hide();
  categories.change(function() {
      if ($(this).val() === 'Nueva') {
          newCategory.show();
      } // Close If category is new
      else {
          newCategory.hide();
      } // Close Else
  }); // Close funcion
  
  newCategory.keyup(function(event) {
    if (event.which == 13) {
      console.log($('this').val());
      
      $('#error_category').html('');
      if (newCategory.val().length < 5) {
        $('#error_category').html('La categoria debe tener más de 5 caracteres');
        return;
      } // Close If length < 5
      
      else {
        var category = {"category_title": newCategory.val()};
        $.ajax({
          type: 'post',
          url: host + '/categories',
          data: category,

          success: function(data) {
            console.log(data);
            $('#categories').prepend('<option value="' + data.id + '" selected>' + data.category_title + '</option>');
            newCategory.val('');
            newCategory.hide();
          }, // Close Success(ajax)

          error: function(data) {
            console.log(data);
          } // Close Error (ajax)

        }); // Close AJAX
      } // Close Else
      
    } // Close If press enter key (13)
  }); // Close keyup

  ////////////////////////////////////
  // Everything to handle TimePicker
  $('#datetimepicker1').datetimepicker({
          format:'YYYY-MM-DD'
    }); // Cierra DateTimePicker
  
  ////////////////////////////////////
  // Everything to handle amount
  
  /////////////////////////////////////
  // Everything to handle Description
  
  /////////////////////////////////////
  // Everything to handle Save Transaction
  
  $("#saveTransaction").click(function() {
    var transaction = {
      "date": $('#date').val(), // Date
      "t_type": $('#t_type').val(), // String
      "category_id": $('#category').val(),
      "amount": $('#amount').val(), // Float
      "description": $('#description').val() // String
    }; // Close Transaction VAR
    $.ajax({
      type: 'post',
      url: host + '/transactions',
      data: transaction,
      success: function(data) {
        console.log(data);
        $("#t_type").val("default"),
        $("#category_id").val("default"),
        $("#finishDate").val(""),
        $("#amount").val(""),
        $("#description").val(""),
        $("#myModal").modal("hide")
      }, // Close Success
      error: function(data) {
        console.log(data);
      } // Close Error
    }); // Close AJAX

  }); // Close Save
  
  
}); // Close Script