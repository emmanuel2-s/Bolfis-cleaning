const serviceInput = document.getElementById("service");


// function openModal() {
//   document.getElementById("modalForm").style.display = "flex";
// }

function closeModal() {
  document.getElementById("first-Modal-Dis").style.display = "none";
}

function closeDiscountModal(event) {
  // document.getElementById("first-Modal-Dis").style.display = "none";

  const modal = document.getElementById("first-Modal-Dis");
  modal.style.display = "none"; // Close the modal

  // Check if the event object exists (i.e., if a button triggered the close)
  if (event) {
    // Prevent the default jump action immediately after closing the modal,
    // so we can apply the shake before the scroll/jump happens.
    event.preventDefault();

    const target = event.currentTarget.getAttribute('href');

    // 1. Check if the target is the contact form section
    if (target === "#contact-sec-form") {
      const formSection = document.querySelector(target);

      if (formSection) {
        // 2. Add the shake class
        formSection.classList.add('shake-form');

        // 3. Scroll to the form section
        // Smoothly scroll the page to the section
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 4. Remove the shake class after the animation is done
        setTimeout(() => {
          formSection.classList.remove('shake-form');
        }, 1500); // 1000ms is a safe time to ensure the 0.5s animation finishes
      }
    }
  }
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
  const post_code = document.getElementById("post-code").value.trim();
  const txt_message = document.getElementById("txt-message").value.trim();
  const service = serviceInput.value;

  if (!name || !email || !phone || !service || !post_code) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Info',
      text: 'Please fill in all fields before submitting.'
    }); return;
  }

  const formData = { name, email, phone, service, post_code, txt_message };
  // stores the data in localstorage //
  localStorage.setItem("formSubmission", JSON.stringify(formData));
  console.log(formData)
  // create a payload //
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    post_code: formData.post_code,
    txt_message: formData.txt_message
  };

  emailjs.send('service_awwa20e', 'template_flau55d', payload)
    .then(() => {
      // navigates to pricing page automatically //
      Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Redirecting to pricing...',
        timer: 5000,
        showConfirmButton: false
      }).then(() => {
        // window.location.href = "../pricing.html";
        console.log("p", payload)
      });

      // close the form //
      document.getElementById("serviceForm").reset();
      document.getElementById("modalForm").style.display = "none";



    })
    .catch((error) => {
      console.error('Error sending message:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit form',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      // document.getElementById("loader").style.display = "none"
    });

  // close the form //
  document.getElementById("serviceForm").reset();
  document.getElementById("modalForm").style.display = "none";
}


function contact_Sec_Form(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const post_code = document.getElementById("post-code").value.trim();
  const txt_message = document.getElementById("txt-message").value.trim();
  const service = serviceInput.value;

  if (!name || !email || !phone || !service || !post_code) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Info',
      text: 'Please fill in all fields before submitting.'
    }); return;
  }

  const formData = { name, email, phone, service, post_code, txt_message };
  // stores the data in localstorage //
  localStorage.setItem("formSubmission", JSON.stringify(formData));
  console.log(formData)
  // create a payload //
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    post_code: formData.post_code,
    txt_message: formData.txt_message
  };

  emailjs.send('service_awwa20e', 'template_flau55d', payload)
    .then(() => {
      // navigates to pricing page automatically //
      Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Successfully',
        timer: 1000,
        showConfirmButton: false
      }).then(() => {
        // window.location.href = "../pricing.html";
        document.getElementById("preloader").style.display = "block"

      });

      // close the form //
      document.getElementById("contact-sec-form").reset();



    })
    .catch((error) => {
      console.error('Error sending message:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit form',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      // document.getElementById("loader").style.display = "none"
    });

  // close the form //
  document.getElementById("contact-sec-form").reset();

}