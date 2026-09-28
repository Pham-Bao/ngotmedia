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
  file: string;
  nhom: NhomAnh;
}

export const danhSachAnh: AnhBoSuuTap[] = [
  {
    "id": "ca-nhan-1",
    "file": "/anh/ca-nhan/344350259_248412364445007_2648313915118053103_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-2",
    "file": "/anh/ca-nhan/468805514_489272544169190_4310690598162030402_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-3",
    "file": "/anh/ca-nhan/473886355_524758263953951_7689002678602351127_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-4",
    "file": "/anh/ca-nhan/474127224_524757950620649_7954018438886446050_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-5",
    "file": "/anh/ca-nhan/480469221_549892568107187_3576545771388612083_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-6",
    "file": "/anh/ca-nhan/480767975_550599221369855_6547772929717290488_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-7",
    "file": "/anh/ca-nhan/484283993_565909573172153_1328932161121405877_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-8",
    "file": "/anh/ca-nhan/486274198_576172185479225_1684690267380102434_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-9",
    "file": "/anh/ca-nhan/491643329_594507796978997_8998700758144945232_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-10",
    "file": "/anh/ca-nhan/491999466_594507920312318_9043265839168587667_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-11",
    "file": "/anh/ca-nhan/494623694_607468072349636_8203828855814759414_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-12",
    "file": "/anh/ca-nhan/499278445_620022874427489_1076239441233926373_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-13",
    "file": "/anh/ca-nhan/548915632_719830661113376_8425894639019600967_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-14",
    "file": "/anh/ca-nhan/550407585_719830081113434_7721145396003296405_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-15",
    "file": "/anh/ca-nhan/550534476_719830094446766_8979220552661291024_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-16",
    "file": "/anh/ca-nhan/558256960_736531799443262_5689233404759988897_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-17",
    "file": "/anh/ca-nhan/558858661_736532232776552_2075722963377391630_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-18",
    "file": "/anh/ca-nhan/558933830_736532272776548_2426808119601599206_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-19",
    "file": "/anh/ca-nhan/559191926_736531302776645_4549879276836740932_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-20",
    "file": "/anh/ca-nhan/561186392_736532242776551_9603642255835607_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-21",
    "file": "/anh/ca-nhan/585461644_774369085659533_6916903337892513629_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-22",
    "file": "/anh/ca-nhan/595391872_788765030886605_8855171985703963807_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-23",
    "file": "/anh/ca-nhan/596387924_788763590886749_6374609224455570943_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-24",
    "file": "/anh/ca-nhan/596815083_788763640886744_7344635728897560061_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-25",
    "file": "/anh/ca-nhan/597334159_788765070886601_640491079405671312_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-26",
    "file": "/anh/ca-nhan/597951945_788765000886608_3633817749676449679_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-27",
    "file": "/anh/ca-nhan/598015838_794968016932973_8297928001399925728_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-28",
    "file": "/anh/ca-nhan/600240330_794968510266257_3429758403513110294_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-29",
    "file": "/anh/ca-nhan/602376370_826504503779324_2099950686704176583_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-30",
    "file": "/anh/ca-nhan/619509595_826504410446000_7261718203759491949_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-31",
    "file": "/anh/ca-nhan/619592021_826504383779336_6904798287296649652_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-32",
    "file": "/anh/ca-nhan/622673575_826519860444455_2919653927345012957_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-33",
    "file": "/anh/ca-nhan/632939264_839691432460631_1558880521888105266_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-34",
    "file": "/anh/ca-nhan/751563541_973362595760180_5933764760182993578_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-35",
    "file": "/anh/ca-nhan/753150643_973362342426872_2697055585478081095_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-36",
    "file": "/anh/ca-nhan/754498160_973362495760190_806719451872514927_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-37",
    "file": "/anh/ca-nhan/761596643_984443711318735_1095298103461307669_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-38",
    "file": "/anh/ca-nhan/762292005_984443654652074_3272992384742610301_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-39",
    "file": "/anh/ca-nhan/762676941_984485407981232_8823277222326142930_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-40",
    "file": "/anh/ca-nhan/762998866_984485411314565_2725869619918007878_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-41",
    "file": "/anh/ca-nhan/763028788_984485461314560_6194072131674035927_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "ca-nhan-42",
    "file": "/anh/ca-nhan/763098494_984485491314557_7346003949226773244_n.jpg",
    "nhom": "ca-nhan"
  },
  {
    "id": "couple-1",
    "file": "/anh/couple/480673341_553384997757944_2166370223778121897_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-2",
    "file": "/anh/couple/585882185_774368972326211_3902029118433079827_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-3",
    "file": "/anh/couple/600908287_794968003599641_1975513174427742772_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-4",
    "file": "/anh/couple/615816604_819480291148412_2780374954021513880_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-5",
    "file": "/anh/couple/619717227_826504580445983_6788352981740524846_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-6",
    "file": "/anh/couple/619989371_819480361148405_4759287234414368561_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-7",
    "file": "/anh/couple/622295876_826504800445961_2782755199506542168_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "couple-8",
    "file": "/anh/couple/632144626_839652555797852_7759500507639746494_n.jpg",
    "nhom": "couple"
  },
  {
    "id": "thanh-xuan-1",
    "file": "/anh/thanh-xuan/739508886_960081600421613_656368550136354214_n.jpg",
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-2",
    "file": "/anh/thanh-xuan/739841009_960081650421608_664561352571734422_n.jpg",
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-3",
    "file": "/anh/thanh-xuan/762804091_984443651318741_8973474888030583339_n.jpg",
    "nhom": "thanh-xuan"
  },
  {
    "id": "thanh-xuan-4",
    "file": "/anh/thanh-xuan/763065160_984443797985393_6537961437878386648_n.jpg",
    "nhom": "thanh-xuan"
  }
];
