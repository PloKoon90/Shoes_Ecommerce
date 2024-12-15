let next = document.querySelector('.next');
let prev = document.querySelector('.prev');



next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1])
});



const AsicsCard = document.querySelector('.AsicsCard');
const JordanCard = document.querySelector('.JordanCard');
const MaxCard = document.querySelector('.MaxCard');
const GazCard = document.querySelector('.GazCard');
const PumaCard = document.querySelector('.PumaCard');
const VejaCard = document.querySelector('.VejaCard');
const TokCard = document.querySelector('.TokCard');
const PalCard = document.querySelector('.PalCard');
const NBCard = document.querySelector('.NBCard');
const LuxCard = document.querySelector('.LuxCard');
const DunkCard = document.querySelector('.DunkCard');
const AFCard = document.querySelector('.AFCard');
const Close = document.querySelector('.Close');
const JClose = document.querySelector('.JClose');
const MClose = document.querySelector('.MClose');
const GClose = document.querySelector('.GClose');
const PClose = document.querySelector('.PClose');
const VClose = document.querySelector('.VClose');
const TClose = document.querySelector('.TClose');
const PaClose = document.querySelector('.PaClose');
const NBClose = document.querySelector('.NBClose');
const DClose = document.querySelector('.DClose');
const LClose = document.querySelector('.LClose');
const AiClose = document.querySelector('.AiClose');
const MMore = document.querySelector('.MMore');
const AMore = document.querySelector('.AMore');
const JMore = document.querySelector('.JMore');
const GMore = document.querySelector('.GMore');
const PMore = document.querySelector('.PMore');
const VMore = document.querySelector('.VMore');
const OnMore = document.querySelector('.OnMore');
const PaMore = document.querySelector('.PaMore');
const NBMore = document.querySelector('.NBMore');
const LuxMore = document.querySelector('.LuxMore');
const DMore = document.querySelector('.DMore');
const AFMore = document.querySelector('.AFMore');
let nextt = document.querySelector('.nextt');
let prevv = document.querySelector('.prevv');


nextt.addEventListener('click', function(){
    let items = document.querySelectorAll('.items');
    document.querySelector('.slides').appendChild(items[0])
});

prevv.addEventListener('click', function(){
    let items = document.querySelectorAll('.items');
    document.querySelector('.slides').prepend(items[items.length - 1])
});


TClose.addEventListener("click", () =>{
    TokCard.style.display = `none`;
});

AiClose.addEventListener("click", () =>{
    AFCard.style.display = `none`;
});


PaClose.addEventListener("click", () =>{
    PalCard.style.display = `none`;
});

NBClose.addEventListener("click", () =>{
    NBCard.style.display = `none`;
});

LClose.addEventListener("click", () =>{
    LuxCard.style.display = `none`;
});

DClose.addEventListener("click", () =>{
    DunkCard.style.display = `none`;
});


Close.addEventListener("click",()=>{
    AsicsCard.style.display = `none`;
});

JClose.addEventListener("click",()=>{
    JordanCard.style.display = `none`;
});

MClose.addEventListener("click",()=>{
    MaxCard.style.display = `none`;
});

GClose.addEventListener("click",()=>{
    GazCard.style.display = `none`;
});

PClose.addEventListener("click",()=>{
    PumaCard.style.display = `none`;
});

VClose.addEventListener("click",()=>{
    VejaCard.style.display = `none`;
});


AMore.addEventListener("click",() =>{
    AsicsCard.style.display = `flex`;
});

JMore.addEventListener("click",() =>{
    JordanCard.style.display = `flex`;
});

MMore.addEventListener("click",() =>{
    MaxCard.style.display = `flex`;
});

GMore.addEventListener("click",() =>{
    GazCard.style.display = `flex`;
});

PMore.addEventListener("click",() =>{
    PumaCard.style.display = `flex`;
});

VMore.addEventListener("click",() =>{
    VejaCard.style.display = `flex`;
});

OnMore.addEventListener("click",() =>{
    TokCard.style.display = `flex`;
});

PaMore.addEventListener("click",() =>{
    PalCard.style.display = `flex`;
});

NBMore.addEventListener("click",() =>{
    NBCard.style.display = `flex`;
});

LuxMore.addEventListener("click",() =>{
    LuxCard.style.display = `flex`;
});

DMore.addEventListener("click",() =>{
    DunkCard.style.display = `flex`;
});

AFMore.addEventListener("click",() =>{
    AFCard.style.display = `flex`;
});

let CartIcon = document.querySelector('#CartIcon');
let CartExit = document.querySelector('.CartExit'); 
let CartCheck = document.querySelector('.CartCheck');
const addToCartButtons = document.querySelectorAll(".AddtoCart");
const productSizes = document.querySelectorAll(".DSize, .AiSize, .LSize, .NBSize, .PaSize, .TSize, .VSize, .PSize, .GSize, .SSize, .FSize");
CartExit.addEventListener("click", () =>{
    CartCheck.style.display = `none`;
});

CartIcon.addEventListener("click", () =>{
    CartCheck.style.display = `block`;
});





let cartCount = 0;
let cartItems = [];
const cartQuantity = document.querySelector('.quantity');
const cartItemsContainer = document.querySelector('.cart-items');
const totalAmountDisplay = document.createElement('div');
totalAmountDisplay.classList.add('total-amount');       
cartItemsContainer.appendChild(totalAmountDisplay);


function updateCartDisplay() {
    cartItemsContainer.innerHTML = ''; // Clear previous content
    cartItemsContainer.appendChild(totalAmountDisplay); // Ensure totalAmountDisplay stays at the bottom

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-items');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <div class="cart-item-details">
                <input type="checkbox" class="ItemInput">
                <span class="ItemName">${item.name}</span>
                <span class="ItemSize">Size: ${item.size}</span>
                <span class="ItemPrice">$${item.price}</span>
                <div class="quantity-controls">
                    <button class="decrease-quantity">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity">+</button>
                </div>
            </div>
        `;

        const decreaseButton = cartItemDiv.querySelector('.decrease-quantity');
        const increaseButton = cartItemDiv.querySelector('.increase-quantity');
        const itemInput = cartItemDiv.querySelector('.ItemInput');

        decreaseButton.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                cartCount--;
            } else {
                cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
                cartCount -= item.quantity;
            }
            cartQuantity.textContent = cartCount;
            updateCartDisplay();
        });

        increaseButton.addEventListener('click', () => {
            item.quantity++;
            cartCount++;
            cartQuantity.textContent = cartCount;
            updateCartDisplay();
        });

        itemInput.addEventListener('change', updateTotalAmount);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    updateTotalAmount();
}


addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = button.closest('.AFCard, .DunkCard, .NBCard, .PalCard, .LuxCard, TokCard, .AsicsCard, .JordanCard, .MaxCard, .GazCard, .PumaCard, .VejaCard');
        const productName = productCard.querySelectorAll('.ProdName, .ProdNames').innerText;
        const productPriceText = productCard.querySelector('.Amount').innerText;
        const productPrice = parseFloat(productPriceText.replace('$', ''));
        const productImage = productCard.querySelectorAll('.ProdPic img, ProdPics img').src;
        const selectedSize = productCard.querySelectorAll('.DSize.selected, .AiSize.selected, .LSize.selected, .NBSize.selected, .PaSize.selected, .TSize.selected, .VSize.selected, .PSize.selected, .GSize.selected, .SSize.selected, .FSize.selected').textContent;


        const existingItem = cartItems.find(item => item.id === productId && item.size === selectedSize);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1,
                size: selectedSize
            });
        }

        cartCount++;
        cartQuantity.textContent = cartCount;
        updateCartDisplay();
    });
});

function updateTotalAmount() {
    const selectedItems = document.querySelectorAll('.ItemInput:checked');
    let totalAmount = 0;

    if (!selectedItems.length) {
        totalAmountDisplay.textContent = 'No items selected.';
        return;
    }

    selectedItems.forEach(input => {
        const cartItem = input.closest('.cart-items');
        const itemPriceText = cartItem.querySelector('.ItemPrice').textContent.trim();
        const itemQuantityText = cartItem.querySelector('.quantity-controls span').textContent.trim();

        let itemPrice;
        try {
            itemPrice = parseFloat(itemPriceText.substring(1));
            if (isNaN(itemPrice)) {
                throw new Error(`Invalid item price: ${itemPriceText}`);
            }
        } catch (error) {
            console.error(error.message);
            return;
        }

        let itemQuantity;
        try {
            itemQuantity = parseInt(itemQuantityText);
            if (isNaN(itemQuantity)) {
                throw new Error(`Invalid item quantity: ${itemQuantityText}`);
            }
        } catch (error) {
            console.error(error.message);
            return;
        }

        let amt = itemPrice * itemQuantity;
        if (isNaN(amt)) {
            console.error(`Invalid calculation for item: price=${itemPrice}, quantity=${itemQuantity}`);
            return;
        }

        totalAmount += amt;
    });

    totalAmountDisplay.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}

productSizes.forEach(size => {
    size.addEventListener("click", () => {
        const currentSizes = size.parentElement.querySelectorAll(".DSize, .AiSize, .LSize, .NBSize, .PaSize, .TSize, .VSize, .PSize, .GSize, .SSize, .FSize");
        currentSizes.forEach(s => {
            s.classList.remove("selected");
        });
        size.classList.add("selected");
    });
});


















