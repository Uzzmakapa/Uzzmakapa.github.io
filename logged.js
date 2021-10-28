if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('item-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-name')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function cpu() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (cpu.style.display == "none") {
        cpu.style.display = "block";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        cpu.style.display = "none";
    }
}

function cooler() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (cooler.style.display == "none") {
        cooler.style.display = "block";
        cpu.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        cooler.style.display = "none";
    }
}

function motherboard() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (mb.style.display == "none") {
        mb.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        mb.style.display = "none";
    }
}

function gpu() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (gpu.style.display == "none") {
        gpu.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        gpu.style.display = "none";
    }
}

function ram() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (ram.style.display == "none") {
        ram.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        hdd.style.display = "none";
        ssd.style.display = "none";
    } else {
        ram.style.display = "none";
    }
}

function hdd() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (hdd.style.display == "none") {
        hdd.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        ssd.style.display = "none";
    } else {
        hdd.style.display = "none";
    }
}

function ssd() {
    var cpu = document.getElementById("CPU");
    var cooler = document.getElementById("Cooler");
    var mb = document.getElementById("Motherboard");
    var gpu = document.getElementById("Graphics-card");
    var ram = document.getElementById("RAM");
    var hdd = document.getElementById("HDD");
    var ssd = document.getElementById("SSD");
    if (ssd.style.display == "none") {
        ssd.style.display = "block";
        cpu.style.display = "none";
        cooler.style.display = "none";
        mb.style.display = "none";
        gpu.style.display = "none";
        ram.style.display = "none";
        hdd.style.display = "none";
    } else {
        ssd.style.display = "none";
    }
}

function items(){
    var cart = document.getElementById("cart");
    var items = document.getElementById("items");
    if (items.style.display == "none") {
        items.style.display = "block";
        cart.style.display = "none";
    }
}

function cart(){
    var items = document.getElementById("items");
    var cart = document.getElementById("cart");
    var nav = document.getElementById("shopnav");
    
    if (cart.style.display == "none") {
        cart.style.display = "block";
        items.style.display = "none";
        nav.style.display = "none";
        cart.style.height = "615px";
    } else {
        cart.style.display = "none";
        items.style.display = "block";
        nav.style.display = "block";
    }
}

function cpuonlyload() {

    document.getElementById("CPU").style.display="block";
    document.getElementById("Cooler").style.display="none";
    document.getElementById("Motherboard").style.display="none";
    document.getElementById("Graphics-card").style.display="none";
    document.getElementById("RAM").style.display="none";
    document.getElementById("HDD").style.display="none";
    document.getElementById("SSD").style.display="none";
    document.getElementById("cart").style.display="none";
}