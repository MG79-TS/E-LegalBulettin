const CATS = { world:"World", tech:"Technology", business:"Business", sports:"Sports", culture:"Culture", science:"Science" };
const ARTICLES = [
 {id:1,cat:"world",title:"Marcos urges Filipinos to buy buckets to collect Rainwater as Super El Niño Looms" ,sum:"The president told households to prepare buckets as the government readies a rainwater filtering campaign"
 ,body:"President Ferdinand Marcos Jr. urged Filipinos to prepare buckets and other containers to collect rainwater as the Philippines braces for the expected Super El Niño. He said the government will soon launch an information campaign teaching households how to collect, filter and treat rainwater safely. <br><br> Marcos said the government is preparing for a Super El Niño, which PAGASA calls a “Very Strong El Niño.” It could affect the country more intensely from late October or early November and last until around March 2027. He also said he had told agencies to prepare rice imports to secure food supply. <br><br> The “buy buckets” advice drew public criticism. Malacañang defended it on Oct. 13, with Palace Press Officer Claire Castro saying it was not a joke and was part of serious preparations. The DSWD has since been distributing water filtration kits so that collected rainwater is safe to drink.",
 src:[["SunStar, “Marcos urges Filipinos to prepare water buckets, collect rainwater amid expected drought,” Oct. 12, 2026","https://www.sunstar.com.ph/amp/story/manila/marcos-urges-filipinos-to-prepare-water-buckets-collect-rainwater-amid-expected-drought"],["Philippine Information Agency, “Marcos admin steps up El Niño preparations for water, food and health security,” Oct. 14, 2026","https://pia.gov.ph/news/luzon/ncr/marcos-admin-steps-up-el-nino-preparations-for-water-food-and-health-security"],["The Filipino Times, “Marcos urges Filipinos to prepare buckets for rainwater collection amid Super El Niño threat,” Oct. 12, 2026","https://filipinotimes.net/latest-news/2026/10/12/marcos-urges-filipinos-to-prepare-buckets-for-rainwater-collection-amid-super-el-nino-threat/"],["Philstar, “Palace: Marcos’ ‘buy buckets’ advice part of ‘serious’ El Niño preparations,” Oct. 13, 2026","https://www.philstar.com/headlines/2026/10/13/2562945/palace-marcos-buy-buckets-advice-part-serious-el-nio-preparations"],["The Manila Times, “Marcos: We are ready for Super El Niño,” Oct. 24, 2026","https://www.manilatimes.net/2026/10/24/news/national/marcos-we-are-ready-for-super-el-nio/2452515"]],h:2},
 {id:2,cat:"tech",date:"Oct 12, 2026",title:"House votes to restrict minors’ social media use as Senate weighs a stricter ban",img:"",sum:"Lawmakers are racing to set age limits online, and the two chambers are backing different versions of the same idea.",
  body:"On Monday, Oct. 12, the House of Representatives overwhelmingly approved a bill that bars children under 13 from social media. The Senate has endorsed a stricter version with a higher age limit, and President Marcos said a day earlier that he was still studying it. <br><br> The House bill, the Safe and Friendly Environment for Kids in Digital Spaces Act, combines more than 40 proposals. Teens aged 13 to 17 would get limited access, with short-video feeds that encourage endless scrolling, livestreaming, harmful ads, online purchases and gambling-like features off limits. Platforms would need age-checking systems, and those that fail to comply could be fined P5 million to P20 million. A new office under the DICT would enforce the rules. <br><br> Marcos has warned that a blanket ban could push children to hide what they do online, leaving them more exposed to grooming and abuse. The two chambers still have to reconcile their bills.",
  src:[["Reuters via The Star, Oct. 12, 2026","https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/12/philippine-lower-house-approves-bill-restricting-minors039-social-media-access"],["Unbox PH, House second-reading approval","https://unbox.ph/news/congress-social-media-ban-teens-bill-second-reading/"]],h:360},
 {id:3,cat:"business",date:"Oct 22, 2026",title:"BSP delivers “jumbo” 50-basis-point rate hike, its fourth straight increase",img:"",sum:"The central bank lifted its key rate to 5.50% as it braces for inflation to stay high into next year.",
  body:"The Bangko Sentral ng Pilipinas raised its key policy rate by 50 basis points to 5.50% on Thursday, Oct. 22. It was the biggest increase since February 2023 and bigger than economists expected. The central bank has now hiked at each of its last four meetings. <br><br> Officials said the inflation outlook for next year weighed heavily on the decision, and warned that inflation could keep rising in the last quarter of 2026. Governor Eli Remolona Jr. repeated that the BSP is not raising rates to defend the peso, and said another hike is possible at the final meeting of the year in December. <br><br> In general, a higher policy rate makes borrowing more expensive while rewarding savers with better deposit yields.",
  src:[["Daily Tribune, “BSP delivers ‘jumbo’ 50-basis-point rate hike,” Oct. 22, 2026","https://tribune.net.ph/2026/10/22/bsp-delivers-jumbo-50-basis-point-rate-hike"]],h:120},
 {id:4,cat:"sports",date:"Oct 3, 2026",title:"Philippines posts its biggest Asian Games medal haul in six decades",img:"",sum:"Team Philippines left Aichi-Nagoya with 29 medals, led by golds from Carlos Yulo and EJ Obiena.",
  body:"The Philippines wrapped up the 2026 Asian Games in Aichi-Nagoya with four gold, nine silver and 16 bronze medals, its biggest haul since 1966, according to GMA News. Two-time Olympic champion Carlos Yulo ruled both the floor exercise and the vault, while pole vaulter EJ Obiena won gold and set a new Asian Games record of 5.91 meters. A 22-year-old taekwondo jin delivered another gold late in the campaign. <br><br> Tennis star Alex Eala settled for bronze after a semifinal loss to China’s Wang Xiyu, and more medals came from jiu-jitsu, weightlifting, athletics, gymnastics, esports and beach volleyball.",
  src:[["GMA News, “Philippines posts biggest Asian Games medal haul since 1966”","https://www.gmanetwork.com/news/sports/othersports/1004700/philippines-posts-biggest-asian-games-medal-haul-since-1966/story/"],["GMA News, medal tally and list of medalists","https://www.gmanetwork.com/news/sports/othersports/1004658/2026-asian-games-updated-philippines-medal-tally-and-list-of-medalists-as-of-october-3/story/"]],h:580},
 {id:5,cat:"culture",date:"Oct 14, 2026",title:"A weekend of films, art and music fills Metro Manila",img:"",sum:"KinoFest, ManilART, Manila FAME and a two-day OPM gathering all landed on the same mid-October weekend.",
  body:"From Oct. 14 to 18, culture fans had plenty to choose from. KinoFest 2026, organized by the Goethe-Institut, screens contemporary German films about identity, family and belonging. ManilART 2026 showcases the Philippine art scene, and Manila FAME (Oct. 15 to 17) puts Filipino craftsmanship and design in the spotlight. <br><br> On Oct. 17 and 18, Pinoy Playlist Musikahan 2026 gathers fans of Original Pilipino Music at the BGC Arts Center in Taguig. A Daily Tribune roundup of free October events also lists a Spanish film festival, museum programs at the National Museum and screenings at the Ateneo Art Gallery.",
  src:[["PhilSTAR Life, weekend events for Oct. 16 to 18","https://philstarlife.com/geeky/604070-weekend-events-oct-16-18"],["Daily Tribune, “7 free cultural escapes this October”","https://tribune.net.ph/2026/10/03/7-free-cultural-escapes-this-october"]],h:330},
 {id:6,cat:"science",date:"Oct 5, 2026",title:"DOST: Every province could be in drought by March 2027",img:"",sum:"Scientists say a very strong El Niño is building, and rainfall is already falling short in dozens of provinces.",
  body:"Science Secretary Renato Solidum Jr. said on Oct. 5 that all Philippine provinces are expected to be under drought by the end of March 2027 as El Niño strengthens. He added that rain will still fall during El Niño, just much less of it, and that how low water reserves go will depend on conservation efforts. <br><br> PAGASA’s Sept. 23 climate advisory says a strong El Niño is already active in the tropical Pacific and is expected to intensify into a very strong one between September and December 2026, lasting into the first half of 2027. By September, 45 provinces were already seeing rainfall deficits. <br><br> El Niño is the warm phase of the El Niño-Southern Oscillation, marked by unusually warm sea surface temperatures in the central and eastern equatorial Pacific.",
  src:[["PhilSTAR Life, “All PH provinces forecast to experience drought by end-March 2027,” Oct. 5, 2026","https://philstarlife.com/news-and-views/182327-all-ph-provinces-forecast-under-drought-end-march-2027-dost"],["DOST-PAGASA, Climate Advisory, Sept. 23, 2026","https://pagasa.dost.gov.ph/press-release/225?page=1"],["Asia News Network, Sept. 24, 2026","https://asianews.network/?p=303324"]],h:550},
 {id:7,cat:"tech",date:"Oct 13, 2026",title:"Audit: DTI lost about a year of accounting records to ransomware",img:"",sum:"A COA report says the agency had no offline backups when attackers struck in December 2025.",
  body:"The Commission on Audit’s 2025 report found that a ransomware attack on Dec. 21, 2025 left the Department of Trade and Industry able to recover accounting records only up to Jan. 23, 2025, roughly a year of data lost. Staff had to rebuild the database by hand, which delayed the department’s financial statements. <br><br> COA noted that the database sat on a shared server with no alternative offline or physical backup. DTI blamed limited storage for paper records and too few staff to scan documents. Auditors recommended a separate server, regular backups in a secure environment, and an extra offline copy on external hard drives. <br><br> The lesson for any organization, school projects included: keep at least one backup offline.",
  src:[["Unbox PH, “DTI loses accounting records due to ransomware”","https://unbox.ph/?p=268889"]],h:340},
 {id:8,cat:"world",date:"Latest",title:"Manila readies for the ASEAN leaders’ summit as its year as chair nears the end",img:"",sum:"The Palace says preparations are almost done for the November summit, with U.S. President Trump expected to attend.",
  body:"Malacañang said preparations for hosting the 49th ASEAN Summit and Related Summits in November are mostly done, with only possible improvements left, from the welcome on the tarmac to road traffic adjustments. The Palace has declared Nov. 16 to 18 as holidays for the event, and U.S. President Donald Trump is expected to attend, which would be his first visit to the Philippines in his second term. Earlier schedules listed other dates, so check the official program for exact times. <br><br> The Philippines chairs ASEAN in 2026 under the theme “Navigating Our Future, Together,” built on three priorities: peace and security anchors, prosperity corridors and people empowerment. In the lead-up, Manila has hosted a series of ministerial meetings, including ones on disaster resilience, peace education and women’s leadership. The chairmanship passes to Singapore for 2027.",
  src:[["GMA News, “ASEAN Summit preps mostly done, says Palace”","https://www.gmanetwork.com/news/topstories/nation/1006563/asean-summit-preps-mostly-done-says-palace/story/"],["Bernama, “Philippines Lines Up ASEAN Meetings Ahead Of November Summit,” Sept. 13, 2026","https://www.bernama.com/en/world/news.php?id=2606747"]],h:150},
 {id:9,cat:"business",date:"Oct 15, 2026",title:"Peso breaches P63 per dollar for the first time as inflation climbs",img:"",sum:"A weaker peso and costly oil are squeezing household budgets.",
  body:"The peso closed at P63.15 per US dollar on Thursday, Oct. 15, crossing P63 for the first time and beating the previous record of P62.925 set a month earlier. The central bank pointed to a stronger dollar, shifting expectations about US Federal Reserve moves and pressure from the prolonged Middle East war, which has kept oil prices high. <br><br> The Philippine Statistics Authority reported inflation of 7.2% in September, up from 6.1% in August, and oil firms announced a gasoline price increase of up to P4.30 per litre. The BSP says it steps in only when currency moves turn sharp and disorderly, while the think tank Ibon Foundation says a weak peso combined with pricey imports hits households twice.",
  src:[["Khaleej Times, “Philippine peso hits record low of P63.15 against US dollar as inflation surges”","https://www.khaleejtimes.com/world/asia/philippine-peso-hits-record-low-of-p6315-against-us-dollar-as-inflation-surges"],["Philippine Daily Inquirer, “Peso slips to new historic low,” Sept. 1, 2026","https://business.inquirer.net/608690/peso-slips-to-new-historic-low"]],h:400},
 {id:10,cat:"sports",date:"Oct 2, 2026",title:"Carlo Paalam’s Asian Games gold bid ends in split-decision heartbreak",img:"",sum:"The Olympic medalist took silver after a razor-close 55kg final against Japan’s Rui Yamaguchi.",
  body:"Carlo Paalam fell short in the men’s 55kg final on Friday, Oct. 2, losing by split decision to Japan’s Rui Yamaguchi. Three judges scored the bout 29-28 for Yamaguchi, while two had it 29-28 and 30-27 for Paalam. The result stretches the Philippines’ wait for an Asian Games boxing gold to 16 years, since 2010. <br><br> Paalam had reached the final with wins over India’s Jadumani Singh, China’s Zhang Jiamao and world champion Makhmud Sabyrkhan of Kazakhstan. He was the only Filipino boxer to reach the podium, and said afterward that he would keep training after a short rest.",
  src:[["GMA News, “Carlo Paalam takes home silver in Asian Games boxing”","https://www.gmanetwork.com/news/sports/boxing/1004525/carlo-paalam-takes-home-silver-in-asian-games-boxing/story/"],["Philstar, “Big guns fire again,” Sept. 29, 2026","https://www.philstar.com/sports/2026/09/29/2559676/big-guns-fire-again"]],h:620},
 {id:11,cat:"science",date:"Jul 7, 2026",title:"New gecko species found on Sibuyan Island",img:"",sum:"Scientists named a lizard after a late Filipino taxonomist, adding to the island’s growing list of unique wildlife.",
  body:"The DENR MIMAROPA announced a new gecko species from Sibuyan Island, Luperosaurus alvarezi, named in honor of a late Filipino taxonomist and ecologist. It follows the April 2026 announcement of one of the country’s smallest frogs on the same island. <br><br> The agency says the discovery shows the Philippines is still a megadiverse country with many species waiting to be found, though forests there face pressure from illegal logging, habitat degradation and infrastructure. Earlier in the year, National Museum scientists described six new species of Vombisidris ants collected in Isabela, Palawan and Mindanao.",
  src:[["Daily Tribune, “New gecko species discovered on Sibuyan Island,” Jul. 7, 2026","https://tribune.net.ph/2026/07/07/new-gecko-species-discovered-on-sibuyan-island"],["Interaksyon, “National Museum scientists discover 6 new ant species,” Jan. 14, 2026","https://interaksyon.philstar.com/trends-spotlights/2026/01/14/307643/national-museum-scientists-discover-6-new-ant-species-in-the-philippines/"]],h:2800},
 {id:12,cat:"culture",date:"Oct 1 – Nov 29",title:"Japanese Film Festival heads to six Philippine cities, with Cagayan de Oro a first",img:"",sum:"Screenings run from Oct. 1 to Nov. 29 across eight venues nationwide.",
  body:"The Japanese Film Festival 2026 opened on Oct. 1 and runs until Nov. 29. It screens in Metro Manila, Baguio, Cebu, Iloilo, Davao and Cagayan de Oro, the last of which joins as a first-time host city. In Metro Manila, screenings continue at selected SM Cinema venues. <br><br> The festival is organized by the Japan Foundation, Manila, and appears on the Daily Tribune’s list of free cultural events this month.",
  src:[["The Beat Manila, Japanese Film Festival 2026","https://thebeat.asia/manila/the-list/events/japanese-film-festival-2026"],["Daily Tribune, “7 free cultural escapes this October”","https://tribune.net.ph/2026/10/03/7-free-cultural-escapes-this-october"]],h:600}
];

const $ = id => document.getElementById(id);
const state = { cat:"all", q:"", shown:6 };

function ago(h){ return h < 24 ? `${h}h ago` : `${Math.round(h/24)}d ago`; }
function thumb(a){
  const bg = a.img ? `background-image:url('${a.img}');` : "";
  return `<div class="thumb${a.img ? " has-img" : ""}" style="--c:var(--${a.cat});${bg}">${a.img ? "" : CATS[a.cat]}</div>`;
}
function when(a){ return a.date || ago(a.h); }
function host(u){ try { return new URL(u).hostname.replace("www.",""); } catch(e){ return u; } }
// Turns plain URLs inside a story into clickable links
function linkify(t){
  return t.replace(/https?:\/\/[^\s<"]+/g, u => `<a href="${u}" target="_blank" rel="noopener noreferrer">${host(u)} ↗</a>`);
}
function catLabel(a){ return `<span class="cat" style="--c:var(--${a.cat})">${CATS[a.cat]}</span>`; }

function filtered(){
  const q = state.q.toLowerCase();
  return ARTICLES.filter(a => (state.cat==="all" || a.cat===state.cat) &&
    (!q || (a.title+a.sum).toLowerCase().includes(q))).sort((a,b)=>a.h-b.h);
}

function render(){
  const list = filtered();
  const searching = state.q || state.cat !== "all";
  $("lead").hidden = !!searching || !list.length;
  if(!searching && list.length){
    const [top, ...rest] = list;
    $("lead").innerHTML = `
      <article class="lead-main" data-id="${top.id}" tabindex="0">${thumb(top)}${catLabel(top)}
        <h1>${top.title}</h1><p>${top.sum}</p><span class="meta">${when(top)}</span></article>
      <aside class="side"><h2>Also making news</h2>
        ${rest.slice(0,3).map(a=>`<div class="side-item" data-id="${a.id}" tabindex="0">${catLabel(a)}<h3>${a.title}</h3><span class="meta">${when(a)}</span></div>`).join("")}
      </aside>`;
  }
  const gridList = searching ? list : list.slice(4);
  $("gridTitle").textContent = state.cat==="all" ? (state.q ? "Search results" : "Latest") : CATS[state.cat];
  $("grid").innerHTML = gridList.slice(0, state.shown).map(a => `
    <article class="card" style="--c:var(--${a.cat})" data-id="${a.id}" tabindex="0">
      ${thumb(a)}${catLabel(a)}<h3>${a.title}</h3><p>${a.sum}</p><span class="meta">${when(a)}</span>
    </article>`).join("");
  $("empty").hidden = list.length > 0;
  $("more").hidden = gridList.length <= state.shown;
}

function openStory(id){
  const a = ARTICLES.find(x => x.id === +id);
  if(!a) return;
  const words = (a.sum + " " + a.body).replace(/<[^>]+>/g, " ").split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  const sources = a.src ? `<h3 class="src-title">Sources</h3><ul class="src">${a.src.map(([n,u]) =>
    `<li><a href="${u}" target="_blank" rel="noopener noreferrer"><b>${n}</b><span>${host(u)} ↗</span></a></li>`).join("")}</ul>` : "";
  $("modalBody").style.setProperty("--c", `var(--${a.cat})`);
  $("modalBody").innerHTML = `${catLabel(a)}<h2>${a.title}</h2>
    <p class="meta">${when(a)} · ${mins} min read</p>
    ${thumb(a)}
    <p class="summary">${a.sum}</p>
    <div class="story">${linkify(a.body)}</div>${sources}`;
  $("modalBody").scrollTop = 0;
  $("modal").showModal();
}

// Tabs
$("tabs").innerHTML = [["all","All"], ...Object.entries(CATS)]
  .map(([k,v]) => `<button class="tab" data-cat="${k}" aria-pressed="${k==="all"}">${v}</button>`).join("");
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if(!b) return;
  state.cat = b.dataset.cat; state.shown = 6;
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-pressed", t === b));
  render();
});

// Search, load more, open story
$("search").addEventListener("input", e => { state.q = e.target.value.trim(); state.shown = 6; render(); });
$("more").addEventListener("click", () => { state.shown += 6; render(); });
document.addEventListener("click", e => { const s = e.target.closest("[data-id]"); if(s) openStory(s.dataset.id); });
document.addEventListener("keydown", e => {
  if(e.key === "Enter"){ const s = e.target.closest("[data-id]"); if(s) openStory(s.dataset.id); }
});
$("closeModal").addEventListener("click", () => $("modal").close());
$("modal").addEventListener("click", e => { if(e.target === $("modal")) $("modal").close(); });

// Theme
$("themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = getComputedStyle(root).getPropertyValue("--bg").trim() === "#0c1224";
  root.dataset.theme = dark ? "light" : "dark";
});

// Ticker and date
$("tickerText").textContent = ARTICLES.slice(0,5).map(a => a.title).join("   •   ");
$("today").textContent = new Date().toLocaleDateString(undefined,{weekday:"long",year:"numeric",month:"long",day:"numeric"});

render();
