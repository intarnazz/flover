export function addToCart(name) {
  var flovers_LS = JSON.parse(localStorage.getItem("flovers"));
  console.log("flovers_LS: ", flovers_LS);
  if (flovers_LS.length != 0) {
    console.log("if: ", flovers_LS);
    var flovers_LS_id = false;
    for (let i = 0; i < flovers_LS.length; i++) {
      if (name == flovers_LS[i].name) {
        flovers_LS_id = i;
        break;
      }
    }
    if (flovers_LS_id !== false) {
      flovers_LS[flovers_LS_id].num += 1;
      console.log("if (flovers_LS_id) - ", flovers_LS);
    } else {
      console.log("else (flovers_LS_id) - ", flovers_LS_id);
      flovers_LS = [
        ...flovers_LS,
        {
          name: name,
          num: 1,
          price: "",
        },
      ];
    }
  } else {
    console.log("else: ", flovers_LS);
    flovers_LS = [
      {
        name: name,
        num: 1,
        price: "",
      },
    ];
  }

  console.log(flovers_LS);

  localStorage.setItem("flovers", JSON.stringify(flovers_LS));
}
