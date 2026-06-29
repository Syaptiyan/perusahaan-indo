function app() {
    return {
        companies: [],
        filtered: [],
        q: '',
        selCat: '',
        modal: false,
        sel: null,
        showTop: false,
        scrolled: false,
        cats: [
            {id:'bank',name:'Bank',icon:'fas fa-university',color:'linear-gradient(135deg,#3b82f6,#06b6d4)'},
            {id:'telko',name:'Telekomunikasi',icon:'fas fa-tower-cell',color:'linear-gradient(135deg,#22c55e,#10b981)'},
            {id:'ecommerce',name:'E-Commerce',icon:'fas fa-cart-shopping',color:'linear-gradient(135deg,#f97316,#f59e0b)'},
            {id:'tech',name:'Teknologi',icon:'fas fa-microchip',color:'linear-gradient(135deg,#a855f7,#6366f1)'},
            {id:'fnb',name:'Makanan & Minuman',icon:'fas fa-utensils',color:'linear-gradient(135deg,#ef4444,#ec4899)'},
            {id:'auto',name:'Otomoif',icon:'fas fa-car',color:'linear-gradient(135deg,#06b6d4,#0ea5e9)'},
            {id:'mining',name:'Pertambangan',icon:'fas fa-hard-hat',color:'linear-gradient(135deg,#eab308,#f59e0b)'},
            {id:'prop',name:'Properti',icon:'fas fa-house-chimney',color:'linear-gradient(135deg,#ec4899,#a855f7)'},
            {id:'retail',name:'Retail',icon:'fas fa-store',color:'linear-gradient(135deg,#6b7280,#9ca3af)'},
            {id:'energy',name:'Energi',icon:'fas fa-bolt',color:'linear-gradient(135deg,#10b981,#059669)'},
            {id:'aviation',name:'Penerbangan',icon:'fas fa-plane',color:'linear-gradient(135deg,#818cf8,#6366f1)'},
            {id:'pharma',name:'Farmasi',icon:'fas fa-pills',color:'linear-gradient(135deg,#f472b6,#ec4899)'}
        ],
        init() {
            this.companies = [
                {name:'Bank Central Asia (BCA)',initials:'BCA',cat:'bank',desc:'Bank swasta terbesar di Indonesia dengan jaringan ATM terluas.',fullDesc:'Bank Central Asia (BCA) adalah bank swasta terbesar di Indonesia yang didirikan pada tahun 1957.',founded:'21 Februari 1957',hq:'Jakarta',founder:'Liem Sioe Liong',ceo:'Jahja Setiaatmadja',status:'Tercatat di BEI (BBCA)',tags:['Swasta','ATM','Digital Banking']},
                {name:'Bank Mandiri',initials:'BMRI',cat:'bank',desc:'Bank BUMN terbesar di Indonesia berdasarkan aset.',fullDesc:'Bank Mandiri adalah bank BUMN terbesar di Indonesia yang dibentuk dari penggabungan 4 bank.',founded:'2 Oktober 1998',hq:'Jakarta',founder:'Pemerintah Indonesia',ceo:'Darmawan Junaidi',status:'Tercatat di BEI (BMRI)',tags:['BUMN','Korporasi','UMKM']},
                {name:'Bank BRI',initials:'BRI',cat:'bank',desc:'Bank tertua di Indonesia yang fokus pada UMKM dan mikro.',fullDesc:'Bank Rakyat Indonesia (BRI) adalah bank tertua di Indonesia yang didirikan pada tahun 1895.',founded:'16 Desember 1895',hq:'Jakarta',founder:'Pemerintah Hindia Belanda',ceo:'Sunarso',status:'Tercatat di BEI (BBRI)',tags:['BUMN','UMKM','Mikro']},
                {name:'Bank BNI',initials:'BNI',cat:'bank',desc:'Bank BUMN yang menjadi bank devisa pertama Indonesia.',fullDesc:'Bank Negara Indonesia (BNI) adalah bank BUMN yang didirikan pada tahun 1946.',founded:'5 Juli 1946',hq:'Jakarta',founder:'Pemerintah Indonesia',ceo:'Royke Tumilaar',status:'Tercatat di BEI (BBNI)',tags:['BUMN','Devisa','Internasional']},
                {name:'Telkomsel',initials:'TSEL',cat:'telko',desc:'Operator seluler terbesar di Indonesia.',fullDesc:'Telkomsel adalah operator seluler terbesar di Indonesia dengan 170+ juta pelanggan.',founded:'26 Mei 1995',hq:'Jakarta',founder:'Telkom Indonesia',ceo:'Hendri Mulya Syam',status:'Anak perusahaan Telkom',tags:['Seluler','4G/5G','Telkom']},
                {name:'Indosat Ooredoo',initials:'IOH',cat:'telko',desc:'Operator seluler terbesar kedua di Indonesia.',fullDesc:'Indosat Ooredoo Hutchison adalah hasil merger Indosat dan Hutchison 3.',founded:'2022 (merger)',hq:'Jakarta',founder:'Pemerintah Indonesia',ceo:'Vikram Sinha',status:'Tercatat di BEI (ISAT)',tags:['Merger','Ooredoo','5G']},
                {name:'Tokopedia',initials:'TP',cat:'ecommerce',desc:'Marketplace terbesar di Indonesia, bagian dari GoTo.',fullDesc:'Tokopedia adalah marketplace digital terbesar yang didirikan oleh William Tanuwijaya.',founded:'6 Februari 2009',hq:'Jakarta',founder:'William Tanuwijaya',ceo:'Melissa Siska Juminto',status:'Bagian dari GoTo (GOTO)',tags:['Marketplace','GoTo','Unicorn']},
                {name:'Shopee Indonesia',initials:'SH',cat:'ecommerce',desc:'E-commerce terpopuler berdasarkan jumlah pengunjung.',fullDesc:'Shopee Indonesia adalah bagian dari Sea Group yang masuk ke Indonesia tahun 2015.',founded:'2015',hq:'Jakarta',founder:'Forrest Li',ceo:'Handhika Jahja',status:'Anak perusahaan Sea Group',tags:['Sea Group','Marketplace','Populer']},
                {name:'Gojek',initials:'GJ',cat:'tech',desc:'Super app terbesar di Indonesia.',fullDesc:'Gojek adalah super app terbesar yang didirikan oleh Nadiem Makarim tahun 2010.',founded:'2010',hq:'Jakarta',founder:'Nadiem Makarim',ceo:'Andre Soelistyo',status:'Bagian dari GoTo (GOTO)',tags:['Super App','Ojek','GoTo']},
                {name:'Traveloka',initials:'TL',cat:'tech',desc:'Platform travel terbesar di Asia Tenggara.',fullDesc:'Traveloka adalah platform travel dan lifestyle terbesar di Asia Tenggara.',founded:'2012',hq:'Jakarta',founder:'Ferry Unardi',ceo:'Ferry Unardi',status:'Unicorn',tags:['Travel','Unicorn','Lifestyle']},
                {name:'Indofood',initials:'INDF',cat:'fnb',desc:'Produsen mi instan terbesar di dunia (Indomie).',fullDesc:'Indofood adalah produsen makanan terbesar yang dikenal dengan Indomie.',founded:'1990',hq:'Jakarta',founder:'Sudono Salim',ceo:'Anthoni Salim',status:'Tercatat di BEI (INDF)',tags:['Indomie','Mi Instan','Salim Group']},
                {name:'Mayora Indah',initials:'MYOR',cat:'fnb',desc:'Produsen makanan ringan terbesar (Kopiko, Roma).',fullDesc:'Mayora Indah adalah produsen makanan ringan terbesar di Indonesia.',founded:'1977',hq:'Jakarta',founder:'Joune Ganda',ceo:'Joune Ganda',status:'Tercatat di BEI (MYOR)',tags:['Kopiko','Roma','Snack']},
                {name:'Astra International',initials:'ASII',cat:'auto',desc:'Grup bisnis terdiversifikasi terbesar (Toyota, Daihatsu).',fullDesc:'Astra International adalah grup bisnis terdiversifikasi terbesar di Indonesia.',founded:'1957',hq:'Jakarta',founder:'Tjia Kian Tie',ceo:'Djony Bunarto Tjondro',status:'Tercatat di BEI (ASII)',tags:['Toyota','Daihatsu','Diversifikasi']},
                {name:'Freeport Indonesia',initials:'FCX',cat:'mining',desc:'Produsen tembaga dan emas terbesar (Grasberg).',fullDesc:'Freeport Indonesia adalah produsen tembaga dan emas terbesar.',founded:'1967',hq:'Jakarta & Papua',founder:'Freeport-McMoRan',ceo:'Tony Wenas',status:'Anak perusahaan Inalum',tags:['Tembaga','Emas','Grasberg']},
                {name:'Ciputra Group',initials:'CTRA',cat:'prop',desc:'Grup properti terbesar di Indonesia.',fullDesc:'Ciputra Group adalah grup properti terbesar yang didirikan tahun 1981.',founded:'1981',hq:'Jakarta',founder:'Ir. Ciputra',ceo:'Candra Ciputra',status:'Tercatat di BEI (CTRA)',tags:['Perumahan','Mall','Apartemen']},
                {name:'Alfamart',initials:'AMRT',cat:'retail',desc:'Jaringan minimarket terbesar dengan 19.000+ gerai.',fullDesc:'Alfamart adalah jaringan minimarket terbesar dengan 19.000+ gerai.',founded:'1989',hq:'Tangerang',founder:'Djoko Susanto',ceo:'Hans Prawira',status:'Tercatat di BEI (AMRT)',tags:['Minimarket','19000+ Gerai','Retail']},
                {name:'Pertamina',initials:'PTM',cat:'energy',desc:'BUMN energi terbesar dan Fortune Global 500.',fullDesc:'Pertamina adalah BUMN energi terbesar di Indonesia.',founded:'10 Desember 1957',hq:'Jakarta',founder:'Pemerintah Indonesia',ceo:'Nicke Widyawati',status:'BUMN (Fortune Global 500)',tags:['Minyak','Gas','BBM']},
                {name:'Garuda Indonesia',initials:'GIAA',cat:'aviation',desc:'Maskapai nasional Indonesia.',fullDesc:'Garuda Indonesia adalah maskapai nasional yang didirikan tahun 1949.',founded:'26 Januari 1949',hq:'Jakarta',founder:'Pemerintah Indonesia',ceo:'Irfan Setiaputra',status:'Tercatat di BEI (GIAA)',tags:['Nasional','SkyTeam','Bintang 5']},
                {name:'Kalbe Farma',initials:'KLBF',cat:'pharma',desc:'Perusahaan farmasi terbesar di Indonesia.',fullDesc:'Kalbe Farma adalah perusahaan farmasi terbesar di Indonesia dan Asia Tenggara.',founded:'1966',hq:'Jakarta',founder:'Khouw Lip Tjoen',ceo:'Vidjongtius',status:'Tercatat di BEI (KLBF)',tags:['Farmasi','OTC','Nutrisi']}
            ];
            this.cats.forEach(c => { c.count = this.companies.filter(x => x.cat === c.id).length; });
            this.filter();
            window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 50; this.showTop = window.scrollY > 400; });
        },
        getCat(id) { return this.cats.find(c => c.id === id) || { name:'', icon:'', color:'' }; },
        filter() {
            const q = this.q.toLowerCase();
            this.filtered = this.companies.filter(c => {
                const ms = !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
                const mc = !this.selCat || c.cat === this.selCat;
                return ms && mc;
            });
        },
        open(c) { this.sel = c; this.modal = true; document.body.style.overflow = 'hidden'; },
        close() { this.modal = false; this.sel = null; document.body.style.overflow = ''; }
    };
}

function closeMenu() {
    document.querySelector('.hamburger')?.classList.remove('active');
    document.querySelector('.nav-menu')?.classList.remove('show');
}
