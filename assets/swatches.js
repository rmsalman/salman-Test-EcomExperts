// if the product page is handbag
if(location.pathname == "/products/handbag"){
    // swatches JS started
    var colorV = "Option-template--20016180887843__main-0";
    // method for swatch changes 
    function updateColor(e) {
        document.getElementById(colorV).value = e; 
    }
    // add new html for swatch
    var swatchHtml = `<div class="swatches"> <input checked id="swatchBlack" type="radio" name="swatch" value="Black" class="swatchesRadio"><label for="swatchBlack" class="swatchesLabel swatchesLabel--Black" onclick="updateColor('Black')">Black</label> 
    <input id="swatchRed" type="radio" name="swatch" value="Red" class="swatchesRadio"><label for="swatchRed" class="swatchesLabel swatchesLabel--Red" onclick="updateColor('Red')">Red</label> 
    <input id="swatchTan" type="radio" name="swatch" value="Tan" class="swatchesRadio"><label for="swatchTan" class="swatchesLabel swatchesLabel--Tan" onclick="updateColor('Tan')">Tan</label> </div>`;
    document.querySelector('[for='+colorV+']').innerHTML += swatchHtml;
    // just to start page as black swatch
    updateColor('Black')
    document.querySelector('#swatchBlack').click()
    // swatches JS ended

    if(location.search !== '?variant=45541015748899') {
        window.location.search = '?variant=45541015748899';
    }

    // declared size and add to cart button
    // var sizer = 'Option-template--20016180887843__main-1';
    // var addToCartCTA = 'ProductSubmitButton-template--20016180887843__main';
    // // if the size dropdown changes then to Unselected add disabled
    // document.getElementById(sizer).onchange = function(e){
    //     setTimeout(function () {
    //         if(e.target.value == "Unselected") {
    //             document.getElementById(addToCartCTA).disabled = 'disabled';
    //         } else {
    //             document.getElementById(addToCartCTA).disabled = false;  
    //         }        
    //     },1000)
    // }
    // // Make sure that when the page is refreshed while the size selected is either small, medium or large - the size variant will be unselected after the page is refreshed.
    // document.getElementById(sizer).value = "Unselected"
    // document.getElementById(addToCartCTA).disabled = 'disabled';
}
