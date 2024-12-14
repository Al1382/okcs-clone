import ProductModel from "./ProductModel";

function convertToPersianNumber(number) {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.replace(/[0-9]/g, (digit) => persianNumbers[digit]);
}

const products = [
  ProductModel(
    1,
    convertToPersianNumber("پنیر خامه ای 350 گرمی کیبی"),
    "پنیر خامه ای متوسط", 
    "کیبی",
    convertToPersianNumber("83,000"), 
    convertToPersianNumber("پنیر خامه ای 350 گرمی کیبی IML"), 
    "/images/p1.jpg",
    convertToPersianNumber("64,900"),
    "۲۲"
  ),
  
  ProductModel(
    2,
    convertToPersianNumber("پودر لباسشویی ماشینی پریمیوم لاوندر 3000 گرمی پرسیل"),
    "پودر لباسشویی ماشینی بزرگ", 
    "پرسیل",
    convertToPersianNumber("313,202"), 
    convertToPersianNumber("پودر لباسشویی ماشینی پریمیوم لاوندر 3000 گرمی پرسیل"), 
    "/images/p2.jpg",
    convertToPersianNumber("278,900"),
    "۱۱"
  ),

  ProductModel(
    3,
    convertToPersianNumber("ماست موسیر پرچرب 450 گرم پاکبان"),
    "ماست طعم دار لیوانی", 
    "پاکبان",
    convertToPersianNumber("48,000"), 
    convertToPersianNumber("ماست موسیر پرچرب 450 گرم پاکبان"), 
    "/images/p3.jpg",
    convertToPersianNumber("35,900"),
    "۲۵"
  ),

  ProductModel(
    4,
    convertToPersianNumber("ناگت مرغ ستاره ای 2 کیلویی نیمه آماده کیمبال"),
    "ناگت مرغ بزرگ", 
    "کیمبال",
    convertToPersianNumber("345,000"), 
    convertToPersianNumber("ناگت مرغ ستاره ای 2 کیلویی نیمه آماده کیمبال"), 
    "/images/p4.jpg",
    convertToPersianNumber("252,900"),
    "۲۷"
  ),

  ProductModel(
    5,
    convertToPersianNumber("فلافل نیمه آماده منجمد 950 گرمی شیپن"),
    "فلافل بزرگ", 
    "کیمبال",
    convertToPersianNumber("150,000"), 
    convertToPersianNumber("فلافل نیمه آماده منجمد 950 گرمی شیپن"), 
    "/images/p5.jpg",
    convertToPersianNumber("82,500"),
    "۴۵"
  ),

  ProductModel(
    6,
    convertToPersianNumber("سوسیس آلمانی 40% مرغ توری 500 گرمی کیمبال"),
    "سوسیس آلمانی", 
    "کیمبال",
    convertToPersianNumber("79,000"), 
    convertToPersianNumber("سوسیس آلمانی 40% مرغ توری 500 گرمی کیمبال"), 
    "/images/p6.jpg",
    convertToPersianNumber("49,900"),
    "۳۷"
  ),

  ProductModel(
    7,
    convertToPersianNumber("سس مایونز کم چرب 940 گرمی فامیلا"),
    "سس مایونز متوسط", 
    "فامیلا",
    convertToPersianNumber("135,000"), 
    convertToPersianNumber("سس مایونز کم چرب 940 گرمی فامیلا"), 
    "/images/p7.jpg",
    convertToPersianNumber("107,900"),
    "۲۰"
  ),

  ProductModel(
    8,
    convertToPersianNumber("نوشیدنی لیموناد 1 لیتری ماتادور"),
    "آبمیوه گازدار پت لیموناد بزرگ", 
    "ماتادور",
    convertToPersianNumber("33,000"), 
    convertToPersianNumber("آبمیوه گازدار پت لیموناد بزرگ"), 
    "/images/p8.jpg",
    convertToPersianNumber("24,900"),
    "۲۵"
  ),

  ProductModel(
    9,
    convertToPersianNumber("تاپینگ پیتزا 1 کیلویی 206"),
    "پنیر پروسس بزرگ", 
    "۲۰۶",
    convertToPersianNumber("322,050"), 
    convertToPersianNumber("تاپینگ پیتزا 1 کیلویی 206"), 
    "/images/p9.jpg",
    convertToPersianNumber("209,900"),
    "۳۵"
  ),

  ProductModel(
    10,
    convertToPersianNumber("مینی کن شکلات 350 گرمی گارنت سوربن"),
    "شکلات کادویی", 
    "کاله",
    convertToPersianNumber("155,000"), 
    convertToPersianNumber("مینی کن شکلات 350 گرمی گارنت سوربن"), 
    "/images/p10.jpg",
    convertToPersianNumber("119,900"),
    "۲۳"
  ),
];

export default products;
