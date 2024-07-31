
<?php
include("connection.php");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodScoop</title>
    <link rel="icon" href="imgs/bg3.jpg">
    <link rel="stylesheet" href="style.css?v= <?php echo time()?>" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
     rel="stylesheet">
</head>
<body>

  <div id="form">
        <h1>Login Form</h1>
        <form name="form" action="login.php" onsubmit="return isvalid()" method="POST">
            <label class="word" >Username: </label>
            <input type="text" id="user"name="user" placeholder="username..."><br></br>
            <label class="word" >Password: </label>
            <input type="password" id="pass"name="pass" placeholder="password..."><br></br>
            <input type="submit" id="btn" value="Login" name="submit">


        </form>

    </div>
  
    <script>
        function isvalid(){
            var user = document.form.user.value;
            var password = document.form.pass.value;
            if(user.length==""&&pass.length=""){
                alert("Username and Password is Empty.")
                return false;
            }
            else if(user.length==""){
                    alert("Username is empty!!");
                    return false
                }
            else if(pass.length==""){
                    alert("Password is empty!!");
                    return false
                }
            }

        
    </script>
     
</body>
</html>