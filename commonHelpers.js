import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-651d7991.js";const e=document.querySelector(".start-btn"),f=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");e.disabled=!0;let s,a,r;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],a=s.getTime()-Date.now(),s<Date.now()?(m.show({message:"Please choose a date in the future",messageColor:"#FFF",backgroundColor:"#EF4040",position:"topRight",iconUrl:iconClose}),e.disabled=!0):e.disabled=!1}};function b(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:i,seconds:u}}function n(t){return t.toString().padStart(2,"0")}function C(t){const o=b(t);f.textContent=`${n(o.days)}`,h.textContent=`${n(o.hours)}`,y.textContent=`${n(o.minutes)}`,p.textContent=`${n(o.seconds)}`}function g(){e.disabled=!0,r=setInterval(()=>{a<=0?(clearInterval(r),e.disabled=!0):(C(a),a-=1e3)},1e3)}l("#datetime-picker",S);e.addEventListener("click",()=>{g()});
//# sourceMappingURL=commonHelpers.js.map
