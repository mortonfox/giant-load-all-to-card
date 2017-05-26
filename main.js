function runSelect(event) {
  event.preventDefault();

  // Click on every "load to card" button.
  var load2crd = document.getElementsByClassName('load-to-card');
  for (var btn of load2crd) {
    btn.click();
  }
}

function insertButton(btn) {
  function waitForSite() {
    var app_container = document.getElementById('app-container');
    if (app_container != null) {
      clearInterval(waitForSiteTimer);
      app_container.insertBefore(btn, app_container.firstChild);
    }
  }

  // Wait for site to finish loading the app container before inserting button.
  var waitForSiteTimer = setInterval(waitForSite, 100);
}

function init() {
  // Make a new button for our action.
  var newbutton = document.createElement('button');
  newbutton.name = 'load_all_to_card';
  newbutton.id = 'load_all_to_card';
  newbutton.style.cssText = 'background-color: #E82A24; color: #fff; font-weight: 700; border: none; padding: 6px 10px; cursor: pointer;';
  newbutton.appendChild(document.createTextNode('Load All To Card'));
  newbutton.addEventListener('click', runSelect);

  insertButton(newbutton);
}

init();

// -- The End --
