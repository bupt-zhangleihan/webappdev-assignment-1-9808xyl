// 所有的引文内容
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// 储存单字列表及目前要输入的单字索引
let words = [];
let wordIndex = 0;
// 开始时间
let startTime = Date.now();
// 网页物件连结
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
// 在游戏结束时关闭 input 事件监听者  
function endGame() {  
    typedValueElement.removeEventListener('input', checkTyped);  
}  
  
// 在游戏重新开始时重新开启 input 事件监听者  
function startGame() {  
    typedValueElement.addEventListener('input', checkTyped);  
}  
// 在 script.js 末端
document.getElementById('start').addEventListener('click', () => {
  // 取得一行引文
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // 将引文分成许多单字，存在矩阵中。
  words = quote.split(' ');
  // 重制单字索引来做追踪
  wordIndex = 0;
//检索并设置玩家的最高分：
function startGame() {  
    words = JSON.parse(localStorage.getItem('words'));  
    quoteIndex = JSON.parse(localStorage.getItem('quoteIndex'));  
    const highScore = localStorage.getItem('highScore');  
    if (highScore) {  
        setHighScore(highScore);  
    } else {  
        // 如果找不到最高分，将其设置为初始值（例如0）  
        localStorage.setItem('highScore', 0);  
        setHighScore(0);  
    }  
    initializeGame();  
}  
function setHighScore(highScore) {  
    const highScoreElement = document.getElementById('high-score');  
    highScoreElement.textContent = `High Score: ${highScore} ms`;  
}
function startInput() {  
  // 开启键盘监听  
  document.addEventListener("keydown", handleInput);  
  // 显示第一个单词  
  updateWord();  
}  
  
function handleInput(e) {  
  // 当按下键盘时，更新输入框的值并检查输入是否正确  
  const userTyped = document.getElementById('typed-value').value;  
  if (userTyped === words[wordIndex]) {  
    // 输入正确，更新到下一个单词  
    wordIndex++;  
    updateWord();  
  } else {  
    // 输入错误，停止游戏并显示错误信息  
    stopGame();  
    displayMessage('Error: You typed "' + userTyped + '" but the correct word is "' + words[wordIndex] + '".');  
  }  
}  
  
function updateWord() {  
  // 如果单词列表还有剩余，显示下一个单词，否则重新开始游戏并重置单词索引和输入框值  
  if (wordIndex < words.length) {  
    document.getElementById('typed-value').value = words[wordIndex];  
  } else {  
    stopGame();  
    wordIndex = 0;  
    document.getElementById('typed-value').value = '';  
    displayMessage('Congratulations! You have finished the quote. Press "Start" to play again.');  
  }  
}  
//更新得分
  function updateScore(quoteIndex) {  
    const score = Date.now() - startTime; // 计算得分（以毫秒为单位）  
    const highScore = localStorage.getItem('highScore');  
    if (score < highScore) {  
        localStorage.setItem('highScore', score); // 更新最高得分  
        setHighScore(score); // 更新显示的最高得分  
    }  
function stopGame() {  
  // 停止监听键盘事件并清除输入框的值和状态消息  
  document.removeEventListener("keydown", handleInput);  
  document.getElementById('typed-value').value = '';  
}  
  
function displayMessage(message) {  
  // 在messageElement中显示消息，并在下方添加恭贺讯息（使用对话窗格的方式）  
  messageElement.textContent = message;  
  const恭喜讯息 = document.createElement('div');  
  恭喜讯息.textContent = 'Great job!';  
  messageElement.appendChild(恭喜讯息);  
}
