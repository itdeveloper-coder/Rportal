

$("#login_btn").click(function () {
    localStorage.setItem("userid","");
    localStorage.setItem("password","");
    localStorage.setItem("cpsaleid","");
    localStorage.setItem("cploginid","");
    localStorage.setItem("cpuserid","");

    var vruserid=$("#login_text_userid").val();
    var vrpassword=$("#login_text_password").val();

  if(vruserid== "")
  {
    alert("Please enter User Id");

    return false;   
    }
    if(vrpassword=="")
    {
      alert("Please enter Password");   
        return false;
    }

     getencryptedPass("CPApp", vrpassword, "Encrypt").then(function (res) 
     { 
        var eventval = "Event:Login~!cpuserid:"+ vruserid + "~!Password:"+ res.replace("Success:","") + "";
        var vrgetJsonData = fnsndrequest("AppCP", eventval);
        console.log(vrgetJsonData);
                 // Clean up the response string by removing brackets if they exist
                 getSubmdata = vrgetJsonData.replace(/\[|\]/g, "");

                 // Function to extract a specific key's value from the response string
                 const LoginId = getValueByKey(getSubmdata, "LoginId");
                 const UserId = getValueByKey(getSubmdata, "UserId");
                 const Password = getValueByKey(getSubmdata, "Password");
                 const RegId = getValueByKey(getSubmdata, "RegId");
                 const MobileNo = getValueByKey(getSubmdata, "MobileNo");
                 const EmailId = getValueByKey(getSubmdata, "EmailId");
                 const Pan = getValueByKey(getSubmdata, "Pan");
                 const DateofAgreement = getValueByKey(getSubmdata, "DateofAgreement");
                 const SalesId = getValueByKey(getSubmdata, "SalesId");
                 const IsAllowRefund = getValueByKey(getSubmdata, "IsAllowRefund");
                 const ProjectId = getValueByKey(getSubmdata, "ProjectId");
                 const BookingStatus = getValueByKey(getSubmdata, "BookingStatus");
                 const BankId = getValueByKey(getSubmdata, "BankId");
                 const IsRated = getValueByKey(getSubmdata, "IsRated");
                 const IsMultiplSales = getValueByKey(getSubmdata, "IsMultiplSales");
                 const GetAllPass = getValueByKey(getSubmdata, "GetAllPass");
                 const status = getValueByKey(getSubmdata, "Status");
                 if(status == "Success")
                 {
                    localStorage.setItem("cpsaleid",SalesId);
                    localStorage.setItem("cploginid",LoginId);
                    localStorage.setItem("cpuserid",UserId);
                    localStorage.setItem("cpprojectid",ProjectId);
                    if(IsMultiplSales == "0" || "1"){
                        //window.location.href = "video.html";
                        window.location.href = "Contacts.html";
                    }
                    else{
                        window.location.href = "video.html?section=secondpage_firstsection";
                    }
                   
                 }
                 else{
                    const msg = getValueByKey(getSubmdata, "Msg");
                    alert(msg);
                 }


      });
});


 
$('.sectioncard').on('click', function() {
    window.location.href = "home.html?section=secondpage_projectvideo";
}); 