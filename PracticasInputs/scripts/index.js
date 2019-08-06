window.addEventListener('load', function () {

    var countColors =0;
    var color1 = 'black';
    var color2 = 'black';
    var color3 = 'black';
    var color4 = 'black';
    var SelectedColor = document.getElementById('colorSelect');


    SelectedColor.addEventListener('change', function(load){
        countColors ++;
       switch(countColors){

        case 1 :
        color1= SelectedColor.value;
        var button1 = document.getElementById('button1');
        button1.style.background = color1;
        break;
        case 2:
        color2 = SelectedColor.value;
        var button1 = document.getElementById('button2');
        button1.style.background= color2;
        break;
        case 3:
        color3 = SelectedColor.value;
        var button1 = document.getElementById('button3');
        button1.style.background= color3;
        break;
        case 4:
        color4 = SelectedColor.value;
        var button1 = document.getElementById('button4');
        button1.style.background= color4;


        break;
        default:
        break;
       }

        document.body.style.background = 'linear-gradient('+ 'to right' + ', ' + color1 + ', '+  color2 + ', ' +color3 + ', '+color4 + ')';
        load.preventDefault();

    });
       


 
       

});







