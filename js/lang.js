function setLanguage(){
    let lang = getCookie("language");
    if(lang == ""){
      $('span[lang="es"]').hide();
      window.languageModal.showModal();
    }else{
      document.documentElement.lang = lang; 
      $('span[lang="es"]').hide();
      $('span[lang="en"]').hide();
      $('span[lang="' + lang + '"]').toggle();
    }
}
  
function setLanguageCookie(lang){
    setCookie('language', lang); 
    setLanguage();
    window.languageModal.close(); 
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
  let name = cname + "=", decodedCookie = decodeURIComponent(document.cookie), cookie = "";
  let cookies = decodedCookie.split(';');
  cookies.forEach(e => {
    while(e.charAt(0) == ' ') e = e.substring(1);
    if(e.indexOf(name) == 0) cookie = e.substring(name.length, e.length);
  });
  
  return cookie;
}