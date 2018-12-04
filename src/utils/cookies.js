/* eslint-disable */
// 设置cookie
export function setCookie (name, value, iDay) {
  var oDate = new Date()
  oDate.setDate(oDate.getDate() + iDay)
  document.cookie = name + '=' + value + ';expires=' + oDate
}

export function getCookie (name) {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) 
      return (arr[2]);
  else
      return null;
}

// 删除cookie
export function removeCookie(name) {
    setCookie(name, 1, -1);
}