function shodow(options){
    let images = document.querySelectorAll(".shadow");

     (options.shadow_type == "hadd")? options.shadow_type="0px": options.shadow_type="20px";
     images.forEach(image =>{
     	 image.style.boxShadow = `10px 20px ${options.shadow_type} 2px rgba(0,0,0,0.7)`;
     	 if (options.padding) {
     	 	 image.style.padding="1em";
     	 }
     })
}

module.exports.shadowGenerate = shadow;