import countProcessor from './countProcessor';

const button = document.getElementById("count");

button.onclick = function(){
  const initialText = document.getElementById("textArea").value;
  const a = countProcessor.getSymbolsCount(initialText);
  const str = initialText.replace(/\r\n?|\n/g, ' ').replace (/ {2,}/g, ' ').replace (/^ /, '').replace (/ $/, '');
  const symbols = document.getElementById("symbols");
  const words = document.getElementById("words");
  const sent = document.getElementById("sent");
  symbols.value = a;
  const results = countProcessor.getParamsCount(str);
  words.value = results.w;
  sent.value = results.s;
  alert("Кол-во символов: " + a + "\n" +
        "Кол-во слов: " + results.w + "\n" +
        "Кол-во предложений: " + results.s);
};
