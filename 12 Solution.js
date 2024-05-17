<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Token Manager</title>
</head>

<body>
    <form id="tokenForm">
        <label for="authToken">Enter Authentication Token:</label>
        <input type="text" id="authToken" name="authToken" required>
        <button type="submit">submit</button>
    </form>

    <script>
        document.getElementById('tokenForm').addEventListener('submit', function (event) {
            event.preventDefault();// Prevent the form from submitting the traditional way

            const tokenInput = document.getElementById('authToken').value;
            setAuthToken(tokenInput);
        })

        function setAuthToken(token) {
            const expirationTime = new Date().getTime() + 1000; // 10 seconds from now
            localStorage.setItem('authToken', token);
            localStorage.setItem('authTokenExpiration', expirationTime.toString());
        }
        function getAuthToken(token) {
            const storedToken = localStorage.getItem('authToken');
            const expirationTime = parseInt(localStorage.getItem('authTokenExpiration'), 10)
            const currentTime = new Date().getTime();

            if (!token || !expirationTime || currentTime > expirationTime) {
                localStorage.removeItem('authToken');
                localStorage.removeItem('authToenExpiration');
                return null; // Token is expired or not set
            }
            return storedToken; //Token is valid
        }
    </script>

</body>

</html>
