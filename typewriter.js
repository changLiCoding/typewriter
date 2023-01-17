const sentence = "hello there from lighthouse labs";

const typeWriter = function(words) {
  for (const index in words) {
    setTimeout(() => {
      process.stdout.write(words[index]);

      if (parseInt(index) === words.length - 1) {
        process.stdout.write('\n');
      }
    },index * 50);
  }
};
typeWriter(sentence);
//const slowPrint = (info, i) => {
//  if (i === info.length) return process.stdout.write("\n");

//  setTimeout(() => {
//    process.stdout.write(info[i]);
//    slowPrint(info, i + 1);
//  }, 50);
//};

//slowPrint(sentence, 0);
