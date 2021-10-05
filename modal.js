const modelOverlay =document.querySelector(".modal-overlay");
const modelBtn =document.querySelector(".modal-btn");
const CloseBtn =document.querySelector(".close-btn");


modelBtn.addEventListener("click", function()
{
    modelOverlay.classList.add("open-model")

});
CloseBtn.addEventListener("click", function()
{
    modelOverlay.classList.remove("open-model");

})