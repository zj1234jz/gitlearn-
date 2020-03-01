/**
 * 返回最大值和最小值之间随机的一个数字
 * @param {传递的最大值} max 
 * @param {传递的最小值} min 
 */
export function getRandom(max,min){
    return Math.floor(Math.random()*(max+1 - min)+min);
}