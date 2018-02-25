Polymer({
  is: 'main-page',

  properties: {
    responseData: {
      type: Object
    }
  },

  //called on response of ajax call
  responseCallback: function (data) {
    this.responseData = data.detail.response
    console.log(this.responseData)
  },

  createTask: function (e) {
    if (e.target.getAttribute("class") == "innerItem") {
      parent = e.target.parentNode
      parent.style.border = "2px solid #00bfa5"
      parent.style.color = "#00bfa5"
    } else {
      parent = e.target
      parent.style.border = "2px solid #00bfa5"
      parent.style.color = "#00bfa5"
    }
    this.$.dropdownDialog.toggle();
  },

  buttonClicked: function () {
    parent.style.color = "#bdbdbd"
    parent.style.border = "none"
  },

  createProject: function () {
    var title = this.$.dropdownDialog.childNodes[3].value
    var description = this.$.dropdownDialog.childNodes[5].value
    var members = this.$.dropdownDialog.childNodes[7].value
    this.$.dropdownDialog.childNodes[3].value = ""
    this.$.dropdownDialog.childNodes[5].value = ""
    var flag = true
    var temp = {}
    if (!title) {
      alert("Please enter a title")
      flag = false
    }
    if (!description) {
      alert("Please enter some description")
      flag = false
    }
    if (!members) {
      alert("Please select some members")
      flag = false
    }

    if (flag) {
      temp.title = title
      temp.text = description
      temp.members = members
      temp.flag = 1
      console.log(this.responseData)
      this.push("responseData", temp)
    }
    parent.style.color = "#bdbdbd"
    parent.style.border = "none"
  }
});