const showSquare = () => {
  // target the div which will contain the shapes and empty it
  $("#left-div").empty();

  // create a variable which holds our shape div
  const square = `<div id="square" class="square"></div>`;

  // append the square to our div
  $("#left-div").append(square);
};

// target the button and add a click event
$("#square-btn").on("click", showSquare);
