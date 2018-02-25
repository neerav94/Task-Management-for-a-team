var dragElement;
Polymer({
  is: 'create-project',

  properties: {
    data: {
      type: Object
    },
    id: {
      type: String
    }
  },

  dragStart: function (event) {
    dragElement = event.target
  },

  allowDrop: function (event) {
    event.preventDefault();
  },

  drop: function (event) {
    event.preventDefault();
    var dropElement = event.target
    if (dropElement.id == "dropTarget") {
      dropElement.insertBefore(dragElement, dropElement.lastChild.previousSibling);
    } else {
      var parentElement = dropElement.parentNode
      if (parentElement.id == "dropTarget") {
        parentElement.insertBefore(dragElement, parentElement.lastChild.previousSibling);
      } else {
        parentElement = parentElement.parentNode
        parentElement.insertBefore(dragElement, parentElement.lastChild.previousSibling);
      }
    }
  },

  createTask: function (e) {
    if (e.target.getAttribute("class") == "innerItem") {
      parent = e.target.parentNode
      parent.style.border = "2px solid #00bfa5"
      parent.style.color = "#00bfa5"
      this.id = parent.getAttribute("id")
    } else {
      parent = e.target
      parent.style.border = "2px solid #00bfa5"
      parent.style.color = "#00bfa5"
      this.id = parent.getAttribute("id")
    }
    this.$.dropdownDialog.toggle();
  },

  render: function () {
    var title = this.$.dropdownDialog.childNodes[3].value
    var description = this.$.dropdownDialog.childNodes[5].value
    var status = this.$.dropdownDialog.childNodes[7].value
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
    if (!status) {
      alert("Please select some status")
      flag = false
    }

    if (flag) {
      temp.title = title
      temp.description = description
      temp.status = status
      if (status == "Done") {
        var index = 0
      } else if (status == "On Hold") {
        var index = 1
      } else if (status == "In Process") {
        var index = 2
      } else if (status == "Sent") {
        var index = 3
      } else if (status == "Schedule") {
        var index = 4
      }
      temp.index = index
      console.log(this.data)
        // var tasksArray = this.data
        // console.log(tasksArray.tasks)
      this.push("data.tasks", temp)

      // this.data = tasksArray
      // the data is added to the local array but since the data is not coming from server
      // only the element is attached to the DOM but no data is filled in the element.
      // Hence it shows only element with default status and no title and description. 
      this.$.temp.render()
      parent.style.border = "none"
      parent.style.color = "#e0e0e0"
    } else {
      parent.style.border = "none"
      parent.style.color = "#e0e0e0"
      this.$.dropdownDialog.toggle();
    }
  },

  cancelled: function () {
    parent.style.border = "none"
    parent.style.color = "#e0e0e0"
    this.$.memberDialog.childNodes[3].value = ""
    this.$.memberDialog.childNodes[5].value = ""
  }
});