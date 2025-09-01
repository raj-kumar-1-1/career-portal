async function verify(){
    let inputs=document.querySelectorAll('input');
    let username=String(inputs[0].value);
    let password=String(inputs[1].value);
    console.log(username+password);

  try {
    const response = await fetch("https://6879e7ebabb83744b7ea7104.mockapi.io/users");
    if (!response.ok) throw new Error('Network response was not ok');

    const users = await response.json();

    const user = users.find(u => u.username === username);

    if (!user) {
      console.log("Username not found");
      return;
    }

    if (user.password !== password) {
      console.log("Password not matching");
      return;
    }
    window.location.href = "../pages/user-landing.html";

  } catch (error) {
    console.error("Fetch error:", error);
  }

}
verify();