window.addEventListener('load', function () {


    var SelectedColor = document.getElementById('colorSelect');


    var body = document.getElementById('body');
    // console.log(SelectedColor.value);
    console.log(body);


    SelectedColor.addEventListener('change', function(){

        document.body.style.background = SelectedColor.value;
        load.preventDefault();


    })
       
   var inputUpLoad = document.getElementById('fileUpload');
   inputUpLoad.addEventListener('change', function(){

    handleFiles(this.files);
    load.preventDefault();
   });



 
       

});







