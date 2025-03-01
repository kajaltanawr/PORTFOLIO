function saveData() {
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fullname = document.getElementById("name").value;
    var msg = document.getElementById("msg");
    var type = document.getElementsByName("type");
    var usertype = "";
    
    for (var i = 0; i < 2; i++) {
      if (type[i].checked) {
        usertype = type[i].value;
        break;
      }
    }

    
    if (username == "" || email == "" || password == "" || fullname == "" || usertype == "") {
      msg.innerHTML = "Please fill in all the fields.";
      return; 
    }

    
    var listOfusers = JSON.parse(localStorage.getItem("user")) || []; 

    
    for (var i = 0; i < listOfusers.length; i++) {
      if (listOfusers[i].username == username) {
        msg.innerHTML = "Username already exists! Please choose a different one.";
        return; 
      }
    }

    
    var userObject = {
      username: username,
      email: email,
      password: password,
      fullname: fullname,
      type: usertype,
    };


    listOfusers.push(userObject);

    // Save the updated list back to localStorage

    localStorage.setItem("user", JSON.stringify(listOfusers));

    // Show a success message
    msg.innerHTML = "Registration successful!";
  }