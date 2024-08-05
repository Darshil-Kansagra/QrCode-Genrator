btn = document.getElementsByTagName("button");
str = document.getElementsByTagName("input");
qrimg = document.querySelector(".qrimg img");

btn[0].addEventListener("click", () => {
  let qrvalue = str[0].value;
  if (qrvalue == "") {
    alert("Please Enter Text");
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    document.getElementsByClassName("qrimg")[0].style.display = "inline";
    document.getElementsByTagName("button")[1].style.display = "inline";
  }
});

btn[1].addEventListener("click", async () => {
  const response = await fetch(qrimg.src);
  const blob = await response.blob();
  const downlaodLink = document.createElement("a");
  downlaodLink.href = URL.createObjectURL(blob);
  downlaodLink.download = "qrcode.jpeg";
  downlaodLink.click();
});
