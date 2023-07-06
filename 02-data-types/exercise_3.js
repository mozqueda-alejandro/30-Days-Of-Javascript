
// 1
let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var count = (loveString.match(/love/g) || []).length;
console.log(count);
