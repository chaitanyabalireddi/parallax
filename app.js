let listBg = document.querySelectorAll('.banner .bg');
let titleBanner = document.querySelectorAll('.banner h1');
let listTab = document.querySelectorAll('.tab');

window.addEventListener( 'scroll', (event) => {
    let top = this.scrollY
    //5index 
    //scroll chesinapdu bg class motham kindhaki osthay
    //index pedhaga unte scroll movement kuda fast untadhi
    listBg.forEach( (bg , index) =>{
      if(index != 0 && index <=5 ){
       bg.style.transform = `translateY(${top*index/2}px)`;
      }
    })
    titleBanner.style.transform = `translateY(${top*4/2}px)`;

})