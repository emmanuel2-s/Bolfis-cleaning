const serviceInput = document.getElementById("service");


// function openModal() {
//   document.getElementById("modalForm").style.display = "flex";
// }

function closeModal() {
  document.getElementById("modalForm").style.display = "none";
}

// Optional: close modal when clicking outside of content
window.onclick = function (event) {
  const modal = document.getElementById("modalForm");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


document.querySelectorAll(".service-btn").forEach((btn) => {
  btn.parentElement
  if (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("modalForm").style.display = "flex";
    })
  }
})

function serviceForm() {
  // e.preventDefault()
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = serviceInput.value;

  if (!name || !email || !phone || !service) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Info',
      text: 'Please fill in all fields before submitting.'
    }); return;
  }

  const formData = { name, email, phone, service };
  // stores the data in localstorage //
  localStorage.setItem("formSubmission", JSON.stringify(formData));
  console.log(formData)

  // close the form //
  document.getElementById("serviceForm").reset();
  document.getElementById("modalForm").style.display = "none";

  // navigates to pricing page automatically //
  Swal.fire({
    icon: 'success',
    title: 'Submitted!',
    text: 'Redirecting to pricing...',
    timer: 5000,
    showConfirmButton: false
  }).then(() => {
    window.location.href = "../pricing.html";
  });
}

