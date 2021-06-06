function alertMessage(text) {
//    alert("Tum kya ?")
//    document.getElementById('adobe-dc-view').innerHTML = Date();
      document.addEventListener("adobe_dc_view_sdk.ready", function(){
        alert("Step 1")
          var adobeDCView = new AdobeDC.View({clientId: "12bf96896da7438f8865e5616ad746c2", divId: "adobe-dc-view"});
                 adobeDCView.previewFile({
                   content:{ location:
                     { url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf"}},
                   metaData:{fileName: "Bodea Brochure.pdf"}
                 },
                 {
                   embedMode: "SIZED_CONTAINER"
          });
      });
  }

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}