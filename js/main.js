(function ($) {
    "use strict";

    function openModal() {
        document.getElementById("first-Modal-Dis").style.display = "flex";
    }


    document.addEventListener("DOMContentLoaded", openModal)
    //Discount Modal//
    function closeModal() {
        document.getElementById("first-Modal-Dis").style.display = "none";
    }

    // Optional: close modal when clicking outside of content
    window.onclick = function (event) {
        const modal = document.getElementById("first-Modal-Dis");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };




    /*--------------------------
    preloader
    ---------------------------- */
    $(window).on('load', function () {
        var pre_loader = $('#preloader')
        pre_loader.fadeOut('slow', function () { $(this).remove(); });
    });

    /*---------------------
      venobox
    --------------------- */
    var veno_box = $('.venobox');
    veno_box.venobox();

    /*------------------------------------
     search option
    ------------------------------------- */
    $('.search-option').hide();
    $(".main-search").on('click', function () {
        $('.search-option').animate({
            height: 'toggle',
        });
    });
    /*---------------------
     TOP Menu Stick
    --------------------- */
    var s = $("#sticker");
    var pos = s.position();
    $(window).on('scroll', function () {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*----------------------------
     Counter js active
    ------------------------------ */
    var count = $('.counter');
    count.counterUp({
        delay: 40,
        time: 3000
    });

    /*--------------------------
     collapse
    ---------------------------- */
    var panel_test = $('.panel-heading a');
    panel_test.on('click', function () {
        panel_test.removeClass('active');
        $(this).addClass('active');
    });
    /*--------------------------
     Parallax
    ---------------------------- */
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
    /*--------------------------
     MagnificPopup
    ---------------------------- */
    $('.video-play').magnificPopup({
        type: 'iframe'
    });

    /*--------------------------
         slider carousel
    ---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
     isotope active
    ------------------------------ */
    // project start
    $(window).on("load", function () {
        var $container = $('.project-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.project-menu li a').on("click", function () {
            $('.project-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end
    /*---------------------
     Testimonial carousel
    ---------------------*/
    var review = $('.testimonial-carousel');
    review.owlCarousel({
        loop: true,
        nav: false,
        margin: 15,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /*----------------------------
      brand-carousel-carousel
    ------------------------------ */
    $('.brand-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    /*------------------------
    Email Js 
    ------------------------- */

    (function () {
        emailjs.init("_YLiQ4qIIgSvsbkpp");
        console.log(" emailJs initialized")
    })();
    /*----------------------------
        Contact form
    ------------------------------ */
    $("#contactForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            $.notify("Did you fill in the form properly?", "error");
        } else {
            event.preventDefault();
            submitForm();
            document.getElementById("loader").style.display = "block"

        }
    });


    $("#orderForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            $.notify("Did you fill in the form properly?", "error");
        } else {
            event.preventDefault();
            bookNow();
            document.getElementById("loader").style.display = "block"

        }
    });

    $("#careerForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            $.notify("Did you fill in the form properly?", "error");
        } else {
            event.preventDefault();
            applicationForm();
            document.getElementById("loader").style.display = "block"

        }
    });
    // function submitForm() {
    //     var name = $("#name").val();
    //     var email = $("#email").val();
    //     var msg_subject = $("#msg_subject").val();
    //     var message = $("#message").val();
    //     var phone = $("#phone").val();
    //     var selecttext = $('#contactForm select').find(":selected").text();
    //     var address = '',
    //         sel = '',
    //         sele = '',
    //         mat = '',
    //         hour = '',
    //         datetimepicker1 = '',
    //         datetimepicker3 = '';



    //     if ($('#address').length) {
    //         var address = $("#address").val();
    //     }
    //     if ($('#sel').length) {
    //         var sel = $("#sel").val();
    //     }
    //     if ($('#sele').length) {
    //         var sele = $("#sele").val();
    //     }
    //     if ($('#mat').length) {
    //         var mat = $("#mat").val();
    //     }
    //     if ($('#hour').length) {
    //         var hour = $("#hour").val();
    //     }
    //     if ($('#datetimepicker1').length) {
    //         var datetimepicker1 = $("#datetimepicker1 input").val();
    //     }
    //     if ($('#datetimepicker3').length) {
    //         var datetimepicker3 = $("#datetimepicker3 input").val();
    //     }


    //     $.ajax({
    //         type: "POST",
    //         url: "assets/contact.php",
    //         data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message + "&phone=" + phone + "&mat=" + mat + "&hour=" + hour + "&address=" + address + "&sel=" + sel + "&sele=" + sele + "&datetimepicker1=" + datetimepicker1 + "&datetimepicker3=" + datetimepicker3,
    //         success: function (text) {
    //             if (text === "success") {
    //                 formSuccess();
    //             } else {
    //                 formError();
    //                 submitMSG(false, text);
    //             }
    //         }
    //     });
    // }

    function submitForm() {

        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var message = $("#message").val();

        // Create the payload object
        const payload = {
            name,
            email,
            msg_subject,
            message,
        };


        emailjs.send('service_awwa20e', 'template_flau55d', payload)
            .then(() => {
                // document.getElementById("loader").style.display = "block"
                setTimeout(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message sent successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    document.getElementById("loader").style.display = "none"

                }, 1500);
                // alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send the message',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                document.getElementById("loader").style.display = "none"
            });
        $("#contactForm")[0].reset();

        // Save the payload to localStorage
        // let formSubmissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
        // formSubmissions.push(payload);
        // localStorage.setItem("formSubmissions", JSON.stringify(formSubmissions));

    }


    function bookNow() {
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $('#address').length ? $("#address").val() : '';
        var sel = $('#sel').length ? $("#sel").val() : '';
        var sele = $('#sele').length ? $("#sele").val() : '';
        var mat = $('#mat').length ? $("#mat").val() : '';
        var hour = $('#hour').length ? $("#hour").val() : '';
        var datetimepicker1 = $('#datetimepicker1').length ? $("#datetimepicker1 input").val() : '';
        var datetimepicker3 = $('#datetimepicker3').length ? $("#datetimepicker3 input").val() : '';
        var message = $("#message").val();

        const payload = {
            name,
            email,
            phone,
            address,
            sel,
            sele,
            mat,
            hour,
            datetimepicker1,
            datetimepicker3,
            message
        };

        emailjs.send('service_j19lkgd', 'template_5y9mg3c', payload)
            .then(() => {
                // document.getElementById("loader").style.display = "block"
                setTimeout(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message sent successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    document.getElementById("loader").style.display = "none"

                }, 1500);
            })
            .catch((error) => {
                console.error('Error sending message:', error);

                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send the message',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                document.getElementById("loader").style.display = "none"
            });
        $("#orderForm")[0].reset();


    }


    async function applicationForm() {

        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var fileInput = $("#cv").prop("files")[0];
        var msg_subject = $("#msg_subject").val();

        try {
            if (!fileInput) {
                alert("Please upload a CV.");
                return;
            }


            if (fileInput.size > 50000) {
                alert("File size should not exceed 2MB.");
                return;
            }


            const formData = new FormData();
            formData.append("file", fileInput);
            formData.append("upload_preset", "File_upload"); // Replace with your unsigned preset name
            const cloudinaryResponse = await fetch(
                "https://api.cloudinary.com/v1_1/dmbaisxge/raw/upload", // Replace with your Cloudinary URL
                {
                    method: "POST",
                    body: formData,
                }
            );

            const cloudinaryData = await cloudinaryResponse.json();
            // console.log(":", cloudinaryData)
            const fileUrl = cloudinaryData.secure_url;

            if (!fileUrl) {
                alert("Failed to upload the file. Please try again.");
                return;
            }

            console.log("File uploaded to Cloudinary:", fileUrl);

            // Convert the file to Base64
            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var base64File = e.target.result.split(',')[1]; // Extract Base64 content

            // const base64Data = btoa(String.fromCharCode.apply(null, new Uint8Array(base64File)));
            // // Compress the file data using pako (gzip or deflate)
            // const compressedData = pako.deflate(new Uint8Array(base64File));
            // const compressedBlob = new Blob([compressedData], { type: 'application/pdf' })
            // console.log("Original Size:", fileInput.size);
            // console.log("Compressed Size:", compressedData.length);


            // Create the payload object
            const payload = {
                name,
                email,
                phone,
                msg_subject,
                cv: fileUrl,
            };
            console.log({ payload })

            emailjs.send('service_awwa20e', 'template_flau55d', payload)
                .then(() => {
                    setTimeout(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Message sent successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        document.getElementById("loader").style.display = "none"

                    }, 1500);
                })
                .catch((error) => {
                    console.error('Error sending message:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to send the message',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    document.getElementById("loader").style.display = "none"
                });
            $("#careerForm")[0].reset();
            // }
            // reader.readAsDataURL(fileInput);

        } catch (error) {
            console.error("Error compressing file:", error);
            alert("An error occurred while processing the file.");
        }


    }

    // function formSuccess() {
    //     $("#contactForm")[0].reset();
    //     return $.notify("Message Submitted!", "success")
    // }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

})(jQuery);


