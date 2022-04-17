let spinnerArray = ["| ", "/ ", "- ", "\\ ", "| ", "/ ", "- ", "\\ ", "| ", "\n"];
let interval = -100;
for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerArray[i]);
  }, (interval + (200 * (i + 1))));
}
