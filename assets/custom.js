/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
window.addEventListener('resize', reportWindowSize);
const toggleNavbar = document.getElementById("toggleNavbar"); 
const subToggleNavbar = document.getElementById("subToggleNavbar");
reportWindowSize()
function reportWindowSize() {
    let sizeWidth = window.innerWidth
    function scrollFunction() {
        if ( sizeWidth<1000 &&  document.documentElement.scrollTop > 900) {
        console.log("mobile")
        toggleNavbar.style.display = "block";
        subToggleNavbar.style.display = "block";
        } 
        else if ( sizeWidth>1000 &&  document.documentElement.scrollTop > 1000) {
            console.log("desktop")
            toggleNavbar.style.display = "block";
            subToggleNavbar.style.display = "block";
        } 
        else{
            toggleNavbar.style.display = "none";
            subToggleNavbar.style.display = "none";
        }
      }
        window.onscroll = () => {scrollFunction()};
  }

window.onresize = reportWindowSize;

 
 // When the user clicks on the button, scroll to the top of the document
 //function topFunction() {
 //  document.body.scrollTop = 0; // For Safari
 //  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 //}