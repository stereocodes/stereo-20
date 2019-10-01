/*
* @description "manager for z-index depth for sanity"
* @param {string} level "named level of depth"
* @return {number} "z-index value"
*/
export const zdepth = (level:string) => {
  const depth = {
    lowest: 0,
    low: 1,
    mid: 2,
    high: 3,
    highest: 4
  }
  //@ts-ignore
  return depth[level];
}