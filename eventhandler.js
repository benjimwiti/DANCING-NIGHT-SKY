//TO DELETE
$(document).ready(function() {
    // Attach a click event handler to the parent element
    $('.parent').on('click', 'button.child', { foo: 'bar' }, function(event, data) {
      // Log the event data to the console
      console.log('Event data:', data);
  
      // Perform some action based on the event data
      if (data.foo === 'bar') {
        alert('You clicked a button!');
      }
    });
  });
  console.log("end")
 