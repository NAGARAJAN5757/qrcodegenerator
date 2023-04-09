$(".alertmsg").hide()
// defining default values
let inputData = "qrRJ";
let qrwidth = 200;
let qrheight = 200;
let qrmargin = 0;
let qrdotstyle = "dots"
let qrdotcolortype = ""
let qrcornersquarestyle = "extra-rounded"
let qrcornerdotstyle = "dots"
let qrdotcolor1 = "#000000"
let qrdotcolor2 = "#000000"
let qrdotrotation = 0 
let qrcornersquarecolor1 = "#000000"
let qrcornersquarecolor2 = "#000000"
let qrcornersquarerotation = 0
let qrcornerdotcolor1 = "#000000"
let qrcornerdotcolor2 = "#000000"
let qrcornerdotrotation = 0
let qrbgcolor1 = "#ffffff"
let qrbgcolor2 = "#ffffff"
let qrbgrotation = 0
let qripimg = "scanme.png"
let imgcopy  = qripimg;
let qripimgsize = 0.4
let qripimgmargin = 3 
let dltype = "png"
const fileSelector = document.querySelector('#selectimg')


let qrcopy ;

generateqr()
function generateqr(){
    document.getElementById("qrcontent").innerHTML="";
    const qrCode = new QRCodeStyling({
        width: qrwidth,
        height: qrwidth,
        margin : qrmargin,
        type: "png",
        data:inputData,
        image: qripimg,
        dotsOptions: {
            gradient : { type : "linear" , colorStops : [{offset : 0 ,color:qrdotcolor1} , {offset:1 ,color : qrdotcolor2}], rotation:qrdotrotation },
            type : qrdotstyle
        },
        cornersSquareOptions : {
            gradient : { type : "linear" , colorStops : [{offset : 0 ,color : qrcornersquarecolor1} , { offset : 1 ,color : qrcornersquarecolor2}], rotation : qrcornersquarerotation },
            type : qrcornersquarestyle
        },
        cornersDotOptions : {
            gradient : { type : "linear" , colorStops : [{offset : 0 ,color : qrcornerdotcolor1} , { offset : 1 ,color : qrcornerdotcolor2}], rotation : qrcornerdotrotation },
            type : qrcornerdotstyle
        },
        backgroundOptions: {
            gradient : { type : "linear" , colorStops : [{offset : 0 ,color : qrbgcolor1} , { offset : 1 ,color : qrbgcolor2}], rotation : qrbgrotation },
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: qripimgmargin,
            imageSize: qripimgsize,
            hideBackgroundDots : 'false'
        }
    });
    qrcopy = qrCode;    
    $("#qrcontent").innerHTML = "";
    qrCode.append(document.getElementById("qrcontent"));
}
function dl(){
    qrcopy.download({ name: "qr", extension: dltype });
    
}
let infos = $(".info");
for (i of infos) {
    $(i).bind('input', function(e) {
        if(e.target.id === "ip1"){
            
            inputData = $("#ip1").val()
            generateqr();

            
            
        }
        else if(e.target.id === "width"){
            if($("#width").val() <= 20){
                $(".alertmsgwidth").show()
            }
            else{
                $(".alertmsgwidth").hide()
                qrwidth =  $("#width").val()
                generateqr()
            }
        }
        else if(e.target.id === "margin"){
            if($("#margin").val()>0.4){
                $(".alertmsgmargin").show()
            }
            else{
                $(".alertmsgmargin").hide()
                qrmargin = $("#margin").val()
                generateqr()
            }
            
        }
        else if(e.target.id === "dotstyle"){
            if($('#dotstyle').find('option:selected').text() === "Square"){
                qrdotstyle = "square"
                generateqr()
            }
            else if($('#dotstyle').find('option:selected').text() === "Round"){
                qrdotstyle = "rounded"
                generateqr()
            }
            else{
                qrdotstyle = "dots"
                generateqr()
            }
        }
        else if(e.target.id === "qrdotcolortype"){
            if($('#qrdotcolortype').find('option:selected').text() === "Color Gradient"){
                $(".dotlinearcolor").toggle()
                $(".dotgradcolor").toggle()
                qrdotcolor1 = $("#dotscolor1").val()
                qrdotcolor2 = $("#dotscolor2").val()
                generateqr()
            }
            else{
                $(".dotgradcolor").toggle()
                $(".dotlinearcolor").toggle()
                qrdotcolor1 = $("#dotscolor").val()
                qrdotcolor2 = $("#dotscolor").val()
                generateqr()
            }
        }
        // cornersqure 
        else if(e.target.id === "cornersquarecolortype"){
            if($('#cornersquarecolortype').find('option:selected').text() === "Color Gradient"){
                $(".cornersquarelinearcolor").toggle()
                $(".cornersquaregradcolor").toggle()
                qrcornersquarecolor1 = $("#cornersquarecolor1").val()
                qrcornersquarecolor2 = $("#cornersquarecolor2").val()
                generateqr()
            }
            else{
                $(".cornersquaregradcolor").toggle()
                $(".cornersquarelinearcolor").toggle()
                qrcornersquarecolor1 = $("#cornersquarecolor").val()
                qrcornersquarecolor2 = $("#cornersquarecolor").val()
                generateqr()
            }
        }
        else if(e.target.id === "cornerdotcolortype"){
            if($('#cornerdotcolortype').find('option:selected').text() === "Color Gradient"){
                $(".cornerdotlinearcolor").toggle()
                $(".cornerdotgradcolor").toggle()
                qrcornerdotcolor1 = $("#cornerdotcolor1").val()
                qrcornerdotcolor2 = $("#cornerdotcolor2").val()
                generateqr()
            }
            else{
                $(".cornerdotgradcolor").toggle()
                $(".cornerdotlinearcolor").toggle()
                qrcornerdotcolor1 = $("#cornerdotcolor").val()
                qrcornerdotcolor2 = $("#cornerdotcolor").val()
                generateqr()
            }
        }
        else if(e.target.id === "bgcolortype"){
            if($('#bgcolortype').find('option:selected').text() === "Color Gradient"){
                $(".bglinearcolor").toggle()
                $(".bggradcolor").toggle()
            }
            else{
                $(".bggradcolor").toggle()
                $(".bglinearcolor").toggle()
            }
        }
        else if(e.target.id === "cornersquarestyle"){
            if($('#cornersquarestyle').find('option:selected').text() === "Square"){
                qrcornersquarestyle = "square"
                generateqr()
            }
            else if($('#cornersquarestyle').find('option:selected').text() === "Round"){
                qrcornersquarestyle = "extra-rounded"
                generateqr()
            }
            else{
                qrcornersquarestyle = "dot"
                generateqr()
            }
        }
        else if(e.target.id === "cornersdotstyle"){
            if($('#cornersdotstyle').find('option:selected').text() === "Dot"){
                qrcornerdotstyle = "dot"
                generateqr()
            }
            else{
                qrcornerdotstyle = "square"
                generateqr()
            }
        }
        else if(e.target.id === "dotscolor"){
            qrdotcolor1 = $("#dotscolor").val()
            qrdotcolor2 = $("#dotscolor").val()
            generateqr()
        }
        else if(e.target.id === "dotscolor1" || e.target.id === "dotscolor2"){
            qrdotcolor1 = $("#dotscolor1").val()
            qrdotcolor2 = $("#dotscolor2").val()
            generateqr()
        }
        else if(e.target.id === "dotsrotation"){
            qrdotrotation = $("#dotsrotation").val()
            generateqr()
        }
        else if(e.target.id ==="cornersquarecolor"){
            qrcornersquarecolor1 = $("#cornersquarecolor").val()
            qrcornersquarecolor2 = $("#cornersquarecolor").val()
            generateqr()
        }
        else if(e.target.id =="cornersquarecolor1" || e.target.id =="cornersquarecolor2"){
            qrcornersquarecolor1 = $("#cornersquarecolor1").val()
            qrcornersquarecolor2 = $("#cornersquarecolor2").val()
            generateqr()
        }
        else if(e.target.id === "cornersquarerotation"){
            qrcornersquarerotation = $("#cornersquarerotation").val()
            generateqr()
        }
        else if(e.target.id === "cornerdotcolor"){
            qrcornerdotcolor1 = $("#cornerdotcolor").val()
            qrcornerdotcolor2 = $("#cornerdotcolor").val()
            generateqr()
        }
        else if(e.target.id === "cornerdotcolor1" || e.target.id === "cornerdotcolor2"){
            qrcornerdotcolor1 = $("#cornerdotcolor1").val()
            qrcornerdotcolor2 = $("#cornerdotcolor2").val()
            generateqr()
        }
        else if(e.target.id === "cornerdotrotation"){
            qrcornerdotrotation = $("#cornerdotrotation").val()
            generateqr()
        }
        else if(e.target.id === "bgcolor"){
            qrbgcolor1 = $("#bgcolor").val()
            qrbgcolor2 = $("#bgcolor").val()
            generateqr()
        }
        else if(e.target.id === "bgcolor1" || e.target.id === "bgcolor2"){
            qrbgcolor1 = $("#bgcolor1").val()
            qrbgcolor2 = $("#bgcolor2").val()
            generateqr()
        }
        else if(e.target.id === "bgcolorrotation"){
            qrbgrotation = $("#bgcolorrotation").val()
            generateqr()
        }
        else if(e.target.id === "imgmargin"){
            if($("#imgmargin").val() <=  0  || $("#imgmargin").val() > 5 ){
                $(".alertmsgimgmargin").show()
            }
            else{
                $(".alertmsgimgmargin").hide()
                qripimgmargin = $("#imgmargin").val()
                generateqr()
            }
        }
        else if(e.target.id === "imgsize"){
            if($("#imgsize").val() <= 0){
                $(".alertmsgimgsize").show()
            }
            else{
                $(".alertmsgimgsize").hide()
                qripimgsize = $("#imgsize").val()
                generateqr()
            }
        }
        else if(e.target.id === "imgreq"){
            if($("#imgreq").is(":checked")){
                qripimg = imgcopy
                generateqr()
            }
            else{
                qripimg = ""
                generateqr()
            }
        }
        else if(e.target.id === "dloptions"){
            if($('#dloptions').find('option:selected').text() === "PNG"){
                dltype = "png"
            }
            else if($('#dloptions').find('option:selected').text() === "JPEG"){
                dltype = "jpeg"
            }
            else if($('#dloptions').find('option:selected').text() === "SVG"){
                dltype = "svg"
            }
            else{
                dltype = "webp"
            }
        }        

    });
}
document.getElementById("selectimg").addEventListener("change", () => {
        let images =""
        var imageBlob = new Blob([fileSelector.files[0]], { type: fileSelector.files[0].type });
        var imageUrl = window.URL.createObjectURL(imageBlob);
        const output = document.querySelector("output")
        images = `<div class="image">
        <img src="${URL.createObjectURL(imageBlob)}" alt="image" style="width:50px">
        </div>`    
        output.innerHTML = images
        if($("#imgreq").is(":checked")){
            qripimg = imageUrl
            imgcopy = imageUrl
            generateqr()
        }
        else{
            qripimg = ""
            generateqr()
        }  
})
$("#dlbtn").click(function(){
    dl()
})