const div = document.getElementById('target');

function manipulateDocument() {
  const browser = parseBrowser();
  const os = navigator?.userAgentData?.platform || navigator?.platform;
  const screenHeight = screen.height;
  const screenWidth = screen.width;
  const date = new Intl.DateTimeFormat('fi-FI', {day:"numeric", month:"long", year:"numeric"});
  const time = new Intl.DateTimeFormat('fi-FI', {hour:"2-digit", minute:"2-digit", hour12:"false"});
  div.innerHTML = `
  <p>Browser: ${browser.name} version: ${browser.version}</p>
  <p>OS: ${os}</p>
  <p>screen width: ${screenWidth}, screen height: ${screenHeight}</p>
  <p>browser can use: w : ${screen.availWidth}, h : ${screen.availHeight} </p>
  <p>date: ${date.format(new Date())} </p>
  <p>time: ${time.format(new Date())} </p>
  `
}

function parseBrowser() {
  const userAgent = navigator.userAgent;
  if (/Edg\/(\d+(\.\d+)*)/i.test(userAgent)) return { name: "Microsoft Edge", version: RegExp.$1 };
  if (/Chrome\/(\d+(\.\d+)*)/i.test(userAgent) && !/Edg|OPR/i.test(userAgent)) return { name: "Google Chrome", version: RegExp.$1 };
  if (/Firefox\/(\d+(\.\d+)*)/i.test(userAgent)) return { name: "Mozilla Firefox", version: RegExp.$1 };
  if (/Safari/i.test(userAgent) && !/Chrome|Edg|OPR/i.test(userAgent)) {
    const m = userAgent.match(/Version\/(\d+(\.\d+)*)/i);
    return { name: "Apple Safari", version: m ? m[1] : "unknown" };
  }
  return { name: "Unknown", version: "unknown" };
}
manipulateDocument();
