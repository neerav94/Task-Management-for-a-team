Polymer({
  is: 'project-page',

  properties: {
    responseData: {
      type: Object
    }
  },

  responseCallback: function (data) {
    this.responseData = data.detail.response
  },

  closeButton: function () {
    window.history.back();
  },

  addMember: function (e) {
    parent = e.target
    parent.style.border = "2px solid #00bfa5"
    parent.style.color = "#00bfa5"
    this.$.memberDialog.toggle()
  },

  createMember: function () {
    var name = this.$.memberDialog.childNodes[3].value
    var flag = true
    console.log(name)
    if (!name) {
      alert("Please enter a name!")
      flag = false;
    }
    this.$.memberDialog.childNodes[3].value = ""
    if (flag) {
      var temp = {}
      var tasks = []
      temp.name = name
      temp.id = "member4"
      temp.tasks = []
      this.push("responseData", temp)
      this.$.header.style.width = this.$.main.offsetWidth + 330 + "px"
    }
    parent.style.border = "none"
    parent.style.color = "#e0e0e0"
  },

  cancelled: function () {
    parent.style.border = "none"
    parent.style.color = "#e0e0e0"
    this.$.memberDialog.childNodes[3].value = ""
  }
});