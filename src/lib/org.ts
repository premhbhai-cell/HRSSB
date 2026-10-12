export const ORG = {
  name: "Human Rights Suraksha Sangh–Bharat",
  short: "HRSS–Bharat",
  hindi: "मानव अधिकार सुरक्षा संघ–भारत",
  primaryPhone: "7488043880",
  phones: ["7488043880", "9507679985"],
  whatsapp: "https://wa.me/917488043880",
  whatsapp2: "https://wa.me/919507679985",
  addresses: [
    { label: "Office Address", value: "Kali Bagh Nagar, Thana Road, Ward No. 11, Bettiah, Bihar – 845438" },
    { label: "Command Office", value: "Manwapul–Lauriya Road, N.H. B-28, Bahut Patiya" },
  ],
  waMessage:
    "https://wa.me/917488043880?text=" +
    encodeURIComponent("Namaste, mujhe Human Rights Suraksha Sangh–Bharat ke baare mein jaankari chahiye."),
  identifiers: [
    { label: "NITI Aayog Unique ID", value: "BR/2026/0961327" },
    { label: "e-Anudaan ID", value: "BR/00052170" },
    { label: "UDYAM", value: "BR-38-0063747" },
    { label: "Registration Number", value: "013493" },
    { label: "Additional Identifier", value: "AAKTM7658L" },
  ],
  social: {
    whatsappChannel: "https://whatsapp.com/channel/0029Vb91AmOEawdw4YpEbs1c",
    facebook: "https://www.facebook.com/share/18rMpfKs2u/",
    youtube: "https://youtube.com/@jantakiawaz40?si=YnaLKs3Q2bii0I5P",
    instagram: "https://www.instagram.com/sharffuddin78?obrf=ZHR3amF6MjdxcWti",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/membership", label: "Membership" },
  { to: "/programs", label: "Programs & News" },
  { to: "/contact", label: "Contact & Donate" },
] as const;

export const pageHead = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

export const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman & Nicobar Islands","Chandigarh","Dadra & Nagar Haveli and Daman & Diu","Delhi","Jammu & Kashmir","Ladakh","Lakshadweep","Puducherry",
];
