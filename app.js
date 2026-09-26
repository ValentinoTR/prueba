/* =========================================================
   AO NEXUS — Lógica del sitio
   ========================================================= */

const WA_NUMBER = '51936177329';

/* ---------- Etiquetas de categoría ---------- */
const categoryLabels = {
  "amd":"Procesador AMD",
  "intel":"Procesador Intel",
  "placa-am4":"Placa Madre · AM4",
  "placa-am5":"Placa Madre · AM5",
  "placa-lga1851":"Placa Madre · LGA1851",
  "ddr4":"Memoria RAM DDR4",
  "ddr5":"Memoria RAM DDR5",
  "almacenamiento":"Almacenamiento SSD",
  "fuente-bronze":"Fuente de Poder · Bronze",
  "fuente-silver":"Fuente de Poder · Silver",
  "fuente-gold":"Fuente de Poder · Gold",
  "fuente-platinum":"Fuente de Poder · Platinum",
  "refrigeracion-liquida":"Refrigeración Líquida",
  "refrigeracion-aire":"Refrigeración de Aire",
  "gpu":"Tarjeta Gráfica",
  "case":"Gabinete"
};

/* ---------- Grupos de la barra superior ---------- */
const groups = {
  procesador:     { label:'Procesadores',      cats:['amd','intel'] },
  placas:         { label:'Placas Madre',      cats:['placa-am4','placa-am5','placa-lga1851'] },
  ram:            { label:'Memorias RAM',      cats:['ddr4','ddr5'] },
  almacenamiento: { label:'Almacenamiento',    cats:['almacenamiento'] },
  fuente:         { label:'Fuentes de Poder',  cats:['fuente-bronze','fuente-silver','fuente-gold','fuente-platinum'] },
  refrigeracion:  { label:'Refrigeración',     cats:['refrigeracion-liquida','refrigeracion-aire'] },
  gpu:            { label:'Tarjetas Gráficas', cats:['gpu'] },
  gabinete:       { label:'Gabinetes',         cats:['case'] }
};

/* ---------- Subgrupos: cada categoría de la barra que debe verse
   dividida en secciones separadas dentro del catálogo ---------- */
const subGroups = {
  procesador:    [ { label:'AMD',                    cats:['amd'] },
                   { label:'Intel',                  cats:['intel'] } ],
  placas:        [ { label:'AMD · Socket AM5',        cats:['placa-am5'] },
                   { label:'AMD · Socket AM4',        cats:['placa-am4'] },
                   { label:'Intel · Socket LGA1851',  cats:['placa-lga1851'] } ],
  ram:           [ { label:'DDR5',                    cats:['ddr5'] },
                   { label:'DDR4',                    cats:['ddr4'] } ],
  refrigeracion: [ { label:'Refrigeración Líquida',   cats:['refrigeracion-liquida'] },
                   { label:'Torre de Aire',            cats:['refrigeracion-aire'] } ]
};

/* ---------- Catálogo ----------
   Organizado por categoría. Los "id" van correlativos (1, 2, 3...) en el
   orden de este archivo y NUNCA se pueden repetir: el carrito, favoritos,
   el modal y "Arma tu PC" identifican cada producto por su id.
   Dentro de cada categoría, el comentario "// AMD #1", "// PLACA AM5 #2"...
   es solo una guía visual que reinicia en 1 por categoría.

   PARA AGREGAR UN PRODUCTO: cópialo dentro de su categoría, ponle el
   siguiente id libre (el próximo es 33) y el siguiente número de categoría
   en el comentario. Si lo agregas en medio de la lista, los id quedarán
   salteados: no pasa nada, la web funciona igual (el orden en pantalla lo
   decide el precio, no el id). ---------- */
const products = [
  // ================== PROCESADOR AMD ==================
  // AMD #1
  { id:1, name:"RYZEN 5 9600X", category:"amd", price:700, stock:5, featured:true, best:true,
    sub:"6 núcleos / 12 hilos · AM5", image:"img/PROCESADOR/RYZEN_5_9600X.webp",
    specs:{ "Familia":"Ryzen 5 9600X","Cores/Threads":"6C/12T","Frecuencia Base":"4.4 GHz","Socket":"AM5","TDP":"65W" } },

  // AMD #2
  { id:2, name:"RYZEN 7 7800X3D", category:"amd", price:1450, stock:1, featured:true, best:true,
    sub:"8 núcleos / 16 hilos · 3D V-Cache", image:"img/PROCESADOR/RYZEN_7_7800X3D.webp",
    specs:{ "Familia":"Ryzen 7 7800X3D","Cores/Threads":"8C/16T","Frecuencia Base":"4.2 GHz","Socket":"AM5","TDP":"120W","3D V-Cache":"Sí" } },

  // AMD #3
  { id:3, name:"RYZEN 7 9800X3D", category:"amd", price:1700, stock:1, featured:true, best:true,
    sub:"8 núcleos / 16 hilos · AM5", image:"img/PROCESADOR/RYZEN_7_9800X3d.webp",
    specs:{ "Familia":"Ryzen 7 9800X3D","Cores/Threads":"8C/16T","Frecuencia Base":"4.7 GHz","Socket":"AM5","TDP":"120W" } },

  // AMD #4
  { id:4, name:"RYZEN 9 9950X3D", category:"amd", price:2700, stock:1, featured:true, best:false,
    sub:"16 núcleos / 32 hilos · AM5", image:"img/PROCESADOR/RYZEN_9_9500X3D.webp",
    specs:{ "Familia":"Ryzen 9 9950X3D","Cores/Threads":"16C/32T","Frecuencia Base":"4.3 GHz","Socket":"AM5","TDP":"120W" } },

  // AMD #5
  { id:5, name:"RYZEN 9 9900X", category:"amd", price:1400, stock:1, featured:true, best:false, isNew:true,
    sub:"12 núcleos / 24 hilos · AM5", image:"img/PROCESADOR/RYZEN_9_9900X.webp",
    specs:{ "Familia":"Ryzen 9 9900X","Cores/Threads":"12C/24T","Frecuencia Base":"3.9 GHz","Socket":"AM5","TDP":"120W" } },

  // AMD #6
  { id:6, name:"RYZEN 5 5500", category:"amd", price:350, stock:1, featured:true, best:false, isNew:true,
    sub:"6 núcleos / 12 hilos · AM4", image:"img/PROCESADOR/Ryzen_5_5500.webp",
    specs:{ "Familia":"Ryzen 5 5500","Cores/Threads":"6C/12T","Frecuencia Base":"3.6 GHz","Socket":"AM4","TDP":"65W" } },

  // AMD #7
  { id:7, name:"RYZEN 7 7700X", category:"amd", price:900, stock:1, featured:true, best:false, isNew:true,
    sub:"8 núcleos / 16 hilos · AM5", image:"img/PROCESADOR/RYZEN_7_7700X.webp",
    specs:{ "Familia":"Ryzen 7 7700X","Cores/Threads":"8C/16T","Frecuencia Base":"4.5 GHz","Socket":"AM5","TDP":"105W" } },

  // ================== PROCESADOR INTEL ==================
  // INTEL #1
  { id:8, name:"INTEL CORE ULTRA 5 225F", category:"intel", price:550, stock:2, featured:false, best:true,
    sub:"6 núcleos / 8 hilos · LGA1851", image:"img/PROCESADOR/ULTRA_5_225F.webp",
    specs:{ "Familia":"Core Ultra 5 225F","Cores/Threads":"6C/8T","Frecuencia Base":"3.7 GHz","Socket":"LGA1851","TDP":"58W" } },

  // INTEL #2
  { id:9, name:"INTEL CORE ULTRA 7 270K PLUS", category:"intel", price:1150, stock:1, featured:true, best:false,
    sub:"8 núcleos / 12 hilos · LGA1851", image:"img/PROCESADOR/ULTRA_7_270K_PLUS.webp",
    specs:{ "Familia":"Core Ultra 7 270K PLUS","Cores/Threads":"8C/12T","Frecuencia Base":"3.6 GHz","Socket":"LGA1851","TDP":"125W" } },

  // INTEL #3
  { id:10, name:"INTEL CORE ULTRA 9 285K", category:"intel", price:2000, stock:1, featured:true, best:true,
    sub:"24 núcleos · LGA1851", image:"img/PROCESADOR/ULTRA_9_285K.webp",
    specs:{ "Familia":"Core Ultra 9 285K","Cores/Threads":"24C/24T","Frecuencia Base":"3.7 GHz","Socket":"LGA1851","TDP":"125W" } },

  // ================== PLACA AMD · SOCKET AM4 ==================
  // PLACA AM4 #1
  { id:11, name:"B550-PLUS ASUS TUF WIFI II", category:"placa-am4", price:480, stock:2, featured:true, best:true,
    sub:"Socket AM4 · ATX · WiFi 6", image:"img/PLACA/B550_PLUS_WIFI_ll.webp",
    specs:{ "Modelo":"B550-PLUS WIFI II ASUS TUF GAMING","Socket":"AM4","Chipset":"B550","Factor Forma":"ATX","WiFi":"WiFi 6" } },

  // ================== PLACA AMD · SOCKET AM5 ==================
  // PLACA AM5 #1
  { id:12, name:"B850M-E ASUS TUF WIFI", category:"placa-am5", price:650, stock:1, featured:true, best:false,
    sub:"Socket AM5 · Micro-ATX · WiFi 7", image:"img/PLACA/B850M-E_ASUS_TUF_WIFI.webp",
    specs:{ "Modelo":"B850M-E ASUS TUF WIFI","Socket":"AM5","Chipset":"B850M","Factor Forma":"Micro-ATX","WiFi":"WiFi 7" } },

  // PLACA AM5 #2
  { id:13, name:"B850 MAX GAMING WIFI W", category:"placa-am5", price:670, stock:1, featured:false, best:false,
    sub:"Socket AM5 · ATX · WiFi 6E", image:"img/PLACA/B850_MAX_GAMING_WIFI_W.webp",
    specs:{ "Modelo":"B850 MAX GAMING WIFI W","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 6E" } },

  // PLACA AM5 #3
  { id:14, name:"B850-S MSI PRO WIFI6E", category:"placa-am5", price:580, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX · WiFi 6E", image:"img/PLACA/B850-S_MSI_PRO_WIFI6E.webp",
    specs:{ "Modelo":"MSI PRO B850-S WIFI6E","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 6E" } },

  // PLACA AM5 #4
  { id:15, name:"GIGABYTE B850M EAGLE WIFI6E", category:"placa-am5", price:650, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · Micro-ATX · WiFi 6E", image:"img/PLACA/GIGABYTE_B850M_EAGLE_WIFI6E.webp",
    specs:{ "Modelo":"Gigabyte B850M EAGLE WIFI6E","Socket":"AM5","Chipset":"B850","Factor Forma":"Micro-ATX","WiFi":"WiFi 6E" } },

  // PLACA AM5 #5
  { id:16, name:"B850 GIGABYTE EAGLE ICE WIFI7", category:"placa-am5", price:750, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX · WiFi 7", image:"img/PLACA/B850_GIGABYTE_EAGLE_ICE_WIFI7.webp",
    specs:{ "Modelo":"Gigabyte B850 EAGLE WIFI7 ICE","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 7","Color":"Blanco" } },

  // PLACA AM5 #6
  { id:17, name:"GIGABYTE B650 GAMING X AX", category:"placa-am5", price:550, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX · WiFi 6E", image:"img/PLACA/GIGABYTE_B650_GAMING_X_AX.webp",
    specs:{ "Modelo":"Gigabyte B650 GAMING X AX","Socket":"AM5","Chipset":"B650","Factor Forma":"ATX","WiFi":"WiFi 6E" } },

  // PLACA AM5 #7
  { id:18, name:"B850-F ASUS ROG STRIX GAMING WIFI7 NEO", category:"placa-am5", price:850, stock:1, featured:true, best:false, isNew:true,
    sub:"Socket AM5 · ATX · WiFi 7", image:"img/PLACA/B850-F_ASUS_ROG_STRIX_GAMING_WIFI7_NEO.webp",
    specs:{ "Modelo":"ASUS ROG STRIX B850-F GAMING WIFI7 NEO","Socket":"AM5","Chipset":"B850","Factor Forma":"ATX","WiFi":"WiFi 7" } },

  // ================== RAM DDR4 ==================
  // DDR4 #1
  { id:19, name:"NETAC 2X16GB 3200MHZ DDR4", category:"ddr4", price:650, stock:1, featured:false, best:false,
    sub:"32GB (2x16GB) DDR4 3200MHz", image:"img/RAM/NETAC_2X16GB_3200MHZ.webp",
    specs:{ "Capacidad":"2x16GB (32GB Total)","Tipo":"DDR4","Velocidad":"3200 MHz","CAS Latency":"CAS 16","Voltaje":"1.35V" } },

  // ================== RAM DDR5 ==================
  // DDR5 #1
  { id:20, name:"TEAMGROUP T-FORCE VULCAN 2x8GB DDR5", category:"ddr5", price:720, stock:1, featured:false, best:true,
    sub:"16GB (2x8GB) DDR5 5200MHz", image:"img/RAM/TEAMGROUP_TFORCE_VULCAN_DDR5.webp",
    specs:{ "Capacidad":"2x8GB (16GB Total)","Tipo":"DDR5","Velocidad":"5200 MHz","CAS Latency":"CAS 24","Voltaje":"1.25V" } },

  // DDR5 #2
  { id:21, name:"CORSAIR VENGEANCE RGB 2X16GB DDR5 6400MHZ CL36 BLACK", category:"ddr5", price:1900, stock:1, featured:true, best:false, isNew:true,
    sub:"32GB (2x16GB) DDR5 6400MHz · RGB", image:"img/RAM/CORSAIR_VENGEANCE_RGB_DDR5_6400.webp",
    specs:{ "Capacidad":"2x16GB (32GB Total)","Tipo":"DDR5","Velocidad":"6400 MHz","CAS Latency":"CAS 36","Voltaje":"1.35V","Color":"Negro","Iluminación":"RGB" } },

  // ================== ALMACENAMIENTO ==================
  // ALMACENAMIENTO #1
  { id:22, name:"SSD SAMSUNG 9100 PRO 1TB", category:"almacenamiento", price:950, stock:1, featured:true, best:true,
    sub:"M.2 NVMe PCIe 5.0 · 14,800 MB/s", image:"img/SSD/SSD_SAMSUNG_9100_PRO_1TB.webp",
    specs:{ "Capacidad":"1TB","Interfaz":"NVMe PCIe Gen 5.0","Factor Forma":"M.2 2280","Lectura":"14,800 MB/s","Escritura":"13,400 MB/s" } },

  // ALMACENAMIENTO #2
  { id:23, name:"SSD T-FORCE G50 4TB", category:"almacenamiento", price:2100, stock:1, featured:false, best:false,
    sub:"M.2 NVMe PCIe 4.0 · 4TB", image:"img/SSD/SSD_T-FORCE_G50_4TB.webp",
    specs:{ "Capacidad":"4TB","Interfaz":"NVMe PCIe Gen 4.0","Factor Forma":"M.2 2280","Lectura":"5,000 MB/s","Escritura":"4,500 MB/s" } },

  // ================== FUENTE DE PODER · BRONZE ==================
  // FUENTE BRONZE #1
  { id:24, name:"CORSAIR CX750 750W", category:"fuente-bronze", price:200, stock:1, featured:true, best:true,
    sub:"750W · 80 Plus Bronze", image:"img/CORSAIR_CX750_750W.webp",
    specs:{ "Potencia":"750W","Certificación":"80+ Bronze","Tipo":"No Modular","Factor Forma":"ATX","Garantía":"1 año" } },

  // ================== REFRIGERACIÓN LÍQUIDA ==================
  // REFRIGERACIÓN LÍQUIDA #1
  { id:25, name:"COOLERMASTER ELITE 240MM", category:"refrigeracion-liquida", price:120, stock:3, featured:true, best:false,
    sub:"Líquida AIO 240mm · Intel & AMD", image:"img/REFRIGERACION/COOLERMASTER_ELITE_240MM.webp",
    specs:{ "Tipo":"Liquid Cooler AIO","Tamaño":"240mm","TDP":"Hasta 250W","Compatibilidad":"Intel & AMD","Garantía":"1 año" } },

  // REFRIGERACIÓN LÍQUIDA #2
  { id:26, name:"THERMALRIGHT ELITE VISION 360 ARGB WHITE", category:"refrigeracion-liquida", price:350, stock:1, featured:true, best:false, isNew:true,
    sub:"Líquida AIO 360mm · ARGB Blanco", image:"img/REFRIGERACION/THERMALRIGHT_ELITE_VISION_360_ARGB_WHITE.webp",
    specs:{ "Tipo":"Liquid Cooler AIO","Tamaño":"360mm","Ventiladores":"3x 120mm ARGB","Compatibilidad":"Intel & AMD","Color":"Blanco","Garantía":"1 año" } },

  // ================== REFRIGERACIÓN DE AIRE ==================
  // REFRIGERACIÓN AIRE #1
  { id:27, name:"THERMALRIGHT PEERLESS ASSASSIN 120 DIGITAL ARGB WHITE", category:"refrigeracion-aire", price:170, stock:2, featured:false, best:true,
    sub:"Dual Tower · 245W · ARGB Blanco", image:"img/REFRIGERACION/THERMALRIGHT_RGB.webp",
    specs:{ "Tipo":"Refrigeración por Aire Dual Tower","TDP":"245W","Ventiladores":"2x 120mm ARGB","Compatibilidad":"Intel LGA115X/1200/1700/1851 & AMD AM4/AM5","Color":"Blanco","Pantalla":"Digital CPU/GPU" } },

  // ================== TARJETAS GRÁFICAS ================== (placeholder: reemplaza precio/stock/foto por tu stock real)
  // GPU #1
  { id:28, name:"RTX 5060 8GB", category:"gpu", price:1550, stock:1, featured:true, best:false, isNew:true,
    sub:"8GB GDDR7 · PCIe 5.0", image:"img/GRAFICAS/RTX_5060_8GB.webp",
    specs:{ "Modelo":"GeForce RTX 5060","Memoria":"8GB GDDR7","Interfaz":"PCIe 5.0","Salidas":"3x DP 2.1 / 1x HDMI 2.1","Garantía":"1 año" } },

  // GPU #2
  { id:29, name:"RTX 5070 12GB", category:"gpu", price:2600, stock:1, featured:true, best:false, isNew:true,
    sub:"12GB GDDR7 · PCIe 5.0", image:"img/GRAFICAS/RTX_5070_12GB.webp",
    specs:{ "Modelo":"GeForce RTX 5070","Memoria":"12GB GDDR7","Interfaz":"PCIe 5.0","Salidas":"3x DP 2.1 / 1x HDMI 2.1","Garantía":"1 año" } },

  // GPU #3
  { id:30, name:"RTX 5080 16GB", category:"gpu", price:4800, stock:1, featured:true, best:false, isNew:true,
    sub:"16GB GDDR7 · PCIe 5.0", image:"img/GRAFICAS/RTX_5080_16GB.webp",
    specs:{ "Modelo":"GeForce RTX 5080","Memoria":"16GB GDDR7","Interfaz":"PCIe 5.0","Salidas":"3x DP 2.1 / 1x HDMI 2.1","Garantía":"1 año" } },

  // ================== GABINETES ================== (placeholder: reemplaza precio/stock/foto por tu stock real)
  // GABINETE #1
  { id:31, name:"GABINETE ATX MID TOWER ARGB", category:"case", price:180, stock:2, featured:false, best:false, isNew:true,
    sub:"ATX · Panel de vidrio · 4 ventiladores ARGB", image:"img/GABINETE_ATX_MID_TOWER_ARGB.webp",
    specs:{ "Factor Forma":"ATX / Micro-ATX / Mini-ITX","Panel":"Vidrio templado","Ventiladores incluidos":"4x 120mm ARGB","Radiador máx.":"360mm" } },

  // GABINETE #2
  { id:32, name:"GABINETE FULL TOWER ARGB", category:"case", price:280, stock:1, featured:false, best:false, isNew:true,
    sub:"Full Tower · Panel de vidrio · 6 ventiladores ARGB", image:"img/GABINETE_FULL_TOWER_ARGB.webp",
    specs:{ "Factor Forma":"E-ATX / ATX / Micro-ATX / Mini-ITX","Panel":"Vidrio templado","Ventiladores incluidos":"6x 120mm ARGB","Radiador máx.":"420mm" } }
];

/* ---------- PCs armadas destacadas (prebuilts para el inicio) ---------- */
const prebuilds = [
  { id:'pc-esports', name:"PC ESPORTS", price:2499,
    specs:["Ryzen 5 9600X","16GB DDR5","RTX 5060 8GB"],
    tag:"Ideal para esports y streaming ligero" },
  { id:'pc-nexus-pro', name:"PC NEXUS PRO", price:4299,
    specs:["Ryzen 7 7800X3D","32GB DDR5","RTX 5070 12GB"],
    tag:"Gaming en alta calidad y creación de contenido" },
  { id:'pc-nexus-xtreme', name:"PC NEXUS XTREME", price:7999,
    specs:["Ryzen 7 9800X3D","32GB DDR5","RTX 5080 16GB"],
    tag:"Tope de gama para 4K y producción exigente" }
];

/* ---------- Categorías populares (imagen tomada de un producto real) ---------- */
const popularCategories = [
  { group:'procesador',     label:'Procesadores',     img:'img/PROCESADOR/RYZEN_7_9800X3d.webp' },
  { group:'gpu',            label:'Tarjetas Gráficas',img:'img/GRAFICAS/RTX_5060_8GB.webp' },
  { group:'placas',         label:'Placas Madre',     img:'img/PLACA/B850M-E_ASUS_TUF_WIFI.webp' },
  { group:'ram',            label:'Memorias RAM',     img:'img/RAM/TEAMGROUP_TFORCE_VULCAN_DDR5.webp' },
  { group:'almacenamiento', label:'Almacenamiento',   img:'img/SSD/SSD_SAMSUNG_9100_PRO_1TB.webp' },
  { group:'fuente',         label:'Fuentes de Poder', img:'img/CORSAIR_CX750_750W.webp' },
  { group:'refrigeracion',  label:'Refrigeración',    img:'img/REFRIGERACION/COOLERMASTER_ELITE_240MM.webp' },
  { group:'gabinete',       label:'Gabinetes',        img:'img/GABINETE_ATX_MID_TOWER_ARGB.webp' }
];

/* ---------- Estado ---------- */
let currentProduct = null;
let currentGroup   = null;
let specialFilter  = null;   // null | 'ofertas' | 'vendidos'
let currentSort    = 'price-asc';
let onlyInStock    = false;
let searchTerm     = '';
const cart         = new Map();   // id -> qty
const favorites    = new Set();

const PLACEHOLDER = "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22300%22%3E%3Crect%20fill=%22%23131a2e%22%20width=%22300%22%20height=%22300%22/%3E%3Ctext%20x=%22150%22%20y=%22155%22%20font-family=%22sans-serif%22%20font-size=%2216%22%20fill=%22%235a678c%22%20text-anchor=%22middle%22%3EAO%20NEXUS%3C/text%3E%3C/svg%3E";

/* =========================================================
   UTILIDADES
   ========================================================= */
const money = n => 'S/ ' + n.toLocaleString('es-PE');

function stockInfo(stock){
  if(stock === 0) return { cls:'no', text:'Sin stock' };
  return { cls:'ok', text:'En stock' };
}

function toast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="fas fa-circle-check"></i> ${msg}`;
  requestAnimationFrame(()=> t.classList.add('show'));
  clearTimeout(t._tm);
  t._tm = setTimeout(()=> t.classList.remove('show'), 2400);
}

function scrollTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
function focusSearch(){ document.getElementById('searchInput').focus(); }
function toggleNav(){ document.getElementById('catNav').classList.toggle('open'); }
function toggleTerms(){
  const box = document.getElementById('termsBox');
  box.hidden = !box.hidden;
  if(!box.hidden) box.scrollIntoView({behavior:'smooth', block:'center'});
}

/* =========================================================
   TARJETAS
   ========================================================= */
function productCard(p){
  const s = stockInfo(p.stock);
  const cat = categoryLabels[p.category] || '';
  const hasSale = p.oldPrice && p.oldPrice > p.price;
  const off = hasSale ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  return `
  <article class="p-card">
    <div class="p-media" onclick="openModal(${p.id})">
      ${hasSale ? `<span class="p-badge">-${off}%</span>` : ''}
      <button class="p-fav ${favorites.has(p.id)?'on':''}" onclick="event.stopPropagation();toggleFav(${p.id},this)" title="Guardar">
        <i class="fa${favorites.has(p.id)?'s':'r'} fa-heart"></i>
      </button>
      <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
    </div>
    <div class="p-body">
      <span class="p-cat">${cat}</span>
      <h4 class="p-name" onclick="openModal(${p.id})" style="cursor:pointer">${p.name}</h4>
      <p class="p-spec">${p.sub || ''}</p>
      <div class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</div>
      <div class="p-prices">
        <span class="p-price ${hasSale?'sale':''}">${money(p.price)}</span>
        ${hasSale ? `<span class="p-old">${money(p.oldPrice)}</span>` : ''}
      </div>
      <button class="p-btn" onclick="openModal(${p.id})">
        <i class="fas fa-cart-shopping"></i> VER DETALLES
      </button>
    </div>
  </article>`;
}

function toggleFav(id, el){
  if(favorites.has(id)){ favorites.delete(id); el.classList.remove('on'); el.innerHTML = '<i class="far fa-heart"></i>'; }
  else { favorites.add(id); el.classList.add('on'); el.innerHTML = '<i class="fas fa-heart"></i>'; toast('Guardado en favoritos'); }
  savePersisted();
}

/* =========================================================
   PERSISTENCIA (carrito y favoritos sobreviven a recargar/cerrar)
   ========================================================= */
const STORAGE_CART = 'aonexus_cart_v2';
const STORAGE_FAVS = 'aonexus_favs_v2';

function loadPersisted(){
  try{
    const savedCart = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
    savedCart.forEach(([id, qty]) => {
      const p = products.find(x => x.id === id);
      if(p) cart.set(id, Math.min(qty, Math.max(p.stock, 1)));
    });
  }catch(e){ /* localStorage no disponible: seguimos sin recordar el carrito */ }

  try{
    const savedFavs = JSON.parse(localStorage.getItem(STORAGE_FAVS) || '[]');
    savedFavs.forEach(id => favorites.add(id));
  }catch(e){ /* localStorage no disponible: seguimos sin recordar favoritos */ }
}

function savePersisted(){
  try{ localStorage.setItem(STORAGE_CART, JSON.stringify([...cart.entries()])); }catch(e){}
  try{ localStorage.setItem(STORAGE_FAVS, JSON.stringify([...favorites])); }catch(e){}
}

function sortList(list, mode){
  const out = [...list];
  if(mode === 'price-asc')  out.sort((a,b)=> a.price - b.price);
  if(mode === 'price-desc') out.sort((a,b)=> b.price - a.price);
  if(mode === 'name-asc')   out.sort((a,b)=> a.name.localeCompare(b.name));
  if(mode === 'stock')      out.sort((a,b)=> b.stock - a.stock);
  return out;
}

/* =========================================================
   HOME
   ========================================================= */
function renderHome(){
  document.getElementById('featuredGrid').innerHTML =
    products.filter(p => p.featured).slice(0,5).map(productCard).join('');

  document.getElementById('bestsellersGrid').innerHTML =
    products.filter(p => p.best).slice(0,5).map(productCard).join('');

  document.getElementById('categoryGrid').innerHTML = popularCategories.map(c => `
    <div class="c-card" onclick="filterByGroup('${c.group}')">
      <img src="${c.img}" alt="${c.label}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
      <div class="c-label">${c.label} <i class="fas fa-arrow-right"></i></div>
    </div>`).join('');

  renderPrebuilds();
}

/* =========================================================
   PCs ARMADAS DESTACADAS
   ========================================================= */
function renderPrebuilds(){
  const box = document.getElementById('prebuildGrid');
  if(!box) return;
  box.innerHTML = prebuilds.map(pc => `
    <div class="pre-card ${pc.highlight ? 'hl' : ''}">
      ${pc.highlight ? '<span class="pre-badge">MÁS ELEGIDA</span>' : ''}
      <div class="pre-icon"><i class="fas fa-computer"></i></div>
      <h3 class="pre-name">${pc.name}</h3>
      <ul class="pre-specs">${pc.specs.map(s => `<li><i class="fas fa-check"></i>${s}</li>`).join('')}</ul>
      <p class="pre-tag">${pc.tag}</p>
      <div class="pre-price">${money(pc.price)}</div>
      <button class="btn-wa full" onclick="quotePrebuild('${pc.id}')"><i class="fab fa-whatsapp"></i> COTIZAR ESTA PC</button>
    </div>`).join('');
}

function quotePrebuild(id){
  const pc = prebuilds.find(x => x.id === id);
  if(!pc) return;
  const msg = `Hola AO NEXUS, me interesa la *${pc.name}* (${pc.specs.join(' · ')}) a ${money(pc.price)}. ¿Está disponible?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleGalleryError(img){
  const item = img.closest('.gallery-item');
  if(!item) return;
  item.classList.add('ph');
  item.innerHTML = '<i class="fas fa-camera"></i><span>Foto próximamente</span>';
}

const homeSections = ['heroSection','prebuildsSection','featuredSection','categoriesSection','bestsellersSection','gallerySection','paymentsSection','helpCtaSection','builderCtaSection'];

/* Vistas del sitio: 'home' | 'catalog' | 'builder' */
function setView(view){
  homeSections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.style.display = (view === 'home') ? '' : 'none';
  });
  const bm = document.querySelector('.benefits-mobile');
  if(bm) bm.style.display = (view === 'home') ? '' : 'none';

  const cat = document.getElementById('productsSection');
  if(cat) cat.style.display = (view === 'catalog') ? 'block' : 'none';

  const bld = document.getElementById('builderSection');
  if(bld) bld.style.display = (view === 'builder') ? 'block' : 'none';
}

/* Compatibilidad con el código anterior */
function showHomeSections(show){ setView(show ? 'home' : 'catalog'); }

/* Abre el configurador "Arma tu PC" como vista aparte */
function openBuilder(){
  currentGroup = null;
  specialFilter = null;
  searchTerm = '';
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const link = [...document.querySelectorAll('.cat-link')].find(l => (l.getAttribute('onclick')||'').includes('openBuilder'));
  if(link) link.classList.add('active');
  document.getElementById('catNav').classList.remove('open');
  setView('builder');
  updateBuilder();
  window.scrollTo({ top:0, behavior:'smooth' });
}

function goHome(){
  currentGroup = null;
  specialFilter = null;
  searchTerm = '';
  currentSort = 'price-asc';
  onlyInStock = false;
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.cat-link').classList.add('active');
  document.getElementById('catNav').classList.remove('open');
  showHomeSections(true);
  scrollTop();
}

/* =========================================================
   CATÁLOGO
   ========================================================= */
function filterByGroup(group){
  currentGroup = group;
  specialFilter = null;
  searchTerm = '';
  const si = document.getElementById('searchInput');
  if(si) si.value = '';

  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const links = [...document.querySelectorAll('.cat-link')];
  const match = links.find(l => (l.getAttribute('onclick')||'').includes(`'${group}'`));
  if(match) match.classList.add('active');

  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML =
    `Categoría <span>${groups[group] ? groups[group].label : ''}</span>`;

  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

function showAllProducts(){
  currentGroup = null;
  specialFilter = null;
  searchTerm = '';
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML = 'Todos los <span>Productos</span>';
  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* "Ver todas las ofertas": solo productos con precio tachado (descuento real) */
function showOffers(){
  currentGroup = null;
  specialFilter = 'ofertas';
  searchTerm = '';
  currentSort = 'price-asc';
  onlyInStock = false;
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML = 'Ofertas <span>Destacadas</span>';
  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* "Más vendidos": solo productos marcados como best-seller */
function showBestsellers(){
  currentGroup = null;
  specialFilter = 'vendidos';
  searchTerm = '';
  currentSort = 'price-asc';
  onlyInStock = false;
  const si = document.getElementById('searchInput');
  if(si) si.value = '';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  document.getElementById('catNav').classList.remove('open');
  document.getElementById('catalogTitle').innerHTML = 'Más <span>Vendidos</span>';
  showHomeSections(false);
  renderCatalog();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* "Todas las categorías": vuelve al inicio y baja directo a la grilla de categorías */
function showCategoriesGrid(){
  goHome();
  setTimeout(() => {
    const el = document.getElementById('categoriesSection');
    if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  }, 60);
}

function getFilteredList(){
  let list = products;

  if(searchTerm){
    const t = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(t) ||
      (p.sub||'').toLowerCase().includes(t) ||
      (categoryLabels[p.category]||'').toLowerCase().includes(t) ||
      Object.values(p.specs).join(' ').toLowerCase().includes(t)
    );
  } else if(specialFilter === 'ofertas'){
    const enOferta = list.filter(p => p.oldPrice && p.oldPrice > p.price);
    list = enOferta.length ? enOferta : list.filter(p => p.featured);
  } else if(specialFilter === 'vendidos'){
    list = list.filter(p => p.best);
  } else if(currentGroup && groups[currentGroup]){
    list = list.filter(p => groups[currentGroup].cats.includes(p.category));
  }

  if(onlyInStock) list = list.filter(p => p.stock > 0);
  return sortList(list, currentSort);
}

function filtersBarHtml(count){
  return `
    <div class="filters-bar">
      <label class="filter-toggle">
        <input type="checkbox" ${onlyInStock?'checked':''} onchange="onStockFilter(this)">
        Solo mostrar con stock
      </label>
      <span class="results-info"><strong>${count}</strong> producto(s)${searchTerm?` para "<strong>${searchTerm}</strong>"`:''}</span>
      <select class="sort-select" onchange="onSortChange(this)">
        <option value="default"    ${currentSort==='default'?'selected':''}>Ordenar por: Relevancia</option>
        <option value="price-asc"  ${currentSort==='price-asc'?'selected':''}>Precio: menor a mayor</option>
        <option value="price-desc" ${currentSort==='price-desc'?'selected':''}>Precio: mayor a menor</option>
        <option value="name-asc"   ${currentSort==='name-asc'?'selected':''}>Nombre: A – Z</option>
        <option value="stock"      ${currentSort==='stock'?'selected':''}>Mayor stock</option>
      </select>
    </div>`;
}

function emptyStateHtml(){
  return `
    <div class="empty-state">
      <i class="fas fa-box-open"></i>
      <p>No encontramos productos</p>
      <small>Prueba con otra búsqueda o revisa otra categoría</small>
    </div>`;
}

function renderCatalog(){
  const box = document.getElementById('productsContainer');
  const sub = (!searchTerm && !specialFilter && currentGroup) ? subGroups[currentGroup] : null;

  // ---- Vista dividida por subcategorías (Procesadores, Placas, RAM, Refrigeración) ----
  if(sub){
    const sections = sub.map(s => {
      let items = products.filter(p => s.cats.includes(p.category));
      if(onlyInStock) items = items.filter(p => p.stock > 0);
      items = sortList(items, currentSort);
      return { label: s.label, items };
    }).filter(s => s.items.length > 0);

    const total = sections.reduce((a, s) => a + s.items.length, 0);
    let html = filtersBarHtml(total);

    if(sections.length === 0){
      html += emptyStateHtml();
    } else {
      html += sections.map(s => `
        <h3 class="subcat-title">${s.label}</h3>
        <div class="p-grid">${s.items.map(productCard).join('')}</div>
      `).join('');
    }
    box.innerHTML = html;
    return;
  }

  // ---- Vista plana (búsqueda, "todos los productos", almacenamiento, fuentes) ----
  const list = getFilteredList();
  let html = filtersBarHtml(list.length);

  if(list.length === 0){
    html += emptyStateHtml();
  } else {
    html += `<div class="p-grid">${list.map(productCard).join('')}</div>`;
  }
  box.innerHTML = html;
}

function onStockFilter(cb){ onlyInStock = cb.checked; renderCatalog(); }
function onSortChange(sel){ currentSort = sel.value; renderCatalog(); }

/* =========================================================
   BÚSQUEDA
   ========================================================= */
function onSearch(value){
  searchTerm = value.trim();
  if(!searchTerm){
    if(currentGroup || specialFilter) { renderCatalog(); }
    else { goHome(); }
    return;
  }
  currentGroup = null;
  specialFilter = null;
  document.getElementById('catalogTitle').innerHTML = 'Resultados de <span>Búsqueda</span>';
  showHomeSections(false);
  renderCatalog();
}

/* =========================================================
   MODAL DE PRODUCTO
   ========================================================= */
function openModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  currentProduct = p;

  const s = stockInfo(p.stock);
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalImage').onerror = function(){ this.onerror = null; this.src = PLACEHOLDER; };
  document.getElementById('modalImage').alt = p.name;
  document.getElementById('modalCat').textContent  = categoryLabels[p.category] || '';
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalStock').innerHTML  = `<span class="p-stock ${s.cls}"><span class="dot"></span>${s.text}</span>`;
  document.getElementById('modalPrice').textContent = money(p.price);
  document.getElementById('modalSpecs').innerHTML = Object.entries(p.specs)
    .map(([k,v]) => `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`).join('');

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function contactWhatsApp(){
  if(!currentProduct) return;
  const msg = `Hola AO NEXUS, me interesa el *${currentProduct.name}* (${money(currentProduct.price)}) que vi en su web. ¿Está disponible?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* =========================================================
   COTIZACIÓN (carrito)
   ========================================================= */
function addToCartFromModal(){
  if(currentProduct) addToCart(currentProduct.id);
}

function addToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  if(p.stock === 0){ toast('Producto sin stock — consulta por WhatsApp'); return; }
  const qty = cart.get(id) || 0;
  if(qty >= p.stock){ toast(`Solo hay ${p.stock} unidad(es) disponibles`); return; }
  cart.set(id, qty + 1);
  updateCart();
  toast('Agregado a tu cotización');
}

function changeQty(id, delta){
  const p = products.find(x => x.id === id);
  const qty = (cart.get(id) || 0) + delta;
  if(qty <= 0){ cart.delete(id); }
  else if(p && qty > p.stock){ toast(`Solo hay ${p.stock} unidad(es)`); return; }
  else cart.set(id, qty);
  updateCart();
}

function removeFromCart(id){ cart.delete(id); updateCart(); }
function clearCart(){ cart.clear(); updateCart(); }

function updateCart(){
  savePersisted();
  const items = [...cart.entries()].map(([id,qty]) => ({ p: products.find(x=>x.id===id), qty })).filter(x=>x.p);
  const count = items.reduce((a,i)=> a + i.qty, 0);
  const total = items.reduce((a,i)=> a + i.p.price * i.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = money(total);

  const box = document.getElementById('cartItems');
  if(items.length === 0){
    box.innerHTML = `<div class="cart-empty"><i class="fas fa-cart-shopping"></i>Tu cotización está vacía.<br>Agrega productos para enviarlos por WhatsApp.</div>`;
  } else {
    box.innerHTML = items.map(({p,qty}) => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${money(p.price * qty)}</div>
          <div class="ci-qty">
            <button onclick="changeQty(${p.id},-1)"><i class="fas fa-minus"></i></button>
            <span>${qty}</span>
            <button onclick="changeQty(${p.id},1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="ci-del" onclick="removeFromCart(${p.id})"><i class="fas fa-trash"></i></button>
      </div>`).join('');
  }

  const lines = items.map(({p,qty}) => `• ${qty} x ${p.name} — ${money(p.price*qty)}`).join('\n');
  const msg = items.length
    ? `Hola AO NEXUS, quisiera cotizar:\n\n${lines}\n\n*Total estimado: ${money(total)}*`
    : 'Hola AO NEXUS, quisiera cotizar unos componentes.';
  document.getElementById('cartWaBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================================
   ARMA TU PC (configurador)
   ========================================================= */
const builderCats = {
  bProcesador: ['amd','intel'],
  bPlaca:      ['placa-am4','placa-am5','placa-lga1851'],
  bRam:        ['ddr4','ddr5'],
  bGpu:        ['gpu'],
  bSsd:        ['almacenamiento'],
  bFuente:     ['fuente-bronze','fuente-silver','fuente-gold','fuente-platinum'],
  bCase:       ['case']
};

/* ---------- Compatibilidad ----------
   El socket sale de specs.Socket (o del campo socket si lo agregas).
   El tipo de RAM de una placa sale del socket, salvo que pongas ramType a mano. */
const SOCKET_RAM = { 'AM4':'DDR4', 'AM5':'DDR5', 'LGA1851':'DDR5', 'LGA1700':'DDR5' };

function getSocket(p){
  return p.socket || (p.specs && p.specs.Socket) || null;
}
function boardRamType(p){
  return p.ramType || SOCKET_RAM[getSocket(p)] || null;
}
function ramTypeOf(p){
  if(p.ramType) return p.ramType;
  if(p.category === 'ddr4') return 'DDR4';
  if(p.category === 'ddr5') return 'DDR5';
  return (p.specs && p.specs.Tipo) || null;
}

function builderSelection(selectId){
  const sel = document.getElementById(selectId);
  if(!sel) return null;
  const id = parseInt(sel.value, 10);
  return isNaN(id) ? null : (products.find(p => p.id === id) || null);
}

/* Opciones válidas para un selector, según lo elegido en los otros */
function builderOptionsFor(selectId){
  const cats = builderCats[selectId];
  let items = products.filter(p => cats.includes(p.category) && p.stock > 0);

  const cpu   = selectId === 'bProcesador' ? null : builderSelection('bProcesador');
  const placa = selectId === 'bPlaca'      ? null : builderSelection('bPlaca');
  const ram   = selectId === 'bRam'        ? null : builderSelection('bRam');

  if(selectId === 'bProcesador' && placa){
    const s = getSocket(placa);
    if(s) items = items.filter(p => !getSocket(p) || getSocket(p) === s);
  }

  if(selectId === 'bPlaca'){
    if(cpu){
      const s = getSocket(cpu);
      if(s) items = items.filter(p => !getSocket(p) || getSocket(p) === s);
    }
    if(ram){
      const t = ramTypeOf(ram);
      if(t) items = items.filter(p => !boardRamType(p) || boardRamType(p) === t);
    }
  }

  if(selectId === 'bRam' && placa){
    const t = boardRamType(placa);
    if(t) items = items.filter(p => !ramTypeOf(p) || ramTypeOf(p) === t);
  }

  return items;
}

/* Repuebla los 7 selectores; devuelve las piezas que se quitaron por incompatibles */
function refreshBuilderOptions(){
  const cleared = [];

  Object.keys(builderCats).forEach(sid => {
    const sel = document.getElementById(sid);
    if(!sel) return;

    const items = builderOptionsFor(sid);
    const prev = sel.value;
    const prevItem = prev ? products.find(p => String(p.id) === prev) : null;
    const stillOk = items.some(p => String(p.id) === prev);

    sel.innerHTML =
      (items.length ? '<option value="">— Selecciona —</option>'
                    : '<option value="">— Sin opciones compatibles —</option>') +
      items.map(p => `<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join('');

    sel.value = stillOk ? prev : '';
    if(prevItem && !stillOk) cleared.push(prevItem.name);
  });

  return cleared;
}

function setNote(id, text, warn){
  const el = document.getElementById(id);
  if(!el) return;
  el.textContent = text || '';
  el.classList.toggle('warn', !!warn);
}

function updateBuilderNotes(){
  const cpu   = builderSelection('bProcesador');
  const placa = builderSelection('bPlaca');

  setNote('noteProcesador', placa ? `Compatibles con ${getSocket(placa) || 'tu placa'}` : '');

  if(cpu){
    const s = getSocket(cpu);
    const hay = builderOptionsFor('bPlaca').length;
    setNote('notePlaca',
      hay ? `Solo placas socket ${s}` : `No tenemos placas ${s} en stock — consúltanos`,
      !hay);
  } else {
    setNote('notePlaca', '');
  }

  if(placa){
    const t = boardRamType(placa);
    const hay = builderOptionsFor('bRam').length;
    setNote('noteRam',
      hay ? `Solo memorias ${t}` : `No tenemos RAM ${t} en stock — consúltanos`,
      !hay);
  } else {
    setNote('noteRam', '');
  }
}

function updateBuilder(){
  const cleared = refreshBuilderOptions();
  if(cleared.length){
    toast(`Quitamos ${cleared.join(' y ')} por incompatibilidad`);
  }
  updateBuilderNotes();

  const chosen = Object.keys(builderCats).map(builderSelection).filter(Boolean);
  const total = chosen.reduce((a,p) => a + p.price, 0);

  document.getElementById('builderTotal').textContent = money(total);

  const lines = chosen.map(p => `• ${categoryLabels[p.category] || ''}: *${p.name}* — ${money(p.price)}`).join('\n');
  const msg = chosen.length
    ? `Hola AO NEXUS, quiero armar esta PC:\n\n${lines}\n\n*Total: ${money(total)}*`
    : 'Hola AO NEXUS, quisiera armar una PC a medida. ¿Me ayudan a elegir los componentes?';
  document.getElementById('builderWaBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function populateBuilder(){ refreshBuilderOptions(); }

function resetBuilder(){
  Object.keys(builderCats).forEach(sid => {
    const sel = document.getElementById(sid);
    if(sel) sel.value = '';
  });
  updateBuilder();
}

/* =========================================================
   MÉTODOS DE PAGO
   ========================================================= */
const ACCOUNT_HOLDER = 'Marcelo Valentino Tambini';

const paymentMethods = [
  {
    id:'yape', name:'Yape', icon:'fa-mobile-screen-button', accent:'#8b3fa8',
    rows:[ { label:'Número Yape', value:'942956898' } ]
  },
  {
    id:'bcp', name:'BCP', icon:'fa-building-columns', accent:'#f37021',
    rows:[
      { label:'Cuenta Soles',           value:'19178937828077' },
      { label:'Cuenta Interbancaria (CCI)', value:'00219117893782807757' }
    ]
  },
  {
    id:'interbank', name:'Interbank', icon:'fa-building-columns', accent:'#00a94f',
    rows:[
      { label:'Cuenta Simple Soles',      value:'8983518361190' },
      { label:'CCI Soles',                value:'00389801351836119048' },
      { label:'Cuenta Simple Dólares',    value:'8983518361210' },
      { label:'CCI Dólares',              value:'00389801351836121044' }
    ]
  }
];

function renderPayments(){
  const box = document.getElementById('paymentGrid');
  if(!box) return;
  box.innerHTML = paymentMethods.map(m => `
    <button class="payment-item" onclick="openPayModal('${m.id}')">
      <i class="fas ${m.icon}"></i>
      <span>${m.name}</span>
      <em>Ver cuenta <i class="fas fa-arrow-right"></i></em>
    </button>`).join('');
}

function openPayModal(id){
  const m = paymentMethods.find(x => x.id === id);
  if(!m) return;

  document.getElementById('payTitle').textContent  = m.name;
  document.getElementById('payHolder').textContent = ACCOUNT_HOLDER;
  document.getElementById('payLogo').innerHTML     = `<i class="fas ${m.icon}"></i>`;
  document.getElementById('payLogo').style.color   = m.accent;

  document.getElementById('payRows').innerHTML = m.rows.map(r => `
    <div class="pay-row">
      <div class="pay-row-info">
        <span class="pay-label">${r.label}</span>
        <span class="pay-value">${r.value}</span>
      </div>
      <button class="pay-copy" onclick="copyAccount('${r.value}', this)" title="Copiar">
        <i class="fas fa-copy"></i> Copiar
      </button>
    </div>`).join('');

  document.getElementById('payModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePayModal(){
  document.getElementById('payModal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyAccount(value, btn){
  const done = () => {
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Copiado';
    btn.classList.add('done');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('done'); }, 1800);
    toast('Número copiado');
  };

  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(value).then(done).catch(() => fallbackCopy(value, done));
  } else {
    fallbackCopy(value, done);
  }
}

function fallbackCopy(value, done){
  try{
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.setAttribute('readonly','');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    done();
  }catch(e){
    toast('Copia el número manualmente: ' + value);
  }
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  loadPersisted();
  renderHome();
  renderPayments();
  updateCart();
  populateBuilder();
  updateBuilder();

  const si = document.getElementById('searchInput');
  if(si){
    let t;
    si.addEventListener('input', e => {
      clearTimeout(t);
      const v = e.target.value;
      t = setTimeout(()=> onSearch(v), 220);
    });
    si.addEventListener('keydown', e => { if(e.key === 'Enter') onSearch(e.target.value); });
  }

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ closeModal(); closeCart(); closePayModal(); }
  });

  /* El scroll dispara cientos de eventos por segundo. Con requestAnimationFrame
     el botón "subir" se actualiza como máximo una vez por cuadro, en lugar de
     recalcular estilos en cada evento. */
  const toTop = document.getElementById('toTop');
  let scrollPending = false;
  let toTopVisible = false;
  window.addEventListener('scroll', () => {
    if(scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => {
      scrollPending = false;
      const shouldShow = window.scrollY > 500;
      if(shouldShow !== toTopVisible){
        toTopVisible = shouldShow;
        toTop.classList.toggle('show', shouldShow);
      }
    });
  }, { passive:true });

  document.querySelector('.cat-link').classList.add('active');
});
