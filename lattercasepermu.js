function main() {
  let inp = "aB2DcbgG";
  let out = "";
  permu(inp, out);
  for (let key in obj) {
    console.log(key);
  }
}
let obj = {};
function permu(inp, out) {
  if (inp.length == 0) {
    //console.log(out);
    obj[out] = (obj[out] || 0) + 1;
    return;
  }
  let out1 = "";
  let out2 = "";

  //   while (true) {
  //     let temp = inp[0];
  //     if (temp.isInteger || temp == temp.toUpperCase()) {
  //       out1 = out1 + out + inp[0];
  //       out2 = out2 + out + inp[0];
  //       console.log(out1);
  //       console.log(out2);
  //     } else break;
  //     inp = inp.slice(1);
  //     if (inp.length == 0) return;
  //   }
  out1 = out + inp[0].toUpperCase();
  out2 = out + inp[0];
  inp = inp.slice(1);
  permu(inp, out2);
  permu(inp, out1);
  return;
}

main();
