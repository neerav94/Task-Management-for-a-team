Polymer({
  is: 'assign-task',

  properties: {
    task: {
      type: Object,
      observer: "_observerTask"
    }
  },

  _observerTask: function () {
    console.log(this.task)
  },

  attached: function () {
    var dropdown = this.$.dropdown
    var status = this.task.status
    var length = dropdown.options.length
    var option
    var line = dropdown.parentNode.parentNode.parentNode.firstChild.nextSibling
    for (var i = 0; i < length; i++) {
      option = dropdown.options[i];
      if (option.value == status) {
        option.setAttribute('selected', true);
        break
      }
    }
    if (dropdown.options[dropdown.selectedIndex].value == "Done") {
      dropdown.style.backgroundColor = "#00bfa5"
      line.style.backgroundColor = "#00bfa5"
    }
    if (dropdown.options[dropdown.selectedIndex].value == "On Hold") {
      dropdown.style.backgroundColor = "#ffa000"
      line.style.backgroundColor = "#ffa000"
    }
    if (dropdown.options[dropdown.selectedIndex].value == "In Process") {
      dropdown.style.backgroundColor = "#01579b"
      line.style.backgroundColor = "#01579b"
    }
    if (dropdown.options[dropdown.selectedIndex].value == "Sent") {
      dropdown.style.backgroundColor = "#f48fb1"
      line.style.backgroundColor = "#f48fb1"
    }
    if (dropdown.options[dropdown.selectedIndex].value == "Schedule") {
      dropdown.style.backgroundColor = "#1565c0 "
      line.style.backgroundColor = "#1565c0"
    }
  },

  changeFunc: function (e) {
    var selectBox = e.target
    var line = selectBox.parentNode.parentNode.parentNode.firstChild.nextSibling
    if (selectBox.options[selectBox.selectedIndex].value == "Done") {
      selectBox.style.backgroundColor = "#00bfa5"
      line.style.backgroundColor = "#00bfa5"
    }
    if (selectBox.options[selectBox.selectedIndex].value == "On Hold") {
      selectBox.style.backgroundColor = "#ffa000"
      line.style.backgroundColor = "#ffa000"
    }
    if (selectBox.options[selectBox.selectedIndex].value == "In Process") {
      selectBox.style.backgroundColor = "#01579b"
      line.style.backgroundColor = "#01579b"
    }
    if (selectBox.options[selectBox.selectedIndex].value == "Sent") {
      selectBox.style.backgroundColor = "#f48fb1"
      line.style.backgroundColor = "#f48fb1"
    }
    if (selectBox.options[selectBox.selectedIndex].value == "Schedule") {
      selectBox.style.backgroundColor = "#1565c0"
      line.style.backgroundColor = "#1565c0"
    }
  }
});