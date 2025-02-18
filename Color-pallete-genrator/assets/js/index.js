let button = document.querySelector(".btn_box");
let palleteGroup = document.querySelector('.pallete_group');
let gro = document.querySelector('.gro');
function generate(){
    for(let j=0;j<25;j++){
        let pallete = document.createElement('div');
        pallete.setAttribute('class', 'pallete');
        
        let pallete1 = document.createElement('div');
        pallete1.setAttribute('class', 'each');
        
        let pallete2 = document.createElement('div');
        pallete2.setAttribute('class', 'each');
        
        let pallete3 = document.createElement('div');
        pallete3.setAttribute('class', 'each');
        
        let pallete4 = document.createElement('div');
        pallete4.setAttribute('class', 'each');


        let group = [pallete1,pallete2,pallete3,pallete4];

        for(let i=0;i<4;i++){
            
            let p=document.createElement('p');
            p.setAttribute('class','insideColorCode');
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            // let a = Math.random()*1+0.4;
            
            p.innerHTML = RGBToHex(r,g,b);
            group[i].appendChild(p);


            group[i].style.backgroundColor = `rgba(${r},${g},${b})`;

        } 
        pallete.appendChild(pallete1);
        pallete.appendChild(pallete2);
        pallete.appendChild(pallete3);
        pallete.appendChild(pallete4);
        palleteGroup.appendChild(pallete);
    }
    gro.appendChild(palleteGroup);
       
}

function remove(){
    while(palleteGroup.firstChild){
        palleteGroup.removeChild(palleteGroup.firstChild);
    }
    generate();
}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
// const copyToClipboard = str => {
//     const el = document.createElement('textarea');
//     el.value = str;
//     el.setAttribute('readonly', '');
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';
//     document.body.appendChild(el);
//     const selected =
//       document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//     if (selected) {
//       document.getSelection().removeAllRanges();
//       document.getSelection().addRange(selected);
//     }
//   };
  
  
//   $('div.each').click(function() {
//     var x = $(this).css('backgroundColor');
//     copyToClipboard(x);
//   })