console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  $.ajax({
    type: 'GET',
    url: '/koalas',
  }).then(function (reponse) {
    console.log('server response:', response);
  });
  //append to DOM
  // render(response);
  // end getKoalas

  function saveKoala(newKoala) {
    console.log('in saveKoala', newKoala);
    $.ajax({
      type: 'POST',
      url: '/koalas',
    }).then(function (response) {
      console.log('server response:', response);
    });
    render();
  }
}
