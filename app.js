    

function makePalette() {

const PALETTE = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'white',
    'black',
  ]//end array

  for (let i = 0; i < PALETTE.length; i++ ) {
    // access the color
    const nextColor = PALETTE[i]

    const newButton = $('<button>')
    newButton.css("background-color", nextColor)
    $('.palette').append(newButton)
  }//end for loop

  $('.palette button').first().addClass('active');
}//end function MakePalette

makePalette();//function call

function makeGrid() {
  // code goes here
  for (let i = 0; i < 64; i++){
        
    const newDiv = $('<div>').attr('class','cell')
    $('.grid').append(newDiv) 
    
}//end for loop

}//end function makeGrid

makeGrid();//function call

function onPaletteClick(){

 let paletteButtons = $('.palette button')
 let x = $(this)
 console.log(x.css);
 paletteButtons.removeClass('active')
 x.addClass('active')
 
 $('.palette').click

}//end function onPaletteClick

$('.palette button').click(onPaletteClick);

function onGridClick(){
  let gridColor = $('.palette .active').css('background-color')
  let cellColor = $(this).css('background-color')
  
  if(gridColor === cellColor){
    $(this).css('background-color',"")
  } else{
    $(this).css('background-color', gridColor)
  }

}//end function onGridClick
$('.grid .cell').click(onGridClick);

function onClearClick(){
  $('.controls .clear').click(onClearClick);
  $('.grid .cell').css("background-color", "")

}//end function
onClearClick();

function onFillAllClick() {
  let color = $('.palette .active').css('background-color');
  $('.cell').css('background-color', color);

}//end function onFillAllClick

$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick() {
  let color = $('.palette .active').css('backgroundColor');
  let cells = $('.cell');
  for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if ($(cell).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
          $(cell).css('backgroundColor', color);
      }//end if
  }//end for
}//end function onFillEmptyClick

$('.fill-empty').click(onFillEmptyClick);
