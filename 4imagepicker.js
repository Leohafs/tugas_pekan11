var select = document.querySelector('select');
var html = document.querySelector('body');
html.style.backgroundRepeat = "no-repeat";
html.style.backgroundSize = "cover";
select.addEventListener('change', backgrounds);

function backgrounds(){
    var choice = select.value;
    

    if(choice === 'day'){
        html.style.backgroundImage = "url('panda.jpg')";
        window.alert('ini gambar panda')
    }
    else if(choice === 'night'){
        html.style.backgroundImage = "url('buaya.jpg')";
        window.alert('ini gambar buaya')
    }
    else if(choice === 'flower'){
        html.style.backgroundImage = "url('ular.jpg')";
        window.alert('ini gambar ular')
    }
    else if(choice === 'newspaper'){
        html.style.backgroundImage = "url('gajah.jpg')";
        window.alert('ini gambar gajah')
    }
}