const registeredUsers = [];

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("fade-in");
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value;
  const govIdType = document.getElementById("govIdType").value;
  const govIdNumber = document.getElementById("govIdNumber").value;
  const covidTestType = document.getElementById("covidTestType").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const user = {
    name,
    email,
    gender,
    mobile,
    govIdType,
    govIdNumber,
    covidTestType,
    date,
    time,
  };

  registeredUsers.push(user);
  displayRegisteredUsers();
  document.getElementById("registrationForm").reset();
  showSection("viewRegistrations");
}

function displayRegisteredUsers() {
  const registrationBody = document.getElementById("registrationBody");
  registrationBody.innerHTML = "";

  registeredUsers.forEach((user) => {
    const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td>${user.mobile}</td>
                <td>${user.govIdType}</td>
                <td>${user.govIdNumber}</td>
                <td>${user.covidTestType}</td>
                <td>${user.date}</td>
                <td>${user.time}</td>
            </tr>
        `;
    registrationBody.innerHTML += row;
  });
}

// Show the home section by default
showSection("home");
