// File này được sinh tự động bởi scripts/tao-du-lieu-anh.mjs — KHÔNG sửa tay.
// Muốn cập nhật: thêm/xoá ảnh trong public/anh/<nhom>/ rồi chạy `npm run tao:anh`.

export type NhomAnh = 'ca-nhan' | 'couple' | 'nhom-tap-the' | 'thanh-xuan' | 'truyen-thong';

export const nhanNhom: Record<NhomAnh, string> = {
  "ca-nhan": "Cá nhân",
  "couple": "Couple",
  "nhom-tap-the": "Nhóm & tập thể",
  "thanh-xuan": "Thanh xuân",
  "truyen-thong": "Truyền thống"
};

export interface AnhBoSuuTap {
  id: string;
  /** Ảnh gốc — chỉ dùng cho nút tải về. */
  file: string;
  /** Bản WebP thu nhỏ cho lưới ảnh. */
  nho: string;
  /** Bản WebP cỡ vừa cho màn xem chi tiết. */
  vua: string;
  rong: number;
  cao: number;
  nhom: NhomAnh;
}

export const danhSachAnh: AnhBoSuuTap[] = [
  {
    "id": "ca-nhan-1",
    "file": "/anh/ca-nhan/_TQA3605.jpg",
    "nho": "/anh-nho/ca-nhan/_TQA3605.webp",
    "vua": "/anh-vua/ca-nhan/_TQA3605.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-2",
    "file": "/anh/ca-nhan/_TQA3609.jpg",
    "nho": "/anh-nho/ca-nhan/_TQA3609.webp",
    "vua": "/anh-vua/ca-nhan/_TQA3609.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-3",
    "file": "/anh/ca-nhan/_TQA3640.jpg",
    "nho": "/anh-nho/ca-nhan/_TQA3640.webp",
    "vua": "/anh-vua/ca-nhan/_TQA3640.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-4",
    "file": "/anh/ca-nhan/_TQA6626.jpg",
    "nho": "/anh-nho/ca-nhan/_TQA6626.webp",
    "vua": "/anh-vua/ca-nhan/_TQA6626.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-5",
    "file": "/anh/ca-nhan/_VUX9817.jpg",
    "nho": "/anh-nho/ca-nhan/_VUX9817.webp",
    "vua": "/anh-vua/ca-nhan/_VUX9817.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-6",
    "file": "/anh/ca-nhan/_VUX9894.jpg",
    "nho": "/anh-nho/ca-nhan/_VUX9894.webp",
    "vua": "/anh-vua/ca-nhan/_VUX9894.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-7",
    "file": "/anh/ca-nhan/_VUX9899.jpg",
    "nho": "/anh-nho/ca-nhan/_VUX9899.webp",
    "vua": "/anh-vua/ca-nhan/_VUX9899.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-8",
    "file": "/anh/ca-nhan/344350259_248412364445007_2648313915118053103_n.jpg",
    "nho": "/anh-nho/ca-nhan/344350259_248412364445007_2648313915118053103_n.webp",
    "vua": "/anh-vua/ca-nhan/344350259_248412364445007_2648313915118053103_n.webp",
    "rong": 437,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-9",
    "file": "/anh/ca-nhan/468805514_489272544169190_4310690598162030402_n.jpg",
    "nho": "/anh-nho/ca-nhan/468805514_489272544169190_4310690598162030402_n.webp",
    "vua": "/anh-vua/ca-nhan/468805514_489272544169190_4310690598162030402_n.webp",
    "rong": 439,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-10",
    "file": "/anh/ca-nhan/473886355_524758263953951_7689002678602351127_n.jpg",
    "nho": "/anh-nho/ca-nhan/473886355_524758263953951_7689002678602351127_n.webp",
    "vua": "/anh-vua/ca-nhan/473886355_524758263953951_7689002678602351127_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-11",
    "file": "/anh/ca-nhan/474127224_524757950620649_7954018438886446050_n.jpg",
    "nho": "/anh-nho/ca-nhan/474127224_524757950620649_7954018438886446050_n.webp",
    "vua": "/anh-vua/ca-nhan/474127224_524757950620649_7954018438886446050_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-12",
    "file": "/anh/ca-nhan/480469221_549892568107187_3576545771388612083_n.jpg",
    "nho": "/anh-nho/ca-nhan/480469221_549892568107187_3576545771388612083_n.webp",
    "vua": "/anh-vua/ca-nhan/480469221_549892568107187_3576545771388612083_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-13",
    "file": "/anh/ca-nhan/480767975_550599221369855_6547772929717290488_n.jpg",
    "nho": "/anh-nho/ca-nhan/480767975_550599221369855_6547772929717290488_n.webp",
    "vua": "/anh-vua/ca-nhan/480767975_550599221369855_6547772929717290488_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-14",
    "file": "/anh/ca-nhan/484283993_565909573172153_1328932161121405877_n.jpg",
    "nho": "/anh-nho/ca-nhan/484283993_565909573172153_1328932161121405877_n.webp",
    "vua": "/anh-vua/ca-nhan/484283993_565909573172153_1328932161121405877_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-15",
    "file": "/anh/ca-nhan/486274198_576172185479225_1684690267380102434_n.jpg",
    "nho": "/anh-nho/ca-nhan/486274198_576172185479225_1684690267380102434_n.webp",
    "vua": "/anh-vua/ca-nhan/486274198_576172185479225_1684690267380102434_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-16",
    "file": "/anh/ca-nhan/491643329_594507796978997_8998700758144945232_n.jpg",
    "nho": "/anh-nho/ca-nhan/491643329_594507796978997_8998700758144945232_n.webp",
    "vua": "/anh-vua/ca-nhan/491643329_594507796978997_8998700758144945232_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-17",
    "file": "/anh/ca-nhan/491999466_594507920312318_9043265839168587667_n.jpg",
    "nho": "/anh-nho/ca-nhan/491999466_594507920312318_9043265839168587667_n.webp",
    "vua": "/anh-vua/ca-nhan/491999466_594507920312318_9043265839168587667_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-18",
    "file": "/anh/ca-nhan/494623694_607468072349636_8203828855814759414_n.jpg",
    "nho": "/anh-nho/ca-nhan/494623694_607468072349636_8203828855814759414_n.webp",
    "vua": "/anh-vua/ca-nhan/494623694_607468072349636_8203828855814759414_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-19",
    "file": "/anh/ca-nhan/499278445_620022874427489_1076239441233926373_n.jpg",
    "nho": "/anh-nho/ca-nhan/499278445_620022874427489_1076239441233926373_n.webp",
    "vua": "/anh-vua/ca-nhan/499278445_620022874427489_1076239441233926373_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-20",
    "file": "/anh/ca-nhan/548915632_719830661113376_8425894639019600967_n.jpg",
    "nho": "/anh-nho/ca-nhan/548915632_719830661113376_8425894639019600967_n.webp",
    "vua": "/anh-vua/ca-nhan/548915632_719830661113376_8425894639019600967_n.webp",
    "rong": 720,
    "cao": 406,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-21",
    "file": "/anh/ca-nhan/550407585_719830081113434_7721145396003296405_n.jpg",
    "nho": "/anh-nho/ca-nhan/550407585_719830081113434_7721145396003296405_n.webp",
    "vua": "/anh-vua/ca-nhan/550407585_719830081113434_7721145396003296405_n.webp",
    "rong": 720,
    "cao": 406,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-22",
    "file": "/anh/ca-nhan/550534476_719830094446766_8979220552661291024_n.jpg",
    "nho": "/anh-nho/ca-nhan/550534476_719830094446766_8979220552661291024_n.webp",
    "vua": "/anh-vua/ca-nhan/550534476_719830094446766_8979220552661291024_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-23",
    "file": "/anh/ca-nhan/558256960_736531799443262_5689233404759988897_n.jpg",
    "nho": "/anh-nho/ca-nhan/558256960_736531799443262_5689233404759988897_n.webp",
    "vua": "/anh-vua/ca-nhan/558256960_736531799443262_5689233404759988897_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-24",
    "file": "/anh/ca-nhan/558858661_736532232776552_2075722963377391630_n.jpg",
    "nho": "/anh-nho/ca-nhan/558858661_736532232776552_2075722963377391630_n.webp",
    "vua": "/anh-vua/ca-nhan/558858661_736532232776552_2075722963377391630_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-25",
    "file": "/anh/ca-nhan/558933830_736532272776548_2426808119601599206_n.jpg",
    "nho": "/anh-nho/ca-nhan/558933830_736532272776548_2426808119601599206_n.webp",
    "vua": "/anh-vua/ca-nhan/558933830_736532272776548_2426808119601599206_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-26",
    "file": "/anh/ca-nhan/559191926_736531302776645_4549879276836740932_n.jpg",
    "nho": "/anh-nho/ca-nhan/559191926_736531302776645_4549879276836740932_n.webp",
    "vua": "/anh-vua/ca-nhan/559191926_736531302776645_4549879276836740932_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-27",
    "file": "/anh/ca-nhan/561186392_736532242776551_9603642255835607_n.jpg",
    "nho": "/anh-nho/ca-nhan/561186392_736532242776551_9603642255835607_n.webp",
    "vua": "/anh-vua/ca-nhan/561186392_736532242776551_9603642255835607_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-28",
    "file": "/anh/ca-nhan/585461644_774369085659533_6916903337892513629_n.jpg",
    "nho": "/anh-nho/ca-nhan/585461644_774369085659533_6916903337892513629_n.webp",
    "vua": "/anh-vua/ca-nhan/585461644_774369085659533_6916903337892513629_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-29",
    "file": "/anh/ca-nhan/595391872_788765030886605_8855171985703963807_n.jpg",
    "nho": "/anh-nho/ca-nhan/595391872_788765030886605_8855171985703963807_n.webp",
    "vua": "/anh-vua/ca-nhan/595391872_788765030886605_8855171985703963807_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-30",
    "file": "/anh/ca-nhan/596387924_788763590886749_6374609224455570943_n.jpg",
    "nho": "/anh-nho/ca-nhan/596387924_788763590886749_6374609224455570943_n.webp",
    "vua": "/anh-vua/ca-nhan/596387924_788763590886749_6374609224455570943_n.webp",
    "rong": 720,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-31",
    "file": "/anh/ca-nhan/596815083_788763640886744_7344635728897560061_n.jpg",
    "nho": "/anh-nho/ca-nhan/596815083_788763640886744_7344635728897560061_n.webp",
    "vua": "/anh-vua/ca-nhan/596815083_788763640886744_7344635728897560061_n.webp",
    "rong": 720,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-32",
    "file": "/anh/ca-nhan/597334159_788765070886601_640491079405671312_n.jpg",
    "nho": "/anh-nho/ca-nhan/597334159_788765070886601_640491079405671312_n.webp",
    "vua": "/anh-vua/ca-nhan/597334159_788765070886601_640491079405671312_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-33",
    "file": "/anh/ca-nhan/597951945_788765000886608_3633817749676449679_n.jpg",
    "nho": "/anh-nho/ca-nhan/597951945_788765000886608_3633817749676449679_n.webp",
    "vua": "/anh-vua/ca-nhan/597951945_788765000886608_3633817749676449679_n.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-34",
    "file": "/anh/ca-nhan/598015838_794968016932973_8297928001399925728_n.jpg",
    "nho": "/anh-nho/ca-nhan/598015838_794968016932973_8297928001399925728_n.webp",
    "vua": "/anh-vua/ca-nhan/598015838_794968016932973_8297928001399925728_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-35",
    "file": "/anh/ca-nhan/600240330_794968510266257_3429758403513110294_n.jpg",
    "nho": "/anh-nho/ca-nhan/600240330_794968510266257_3429758403513110294_n.webp",
    "vua": "/anh-vua/ca-nhan/600240330_794968510266257_3429758403513110294_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-36",
    "file": "/anh/ca-nhan/602376370_826504503779324_2099950686704176583_n.jpg",
    "nho": "/anh-nho/ca-nhan/602376370_826504503779324_2099950686704176583_n.webp",
    "vua": "/anh-vua/ca-nhan/602376370_826504503779324_2099950686704176583_n.webp",
    "rong": 720,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-37",
    "file": "/anh/ca-nhan/619509595_826504410446000_7261718203759491949_n.jpg",
    "nho": "/anh-nho/ca-nhan/619509595_826504410446000_7261718203759491949_n.webp",
    "vua": "/anh-vua/ca-nhan/619509595_826504410446000_7261718203759491949_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-38",
    "file": "/anh/ca-nhan/619592021_826504383779336_6904798287296649652_n.jpg",
    "nho": "/anh-nho/ca-nhan/619592021_826504383779336_6904798287296649652_n.webp",
    "vua": "/anh-vua/ca-nhan/619592021_826504383779336_6904798287296649652_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-39",
    "file": "/anh/ca-nhan/622673575_826519860444455_2919653927345012957_n.jpg",
    "nho": "/anh-nho/ca-nhan/622673575_826519860444455_2919653927345012957_n.webp",
    "vua": "/anh-vua/ca-nhan/622673575_826519860444455_2919653927345012957_n.webp",
    "rong": 720,
    "cao": 546,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-40",
    "file": "/anh/ca-nhan/632939264_839691432460631_1558880521888105266_n.jpg",
    "nho": "/anh-nho/ca-nhan/632939264_839691432460631_1558880521888105266_n.webp",
    "vua": "/anh-vua/ca-nhan/632939264_839691432460631_1558880521888105266_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-41",
    "file": "/anh/ca-nhan/751563541_973362595760180_5933764760182993578_n.jpg",
    "nho": "/anh-nho/ca-nhan/751563541_973362595760180_5933764760182993578_n.webp",
    "vua": "/anh-vua/ca-nhan/751563541_973362595760180_5933764760182993578_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-42",
    "file": "/anh/ca-nhan/753150643_973362342426872_2697055585478081095_n.jpg",
    "nho": "/anh-nho/ca-nhan/753150643_973362342426872_2697055585478081095_n.webp",
    "vua": "/anh-vua/ca-nhan/753150643_973362342426872_2697055585478081095_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-43",
    "file": "/anh/ca-nhan/754498160_973362495760190_806719451872514927_n.jpg",
    "nho": "/anh-nho/ca-nhan/754498160_973362495760190_806719451872514927_n.webp",
    "vua": "/anh-vua/ca-nhan/754498160_973362495760190_806719451872514927_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-44",
    "file": "/anh/ca-nhan/761596643_984443711318735_1095298103461307669_n.jpg",
    "nho": "/anh-nho/ca-nhan/761596643_984443711318735_1095298103461307669_n.webp",
    "vua": "/anh-vua/ca-nhan/761596643_984443711318735_1095298103461307669_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-45",
    "file": "/anh/ca-nhan/762292005_984443654652074_3272992384742610301_n.jpg",
    "nho": "/anh-nho/ca-nhan/762292005_984443654652074_3272992384742610301_n.webp",
    "vua": "/anh-vua/ca-nhan/762292005_984443654652074_3272992384742610301_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-46",
    "file": "/anh/ca-nhan/762676941_984485407981232_8823277222326142930_n.jpg",
    "nho": "/anh-nho/ca-nhan/762676941_984485407981232_8823277222326142930_n.webp",
    "vua": "/anh-vua/ca-nhan/762676941_984485407981232_8823277222326142930_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-47",
    "file": "/anh/ca-nhan/762998866_984485411314565_2725869619918007878_n.jpg",
    "nho": "/anh-nho/ca-nhan/762998866_984485411314565_2725869619918007878_n.webp",
    "vua": "/anh-vua/ca-nhan/762998866_984485411314565_2725869619918007878_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-48",
    "file": "/anh/ca-nhan/763028788_984485461314560_6194072131674035927_n.jpg",
    "nho": "/anh-nho/ca-nhan/763028788_984485461314560_6194072131674035927_n.webp",
    "vua": "/anh-vua/ca-nhan/763028788_984485461314560_6194072131674035927_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-49",
    "file": "/anh/ca-nhan/763098494_984485491314557_7346003949226773244_n.jpg",
    "nho": "/anh-nho/ca-nhan/763098494_984485491314557_7346003949226773244_n.webp",
    "vua": "/anh-vua/ca-nhan/763098494_984485491314557_7346003949226773244_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-50",
    "file": "/anh/ca-nhan/ANK09071.jpg",
    "nho": "/anh-nho/ca-nhan/ANK09071.webp",
    "vua": "/anh-vua/ca-nhan/ANK09071.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-51",
    "file": "/anh/ca-nhan/ANK09094.jpg",
    "nho": "/anh-nho/ca-nhan/ANK09094.webp",
    "vua": "/anh-vua/ca-nhan/ANK09094.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-52",
    "file": "/anh/ca-nhan/CAM07240.jpg",
    "nho": "/anh-nho/ca-nhan/CAM07240.webp",
    "vua": "/anh-vua/ca-nhan/CAM07240.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-53",
    "file": "/anh/ca-nhan/CAM07261.jpg",
    "nho": "/anh-nho/ca-nhan/CAM07261.webp",
    "vua": "/anh-vua/ca-nhan/CAM07261.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-54",
    "file": "/anh/ca-nhan/CAM07569.jpg",
    "nho": "/anh-nho/ca-nhan/CAM07569.webp",
    "vua": "/anh-vua/ca-nhan/CAM07569.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-55",
    "file": "/anh/ca-nhan/CAM09473.jpg",
    "nho": "/anh-nho/ca-nhan/CAM09473.webp",
    "vua": "/anh-vua/ca-nhan/CAM09473.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-56",
    "file": "/anh/ca-nhan/CAM09545.jpg",
    "nho": "/anh-nho/ca-nhan/CAM09545.webp",
    "vua": "/anh-vua/ca-nhan/CAM09545.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-57",
    "file": "/anh/ca-nhan/DSC00031.jpg",
    "nho": "/anh-nho/ca-nhan/DSC00031.webp",
    "vua": "/anh-vua/ca-nhan/DSC00031.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-58",
    "file": "/anh/ca-nhan/HAN05124.jpg",
    "nho": "/anh-nho/ca-nhan/HAN05124.webp",
    "vua": "/anh-vua/ca-nhan/HAN05124.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-59",
    "file": "/anh/ca-nhan/HAN05298.jpg",
    "nho": "/anh-nho/ca-nhan/HAN05298.webp",
    "vua": "/anh-vua/ca-nhan/HAN05298.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-60",
    "file": "/anh/ca-nhan/HAN05310.jpg",
    "nho": "/anh-nho/ca-nhan/HAN05310.webp",
    "vua": "/anh-vua/ca-nhan/HAN05310.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-61",
    "file": "/anh/ca-nhan/HAN07752.jpg",
    "nho": "/anh-nho/ca-nhan/HAN07752.webp",
    "vua": "/anh-vua/ca-nhan/HAN07752.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-62",
    "file": "/anh/ca-nhan/LINH2506.jpg",
    "nho": "/anh-nho/ca-nhan/LINH2506.webp",
    "vua": "/anh-vua/ca-nhan/LINH2506.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-63",
    "file": "/anh/ca-nhan/MUN_6736.jpg",
    "nho": "/anh-nho/ca-nhan/MUN_6736.webp",
    "vua": "/anh-vua/ca-nhan/MUN_6736.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-64",
    "file": "/anh/ca-nhan/NCM_0739.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_0739.webp",
    "vua": "/anh-vua/ca-nhan/NCM_0739.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-65",
    "file": "/anh/ca-nhan/NCM_1860.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_1860.webp",
    "vua": "/anh-vua/ca-nhan/NCM_1860.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-66",
    "file": "/anh/ca-nhan/NCM_1894.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_1894.webp",
    "vua": "/anh-vua/ca-nhan/NCM_1894.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-67",
    "file": "/anh/ca-nhan/NCM_2513.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_2513.webp",
    "vua": "/anh-vua/ca-nhan/NCM_2513.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-68",
    "file": "/anh/ca-nhan/NCM_8908.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_8908.webp",
    "vua": "/anh-vua/ca-nhan/NCM_8908.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-69",
    "file": "/anh/ca-nhan/NCM_8998.jpg",
    "nho": "/anh-nho/ca-nhan/NCM_8998.webp",
    "vua": "/anh-vua/ca-nhan/NCM_8998.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-70",
    "file": "/anh/ca-nhan/NTQ_1523.jpg",
    "nho": "/anh-nho/ca-nhan/NTQ_1523.webp",
    "vua": "/anh-vua/ca-nhan/NTQ_1523.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-71",
    "file": "/anh/ca-nhan/NTQ_1525.jpg",
    "nho": "/anh-nho/ca-nhan/NTQ_1525.webp",
    "vua": "/anh-vua/ca-nhan/NTQ_1525.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-72",
    "file": "/anh/ca-nhan/NTQ_4788.jpg",
    "nho": "/anh-nho/ca-nhan/NTQ_4788.webp",
    "vua": "/anh-vua/ca-nhan/NTQ_4788.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-73",
    "file": "/anh/ca-nhan/NTQ06718.jpg",
    "nho": "/anh-nho/ca-nhan/NTQ06718.webp",
    "vua": "/anh-vua/ca-nhan/NTQ06718.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-74",
    "file": "/anh/ca-nhan/NVP02906.jpg",
    "nho": "/anh-nho/ca-nhan/NVP02906.webp",
    "vua": "/anh-vua/ca-nhan/NVP02906.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-75",
    "file": "/anh/ca-nhan/NVP07720.jpg",
    "nho": "/anh-nho/ca-nhan/NVP07720.webp",
    "vua": "/anh-vua/ca-nhan/NVP07720.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-76",
    "file": "/anh/ca-nhan/PTT01216.jpg",
    "nho": "/anh-nho/ca-nhan/PTT01216.webp",
    "vua": "/anh-vua/ca-nhan/PTT01216.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-77",
    "file": "/anh/ca-nhan/PTT04390.jpg",
    "nho": "/anh-nho/ca-nhan/PTT04390.webp",
    "vua": "/anh-vua/ca-nhan/PTT04390.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-78",
    "file": "/anh/ca-nhan/PTT04551.jpg",
    "nho": "/anh-nho/ca-nhan/PTT04551.webp",
    "vua": "/anh-vua/ca-nhan/PTT04551.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-79",
    "file": "/anh/ca-nhan/SEN_8625.jpg",
    "nho": "/anh-nho/ca-nhan/SEN_8625.webp",
    "vua": "/anh-vua/ca-nhan/SEN_8625.webp",
    "rong": 479,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-80",
    "file": "/anh/ca-nhan/SON_1456.jpg",
    "nho": "/anh-nho/ca-nhan/SON_1456.webp",
    "vua": "/anh-vua/ca-nhan/SON_1456.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-81",
    "file": "/anh/ca-nhan/SON_1461.jpg",
    "nho": "/anh-nho/ca-nhan/SON_1461.webp",
    "vua": "/anh-vua/ca-nhan/SON_1461.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-82",
    "file": "/anh/ca-nhan/XU_06609.jpg",
    "nho": "/anh-nho/ca-nhan/XU_06609.webp",
    "vua": "/anh-vua/ca-nhan/XU_06609.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-83",
    "file": "/anh/ca-nhan/XU_08127.jpg",
    "nho": "/anh-nho/ca-nhan/XU_08127.webp",
    "vua": "/anh-vua/ca-nhan/XU_08127.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-84",
    "file": "/anh/ca-nhan/XU_08272.jpg",
    "nho": "/anh-nho/ca-nhan/XU_08272.webp",
    "vua": "/anh-vua/ca-nhan/XU_08272.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "ca-nhan"
  },
  {
    "id": "couple-1",
    "file": "/anh/couple/_TQA0198.jpg",
    "nho": "/anh-nho/couple/_TQA0198.webp",
    "vua": "/anh-vua/couple/_TQA0198.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "couple"
  },
  {
    "id": "couple-2",
    "file": "/anh/couple/_TQA3037.jpg",
    "nho": "/anh-nho/couple/_TQA3037.webp",
    "vua": "/anh-vua/couple/_TQA3037.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "couple"
  },
  {
    "id": "couple-3",
    "file": "/anh/couple/480673341_553384997757944_2166370223778121897_n.jpg",
    "nho": "/anh-nho/couple/480673341_553384997757944_2166370223778121897_n.webp",
    "vua": "/anh-vua/couple/480673341_553384997757944_2166370223778121897_n.webp",
    "rong": 720,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-4",
    "file": "/anh/couple/585882185_774368972326211_3902029118433079827_n.jpg",
    "nho": "/anh-nho/couple/585882185_774368972326211_3902029118433079827_n.webp",
    "vua": "/anh-vua/couple/585882185_774368972326211_3902029118433079827_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-5",
    "file": "/anh/couple/600908287_794968003599641_1975513174427742772_n.jpg",
    "nho": "/anh-nho/couple/600908287_794968003599641_1975513174427742772_n.webp",
    "vua": "/anh-vua/couple/600908287_794968003599641_1975513174427742772_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-6",
    "file": "/anh/couple/615816604_819480291148412_2780374954021513880_n.jpg",
    "nho": "/anh-nho/couple/615816604_819480291148412_2780374954021513880_n.webp",
    "vua": "/anh-vua/couple/615816604_819480291148412_2780374954021513880_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-7",
    "file": "/anh/couple/619717227_826504580445983_6788352981740524846_n.jpg",
    "nho": "/anh-nho/couple/619717227_826504580445983_6788352981740524846_n.webp",
    "vua": "/anh-vua/couple/619717227_826504580445983_6788352981740524846_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-8",
    "file": "/anh/couple/619989371_819480361148405_4759287234414368561_n.jpg",
    "nho": "/anh-nho/couple/619989371_819480361148405_4759287234414368561_n.webp",
    "vua": "/anh-vua/couple/619989371_819480361148405_4759287234414368561_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-9",
    "file": "/anh/couple/622295876_826504800445961_2782755199506542168_n.jpg",
    "nho": "/anh-nho/couple/622295876_826504800445961_2782755199506542168_n.webp",
    "vua": "/anh-vua/couple/622295876_826504800445961_2782755199506542168_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-10",
    "file": "/anh/couple/632144626_839652555797852_7759500507639746494_n.jpg",
    "nho": "/anh-nho/couple/632144626_839652555797852_7759500507639746494_n.webp",
    "vua": "/anh-vua/couple/632144626_839652555797852_7759500507639746494_n.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "couple"
  },
  {
    "id": "couple-11",
    "file": "/anh/couple/CAM09217.jpg",
    "nho": "/anh-nho/couple/CAM09217.webp",
    "vua": "/anh-vua/couple/CAM09217.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-12",
    "file": "/anh/couple/DSC00265.jpg",
    "nho": "/anh-nho/couple/DSC00265.webp",
    "vua": "/anh-vua/couple/DSC00265.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-13",
    "file": "/anh/couple/DSC09490.jpg",
    "nho": "/anh-nho/couple/DSC09490.webp",
    "vua": "/anh-vua/couple/DSC09490.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-14",
    "file": "/anh/couple/HAN04567.jpg",
    "nho": "/anh-nho/couple/HAN04567.webp",
    "vua": "/anh-vua/couple/HAN04567.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-15",
    "file": "/anh/couple/HMT07736.jpg",
    "nho": "/anh-nho/couple/HMT07736.webp",
    "vua": "/anh-vua/couple/HMT07736.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-16",
    "file": "/anh/couple/IMG_0420.jpg",
    "nho": "/anh-nho/couple/IMG_0420.webp",
    "vua": "/anh-vua/couple/IMG_0420.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-17",
    "file": "/anh/couple/IMG_0615.jpg",
    "nho": "/anh-nho/couple/IMG_0615.webp",
    "vua": "/anh-vua/couple/IMG_0615.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-18",
    "file": "/anh/couple/IMG_0758.jpg",
    "nho": "/anh-nho/couple/IMG_0758.webp",
    "vua": "/anh-vua/couple/IMG_0758.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-19",
    "file": "/anh/couple/KML08602.jpg",
    "nho": "/anh-nho/couple/KML08602.webp",
    "vua": "/anh-vua/couple/KML08602.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-20",
    "file": "/anh/couple/KML08994.jpg",
    "nho": "/anh-nho/couple/KML08994.webp",
    "vua": "/anh-vua/couple/KML08994.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-21",
    "file": "/anh/couple/KML09927.jpg",
    "nho": "/anh-nho/couple/KML09927.webp",
    "vua": "/anh-vua/couple/KML09927.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-22",
    "file": "/anh/couple/MUN_6672.jpg",
    "nho": "/anh-nho/couple/MUN_6672.webp",
    "vua": "/anh-vua/couple/MUN_6672.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-23",
    "file": "/anh/couple/NTQ_2656.jpg",
    "nho": "/anh-nho/couple/NTQ_2656.webp",
    "vua": "/anh-vua/couple/NTQ_2656.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-24",
    "file": "/anh/couple/QQ_00689.jpg",
    "nho": "/anh-nho/couple/QQ_00689.webp",
    "vua": "/anh-vua/couple/QQ_00689.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-25",
    "file": "/anh/couple/TAH00443.jpg",
    "nho": "/anh-nho/couple/TAH00443.webp",
    "vua": "/anh-vua/couple/TAH00443.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-26",
    "file": "/anh/couple/TAH00624.jpg",
    "nho": "/anh-nho/couple/TAH00624.webp",
    "vua": "/anh-vua/couple/TAH00624.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-27",
    "file": "/anh/couple/TAH00678.jpg",
    "nho": "/anh-nho/couple/TAH00678.webp",
    "vua": "/anh-vua/couple/TAH00678.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "couple-28",
    "file": "/anh/couple/XU_07785.jpg",
    "nho": "/anh-nho/couple/XU_07785.webp",
    "vua": "/anh-vua/couple/XU_07785.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "couple"
  },
  {
    "id": "couple-29",
    "file": "/anh/couple/XU_08176.jpg",
    "nho": "/anh-nho/couple/XU_08176.webp",
    "vua": "/anh-vua/couple/XU_08176.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "couple"
  },
  {
    "id": "nhom-tap-the-1",
    "file": "/anh/nhom-tap-the/_TQA3326.jpg",
    "nho": "/anh-nho/nhom-tap-the/_TQA3326.webp",
    "vua": "/anh-vua/nhom-tap-the/_TQA3326.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-2",
    "file": "/anh/nhom-tap-the/_TQA3405.jpg",
    "nho": "/anh-nho/nhom-tap-the/_TQA3405.webp",
    "vua": "/anh-vua/nhom-tap-the/_TQA3405.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-3",
    "file": "/anh/nhom-tap-the/_VUX8417.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX8417.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX8417.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-4",
    "file": "/anh/nhom-tap-the/_VUX8481.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX8481.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX8481.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-5",
    "file": "/anh/nhom-tap-the/_VUX8547.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX8547.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX8547.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-6",
    "file": "/anh/nhom-tap-the/_VUX8592.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX8592.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX8592.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-7",
    "file": "/anh/nhom-tap-the/_VUX9678.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX9678.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX9678.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-8",
    "file": "/anh/nhom-tap-the/_VUX9813.jpg",
    "nho": "/anh-nho/nhom-tap-the/_VUX9813.webp",
    "vua": "/anh-vua/nhom-tap-the/_VUX9813.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-9",
    "file": "/anh/nhom-tap-the/ANK08653.jpg",
    "nho": "/anh-nho/nhom-tap-the/ANK08653.webp",
    "vua": "/anh-vua/nhom-tap-the/ANK08653.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-10",
    "file": "/anh/nhom-tap-the/CAM09342.jpg",
    "nho": "/anh-nho/nhom-tap-the/CAM09342.webp",
    "vua": "/anh-vua/nhom-tap-the/CAM09342.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-11",
    "file": "/anh/nhom-tap-the/DSC00595.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC00595.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC00595.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-12",
    "file": "/anh/nhom-tap-the/DSC01136.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC01136.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC01136.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-13",
    "file": "/anh/nhom-tap-the/DSC04311.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC04311.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC04311.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-14",
    "file": "/anh/nhom-tap-the/DSC04382.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC04382.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC04382.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-15",
    "file": "/anh/nhom-tap-the/DSC04866.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC04866.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC04866.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-16",
    "file": "/anh/nhom-tap-the/DSC05411.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC05411.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC05411.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-17",
    "file": "/anh/nhom-tap-the/DSC09490.jpg",
    "nho": "/anh-nho/nhom-tap-the/DSC09490.webp",
    "vua": "/anh-vua/nhom-tap-the/DSC09490.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-18",
    "file": "/anh/nhom-tap-the/GCP_6093.jpg",
    "nho": "/anh-nho/nhom-tap-the/GCP_6093.webp",
    "vua": "/anh-vua/nhom-tap-the/GCP_6093.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-19",
    "file": "/anh/nhom-tap-the/HAN00114.jpg",
    "nho": "/anh-nho/nhom-tap-the/HAN00114.webp",
    "vua": "/anh-vua/nhom-tap-the/HAN00114.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-20",
    "file": "/anh/nhom-tap-the/HAN04226.jpg",
    "nho": "/anh-nho/nhom-tap-the/HAN04226.webp",
    "vua": "/anh-vua/nhom-tap-the/HAN04226.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-21",
    "file": "/anh/nhom-tap-the/HAN05108.jpg",
    "nho": "/anh-nho/nhom-tap-the/HAN05108.webp",
    "vua": "/anh-vua/nhom-tap-the/HAN05108.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-22",
    "file": "/anh/nhom-tap-the/IMG_5161.jpg",
    "nho": "/anh-nho/nhom-tap-the/IMG_5161.webp",
    "vua": "/anh-vua/nhom-tap-the/IMG_5161.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-23",
    "file": "/anh/nhom-tap-the/IMG_5235.jpg",
    "nho": "/anh-nho/nhom-tap-the/IMG_5235.webp",
    "vua": "/anh-vua/nhom-tap-the/IMG_5235.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-24",
    "file": "/anh/nhom-tap-the/KML08994.jpg",
    "nho": "/anh-nho/nhom-tap-the/KML08994.webp",
    "vua": "/anh-vua/nhom-tap-the/KML08994.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-25",
    "file": "/anh/nhom-tap-the/LINH1349.jpg",
    "nho": "/anh-nho/nhom-tap-the/LINH1349.webp",
    "vua": "/anh-vua/nhom-tap-the/LINH1349.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-26",
    "file": "/anh/nhom-tap-the/LINH1539.jpg",
    "nho": "/anh-nho/nhom-tap-the/LINH1539.webp",
    "vua": "/anh-vua/nhom-tap-the/LINH1539.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-27",
    "file": "/anh/nhom-tap-the/NCM_0778.jpg",
    "nho": "/anh-nho/nhom-tap-the/NCM_0778.webp",
    "vua": "/anh-vua/nhom-tap-the/NCM_0778.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-28",
    "file": "/anh/nhom-tap-the/NCM_6067.jpg",
    "nho": "/anh-nho/nhom-tap-the/NCM_6067.webp",
    "vua": "/anh-vua/nhom-tap-the/NCM_6067.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-29",
    "file": "/anh/nhom-tap-the/NCM_6101.jpg",
    "nho": "/anh-nho/nhom-tap-the/NCM_6101.webp",
    "vua": "/anh-vua/nhom-tap-the/NCM_6101.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-30",
    "file": "/anh/nhom-tap-the/NCM_9566.jpg",
    "nho": "/anh-nho/nhom-tap-the/NCM_9566.webp",
    "vua": "/anh-vua/nhom-tap-the/NCM_9566.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-31",
    "file": "/anh/nhom-tap-the/NTQ_6152.jpg",
    "nho": "/anh-nho/nhom-tap-the/NTQ_6152.webp",
    "vua": "/anh-vua/nhom-tap-the/NTQ_6152.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-32",
    "file": "/anh/nhom-tap-the/NTQ_6803.jpg",
    "nho": "/anh-nho/nhom-tap-the/NTQ_6803.webp",
    "vua": "/anh-vua/nhom-tap-the/NTQ_6803.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-33",
    "file": "/anh/nhom-tap-the/NTQ_7042.jpg",
    "nho": "/anh-nho/nhom-tap-the/NTQ_7042.webp",
    "vua": "/anh-vua/nhom-tap-the/NTQ_7042.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-34",
    "file": "/anh/nhom-tap-the/NVP02533.jpg",
    "nho": "/anh-nho/nhom-tap-the/NVP02533.webp",
    "vua": "/anh-vua/nhom-tap-the/NVP02533.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-35",
    "file": "/anh/nhom-tap-the/SEN_7564.jpg",
    "nho": "/anh-nho/nhom-tap-the/SEN_7564.webp",
    "vua": "/anh-vua/nhom-tap-the/SEN_7564.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-36",
    "file": "/anh/nhom-tap-the/SEN_7617.jpg",
    "nho": "/anh-nho/nhom-tap-the/SEN_7617.webp",
    "vua": "/anh-vua/nhom-tap-the/SEN_7617.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-37",
    "file": "/anh/nhom-tap-the/TAH00257.jpg",
    "nho": "/anh-nho/nhom-tap-the/TAH00257.webp",
    "vua": "/anh-vua/nhom-tap-the/TAH00257.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-38",
    "file": "/anh/nhom-tap-the/TAH00423.jpg",
    "nho": "/anh-nho/nhom-tap-the/TAH00423.webp",
    "vua": "/anh-vua/nhom-tap-the/TAH00423.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "nhom-tap-the-39",
    "file": "/anh/nhom-tap-the/XU_07299.jpg",
    "nho": "/anh-nho/nhom-tap-the/XU_07299.webp",
    "vua": "/anh-vua/nhom-tap-the/XU_07299.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "nhom-tap-the"
  },
  {
    "id": "thanh-xuan-1",
    "file": "/anh/thanh-xuan/_TQA3104.jpg",
    "nho": "/anh-nho/thanh-xuan/_TQA3104.webp",
    "vua": "/anh-vua/thanh-xuan/_TQA3104.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-2",
    "file": "/anh/thanh-xuan/_TQA3326.jpg",
    "nho": "/anh-nho/thanh-xuan/_TQA3326.webp",
    "vua": "/anh-vua/thanh-xuan/_TQA3326.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-3",
    "file": "/anh/thanh-xuan/_TQA3405.jpg",
    "nho": "/anh-nho/thanh-xuan/_TQA3405.webp",
    "vua": "/anh-vua/thanh-xuan/_TQA3405.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-4",
    "file": "/anh/thanh-xuan/_VUX8547.jpg",
    "nho": "/anh-nho/thanh-xuan/_VUX8547.webp",
    "vua": "/anh-vua/thanh-xuan/_VUX8547.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-5",
    "file": "/anh/thanh-xuan/_VUX9813.jpg",
    "nho": "/anh-nho/thanh-xuan/_VUX9813.webp",
    "vua": "/anh-vua/thanh-xuan/_VUX9813.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-6",
    "file": "/anh/thanh-xuan/739508886_960081600421613_656368550136354214_n.jpg",
    "nho": "/anh-nho/thanh-xuan/739508886_960081600421613_656368550136354214_n.webp",
    "vua": "/anh-vua/thanh-xuan/739508886_960081600421613_656368550136354214_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-7",
    "file": "/anh/thanh-xuan/739841009_960081650421608_664561352571734422_n.jpg",
    "nho": "/anh-nho/thanh-xuan/739841009_960081650421608_664561352571734422_n.webp",
    "vua": "/anh-vua/thanh-xuan/739841009_960081650421608_664561352571734422_n.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-8",
    "file": "/anh/thanh-xuan/762804091_984443651318741_8973474888030583339_n.jpg",
    "nho": "/anh-nho/thanh-xuan/762804091_984443651318741_8973474888030583339_n.webp",
    "vua": "/anh-vua/thanh-xuan/762804091_984443651318741_8973474888030583339_n.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-9",
    "file": "/anh/thanh-xuan/763065160_984443797985393_6537961437878386648_n.jpg",
    "nho": "/anh-nho/thanh-xuan/763065160_984443797985393_6537961437878386648_n.webp",
    "vua": "/anh-vua/thanh-xuan/763065160_984443797985393_6537961437878386648_n.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-10",
    "file": "/anh/thanh-xuan/CAM09527.jpg",
    "nho": "/anh-nho/thanh-xuan/CAM09527.webp",
    "vua": "/anh-vua/thanh-xuan/CAM09527.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-11",
    "file": "/anh/thanh-xuan/DSC00650.jpg",
    "nho": "/anh-nho/thanh-xuan/DSC00650.webp",
    "vua": "/anh-vua/thanh-xuan/DSC00650.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-12",
    "file": "/anh/thanh-xuan/DSC01136.jpg",
    "nho": "/anh-nho/thanh-xuan/DSC01136.webp",
    "vua": "/anh-vua/thanh-xuan/DSC01136.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-13",
    "file": "/anh/thanh-xuan/DSC04866.jpg",
    "nho": "/anh-nho/thanh-xuan/DSC04866.webp",
    "vua": "/anh-vua/thanh-xuan/DSC04866.webp",
    "rong": 720,
    "cao": 405,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-14",
    "file": "/anh/thanh-xuan/DSC05411.jpg",
    "nho": "/anh-nho/thanh-xuan/DSC05411.webp",
    "vua": "/anh-vua/thanh-xuan/DSC05411.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-15",
    "file": "/anh/thanh-xuan/HAN04226.jpg",
    "nho": "/anh-nho/thanh-xuan/HAN04226.webp",
    "vua": "/anh-vua/thanh-xuan/HAN04226.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-16",
    "file": "/anh/thanh-xuan/HAN08709.jpg",
    "nho": "/anh-nho/thanh-xuan/HAN08709.webp",
    "vua": "/anh-vua/thanh-xuan/HAN08709.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-17",
    "file": "/anh/thanh-xuan/HAN08761.jpg",
    "nho": "/anh-nho/thanh-xuan/HAN08761.webp",
    "vua": "/anh-vua/thanh-xuan/HAN08761.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-18",
    "file": "/anh/thanh-xuan/HAN08824.jpg",
    "nho": "/anh-nho/thanh-xuan/HAN08824.webp",
    "vua": "/anh-vua/thanh-xuan/HAN08824.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-19",
    "file": "/anh/thanh-xuan/HAN08884.jpg",
    "nho": "/anh-nho/thanh-xuan/HAN08884.webp",
    "vua": "/anh-vua/thanh-xuan/HAN08884.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-20",
    "file": "/anh/thanh-xuan/IMG_5235.jpg",
    "nho": "/anh-nho/thanh-xuan/IMG_5235.webp",
    "vua": "/anh-vua/thanh-xuan/IMG_5235.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-21",
    "file": "/anh/thanh-xuan/IMG_5366.jpg",
    "nho": "/anh-nho/thanh-xuan/IMG_5366.webp",
    "vua": "/anh-vua/thanh-xuan/IMG_5366.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-22",
    "file": "/anh/thanh-xuan/MUN_6300.jpg",
    "nho": "/anh-nho/thanh-xuan/MUN_6300.webp",
    "vua": "/anh-vua/thanh-xuan/MUN_6300.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-23",
    "file": "/anh/thanh-xuan/NCM_6067.jpg",
    "nho": "/anh-nho/thanh-xuan/NCM_6067.webp",
    "vua": "/anh-vua/thanh-xuan/NCM_6067.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-24",
    "file": "/anh/thanh-xuan/NCM_6101.jpg",
    "nho": "/anh-nho/thanh-xuan/NCM_6101.webp",
    "vua": "/anh-vua/thanh-xuan/NCM_6101.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-25",
    "file": "/anh/thanh-xuan/NCM_9566.jpg",
    "nho": "/anh-nho/thanh-xuan/NCM_9566.webp",
    "vua": "/anh-vua/thanh-xuan/NCM_9566.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-26",
    "file": "/anh/thanh-xuan/NTQ_6803.jpg",
    "nho": "/anh-nho/thanh-xuan/NTQ_6803.webp",
    "vua": "/anh-vua/thanh-xuan/NTQ_6803.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-27",
    "file": "/anh/thanh-xuan/NTQ_7096.jpg",
    "nho": "/anh-nho/thanh-xuan/NTQ_7096.webp",
    "vua": "/anh-vua/thanh-xuan/NTQ_7096.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-28",
    "file": "/anh/thanh-xuan/NTQ05165.jpg",
    "nho": "/anh-nho/thanh-xuan/NTQ05165.webp",
    "vua": "/anh-vua/thanh-xuan/NTQ05165.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-29",
    "file": "/anh/thanh-xuan/SEN_7564.jpg",
    "nho": "/anh-nho/thanh-xuan/SEN_7564.webp",
    "vua": "/anh-vua/thanh-xuan/SEN_7564.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-30",
    "file": "/anh/thanh-xuan/TAH09345.jpg",
    "nho": "/anh-nho/thanh-xuan/TAH09345.webp",
    "vua": "/anh-vua/thanh-xuan/TAH09345.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "thanh-xuan"
  },
  {
    "id": "truyen-thong-1",
    "file": "/anh/truyen-thong/_VUX9897.jpg",
    "nho": "/anh-nho/truyen-thong/_VUX9897.webp",
    "vua": "/anh-vua/truyen-thong/_VUX9897.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-2",
    "file": "/anh/truyen-thong/_VUX9899.jpg",
    "nho": "/anh-nho/truyen-thong/_VUX9899.webp",
    "vua": "/anh-vua/truyen-thong/_VUX9899.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-3",
    "file": "/anh/truyen-thong/DSC00031.jpg",
    "nho": "/anh-nho/truyen-thong/DSC00031.webp",
    "vua": "/anh-vua/truyen-thong/DSC00031.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-4",
    "file": "/anh/truyen-thong/HAN05298.jpg",
    "nho": "/anh-nho/truyen-thong/HAN05298.webp",
    "vua": "/anh-vua/truyen-thong/HAN05298.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-5",
    "file": "/anh/truyen-thong/HAN07752.jpg",
    "nho": "/anh-nho/truyen-thong/HAN07752.webp",
    "vua": "/anh-vua/truyen-thong/HAN07752.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-6",
    "file": "/anh/truyen-thong/MAD_8310.jpg",
    "nho": "/anh-nho/truyen-thong/MAD_8310.webp",
    "vua": "/anh-vua/truyen-thong/MAD_8310.webp",
    "rong": 720,
    "cao": 479,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-7",
    "file": "/anh/truyen-thong/NCM_1860.jpg",
    "nho": "/anh-nho/truyen-thong/NCM_1860.webp",
    "vua": "/anh-vua/truyen-thong/NCM_1860.webp",
    "rong": 720,
    "cao": 480,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-8",
    "file": "/anh/truyen-thong/NCM_1894.jpg",
    "nho": "/anh-nho/truyen-thong/NCM_1894.webp",
    "vua": "/anh-vua/truyen-thong/NCM_1894.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-9",
    "file": "/anh/truyen-thong/NCM_8998.jpg",
    "nho": "/anh-nho/truyen-thong/NCM_8998.webp",
    "vua": "/anh-vua/truyen-thong/NCM_8998.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-10",
    "file": "/anh/truyen-thong/NCM_9369.jpg",
    "nho": "/anh-nho/truyen-thong/NCM_9369.webp",
    "vua": "/anh-vua/truyen-thong/NCM_9369.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-11",
    "file": "/anh/truyen-thong/NTQ_4788.jpg",
    "nho": "/anh-nho/truyen-thong/NTQ_4788.webp",
    "vua": "/anh-vua/truyen-thong/NTQ_4788.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-12",
    "file": "/anh/truyen-thong/PTT04551.jpg",
    "nho": "/anh-nho/truyen-thong/PTT04551.webp",
    "vua": "/anh-vua/truyen-thong/PTT04551.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-13",
    "file": "/anh/truyen-thong/QQ_00689.jpg",
    "nho": "/anh-nho/truyen-thong/QQ_00689.webp",
    "vua": "/anh-vua/truyen-thong/QQ_00689.webp",
    "rong": 480,
    "cao": 720,
    "nhom": "truyen-thong"
  },
  {
    "id": "truyen-thong-14",
    "file": "/anh/truyen-thong/SEN_8625.jpg",
    "nho": "/anh-nho/truyen-thong/SEN_8625.webp",
    "vua": "/anh-vua/truyen-thong/SEN_8625.webp",
    "rong": 479,
    "cao": 720,
    "nhom": "truyen-thong"
  }
];
