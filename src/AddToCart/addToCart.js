export function addToCart(name, file_name) {
  var flovers_LS = JSON.parse(localStorage.getItem("flovers"));
  if (flovers_LS.length != 0) {
    var flovers_LS_id = false;
    for (let i = 0; i < flovers_LS.length; i++) {
      if (name == flovers_LS[i].name) {
        flovers_LS_id = i;
        break;
      }
    }
    if (flovers_LS_id !== false) {
      flovers_LS[flovers_LS_id].num += 1;
    } else {
      flovers_LS = [
        ...flovers_LS,
        {
          name: name,
          file_name: file_name,
          num: 1,
          price: "",
        },
      ];
    }
  } else {
    flovers_LS = [
      {
        name: name,
        file_name: file_name,
        num: 1,
        price: "",
      },
    ];
  }
  localStorage.setItem("flovers", JSON.stringify(flovers_LS));
}
