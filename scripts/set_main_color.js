function setColor() {
	$(document).ready(function() {
         var script_tag = document.getElementById('color_script');
         var color = script_tag.getAttribute("color");

         document.body.style.setProperty('--main-color', color);
	 })
}

setColor();