
// SIDE TOGGLE

let togglelist = document.querySelector(".SideNavigationToggleList ")
togglelist.style.height = "0px"
function Meal() {
  if (togglelist.style.height == "0px") {
    togglelist.style.height = "225px"
  } else {
    togglelist.style.height = "0px"
  }
}

// FOR SIDE NAVIGATION 

let sidePanel = document.querySelector(".SideNavigationContainer")
sidePanel.style.display = "none"
function clickyou() {
  if (sidePanel.style.display == "block") {
    sidePanel.style.display = "none"
  } else {
    sidePanel.style.display = "block"
  }
}

// FOR FORM CHECKBOX

const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // Uncheck all checkboxes except the one clicked
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});