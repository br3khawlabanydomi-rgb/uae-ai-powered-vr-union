import {audioFiles} from './audio-map.js';
let current=null,seq=0,rate=1,voice=null;
const synthesis=globalThis.speechSynthesis;
export function stopVoice(){seq++;if(current){current.pause();current=null} synthesis?.cancel();document.querySelectorAll('.speaking').forEach(b=>b.classList.remove('speaking'))}
export function setRate(n){rate=Number(n)||1;if(current)current.playbackRate=rate}
function findArabic(){let voices=synthesis?.getVoices()||[];return voices.find(v=>/^ar-AE$/i.test(v.lang))||voices.find(v=>/^ar-/i.test(v.lang))||voices.find(v=>/^ar$/i.test(v.lang))}
export function narrate(parts,arabic,enabled=true){stopVoice();if(!enabled)return;const token=seq;let list=Array.isArray(parts)?parts:[parts];list=list.filter(Boolean);const update=state=>document.querySelectorAll('[data-listen]').forEach(b=>b.classList.toggle('speaking',state));update(true);
function next(){if(token!==seq)return;let message=list.shift();if(!message){update(false);return}let recorded=arabic&&audioFiles[message];voice=arabic?findArabic():null;
const playRecorded=()=>{if(!recorded){next();return}current=new Audio('./audio/'+recorded+'?v=natural-ar-v1');current.playbackRate=rate;current.onended=next;current.onerror=next;current.play().catch(()=>{if(token===seq){update(false);document.dispatchEvent(new CustomEvent('narration-unavailable'))}})};
if(recorded){playRecorded();return}if(voice||(!arabic&&synthesis)){const u=new SpeechSynthesisUtterance(message);u.lang=arabic?'ar-AE':'en-GB';if(voice)u.voice=voice;u.rate=rate;u.onend=next;u.onerror=()=>{if(token===seq)next()};synthesis.speak(u)}else next()}
next()}
