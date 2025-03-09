


// Function to trigger file input
function triggerFileInput(id) {
    $(`#file-input-${id}`).click();
}

// Function to update file name display
function updateFileName(id) {
    const fileInput = $(`#file-input-${id}`)[0];
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file chosen';
    $(`#file-name-${id}`).text(fileName);
    $(`#file-name-${id}`).parent().removeClass('hidden');
}

// Function to remove file selection
function removeFile(id) {
    $(`#file-input-${id}`).val(null);
    $(`#file-name-${id}`).text('No file chosen');
    $(`#file-name-${id}`).parent().addClass('hidden');
}
$(".menu-items a").on("click", function () {
    var offcanvasMenu = bootstrap.Offcanvas.getInstance($("#offcanvasMenu")[0]);
    if (offcanvasMenu) {
        offcanvasMenu.hide();
    }
});

$("#videodiv").click(function () {
    var videoUrl = "https://www.youtube.com/watch?v=4uV3zLPUrZQ"; // Replace with your video URL
    var iframe = `<iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    $(this).html(iframe);
});


function bindKyc() {
    var eventval = "Event:Bind_Kyc~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "~!cpuserid:" + localStorage.getItem("cpuserid");
    var vrgetJsonData = fnsndrequest("AppCP", eventval);
    fnUpdatePageData(vrgetJsonData, "#loading");
}


$("#cp_bind_kyc").click(function () {
    bindKyc();
});




//Applicant1
//Adhar card code 
$("#customer_lbl_adharcard").click(function () {
    var vrbtnadharcard = $("#customer_lbl_adharcard").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_adharcard_applicant1_Template29").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_adharcard_applicant1_Template29").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {

        varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
        thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

        if (thcheck.indexOf("Success") > -1) {
            $("#customerkyc_file_adharcard_applicant1_Template29").val(""); //Clear file adharcard input
            bindKyc();


        }
        else {
            alert(thcheck);
            $('#loading').hide();
        }

    }
});

//pan card code
$("#customer_lbl_Pancard").click(function () {
    var vrbtnadharcard = $("#customer_lbl_Pancard").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_pan_applicant1_Template30").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_pan_applicant1_Template30").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
        thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

        if (thcheck.indexOf("Success") > -1) {
            $("#customerkyc_file_pan_applicant1_Template30").val(""); // Clear file pan input
            bindKyc();


        }
        else {
            alert(thcheck);
            $('#loading').hide();
        }

    }
});


//Photo card code
$("#customer_lbl_photo").click(function () {
    var vrbtnadharcard = $("#customer_lbl_photo").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_photo_applicant1_Template31").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_photo_applicant1_Template31").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
        thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

        if (thcheck.indexOf("Success") > -1) {
            $("#customerkyc_file_photo_applicant1_Template31").val(""); // Clear file photo input
            bindKyc();


        }
        else {
            alert(thcheck);
            $('#loading').hide();
        }

    }
});

//loan letter card code
$("#customer_lbl_loanletter").click(function () {
    var vrbtnadharcard = $("#customer_lbl_loanletter").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_loanletter_applicant1_Template32").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_loanletter_applicant1_Template32").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
        thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

        if (thcheck.indexOf("Success") > -1) {
            $("#customerkyc_file_loanletter_applicant1_Template32").val(""); // Clear file loanletter input
            bindKyc();
        }
        else {
            alert(thcheck);
            $('#loading').hide();
        }

    }
});


//addapplicant2
$("#addapplicant2").click(function () {
    $(this).addClass("d-none"); // Hide using d-none
    $("#cpkycapplicant2").removeClass("d-none"); // Show cpkycapplicant2
    $("#cpkycapplicant3").addClass("d-none");
    $("#addapplicant3").removeClass("d-none");
    $("#addapplicant3").addClass("d-flex");
});
//addapplicant2
$("#addapplicant3").click(function () {
    $(this).addClass("d-none");
    $("#addapplicant3").removeClass("d-flex");
    $("#cpkycapplicant3").removeClass("d-none"); 
    
});

// Close button functionality
$("#closeBtn").click(function () {
    $("#addapplicant3").addClass("d-none");
    $("#cpkycapplicant2").addClass("d-none"); // Hide using d-none
    $("#addapplicant2").removeClass("d-none"); // Show addapplicant2
    $("#customerkyc_file_adharcard_applicant2_Template29").val(""); //Clear file adharcard input
    $("#customerkyc_file_pan_applicant2_Template30").val(""); // Clear file pan input
    $("#customerkyc_file_photo_applicant2_Template31").val(""); // Clear file photo input
    $("#customerkyc_file_loanletter_applicant2_Template32").val(""); // Clear file loanletter input
});
$("#closeBtn_applicant3").click(function () {
    $("#cpkycapplicant3").addClass("d-none"); // Hide using d-none
    $("#addapplicant3").removeClass("d-none"); // Show addapplicant2
    $("#addapplicant3").addClass("d-flex"); // Show addapplicant2
    $("#customerkyc_file_adharcard_applicant3_Template29").val(""); //Clear file adharcard input
    $("#customerkyc_file_pan_applicant3_Template30").val(""); // Clear file pan input
    $("#customerkyc_file_photo_applicant3_Template31").val(""); // Clear file photo input
    $("#customerkyc_file_loanletter_applicant3_Template32").val(""); // Clear file loanletter input
});

//Applicant2
//Adhar card code 
$("#customer_lbl_adharcard_applicant2").click(function () {
    var vrbtnadharcard = $("#customer_lbl_adharcard_applicant2").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_adharcard_applicant2_Template29").click(); // Trigger file input

    }
    else {

    }
}
);

$("#customerkyc_file_adharcard_applicant2_Template29").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_adharcard_applicant2_Template29").val(""); //Clear file adharcard input
                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});

//pan card code
$("#customer_lbl_Pancard_applicant2").click(function () {
    var vrbtnadharcard = $("#customer_lbl_Pancard_applicant2").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_pan_applicant2_Template30").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_pan_applicant2_Template30").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_pan_applicant2_Template30").val(""); // Clear file pan input

                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});


//Photo card code
$("#customer_lbl_photo_applicant2").click(function () {
    var vrbtnadharcard = $("#customer_lbl_photo_applicant2").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_photo_applicant2_Template31").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_photo_applicant2_Template31").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_photo_applicant2_Template31").val(""); // Clear file photo input

                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});

//loan letter card code
$("#customer_lbl_loanletter_applicant2").click(function () {
    var vrbtnadharcard = $("#customer_lbl_loanletter_applicant2").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_loanletter_applicant2_Template32").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_loanletter_applicant2_Template32").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_loanletter_applicant2_Template32").val(""); // Clear file loanletter input
                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});



//Applicant3
//Adhar card code 
$("#customer_lbl_adharcard_applicant3").click(function () {
    var vrbtnadharcard = $("#customer_lbl_adharcard_applicant3").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_adharcard_applicant3_Template29").click(); // Trigger file input

    }
    else {

    }
}
);

$("#customerkyc_file_adharcard_applicant3_Template29").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_adharcard_applicant3_Template29").val(""); //Clear file adharcard input
                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});

//pan card code
$("#customer_lbl_Pancard_applicant3").click(function () {
    var vrbtnadharcard = $("#customer_lbl_Pancard_applicant3").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_pan_applicant3_Template30").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_pan_applicant3_Template30").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_pan_applicant3_Template30").val(""); // Clear file pan input

                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});


//Photo card code
$("#customer_lbl_photo_applicant3").click(function () {
    var vrbtnadharcard = $("#customer_lbl_photo_applicant3").text();
    if (vrbtnadharcard == "Upload") {
        $("#customerkyc_file_photo_applicant3_Template31").click(); // Trigger file input
    }
    else {

    }
}
);

$("#customerkyc_file_photo_applicant3_Template31").change(async function () {
    let file = this.files[0]; // Get selected file
    if (file) {
        var thcheck = "N";
        thcheck = IsvalidationForm("adddoc_");
        if (thcheck == "N") { $('#loading').hide(); }
        else {

            let cpsaleid = localStorage.getItem("cpsaleid");
            let cploginid = localStorage.getItem("cploginid");
            let cpuserid = localStorage.getItem("cpuserid");


            varevent = "Event:KYC_Process~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid") + "";
            thcheck = await FormSubmissionshandles("customerkyc_", "AppCP", "#loading", varevent + "~!");

            if (thcheck.indexOf("Success") > -1) {
                $("#customerkyc_file_photo_applicant3_Template31").val(""); // Clear file photo input

                bindKyc();

            }
            else {
                alert(thcheck);
                $('#loading').hide();
            }
        }

    }
});

async function fnattachkyc(vrkycid, type) {

    var vardelet = "Event:Delete_KYC~!kycid:" + vrkycid;
    var thcheck = "";
    thcheck = await FormSubmissionshandles("test_", "AppCP", "#loading", vardelet + "~!");
    alert(thcheck);
    if (thcheck.indexOf("Success") > -1) {
        bindKyc();
    }
}

// Store selected dates and time slot
let selectedDates = [];
let vartime = "";


// Function to reset date and time selections
function resetSelections() {
    selectedDates = [];
    vartime = "";

    // Reset UI
    $(".date-btn").removeClass("btn-primary").addClass("btn-outline-primary").prop("disabled", false);
    $("input[name='timeslotRadio']").prop("checked", false); // Uncheck radio buttons
}
// Function to fetch and render available dates
function fetchAppointmentDates() {

    resetSelections(); // Reset selections before fetching new dates

    var eventval = "Event:Appointment_Date_Bind~!cpuserid:" + localStorage.getItem("cpuserid") + 
                   "~!cpsaleid:" + localStorage.getItem("cpsaleid") + 
                   "~!cploginid:" + localStorage.getItem("cploginid");

    // Ensure fnsndrequest returns a valid JSON object
    var vrgetJsonData = fnsndrequest("AppCP", eventval);

    Promise.resolve(vrgetJsonData)
        .then(response => JSON.parse(response || "[]")) // Ensure it's parsed JSON
        .then(data => renderMilestones(data))
        .catch(error => console.error("Error processing data:", error));
};

// Function to display fetched dates as buttons
function renderMilestones(data) {
    var datesContainer = $(".dates").empty(); // Clear existing dates

    data.forEach(item => {
        datesContainer.append(`
            <button class="btn btn-outline-primary date-btn">${item.Date} ${item.Day}</button>
        `);
    });
}

// Date selection logic (Max 2 selections)
$(document).on("click", ".date-btn", function () {
    let dateText = $(this).text().trim(); // Get button text

    if (selectedDates.includes(dateText)) {
        // Deselect if already selected
        $(this).removeClass("btn-primary").addClass("btn-outline-primary");
        selectedDates = selectedDates.filter(date => date !== dateText);
    } else {
        if (selectedDates.length >= 2) {
            alert("You can only select up to 2 dates.");
            return; // Prevent selecting more than 2 dates
        }
        // Select new date
        $(this).removeClass("btn-outline-primary").addClass("btn-primary");
        selectedDates.push(dateText);
    }

    // Disable other buttons when 2 dates are selected
    if (selectedDates.length === 2) {
        $(".date-btn").not(".btn-primary").prop("disabled", true);
    } else {
        $(".date-btn").prop("disabled", false); // Re-enable all buttons if < 2 selected
    }

    console.log("Selected Dates:", selectedDates);
});

// Capture selected time slot
$("input[name='timeslotRadio']").change(function () {
    vartime = $(this).val(); // Get selected radio button value
    console.log("Selected Time Slot:", vartime);
});

// Click event for submitting the selected date and time
$("#selectdate_appointment").click(async function () {
    if (selectedDates.length === 0) {
        alert("❌ Please select at least one date.");
        return;
    }
    if (!vartime) {
        alert("❌ Please select a time slot.");
        return;
    }

    var eventval = "Event:Req_Appointment_Agreement_Singing~!cpuserid:" + localStorage.getItem("cpuserid") + 
                   "~!cpsaleid:" + localStorage.getItem("cpsaleid") + 
                   "~!cploginid:" + localStorage.getItem("cploginid") + 
                   "~!requestdate:" + selectedDates.join(",") + 
                   "~!requesttime:" + vartime;

    alert("✅ Request Sent: " + eventval);
    console.log("Generated EventVal:", eventval);

    try {
        var thcheck = await FormSubmissionshandles("time_", "AppCP", "#loading", eventval + "~!");
        if (thcheck.includes("Success")) {
            alert("🎉 Appointment successfully booked!");
        } else {
            alert("❌ Booking failed: " + thcheck);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("❌ An error occurred while booking the appointment.");
    }
});

// Attach function to button click
$("#book_an_appointment_meeting").click(fetchAppointmentDates);
// Attach function to button click
// $("#request_for_appointmen_call").click();
$("#request_for_appointmen_call").click(async function () {
    fetchAppointmentDates();
});


// Click event for submitting the selected date and time
$("#selectdate_appointment_forcall").click(async function () {
    if (selectedDates.length === 0) {
        alert("❌ Please select at least one date.");
        return;
    }
    if (!vartime) {
        alert("❌ Please select a time slot.");
        return;
    }

    var eventval = "Event:Req_Registration_Appointment~!cpuserid:" + localStorage.getItem("cpuserid") + 
                   "~!cpsaleid:" + localStorage.getItem("cpsaleid") + 
                   "~!cploginid:" + localStorage.getItem("cploginid") + 
                   "~!requestdate:" + selectedDates.join(",") + 
                   "~!requesttime:" + vartime;

    alert("✅ Request Sent: " + eventval);
    console.log("Generated EventVal:", eventval);

    try {
        var thcheck = await FormSubmissionshandles("time_", "AppCP", "#loading", eventval + "~!");
        if (thcheck.includes("Success")) {
            alert("🎉 Appointment successfully booked!");
        } else {
            alert("❌ Booking failed: " + thcheck);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("❌ An error occurred while booking the appointment.");
    }
});