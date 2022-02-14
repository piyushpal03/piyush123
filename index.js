const currentDate = new Date();
const root = document.getElementById("root");
const cardCount = document.getElementById("totalCount");

const delivery = document.getElementById("delivery");
const alpha = document.getElementById("alphabet");
const price = document.getElementById("price");

const ranks = document.getElementsByClassName("ranks");

// this is the shoe data which we will put on the DOM
const productData = [
  {
    shoeName: "Bata",
    shoePrice: 2350,
    starRating: 5.0,
    deliveryTime: new Date("14 Jan 2022"),
    shoeImg: "shoe1.png",
  },
  {
    shoeName: "Hush Puppies",
    shoePrice: 1550,
    starRating: 4.0,
    deliveryTime: new Date("15 Jan 2022"),
    shoeImg: "shoe3.png",
  },
  {
    shoeName: "Louis Phillippe",
    shoePrice: 1550,
    starRating: 3.0,
    deliveryTime: new Date("25 Jan 2022"),
    shoeImg: "shoe1.png",
  },
  {
    shoeName: "Peter England",
    shoePrice: 3550,
    starRating: 5.0,
    deliveryTime: new Date("10 Jan 2022"),
    shoeImg: "shoe1.png",
  },
  {
    shoeName: "Timberland",
    shoePrice: 1300,
    starRating: 2.0,
    deliveryTime: new Date("24 Jan 2022"),
    shoeImg: "shoe2.png",
  },
  {
    shoeName: "Bata",
    shoePrice: 3050,
    starRating: 5.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe2.png",
  },
  {
    shoeName: "Hush Puppies",
    shoePrice: 1590,
    starRating: 1.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe2.png",
  },
  {
    shoeName: "Peter England",
    shoePrice: 1300,
    starRating: 3.0,
    deliveryTime: new Date("11 Jan 2022"),
    shoeImg: "shoe3.png",
  },
  {
    shoeName: "Timberland",
    shoePrice: 1000,
    starRating: 2.0,
    deliveryTime: new Date("18 Jan 2022"),
    shoeImg: "shoe3.png",
  },
];

// function for generating card to show product
const cardGenerator = (element) => {
  return `
  <div class="card m-3 mx-4 p-1" style="width: 18rem;">
  <img src="./images/${
    element.shoeImg
  }" class="card-img-top" alt="shoe image" height="250px">
  
  <div class="card-body">

      <div class="d-flex justify-content-between align-items-center">           
          <h5 class="card-title fw-bolder">${element.shoeName}</h5>
          <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
              <img src="./images/star1.png" alt="star image" class="mx-1" height="17"> <span id="star-rating" class="fw-bold">${
                element.starRating
              }</span>
          </span>
      </div>
    
      <h4 class="fs-1 fw-bold">&#8377;${element.shoePrice}</h4>
    <p class="card-text">Delivery by: ${element.deliveryTime.toDateString()}</p>
  </div>

</div>`;
};

// this will handle the sorting in the alphabatical order
alpha.addEventListener("click", () => {
  console.log("click on alpha");
  root.innerHTML = "";
  const alphaSort = (first, second) => {
    if (first.shoeName > second.shoeName) {
      return 1;
    } else if (first.shoeName < second.shoeName) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(alphaSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

//this will handle the sorting in pricing (high to low)
price.addEventListener("click", () => {
  console.log("click on price");
  root.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseInt(first.shoePrice) > parseInt(second.shoePrice)) {
      return -1;
    } else if (parseInt(first.shoePrice) < parseInt(second.shoePrice)) {
      return 1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(priceSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

//this will handle the sorting according to delivery time
delivery.addEventListener("click", () => {
  root.innerHTML = "";

  const deliveryTimeSort = (first, second) => {
    if (first.deliveryTime - currentDate > second.deliveryTime - currentDate) {
      return 1;
    } else if (
      first.deliveryTime - currentDate <
      second.deliveryTime - currentDate
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(deliveryTimeSort).forEach((element) => {
    root.innerHTML += cardGenerator(element);
  });
});

// this will handle the click event on the filters
Array.from(ranks).forEach((element) => {
  element.addEventListener("click", (e) => {
    root.innerHTML = "";
    let i = 0;
    const targetRank = parseInt(e.target.innerHTML.split("")[0]);

    productData.forEach((element) => {
      if (parseInt(element.starRating) == targetRank) {
        root.innerHTML += cardGenerator(element);
        i += 1;
      }
    });

    cardCount.innerHTML = i;
  });
});

// this will populate the root element with product
productData.forEach((element) => {
  root.innerHTML += cardGenerator(element);
});
