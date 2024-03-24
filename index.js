const BASE = "https://api.exchangerate-api.com/v4/latest/USD";
const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  let reset=document.querySelector(".reset");
  let msg=document.querySelector(".msg");
  let frompart=document.querySelector(".from");
  let button=document.querySelector(".but");
  let fromimage=document.querySelector(".fromimage");
  let toimage=document.querySelector(".toimage");
  let amount=document.querySelector(".para");
  let topart=document.querySelector(".to");
   
const drop=document.querySelectorAll("#form");

for (const dropitem of drop) {
    for (const code in countryList) {
        let newitem=document.createElement("option");
        newitem.innerText=code;
        newitem.value=code;
        dropitem.append(newitem);
    }
    
}
frompart.addEventListener("change",(ele)=>{
    changeflagfrom(ele.target);
})



topart.addEventListener("change",(ele)=>{
    changeflagto(ele.target);
})

let changeflagfrom=(country)=>{
   
    let ccodefrom=country.value;
    let currcode=countryList[ccodefrom];
fromimage.src=`https://flagsapi.com/${currcode}/flat/64.png`;


}

let changeflagto=(country)=>{
   
    let ccodeto=country.value;
    let currcode=countryList[ccodeto];
toimage.src=`https://flagsapi.com/${currcode}/flat/64.png`;


}
let display=(ex,from,to)=>{
let money=amount.value;
let showing=(ex*money);
msg.innerText=`${money}${from}=${showing.toFixed(2)}${to}`;
};


button.addEventListener("click",(b)=>{
    b.preventDefault();
if(amount.value>=0&&amount.value<99999999999999999999999999999999){
   



    let fromcur=document.querySelector(".from select");
    let tocurr=document.querySelector(".to select");
    let frm=fromcur.value;
    let to=tocurr.value;
    getrates(frm,to);
}
else{
msg.innerText="wrong input";

}
});

const getrates=async (frm,to)=>{

let response=await fetch(BASE);
let data=await response.json();
 let fromdata=data.rates[frm];
 fromdata=fromdata;
 let todata=data.rates[to];
let show=(todata/fromdata);

display(show,frm,to);

 
console.log(show);
};
reset.addEventListener('click',()=>{

amount=0;

});


