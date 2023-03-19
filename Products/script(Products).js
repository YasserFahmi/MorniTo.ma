// CART  js
// open and close cart
const cartIcon = document.querySelector(".card");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  addEvents();
}
function addEvents() {
  //remove items  from cart
  var removeCartBtn = document.querySelectorAll(".cart-remove");
  console.log(removeCartBtn);
  removeCartBtn.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  //   //quantity changes
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  //   //Add Items to cart
  let addCart_btns = document.getElementById("add");
  addCart_btns.addEventListener("click", handle_addCartItem);
  //Checkout Order

  const buy_btn = document.querySelector(".normal");
  buy_btn.addEventListener("click", handle_buyOrder);
}

// update Items from cart
function update() {
  addEvents();
  updateTotal();
}
//add Items to cart
let itemsAdded = [];

let add0 = document.getElementById("add");

add0.addEventListener("click", span);

let span0 = document.getElementById("notif");
Number(span0);
c = 0;
//hadi hiya li katzid b +1 ila werakti 3la add
function span() {
  c += 1;

  span0.innerHTML = c;
}
//ohadi l3aks dyal span
function span2() {
  c -= 1;
  span0.innerHTML = c;
}

function handle_addCartItem() {
  let product = this.parentElement.parentElement;
  let title = product.querySelector("#name").innerHTML;

  let price = product.querySelector("#price").innerHTML;
  let imgSrc = document.getElementById("MainImg").src;

  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item is already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("you have already added this product to cart");
    span2();

    return;
  } else {
    itemsAdded.push(newToAdd);
  }
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);
  update();
}
//remove Items from cart
function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );
  span2();

  update();
}

//quantity changes from cart
function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value);

  update();
}
// Buy from cart
function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order to Place Yet ! \nPlease Make an Order First.");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Your Order is Placed Successfully :");
  itemsAdded = [];

  update();
}

function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  //to keep 2 digits after decimal point
  total = total.toFixed(2);
  totalElement.innerHTML = "$" + total;
}

//*****HTML COMPONENTS*****//
p = "";
function CartBoxComponent(title, price, imgSrc) {
  return `
        <div class="cart-box">
          <img
              src=${imgSrc}
              alt=""
              class="cart-img"
          />
          <div class="detail-box">
              <div class="cart-product-title">${title}</div>
              <div class="cart-price">${price}</div>
              <input type="number" value="1" class="cart-quantity" />
          </div>
          <!-- Remove Cart -->
          <i class="far fa-times-circle cart-remove" id="remove"></i>
        </div>`;
}

//single product section

// open and close single product section
const p1 = document.querySelector(".Product1");
const PDS = document.querySelector("#prodetails");
const closeIcon = document.querySelector(".icon-close");
const mainImg = document.getElementById("MainImg");

p1.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Americano_coffee.png";
  nameProduct.innerHTML = "COFFEE AMERICANO";
  price.innerHTML = "6.5$";
  description.innerHTML =
    "An americano coffee is a drink made by adding hot water to espresso. It has a similar strength to regular brewed coffee, but a different flavor profile. It may be served with or without milk, depending on personal preference. It is not the same as an espresso macchiato, which is espresso with a small amount of milk foam.";
});

closeIcon.addEventListener("click", () => {
  PDS.classList.remove("active");
});

// replacing each product to single product section
const p2 = document.querySelector(".Product2");
const nameProduct = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#p");
p2.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Cappuccino.png";
  nameProduct.innerHTML = "CAPPUCCINO";
  price.innerHTML = "6.5$";
  description.innerHTML =
    "A cappuccino is a coffee drink that originated in Italy and is made from espresso and steamed milk foam. It is usually prepared with equal parts of each ingredient (in a ratio of 1:1:1). Some variations may use cream, non-dairy milk, or flavoring. A cappuccino is different from other coffee drinks by its significant amount of foam and its mildly sweet flavor.";
});
const p3 = document.querySelector(".Product3");
p3.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Mocha_Coffee.png";
  nameProduct.innerHTML = "COFFEE MOCHA";
  price.innerHTML = "6.00$";
  description.innerHTML =
    "A caffè mocha , also called mocaccino , is a chocolate flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug.Although a mocha is often interpreted differently across the world, the basis is that a shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream. It is a variant of a latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk. However, a chocolate flavour is added, and this can be milk or dark.";
});
const p4 = document.querySelector(".Product4");
p4.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/latte_coffee.png";
  nameProduct.innerHTML = "COFFEE LATTE";
  price.innerHTML = "4.49$";
  description.innerHTML =
    "A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink. A true latte will be made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. These elements combined result in a balanced milky coffee that possesses an aesthetically pleasing look and a smooth texture.";
});
const p5 = document.querySelector(".Product5");
p5.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/latte-vanilla.png";
  nameProduct.innerHTML = "VANILA LATTE";
  price.innerHTML = "5.05$";
  description.innerHTML =
    " Vanilla Latte is a coffee drink made with espresso, steamed milk, and vanilla syrup.A vanilla latte is a very specific, and very iconic type of espresso-based drink. While you could just make some vanilla-flavored coffee, it's not the same thing. ";
});
const p6 = document.querySelector(".Product6");
p6.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/ice.webp";
  nameProduct.innerHTML = "ICE COFFEE";
  price.innerHTML = "6.5$";
  description.innerHTML =
    "Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk or by brewing the coffee cold. In hot brewing, sweeteners and flavoring may be added before cooling, as they dissolve faster.";
});
const p7 = document.querySelector(".Product7");
p7.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Milk_Coffee.webp";
  nameProduct.innerHTML = "COFFE MILK";
  price.innerHTML = "4.05$";
  description.innerHTML =
    "Coffee milk is a drink made by mixing coffee syrup or extract with milk, in a manner similar to chocolate milk. Since 1993, it has been the official state drink of the U.S. state of Rhode Island.";
});
const p8 = document.querySelector(".Product8");
p8.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/cold_brew.png";
  nameProduct.innerHTML = "COLD BREW";
  price.innerHTML = "4.45$";
  description.innerHTML =
    "Cold brew is a coffee beverage made by combining large amounts of ground coffee with cold water to create a concentrate. The mixture is left to steep for up to 24 hours, after which it's filtered and refrigerated. The drink is then diluted with water or milk and enjoyed.";
});
const p9 = document.querySelector(".Product9");
p9.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/GreenTea.png";
  nameProduct.innerHTML = "GREEN TEA";
  price.innerHTML = "15.99$";
  description.innerHTML =
    "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to other countries in East Asia .";
});
const p10 = document.querySelector(".Product10");
p10.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Iced_Black_Tea.png";
  nameProduct.innerHTML = "ICED BLACK TEA";
  price.innerHTML = "6.5$";
  description.innerHTML =
    "Iced tea (or ice tea) is a form of cold tea. Though it is usually served in a glass with ice, it can refer to any tea that has been chilled or cooled. It may be sweetened with sugar or syrup. Iced tea is also a popular packaged drink that can be mixed with flavored syrup such as lemon, raspberry, lime, passion fruit, peach, orange, strawberry, and cherry.";
});
const p11 = document.querySelector(".Product11");
p11.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/lipton.webp";
  nameProduct.innerHTML = "LIPTON TEA";
  price.innerHTML = "4.05$";
  description.innerHTML =
    "Lipton Yellow Label is made of 100% rainforest alliance-certified black tea leaves. These freshly hand-plucked tea leaves create a taste profile that can help with boosting energy and other health benefits.";
});
const p12 = document.querySelector(".Product12");
p12.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Moroccain_Tea.png";
  nameProduct.innerHTML = "MAROCAIN TEA";
  price.innerHTML = "6.5$";
  description.innerHTML =
    "Moroccan tea is one of the most delicious kinds of tea. Moreover, it is part of the cultural heritage of this country and drinking it (usually in the afternoon) is a Moroccan custom. But if you can't travel to this exciting country, you can still make Moroccan tea at home.";
});
const p13 = document.querySelector(".Product13");
p13.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/flavia.png";
  nameProduct.innerHTML = "FLAVIA CREATION 150";
  price.innerHTML = "50.99$";
  description.innerHTML =
    "The FLAVIA Creation 150 is specifically designed for small offices and meeting spaces. Though small in size, this brewer is big on flavor and can make coffee, tea, hot chocolate, cappuccinos and lattes, all at the push of a button.";
});
const p14 = document.querySelector(".Product14");
p14.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Cup_Coffee.png";
  nameProduct.innerHTML = "CUP COFFEE";
  price.innerHTML = "13$";
  description.innerHTML =
    "A coffee cup is a container, a cup, for serving coffee and coffee-based drinks. There are three major types: conventional cups used with saucers, mugs used without saucers, and disposable cups. Cups and mugs generally have a handle. Disposable paper cups used for take-out sometimes have fold-out handles, but are more often used with an insulating coffee cup sleeve.";
});
const p15 = document.querySelector(".Product15");
p15.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/NeSpresso_Capsules.png";
  nameProduct.innerHTML = "NESPRESSO CAPSULES";
  price.innerHTML = "32.00$";
  description.innerHTML =
    "Nespresso's hermetically sealed capsules are made of aluminum. Depending on the Nespresso system being used, the flat top or the pointed end of the capsule is pierced when inserted into the machine and the compartment lever is lowered. Some machines make a single large hole, and others make three smaller holes.";
});
const p16 = document.querySelector(".Product16");
p16.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/spoon.png";
  nameProduct.innerHTML = "LONG SPOON COFFEE";
  price.innerHTML = "7.98$";
  description.innerHTML =
    "Stainless steel spoon,This Long Handle Spoon are made of high quality stainless steel, Sturdy rust proof, Lead-free, Cadmium-free, Phthalate-free, BPA-free durable and eco-friendly, It is an excellent substitute for plastic spoons.Dishwasher Safe,You can put them in a dishwasher and they go out for saving time. Make sure do not use the hard detergent.";
});
const p17 = document.querySelector(".Product17");
p17.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/pact_coffee.png";
  nameProduct.innerHTML = "PACT COFFEE";
  price.innerHTML = "9.95$";
  description.innerHTML =
    "Pact Coffee is a coffee roast and delivery company. The Company's beans are bought from dedicated farmers, hand-roasted in London and shipped within 7 days. The coffee isn't ground until the last possible moment before being sent straight to the customer to enjoy.";
});
const p18 = document.querySelector(".Product18");
p18.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/Tea_Mushrooms.png";
  nameProduct.innerHTML = "MUSHROOM TEA";
  price.innerHTML = "26.00$";
  description.innerHTML =
    "Mushroom tea is an infusion of mushrooms in water, made by using edible / medicinal mushrooms (such as lingzhi mushroom) or psychedelic mushrooms (such as Psilocybe cubensis). The active ingredient in psychedelic mushrooms is psilocybin, while the active ingredients in medicinal mushrooms are thought to be beta-glucans.";
});
const p19 = document.querySelector(".Product19");
p19.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/BroChoco.png";
  nameProduct.innerHTML = "BROCHOCO ORIGINAL";
  price.innerHTML = "12.20$";
  description.innerHTML =
    "Chocolate drink with different flavours to choose from? BROCHOCO is your answer!! Fill your every day with BROCHOCO, from our Original to Choco Banana. Explore our fun-filled flavours and delight in the never-ending sweetness, creamy and smooth combination. An all-time favourite regardless of ages, our heavenly chocolate drink is sumptuous no matter when and how it is served.";
});
const p20 = document.querySelector(".Product20");
p20.addEventListener("click", () => {
  PDS.classList.add("active");
  mainImg.src = "imag/chocolate-cookies.png";
  nameProduct.innerHTML = "GRANDMA'S CHOCOLATE CHIP COOKIE";
  price.innerHTML = "30.99$";
  description.innerHTML =
    "Every Grandma's treat is baked with love to transport you to your happy place and experience a delicious variety of homemade memories with every bite.";
});
