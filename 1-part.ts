// =============================================================
// ========================= 1-masala ==========================
// =============================================================
// Tushuntirish:
// Oyjamol stringStorage nomli obyekt yaratgan. U ushbu obyektga mos keladigan Storage nomli interface yasamoqchi. Interface tashqaridan type qabul qiladi va items (massiv), count (raqam), va lastItem (oxirgi element) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Storages<T> {
  items: T[];
  count: number;
  lastItem: string;
}

const stringStorage: Storages<string> = {
  items: ["olma", "anor", "shaftoli"],
  count: 3,
  lastItem: "shaftoli",
};

// =============================================================
// ========================= 2-masala ==========================
// =============================================================
// Tushuntirish:
// Rahmatilla sinfdoshlarining baholarini saqlamoqchi. U FlexibleArray nomli interface yozmoqchi, bu interface turli xil tiplarni (raqam yoki string) qabul qiladigan massiv sifatida ishlaydi.

// Kod snippet:
interface FlexibleArray<T> {
  [index: number]: T;
}

const numbers: FlexibleArray<number> = [5, 4, 3];
const words: FlexibleArray<string> = ["a'lo", "yaxshi", "qoniqarli"];

// =============================================================
// ========================= 3-masala ==========================
// =============================================================
// Tushuntirish:
// Boymurod GenericContainer degan interface yozmoqchi. Unda value maydoni bor, bu maydon turli xil tiplarda (son, matn, boolean) bo'lishi mumkin.

// Kod snippet:
interface GenericContainer<T> {
  value: T;
}

const container1: GenericContainer<number> = { value: 42 };
const container2: GenericContainer<string> = { value: "Salom" };
const container3: GenericContainer<boolean> = { value: true };

// =============================================================
// ========================= 4-masala ==========================
// =============================================================
// Tushuntirish:
// Shahrizat opa mahsulotlar uchun Product interface yaratmoqchi. Unda name (string), price (number), va extra (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Product<T> {
  name: string;
  price: number;
  extra: T;
}

const food: Product<{ calories: number }> = {
  name: "Non",
  price: 3000,
  extra: { calories: 250 },
};

const electronics: Product<{ warranty: string }> = {
  name: "Telefon",
  price: 2500000,
  extra: { warranty: "2 yil" },
};

// =============================================================
// ========================= 5-masala ==========================
// =============================================================
// Tushuntirish:
// Nosirbek Log degan interface yozmoqchi, unda message (string), timestamp (Date), va meta (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Log<T> {
  message: string;
  timestamp: Date;
  meta: T;
}

const errorLog: Log<{ errorCode: number }> = {
  message: "Xatolik yuz berdi",
  timestamp: new Date(),
  meta: { errorCode: 404 },
};

const infoLog: Log<{ user: string }> = {
  message: "Foydalanuvchi tizimga kirdi",
  timestamp: new Date(),
  meta: { user: "Shuhrat" },
};

// =============================================================
// ========================= 6-masala ==========================
// =============================================================
// Tushuntirish:
// Dilshod aka kutubxona tizimi uchun Book interface yozmoqchi. Unda title (string) va details (generic type) maydonlari bo'ladi, details turli ma'lumotlarni saqlaydi.

// Kod snippet:
interface Book<T> {
  title: string;
  details: T;
}

const novel: Book<{ author: string }> = {
  title: "O'tgan Kunlar",
  details: { author: "Abdulla Qodiriy" },
};

const textbook: Book<{ subject: string }> = {
  title: "Matematika",
  details: { subject: "Algebra" },
};

// =============================================================
// ========================= 7-masala ==========================
// =============================================================
// Tushuntirish:
// Gulnora opa foydalanuvchi ma'lumotlari uchun UserProfile interface yaratmoqchi. Unda id (number) va info (generic type) maydonlari bo'ladi.

// Kod snippet:
interface UserProfile<T> {
  id: number;
  info: T;
}

const user1: UserProfile<{ name: string }> = {
  id: 1,
  info: { name: "Aziz" },
};

const user2: UserProfile<{ age: number }> = {
  id: 2,
  info: { age: 25 },
};

// =============================================================
// ========================= 8-masala ==========================
// =============================================================
// Tushuntirish:
// Farrux dars jadvallarini saqlash uchun Schedule interface yozmoqchi. Unda day (string) va events (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Schedule<T> {
  day: string;
  events: T[];
}

const monday: Schedule<string> = {
  day: "Dushanba",
  events: ["Matematika", "Fizika"],
};

const tuesday: Schedule<{ time: string }> = {
  day: "Seshanba",
  events: [{ time: "09:00" }, { time: "11:00" }],
};

// =============================================================
// ========================= 9-masala ==========================
// =============================================================
// Tushuntirish:
// Zilola xaridlar ro'yxati uchun ShoppingList interface yozmoqchi. Unda items (generic type massiv) va total (number) maydonlari bo'ladi.

// Kod snippet:
interface ShoppingList<T> {
  items: T[];
  total: number;
}

const groceries: ShoppingList<string> = {
  items: ["suv", "non", "go'sht"],
  total: 15000,
};

const electronicsList: ShoppingList<{ name: string; price: number }> = {
  items: [{ name: "naushnik", price: 200000 }],
  total: 200000,
};

// =============================================================
// ========================= 10-masala =========================
// =============================================================
// Tushuntirish:
// Jasur fayllarni boshqarish uchun FileSystem interface yozmoqchi. Unda path (string) va content (generic type) maydonlari bo'ladi.

// Kod snippet:
interface FileSystems<T> {
  path: string;
  content: T;
}

const textFile: FileSystems<string> = {
  path: "/docs/text.txt",
  content: "Salom, dunyo!",
};

const jsonFile: FileSystems<{ id: number }> = {
  path: "/data/user.json",
  content: { id: 1 },
};

// =============================================================
// ========================= 11-masala =========================
// =============================================================
// Tushuntirish:
// Madina loyiha ma'lumotlari uchun Project interface yozmoqchi. Unda name (string), status (string), va metadata (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Project<T> {
  name: string;
  status: string;
  metadata: T;
}

const webProject: Project<{ framework: string }> = {
  name: "E-commerce",
  status: "active",
  metadata: { framework: "React" },
};

const mobileProject: Project<{ platform: string }> = {
  name: "Chat App",
  status: "pending",
  metadata: { platform: "iOS" },
};

// =============================================================
// ========================= 12-masala =========================
// =============================================================
// Tushuntirish:
// Sardor do'kon inventarini boshqarish uchun Inventory interface yozmoqchi. Unda products (generic type massiv) va category (string) maydonlari bo'ladi.

// Kod snippet:
interface Inventory<T> {
  products: T[];
  category: string;
}

const clothes: Inventory<{ size: string }> = {
  products: [{ size: "M" }, { size: "L" }],
  category: "Kiyim",
};

const gadgets: Inventory<{ brand: string }> = {
  products: [{ brand: "Samsung" }],
  category: "Elektronika",
};

// =============================================================
// ========================= 13-masala =========================
// =============================================================
// Tushuntirish:
// Nigora xabarlar tizimi uchun Message interface yozmoqchi. Unda sender (string) va payload (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Message<T> {
  sender: string;
  payload: T;
}

const textMessage: Message<string> = {
  sender: "Ali",
  payload: "Bugun uchrashamizmi?",
};

const dataMessage: Message<{ code: number }> = {
  sender: "Bot",
  payload: { code: 200 },
};

// =============================================================
// ========================= 14-masala =========================
// =============================================================
// Tushuntirish:
// Kamoljon API javoblarini saqlash uchun ApiResponse interface yozmoqchi. Unda status (number) va data (generic type) maydonlari bo'ladi.

// Kod snippet:
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "Oybek" },
};

const errorResponses: ApiResponse<string> = {
  status: 404,
  data: "Not Found",
};

// =============================================================
// ========================= 15-masala =========================
// =============================================================
// Tushuntirish:
// Shaxzod kutubxona kitoblari uchun LibraryBook interface yozmoqchi. Unda isbn (string) va info (generic type) maydonlari bo'ladi.

// Kod snippet:
interface LibraryBook<T> {
  isbn: string;
  info: T;
}

const fiction: LibraryBook<{ genre: string }> = {
  isbn: "123456",
  info: { genre: "Fantastika" },
};

const science: LibraryBook<{ pages: number }> = {
  isbn: "789012",
  info: { pages: 300 },
};

// =============================================================
// ========================= 16-masala =========================
// =============================================================
// Tushuntirish:
// Zulayho talabalar ro'yxati uchun StudentList interface yozmoqchi. Unda group (string) va students (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface StudentList<T> {
  group: string;
  students: T[];
}

const groupA: StudentList<{ name: string }> = {
  group: "A-101",
  students: [{ name: "Nodir" }, { name: "Zarina" }],
};

const groupB: StudentList<{ id: number }> = {
  group: "B-202",
  students: [{ id: 1 }, { id: 2 }],
};

// =============================================================
// ========================= 17-masala =========================
// =============================================================
// Tushuntirish:
// Rustam hodimlar ma'lumotlari uchun Employee interface yozmoqchi. Unda department (string) va details (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Employee<T> {
  department: string;
  details: T;
}

const developer: Employee<{ role: string }> = {
  department: "IT",
  details: { role: "Frontend" },
};

const manager: Employee<{ experience: number }> = {
  department: "HR",
  details: { experience: 5 },
};

// =============================================================
// ========================= 18-masala =========================
// =============================================================
// Tushuntirish:
// Malika onlayn kurslar uchun Course interface yozmoqchi. Unda title (string) va content (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Course<T> {
  title: string;
  content: T[];
}

const programming: Course<string> = {
  title: "TypeScript",
  content: ["Generics", "Interfaces"],
};

const design: Course<{ topic: string }> = {
  title: "UI/UX",
  content: [{ topic: "Wireframes" }],
};

// =============================================================
// ========================= 19-masala =========================
// =============================================================
// Tushuntirish:
// Otabek blog postlari uchun Post interface yozmoqchi. Unda author (string) va metadata (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Post<T> {
  author: string;
  metadata: T;
}

const techPost: Post<{ category: string }> = {
  author: "Jamshid",
  metadata: { category: "Tech" },
};

const lifePost: Post<{ date: string }> = {
  author: "Laylo",
  metadata: { date: "2025-06-27" },
};

// =============================================================
// ========================= 20-masala =========================
// =============================================================
// Tushuntirish:
// Aziza savdo operatsiyalari uchun Transaction interface yozmoqchi. Unda amount (number) va details (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Transaction<T> {
  amount: number;
  details: T;
}

const purchase: Transaction<{ item: string }> = {
  amount: 50000,
  details: { item: "Klaviatura" },
};

const refund: Transaction<{ reason: string }> = {
  amount: 20000,
  details: { reason: "Defective" },
};

// =============================================================
// ========================= 21-masala =========================
// =============================================================
// Tushuntirish:
// Shohruh tarmoq so'rovlari uchun Request interface yozmoqchi. Unda url (string) va payload (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Requests<T> {
  url: string;
  payload: T;
}

const getRequest: Requests<string> = {
  url: "/api/users",
  payload: "GET",
};

const postRequest: Requests<{ id: number }> = {
  url: "/api/users",
  payload: { id: 1 },
};

// =============================================================
// ========================= 22-masala =========================
// =============================================================
// Tushuntirish:
// Xurshida taomlar ro'yxati uchun Menu interface yozmoqchi. Unda category (string) va items (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Menu<T> {
  category: string;
  items: T[];
}

const desserts: Menu<string> = {
  category: "Shirinliklar",
  items: ["Tort", "Pirog"],
};

const drinks: Menu<{ price: number }> = {
  category: "Ichimliklar",
  items: [{ price: 5000 }, { price: 7000 }],
};

// =============================================================
// ========================= 23-masala =========================
// =============================================================
// Tushuntirish:
// Ibrohim sport tadbirlari uchun Event interface yozmoqchi. Unda name (string) va info (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Events<T> {
  name: string;
  info: T;
}

const football: Events<{ location: string }> = {
  name: "Futbol",
  info: { location: "Stadion" },
};

const chess: Events<{ participants: number }> = {
  name: "Shaxmat",
  info: { participants: 32 },
};

// =============================================================
// ========================= 24-masala =========================
// =============================================================
// Tushuntirish:
// Zarina fayl metadatalari uchun FileMetadata interface yozmoqchi. Unda filename (string) va metadata (generic type) maydonlari bo'ladi.

// Kod snippet:
interface FileMetadata<T> {
  filename: string;
  metadata: T;
}

const image: FileMetadata<{ size: number }> = {
  filename: "photo.jpg",
  metadata: { size: 1024 },
};

const documents: FileMetadata<{ format: string }> = {
  filename: "report.pdf",
  metadata: { format: "PDF" },
};

// =============================================================
// ========================= 25-masala =========================
// =============================================================
// Tushuntirish:
// Anvar xodimlar jadvallari uchun Roster interface yozmoqchi. Unda date (string) va members (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Roster<T> {
  date: string;
  members: T[];
}

const teamA: Roster<{ name: string }> = {
  date: "2025-06-27",
  members: [{ name: "Sardor" }, { name: "Gulnora" }],
};

const teamB: Roster<{ id: number }> = {
  date: "2025-06-28",
  members: [{ id: 1 }, { id: 2 }],
};

// =============================================================
// ========================= 26-masala =========================
// =============================================================
// Tushuntirish:
// Mohira test natijalari uchun TestResult interface yozmoqchi. Unda testName (string) va result (generic type) maydonlari bo'ladi.

// Kod snippet:
interface TestResult<T> {
  testName: string;
  result: number | string;
}

const mathTest: TestResult<number> = {
  testName: "Matematika",
  result: 85,
};

const essayTest: TestResult<string> = {
  testName: "Insho",
  result: "A'lo",
};

// =============================================================
// ========================= 27-masala =========================
// =============================================================
// Tushuntirish:
// Komiljon do'kon savdolari uchun Sale interface yozmoqchi. Unda date (string) va items (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Sale<T> {
  date: string;
  items: T[];
}

const dailySale: Sale<{ product: string }> = {
  date: "2025-06-27",
  items: [{ product: "Sut" }, { product: "Non" }],
};

const bulkSale: Sale<{ quantity: number }> = {
  date: "2025-06-27",
  items: [{ quantity: 10 }, { quantity: 20 }],
};

// =============================================================
// ========================= 28-masala =========================
// =============================================================
// Tushuntirish:
// Nodira sayohat rejalari uchun Trip interface yozmoqchi. Unda destination (string) va details (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Trip<T> {
  destination: string;
  details: T;
}

const beachTrip: Trip<{ duration: string }> = {
  destination: "Maldiv",
  details: { duration: "7 kun" },
};

const cityTrip: Trip<{ budget: number }> = {
  destination: "Toshkent",
  details: { budget: 1000000 },
};

// =============================================================
// ========================= 29-masala =========================
// =============================================================
// Tushuntirish:
// Bahrom tarmoq xabarlari uchun NetworkMessage interface yozmoqchi. Unda protocol (string) va data (generic type) maydonlari bo'ladi.

// Kod snippet:
interface NetworkMessage<T> {
  protocol: string;
  data: T;
}

const httpMessage: NetworkMessage<string> = {
  protocol: "HTTP",
  data: "OK",
};

const wsMessage: NetworkMessage<{ status: number }> = {
  protocol: "WebSocket",
  data: { status: 101 },
};

// =============================================================
// ========================= 30-masala =========================
// =============================================================
// Tushuntirish:
// Feruza talaba imtihonlari uchun Exam interface yozmoqchi. Unda subject (string) va score (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Exam<T> {
  subject: string;
  score: number | string;
}

const mathExam: Exam<number> = {
  subject: "Matematika",
  score: 95,
};

const litExam: Exam<string> = {
  subject: "Adabiyot",
  score: "A",
};

// =============================================================
// ========================= 31-masala =========================
// =============================================================
// Tushuntirish:
// Eldor loyiha jadvallari uchun Timeline interface yozmoqchi. Unda projectName (string) va milestones (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Timeline<T> {
  projectName: string;
  milestones: T[];
}

const appTimeline: Timeline<{ phase: string }> = {
  projectName: "Mobile App",
  milestones: [{ phase: "Design" }, { phase: "Development" }],
};

const webTimeline: Timeline<{ date: string }> = {
  projectName: "Website",
  milestones: [{ date: "2025-07-01" }],
};

// =============================================================
// ========================= 32-masala =========================
// =============================================================
// Tushuntirish:
// Munisa foydalanuvchi sozlamalari uchun Settings interface yozmoqchi. Unda userId (number) va preferences (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Settings<T> {
  userId: number;
  preferences: T;
}

const userSettings: Settings<{ theme: string }> = {
  userId: 123,
  preferences: { theme: "dark" },
};

const adminSettings: Settings<{ notifications: boolean }> = {
  userId: 456,
  preferences: { notifications: true },
};

// =============================================================
// ========================= 33-masala =========================
// =============================================================
// Tushuntirish:
// Asadbek buyurtmalar uchun Order interface yozmoqchi. Unda orderId (string) va items (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Order<T> {
  orderId: string;
  items: T[];
}

const foodOrder: Order<{ dish: string }> = {
  orderId: "A123",
  items: [{ dish: "Osh" }, { dish: "Somsa" }],
};

const gadgetOrder: Order<{ price: number }> = {
  orderId: "B456",
  items: [{ price: 500000 }],
};

// =============================================================
// ========================= 34-masala =========================
// =============================================================
// Tushuntirish:
// Dilorom jamoa ma'lumotlari uchun Team interface yozmoqchi. Unda name (string) va members (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Team<T> {
  name: string;
  members: T[];
}

const devTeam: Team<{ role: string }> = {
  name: "Developers",
  members: [{ role: "Backend" }, { role: "Frontend" }],
};

const designTeam: Team<{ name: string }> = {
  name: "Designers",
  members: [{ name: "Laylo" }],
};

// =============================================================
// ========================= 35-masala =========================
// =============================================================
// Tushuntirish:
// Shavkat xizmatlar ro'yxati uchun Service interface yozmoqchi. Unda serviceName (string) va config (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Service<T> {
  serviceName: string
  config: T;
}

const cloudService: Service<{ provider: string }> = {
  serviceName: "Cloud",
  config: { provider: "AWS" },
};

const dbService: Service<{ type: string }> = {
  serviceName: "Database",
  config: { type: "PostgreSQL" },
};

// =============================================================
// ========================= 36-masala =========================
// =============================================================
// Tushuntirish:
// Oydin tashkilotlar uchun Organization interface yozmoqchi. Unda name (string) va details (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Organization<T> {
  name: string;
  details: T;
}

const company: Organization<{ industry: string }> = {
  name: "Tech Corp",
  details: { industry: "IT" },
};

const ngo: Organization<{ mission: string }> = {
  name: "Charity",
  details: { mission: "Education" },
};

// =============================================================
// ========================= 37-masala =========================
// =============================================================
// Tushuntirish:
// Farhod hujjatlar uchun Document interface yozmoqchi. Unda title (string) va content (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Documents<T> {
  title: string;
  content: T;
}

const report: Documents<{ pages: number }> = {
  title: "Annual Report",
  content: { pages: 50 },
};

const contract: Documents<string> = {
  title: "Agreement",
  content: "Terms and conditions",
};

// =============================================================
// ========================= 38-masala =========================
// =============================================================
// Tushuntirish:
// Zuhra tadbir rejalari uchun Plan interface yozmoqchi. Unda eventName (string) va tasks (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Plan<T> {
  eventName: string;
  tasks: T[];
}

const weddingPlan: Plan<{ task: string }> = {
  eventName: "To'y",
  tasks: [{ task: "Dekoratsiya" }, { task: "Ovqat" }],
};

const conferencePlan: Plan<{ priority: number }> = {
  eventName: "Konferensiya",
  tasks: [{ priority: 1 }],
};

// =============================================================
// ========================= 39-masala =========================
// =============================================================
// Tushuntirish:
// Akram xabarlar ro'yxati uchun Notification interface yozmoqchi. Unda type (string) va data (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Notifications<T> {
  type: string;
  data: T;
}

const email: Notifications<{ subject: string }> = {
  type: "Email",
  data: { subject: "Meeting" },
};

const sms: Notifications<string> = {
  type: "SMS",
  data: "Reminder: Meeting at 10",
};

// =============================================================
// ========================= 40-masala =========================
// =============================================================
// Tushuntirish:
// Surayyo loyiha holatlari uchun Status interface yozmoqchi. Unda projectId (number) va state (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Status<T> {
  projectId: number;
  state: T;
}

const projectStatus: Status<string> = {
  projectId: 101,
  state: "In Progress",
};

const taskStatus: Status<{ progress: number }> = {
  projectId: 102,
  state: { progress: 75 },
};

// =============================================================
// ========================= 41-masala =========================
// =============================================================
// Tushuntirish:
// Mirzo mijozlar ma'lumotlari uchun Client interface yozmoqchi. Unda clientId (string) va info (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Client<T> {
  clientId: string;
  info: T;
}

const vipClient: Client<{ tier: string }> = {
  clientId: "C123",
  info: { tier: "Premium" },
};

const regularClient: Client<{ orders: number }> = {
  clientId: "C456",
  info: { orders: 5 },
};

// =============================================================
// ========================= 42-masala =========================
// =============================================================
// Tushuntirish:
// Sabina kitoblar ro'yxati uchun BookList interface yozmoqchi. Unda genre (string) va books (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface BookList<T> {
  genre: string;
  books: T[];
}

const fictionList: BookList<{ title: string }> = {
  genre: "Fantastika",
  books: [{ title: "Dune" }, { title: "1984" }],
};

const scienceList: BookList<{ author: string }> = {
  genre: "Ilmiy",
  books: [{ author: "Hawking" }],
};

// =============================================================
// ========================= 43-masala =========================
// =============================================================
// Tushuntirish:
// Ilhom tarmoq so'rov natijalari uchun Response interface yozmoqchi. Unda code (number) va result (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Responses<T> {
  code: number;
  result: T;
}

const successResponse: Responses<string> = {
  code: 200,
  result: "Success",
};

const errorResponse: Responses<{ message: string }> = {
  code: 500,
  result: { message: "Server Error" },
};

// =============================================================
// ========================= 44-masala =========================
// =============================================================
// Tushuntirish:
// Nargiza ta'til rejalari uchun Vacation interface yozmoqchi. Unda location (string) va details (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Vacation<T> {
  location: string;
  details: T;
}

const summerVacation: Vacation<{ duration: number }> = {
  location: "Issiqko'l",
  details: { duration: 7 },
};

const winterVacation: Vacation<{ activities: string[] }> = {
  location: "Chimgan",
  details: { activities: ["Skiing"] },
};

// =============================================================
// ========================= 45-masala =========================
// =============================================================
// Tushuntirish:
// Sherzod savdo tranzaksiyalari uchun Payment interface yozmoqchi. Unda amount (number) va info (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Payment<T> {
  amount: number;
  info: T;
}

const onlinePayment: Payment<{ method: string }> = {
  amount: 100000,
  info: { method: "Card" },
};

const cashPayment: Payment<{ currency: string }> = {
  amount: 50000,
  info: { currency: "UZS" },
};

// =============================================================
// ========================= 46-masala =========================
// =============================================================
// Tushuntirish:
// Mavluda loyiha hujjatlari uchun ProjectDoc interface yozmoqchi. Unda docId (string) va content (generic type) maydonlari bo'ladi.

// Kod snippet:
interface ProjectDoc<T> {
  docId: string;
  content: T;
}

const proposal: ProjectDoc<{ summary: string }> = {
  docId: "D001",
  content: { summary: "New Feature" },
};

const reportDoc: ProjectDoc<number> = {
  docId: "D002",
  content: 42,
};

// =============================================================
// ========================= 47-masala =========================
// =============================================================
// Tushuntirish:
// Jafar tarmoq konfiguratsiyalari uchun Config interface yozmoqchi. Unda name (string) va settings (generic type) maydonlari bo'ladi.

// Kod snippet:
interface Config<T> {
  name: string;
  settings: T;
}

const serverConfig: Config<{ port: number }> = {
  name: "Server",
  settings: { port: 8080 },
};

const appConfig: Config<{ debug: boolean }> = {
  name: "App",
  settings: { debug: true },
};

// =============================================================
// ========================= 48-masala =========================
// =============================================================
// Tushuntirish:
// Laylo taom retseptlari uchun Recipe interface yozmoqchi. Unda dishName (string) va ingredients (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Recipe<T> {
  dishName: string;
  ingredients: T[];
}

const soupRecipe: Recipe<string> = {
  dishName: "Sho'rva",
  ingredients: ["go'sht", "kartoshka"],
};

const cakeRecipe: Recipe<{ quantity: number }> = {
  dishName: "Tort",
  ingredients: [{ quantity: 2 }, { quantity: 1 }],
};

// =============================================================
// ========================= 49-masala =========================
// =============================================================
// Tushuntirish:
// O'ktam xabar jurnallari uchun LogEntry interface yozmoqchi. Unda logId (number) va data (generic type) maydonlari bo'ladi.

// Kod snippet:
interface LogEntry<T> {
  logId: number;
  data: T;
}

const systemLog: LogEntry<{ event: string }> = {
  logId: 1001,
  data: { event: "System Start" },
};

const userLog: LogEntry<string> = {
  logId: 1002,
  data: "User Login",
};

// =============================================================
// ========================= 50-masala =========================
// =============================================================
// Tushuntirish:
// Gulchehra sayt kontenti uchun Content interface yozmoqchi. Unda page (string) va elements (generic type massiv) maydonlari bo'ladi.

// Kod snippet:
interface Content<T> {
  page: string;
  elements: T[];
}

const homePage: Content<{ title: string }> = {
  page: "Home",
  elements: [{ title: "Welcome" }, { title: "About" }],
};

const blogPage: Content<{ id: number }> = {
  page: "Blog",
  elements: [{ id: 1 }, { id: 2 }],
};
