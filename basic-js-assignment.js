//  ১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

function seerToMon(quantity) {
  // Input Parameter Valedation
  if (typeof quantity != "number") {
    return "Please Give a Number";
  }
  if (quantity < 0) {
    return "Please Enter a Positive Number";
  }

  let seer = 0.025;
  let mon = quantity * seer;
  return mon;
}

console.log("Your Converted Result Is :", seerToMon(40));

//////////////////////////// #Problem - 1 End /////////////////////////////


// ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

/*১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। */


function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
  // Input Parameter Valedation
  if (
    typeof shirtsQuantity != "number" ||
    typeof pantsQuantity != "number" ||
    typeof shoesQuantity != "number"
  ) {
    return "All inputs should be Numbers";
  } 
  else if (shirtsQuantity < 0 || pantsQuantity < 0 || shoesQuantity < 0) {
    return "Please Enter a Positive Number";
  }

  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;

  const totalShirtsPrice = shirtsQuantity * perShirtPrice;
  const totalPantsPrice = pantsQuantity * perPantPrice;
  const totalShoesPrice = shoesQuantity * perShoePrice;

  const totalPrice = totalShirtsPrice + totalPantsPrice + totalShoesPrice;

  return totalPrice;
}

console.log("Total Price Is :", totalSales(2, 1, 3));

//////////////////////////// #Problem - 2 End /////////////////////////////


// ৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

/* যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 

আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */


function deliveryCost(numberOfTshirts) {
  // Input Parameter Valedation
  if (typeof numberOfTshirts != "number") {
    return "Please Give a Number";
  }
  if (numberOfTshirts < 0) {
    return "Please Enter a Positive Number";
  }

  let firstPackageRate = 100;
  let secondPackageRate = 80;
  let restPackageRate = 50;

  if (numberOfTshirts <= 100) {
    let firstPackage = firstPackageRate * numberOfTshirts;
    return firstPackage;
  } else if (numberOfTshirts > 100 && numberOfTshirts < 200) {
    let firstPackage = 100 * firstPackageRate;
    let restQuantity = numberOfTshirts - 100;
    let secondPackage = secondPackageRate * restQuantity;
    let avgPackage = firstPackage + secondPackage;
    return avgPackage;
  } else {
    let firstPackage = 100 * firstPackageRate;
    let secondPackage = 100 * secondPackageRate;
    let restQuantity = numberOfTshirts - 200;
    let restPackage = restQuantity * restPackageRate;
    let avgPackage = firstPackage + secondPackage + restPackage;
    return avgPackage;
  }
}

console.log("Total Delivery Cost :", deliveryCost(99));

//////////////////////////// #Problem - 3 End /////////////////////////////


// #Problem - 4 Start

let myFriends = [
  "Rumman",
  "Tanu",
  "Hasan",
  "Shawon",
  "Maeda",
  "Nisha",
  "Fahamid",
];

function perfectFriend(friendsList) {
  // Input Parameter Valedation
  for (let i = 0; i < friendsList.length; i++) {
    const element = friendsList[i];
    if (typeof friendsList[i] != "string") {
      return "Please Give an array of string";
    }
  }

  for (const names of friendsList) {
    if (names.length == 5) {
      return names;
    }
  }
}

console.log(perfectFriend(myFriends));

//////////////////////////// #Problem - 4 End /////////////////////////////

