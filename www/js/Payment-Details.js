
 $(window).on('load', function () {
                  let cpsaleid =   localStorage.getItem("cpsaleid");
                   let cploginid = localStorage.getItem("cploginid");
                  let cpuserid =    localStorage.getItem("cpuserid");
                   let ProjectId =  localStorage.getItem("cpprojectid");

                   
     var eventsummary = "Event:CustomerPortal_payment_summary~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid");
     // Ensure fnsndrequest returns a valid JSON object
     var vrgetJsonDatasummary = fnsndrequest("AppCP_Construction_Phase", eventsummary);
     Promise.resolve(vrgetJsonDatasummary)
         .then(response => JSON.parse(response || "[]")) // Ensure it's parsed JSON
         .then(datasummary => paymentsummary(datasummary))
         .catch(error => console.error("Error processing data:", error));



     var eventval = "Event:CustomerPortal_payment_Schedule~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid");
     // Ensure fnsndrequest returns a valid JSON object
     var vrgetJsonData = fnsndrequest("AppCP_Construction_Phase", eventval);
     Promise.resolve(vrgetJsonData)
         .then(response => JSON.parse(response || "[]")) // Ensure it's parsed JSON
         .then(data => renderMilestones(data))
         .catch(error => console.error("Error processing data:", error));
 });
 
 function renderMilestones(data) {
     var statusIcons = {
         "paid": "img/icon/success-icon.png",
         "due": "img/icon/pading-icon.png",
         "unclaimed": "img/icon/unsucess-icon.png"
     };
 
     var milestoneContainer = $(".milestones_list_div").empty();
 
     data.forEach(item => {
         var iconSrc = statusIcons[item.Status] || "";
         var amountHtml = item.Due_Amount ? `
             <div class="excavation_footing">
                 <h5>₹ ${item.Due_Amount}</h5>
                 <small class="text-muted">Amount to be paid</small>
                 <h5 class="h5_excavation_footing">₹ ${item.Balance_Amount}</h5>
                 <small class="text-muted">Balance Amount</small>
             </div>` : "";
 
         milestoneContainer.append(`
             <div class="tdspay mt-3">
                 <div class="milestones_div m-2">
                     <img src="${iconSrc}" alt="" class="img-fluid">
                     <div>
                         <p>${item.Remark}</p>
                         <small class="text-muted">${item.Date}</small>
                     </div>
                 </div>
                 ${amountHtml}
             </div>
         `);
     });
 }


 function paymentsummary(datasummary) {

    var paymentsummaryContainer = $(".totalamount").empty();

    datasummary.forEach(summary => {
        paymentsummaryContainer.append(`
 <div class="row mt-3">
                      <div class="col-6">
                        <p class="text-primary mb-2">Total Amount</p>
                        <h5>₹ ${summary.Total_Amount}</h5>
                        <small class="text-muted">Amount to be paid</small>
                        <h5 class="h5_excavation_footing">₹ ${summary.Due_Amount}</h5>
                        <small class="text-muted" id="taxes_other_charges">*Taxes & other charges</small>
                      </div>
                      <div class="col-6">
                        <p class="text-primary mb-2">Received&nbsp;Amount</p>
                        <h5>₹ ${summary.Received_Amount}</h5>
                        <small class="text-muted">Amount to be paid</small>
                        <h5 class="h5_excavation_footing">₹ ${summary.Balance_Amount}</h5>
                        <small class="text-muted">90.02% paid</small>
                      </div>
                  </div>
        `);
    });
}





$(document).on('click', '#taxes_other_charges', function() {
    $("#taxesother_charges_modal").fadeIn();
    var eventAmount = "Event:CustomerPortal_Amount_summary~!cpuserid:" + localStorage.getItem("cpuserid") + "~!cpsaleid:" + localStorage.getItem("cpsaleid") + "~!cploginid:" + localStorage.getItem("cploginid");
    var vrgetJsonDataAmount = fnsndrequest("AppCP_Construction_Phase", eventAmount);
    console.log(vrgetJsonDataAmount);
    Promise.resolve(vrgetJsonDataAmount)
    .then(response => JSON.parse(response || "[]")) // Ensure it's parsed JSON
    .then(dataAmount => amountsummary(dataAmount))
    .catch(error => console.error("Error processing data:", error));
});


function amountsummary(dataAmount) {

    var dataAmountContainer = $(".modal-content").empty();

    dataAmount.forEach(Amount => {
        dataAmountContainer.append(`
  <div class="content_taxes_other_charges mb-5">
    <h6>${Amount.Column_Name}</h6>
    <h4>₹  ${Amount.Amount}</h4>
  </div>
        `);
    });
}

$(document).on('click', '#close_modal', function() {
    $("#taxesother_charges_modal").fadeOut();
});


