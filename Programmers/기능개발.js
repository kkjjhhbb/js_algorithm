function solution(progresses, speeds) {
  var answer = [];
  var n = 0;
  while (true) {
    if (progresses.length === 0) return answer;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (progresses[0] >= 100) {
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        n += 1;
      }
      answer.push(n);
      n = 0;
    }
  }
}
