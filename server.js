<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Form</title>
  <link rel="stylesheet" href="Styles/style.css">
</head>
<body>

  <form id="infoForm">
    <label>First name:</label>
    <input type="text" id="fname" required>

    <label>Last name:</label>
    <input type="text" id="lname" required>

    <label>Date:</label>
    <input type="date" id="dob" required>

    <label>Email:</label>
    <input type="email" id="email" required>

    <label>Password:</label>
    <input type="password" id="password" required>

    <label>On / Off</label>
    <input type="checkbox" id="status">

    <input type="submit" value="Submit">
  </form>

  <hr>

  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody id="table1"></tbody>
  </table>

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <!-- Your Script -->
  <script src="Script/script.js"></script>

</body>
</html>

