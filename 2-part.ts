// =============================================================
// ========================= 1-masala ==========================
// =============================================================
// Tushuntirish:
// Oyjamol ma'lumotlar ombori uchun AdvancedStorage interface yozmoqchi. Bu interface tashqaridan type qabul qiladi va faqat string yoki number tipidagi massivlarni qabul qilishi uchun Generic bilan cheklanadi. Unda items (massiv) va summary (string) maydonlari bo'ladi.

// Kod snippet:
interface AdvancedStorage<T extends string | number> {
  items: T[];
  summary: T;
}

const stringStorage: AdvancedStorage<number> = {
  items: [35, 45],
  summary: 45,
};

const numberStorage: AdvancedStorage<number> = {
  items: [1, 2, 3],
  summary: 45,
};

// =============================================================
// ========================= 2-masala ==========================
// =============================================================
// Tushuntirish:
// Rahmatilla foydalanuvchi ma'lumotlari uchun UserData type yozmoqchi. Bu type faqat { id: number } ga extends qiladigan tiplarni qabul qiladi va name (string) va data (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type UserData<T extends { id: number }> = {
  name: string;
  data: T;
};

const admin: UserData<{ id: number; role: string }> = {
  name: "Ali",
  data: { id: 1, role: "admin" },
};

const guest: UserData<{ id: number; guestId: string }> = {
  name: "Zarina",
  data: { id: 2, guestId: "G123" },
};

// =============================================================
// ========================= 4-masala ==========================
// =============================================================
// Tushuntirish:
// Shahrizat opa mahsulot katalogi uchun ProductCatalog type yozmoqchi. Bu type faqat { price: number } ga extends qiladigan tiplarni qabul qiladi va category (string) va items (generic massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type ProductCatalog<T extends { price: number }> = {
  category: string;
  items: T[];
};

const electronics: ProductCatalog<{ price: number; brand: string }> = {
  category: "Elektronika",
  items: [{ price: 1000000, brand: "Samsung" }],
};

const clothess: ProductCatalog<{ price: number; size: string }> = {
  category: "Kiyim",
  items: [{ price: 50000, size: "M" }],
};

// =============================================================
// ========================= 5-masala ==========================
// =============================================================
// Tushuntirish:
// Nosirbek jurnal yozuvlari uchun LogEntry interface yozmoqchi. Bu interface faqat { timestamp: Date } ga extends qiladigan tiplarni qabul qiladi va message (string) va meta (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface LogEntry<T extends { timestamp: Date }> {
  message: string;
  meta: T;
}

const errorLog: LogEntry<{ timestamp: Date; code: number }> = {
  message: "Xatolik",
  meta: { timestamp: new Date(), code: 404 },
};

const infoLog: LogEntry<{ timestamp: Date; user: string }> = {
  message: "Tizimga kirish",
  meta: { timestamp: new Date(), user: "Shuhrat" },
};

// =============================================================
// ========================= 6-masala ==========================
// =============================================================
// Tushuntirish:
// Dilshod aka loyiha hujjatlari uchun Document type yozmoqchi. Bu type faqat { id: string } ga extends qiladigan tiplarni qabul qiladi va title (string) va content (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Documentt<T extends { id: string }> = {
  title: string;
  content: T;
};

const report: Documentt<{ id: string; pages: number }> = {
  title: "Yillik hisobot",
  content: { id: "R001", pages: 50 },
};

const contract: Documentt<{ id: string; signed: boolean }> = {
  title: "Shartnoma",
  content: { id: "C002", signed: true },
};

// =============================================================
// ========================= 7-masala ==========================
// =============================================================
// Tushuntirish:
// Gulnora opa foydalanuvchi sozlamalari uchun Settings interface yozmoqchi. Bu interface faqat { userId: number } ga extends qiladigan tiplarni qabul qiladi va preferences (generic type) va active (boolean) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Settings<T extends { userId: number }> {
  preferences: T;
  active: boolean;
}

const userSettings: Settings<{ userId: number; theme: string }> = {
  preferences: { userId: 123, theme: "dark" },
  active: true,
};

const adminSettings: Settings<{ userId: number; role: string }> = {
  preferences: { userId: 456, role: "admin" },
  active: false,
};

// =============================================================
// ========================= 8-masala ==========================
// =============================================================
// Tushuntirish:
// Farrux loyiha jadvallari uchun Timeline interface yozmoqchi. Bu interface faqat { date: string } ga extends qiladigan tiplarni qabul qiladi va milestones (generic type massiv) va projectName (string) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Timeline<T extends { date: string }> {
  projectName: string;
  milestones: T[];
}

const appTimeline: Timeline<{ date: string; phase: string }> = {
  projectName: "Mobile App",
  milestones: [{ date: "2025-07-01", phase: "Design" }],
};

const webTimeline: Timeline<{ date: string; taskId: number }> = {
  projectName: "Website",
  milestones: [{ date: "2025-08-01", taskId: 101 }],
};

// =============================================================
// ========================= 9-masala ==========================
// =============================================================
// Tushuntirish:
// Zilola savdo operatsiyalari uchun Transaction type yozmoqchi. Bu type faqat { amount: number } ga extends qiladigan tiplarni qabul qiladi va date (string) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Transaction<T extends { amount: number }> = {
  date: string;
  details: T;
};

const purchase: Transaction<{ amount: number; item: string }> = {
  date: "2025-06-27",
  details: { amount: 50000, item: "Klaviatura" },
};

const refund: Transaction<{ amount: number; reason: string }> = {
  date: "2025-06-28",
  details: { amount: 20000, reason: "Defective" },
};

// =============================================================
// ========================= 10-masala =========================
// =============================================================
// Tushuntirish:
// Jasur tarmoq so'rovlari uchun Request interface yozmoqchi. Bu interface faqat { method: string } ga extends qiladigan tiplarni qabul qiladi va url (string) va payload (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Requestt<T extends { method: string }> {
  url: string;
  payload: T;
}

const getRequest: Requestt<{ method: string; headers: string[] }> = {
  url: "/api/users",
  payload: { method: "GET", headers: ["Authorization"] },
};

const postRequest: Requestt<{ method: string; body: string }> = {
  url: "/api/users",
  payload: { method: "POST", body: "{}" },
};

// =============================================================
// ========================= 11-masala =========================
// =============================================================
// Tushuntirish:
// Madina kutubxona kitoblari uchun LibraryBook type yozmoqchi. Bu type faqat { isbn: string } ga extends qiladigan tiplarni qabul qiladi va title (string) va metadata (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type LibraryBook<T extends { isbn: string }> = {
  title: string;
  metadata: T;
};

const fiction: LibraryBook<{ isbn: string; genre: string }> = {
  title: "O'tgan Kunlar",
  metadata: { isbn: "123456", genre: "Fantastika" },
};

const science: LibraryBook<{ isbn: string; pages: number }> = {
  title: "Fizika",
  metadata: { isbn: "789012", pages: 300 },
};

// =============================================================
// ========================= 12-masala =========================
// =============================================================
// Tushuntirish:
// Sardor inventar boshqaruvi uchun Inventory interface yozmoqchi. Bu interface faqat { id: number } ga extends qiladigan tiplarni qabul qiladi va category (string) va products (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Inventory<T extends { id: number }> {
  category: string;
  products: T[];
}

const gadgets: Inventory<{ id: number; brand: string }> = {
  category: "Elektronika",
  products: [{ id: 1, brand: "Apple" }],
};

const clothes: Inventory<{ id: number; size: string }> = {
  category: "Kiyim",
  products: [{ id: 2, size: "L" }],
};

// =============================================================
// ========================= 13-masala =========================
// =============================================================
// Tushuntirish:
// Nigora xabarlar tizimi uchun Message type yozmoqchi. Bu type faqat { sender: string } ga extends qiladigan tiplarni qabul qiladi va timestamp (Date) va content (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Message<T extends { sender: string }> = {
  timestamp: Date;
  content: T;
};

const textMessage: Message<{ sender: string; text: string }> = {
  timestamp: new Date(),
  content: { sender: "Ali", text: "Salom" },
};

const dataMessage: Message<{ sender: string; code: number }> = {
  timestamp: new Date(),
  content: { sender: "Bot", code: 200 },
};

// =============================================================
// ========================= 14-masala =========================
// =============================================================
// Tushuntirish:
// Kamoljon API so'rovlari uchun ApiRequest interface yozmoqchi. Bu interface faqat { endpoint: string } ga extends qiladigan tiplarni qabul qiladi va status (number) va params (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface ApiRequest<T extends { endpoint: string }> {
  status: number;
  params: T;
}

const userRequest: ApiRequest<{ endpoint: string; query: string }> = {
  status: 200,
  params: { endpoint: "/users", query: "id=1" },
};

const productRequest: ApiRequest<{ endpoint: string; filter: string }> = {
  status: 200,
  params: { endpoint: "/products", filter: "category=tech" },
};

// =============================================================
// ========================= 15-masala =========================
// =============================================================
// Tushuntirish:
// Shaxzod talaba ma'lumotlari uchun Student type yozmoqchi. Bu type faqat { studentId: number } ga extends qiladigan tiplarni qabul qiladi va group (string) va profile (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Student<T extends { studentId: number }> = {
  group: string;
  profile: T;
};

const studentA: Student<{ studentId: number; name: string }> = {
  group: "A-101",
  profile: { studentId: 1, name: "Nodir" },
};

const studentB: Student<{ studentId: number; gpa: number }> = {
  group: "B-202",
  profile: { studentId: 2, gpa: 4.0 },
};

// =============================================================
// ========================= 16-masala =========================
// =============================================================
// Tushuntirish:
// Zulayho loyiha holatlari uchun ProjectStatus interface yozmoqchi. Bu interface faqat { status: string } ga extends qiladigan tiplarni qabul qiladi va projectId (number) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface ProjectStatus<T extends { status: string }> {
  projectId: number;
  details: T;
}

const activeProject: ProjectStatus<{ status: string; progress: number }> = {
  projectId: 101,
  details: { status: "Active", progress: 50 },
};

const completedProject: ProjectStatus<{ status: string; completedAt: string }> =
{
  projectId: 102,
  details: { status: "Completed", completedAt: "2025-06-27" },
};

// =============================================================
// ========================= 17-masala =========================
// =============================================================
// Tushuntirish:
// Rustam xodimlar ro'yxati uchun EmployeeList type yozmoqchi. Bu type faqat { employeeId: number } ga extends qiladigan tiplarni qabul qiladi va department (string) va members (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type EmployeeList<T extends { employeeId: number }> = {
  department: string;
  members: T[];
};

const devTeamm: EmployeeList<{ employeeId: number; role: string }> = {
  department: "IT",
  members: [{ employeeId: 1, role: "Developer" }],
};

const hrTeam: EmployeeList<{ employeeId: number; hireDate: string }> = {
  department: "HR",
  members: [{ employeeId: 2, hireDate: "2025-01-01" }],
};

// =============================================================
// ========================= 18-masala =========================
// =============================================================
// Tushuntirish:
// Malika kurs modullari uchun CourseModule interface yozmoqchi. Bu interface faqat { moduleId: string } ga extends qiladigan tiplarni qabul qiladi va title (string) va content (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface CourseModule<T extends { moduleId: string }> {
  title: string;
  content: T[];
}

const programmingModule: CourseModule<{ moduleId: string; topic: string }> = {
  title: "TypeScript",
  content: [{ moduleId: "M1", topic: "Generics" }],
};

const designModule: CourseModule<{ moduleId: string; duration: number }> = {
  title: "UI/UX",
  content: [{ moduleId: "M2", duration: 120 }],
};

// =============================================================
// ========================= 19-masala =========================
// =============================================================
// Tushuntirish:
// Otabek blog postlari uchun BlogPost type yozmoqchi. Bu type faqat { author: string } ga extends qiladigan tiplarni qabul qiladi va published (boolean) va metadata (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type BlogPost<T extends { author: string }> = {
  published: boolean;
  metadata: T;
};

const techPost: BlogPost<{ author: string; category: string }> = {
  published: true,
  metadata: { author: "Jamshid", category: "Tech" },
};

const lifePost: BlogPost<{ author: string; date: string }> = {
  published: false,
  metadata: { author: "Laylo", date: "2025-06-27" },
};

// =============================================================
// ========================= 20-masala =========================
// =============================================================
// Tushuntirish:
// Aziza savdo tranzaksiyalari uchun Payment type yozmoqchi. Bu type faqat { amount: number } ga extends qiladigan tiplarni qabul qiladi va transactionId (string) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Payment<T extends { amount: number }> = {
  transactionId: string;
  details: T;
};

const onlinePayment: Payment<{ amount: number; method: string }> = {
  transactionId: "T123",
  details: { amount: 100000, method: "Card" },
};

const cashPayment: Payment<{ amount: number; currency: string }> = {
  transactionId: "T456",
  details: { amount: 50000, currency: "UZS" },
};

// =============================================================
// ========================= 21-masala =========================
// =============================================================
// Tushuntirish:
// Shohruh tarmoq so'rovlari uchun NetworkRequest interface yozmoqchi. Bu interface faqat { protocol: string } ga extends qiladigan tiplarni qabul qiladi va url (string) va config (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface NetworkRequest<T extends { protocol: string }> {
  url: string
  config: T;
}

const httpRequest: NetworkRequest<{ protocol: string; headers: string[] }> = {
  url: "/api/data",
  config: { protocol: "HTTP", headers: ["Content-Type"] },
};

const wsRequest: NetworkRequest<{ protocol: string; timeout: number }> = {
  url: "/ws/connect",
  config: { protocol: "WebSocket", timeout: 5000 },
};

// =============================================================
// ========================= 22-masala =========================
// =============================================================
// Tushuntirish:
// Xurshida taomlar menyusi uchun Menu type yozmoqchi. Bu type faqat { itemId: number } ga extends qiladigan tiplarni qabul qiladi va category (string) va dishes (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Menu<T extends { itemId: number }> = {
  category: string
  dishes: T[];
};

const desserts: Menu<{ itemId: number; name: string }> = {
  category: "Shirinliklar",
  dishes: [{ itemId: 1, name: "Tort" }],
};

const drinks: Menu<{ itemId: number; price: number }> = {
  category: "Ichimliklar",
  dishes: [{ itemId: 2, price: 5000 }],
};

// =============================================================
// ========================= 23-masala =========================
// =============================================================
// Tushuntirish:
// Ibrohim sport tadbirlari uchun Event interface yozmoqchi. Bu interface faqat { location: string } ga extends qiladigan tiplarni qabul qiladi va name (string) va info (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Eventt<T extends { location: string }> {
  name: string;
  info: T;
}

const football: Eventt<{ location: string; date: string }> = {
  name: "Futbol",
  info: { location: "Stadion", date: "2025-07-01" },
};

const chess: Eventt<{ location: string; participants: number }> = {
  name: "Shaxmat",
  info: { location: "Klub", participants: 32 },
};

// =============================================================
// ========================= 24-masala =========================
// =============================================================
// Tushuntirish:
// Zarina fayl metadatalari uchun FileMetadata type yozmoqchi. Bu type faqat { size: number } ga extends qiladigan tiplarni qabul qiladi va filename (string) va metadata (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type FileMetadata<T extends { size: number }> = {
  filename: string;
  metadata: T;
};

const image: FileMetadata<{ size: number; format: string }> = {
  filename: "photo.jpg",
  metadata: { size: 1024, format: "JPEG" },
};

const documents: FileMetadata<{ size: number; version: string }> = {
  filename: "report.pdf",
  metadata: { size: 2048, version: "1.0" },
};

// =============================================================
// ========================= 25-masala =========================
// =============================================================
// Tushuntirish:
// Anvar xodimlar jadvallari uchun Roster interface yozmoqchi. Bu interface faqat { shift: string } ga extends qiladigan tiplarni qabul qiladi va date (string) va members (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface Roster<T extends { shift: string }> {
  date: string;
  members: T[];
}

const morningShift: Roster<{ shift: string; name: string }> = {
  date: "2025-06-27",
  members: [{ shift: "Morning", name: "Sardor" }],
};

const eveningShift: Roster<{ shift: string; hours: number }> = {
  date: "2025-06-27",
  members: [{ shift: "Evening", hours: 8 }],
};

// =============================================================
// ========================= 26-masala =========================
// =============================================================
// Tushuntirish:
// Mohira test natijalari uchun TestResult type yozmoqchi. Bu type faqat { score: number } ga extends qiladigan tiplarni qabul qiladi va testName (string) va result (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type TestResult<T extends { score: number }> = {
  testName: string;
  result: T;
};

const mathTest: TestResult<{ score: number; subject: string }> = {
  testName: "Matematika",
  result: { score: 85, subject: "Algebra" },
};

const scienceTest: TestResult<{ score: number; date: string }> = {
  testName: "Fizika",
  result: { score: 90, date: "2025-06-27" },
};

// =============================================================
// ========================= 28-masala =========================
// =============================================================
// Tushuntirish:
// Nodira sayohat rejalari uchun TripPlan type yozmoqchi. Bu type faqat { destination: string } ga extends qiladigan tiplarni qabul qiladi va startDate (string) va itinerary (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type TripPlan<T extends { destination: string }> = {
  startDate: string;
  itinerary: T;
};

const beachTrip: TripPlan<{ destination: string; duration: number }> = {
  startDate: "2025-07-01",
  itinerary: { destination: "Maldiv", duration: 7 },
};

const cityTrip: TripPlan<{ destination: string; budget: number }> = {
  startDate: "2025-08-01",
  itinerary: { destination: "Toshkent", budget: 1000000 },
};

// =============================================================
// ========================= 29-masala =========================
// =============================================================
// Tushuntirish:
// Bahrom tarmoq xabarlari uchun NetworkMessage interface yozmoqchi. Bu interface faqat { protocol: string } ga extends qiladigan tiplarni qabul qiladi va timestamp (Date) va data (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface NetworkMessage<T extends { protocol: string }> {
  timestamp: Date;
  data: T;
}

const httpMessage: NetworkMessage<{ protocol: string; status: number }> = {
  timestamp: new Date(),
  data: { protocol: "HTTP", status: 200 },
};

const wsMessage: NetworkMessage<{ protocol: string; message: string }> = {
  timestamp: new Date(),
  data: { protocol: "WebSocket", message: "Connected" },
};

// =============================================================
// ========================= 30-masala =========================
// =============================================================
// Tushuntirish:
// Feruza imtihon natijalari uchun ExamResult type yozmoqchi. Bu type faqat { grade: string } ga extends qiladigan tiplarni qabul qiladi va subject (string) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type ExamResult<T extends { grade: string }> = {
  subject: string;
  details: T;
};

const mathExam: ExamResult<{ grade: string; score: number }> = {
  subject: "Matematika",
  details: { grade: "A", score: 95 },
};

const litExam: ExamResult<{ grade: string; comments: string }> = {
  subject: "Adabiyot",
  details: { grade: "B", comments: "Yaxshi" },
};

// =============================================================
// ========================= 31-masala =========================
// =============================================================
// Tushuntirish:
// Eldor loyiha vazifalari uchun TaskList interface yozmoqchi. Bu interface faqat { taskId: number } ga extends qiladigan tiplarni qabul qiladi va projectName (string) va tasks (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface TaskList<T extends { taskId: number }> {
  projectName: string;
  tasks: T[];
}

const devTasks: TaskList<{ taskId: number; title: string }> = {
  projectName: "App",
  tasks: [{ taskId: 1, title: "API integration" }],
};

const designTasks: TaskList<{ taskId: number; priority: string }> = {
  projectName: "UI",
  tasks: [{ taskId: 2, priority: "High" }],
};

// =============================================================
// ========================= 32-masala =========================
// =============================================================
// Tushuntirish:
// Munisa foydalanuvchi sessiyalari uchun Session type yozmoqchi. Bu type faqat { sessionId: string } ga extends qiladigan tiplarni qabul qiladi va userId (number) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type Session<T extends { sessionId: string }> = {
  userId: number;
  details: T;
};

const userSession: Session<{ sessionId: string; loginTime: string }> = {
  userId: 123,
  details: { sessionId: "S001", loginTime: "2025-06-27" },
};

const adminSession: Session<{ sessionId: string; role: string }> = {
  userId: 456,
  details: { sessionId: "S002", role: "admin" },
};

// =============================================================
// ========================= 33-masala =========================
// =============================================================
// Tushuntirish:
// Asadbek buyurtmalar ro'yxati uchun OrderList interface yozmoqchi. Bu interface faqat { orderId: string } ga extends qiladigan tiplarni qabul qiladi va date (string) va orders (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface OrderList<T extends { orderId: string }> {
  date: string;
  orders: T[];
}

const foodOrders: OrderList<{ orderId: string; dish: string }> = {
  date: "2025-06-27",
  orders: [{ orderId: "O1", dish: "Osh" }],
};

const gadgetOrders: OrderList<{ orderId: string; price: number }> = {
  date: "2025-06-28",
  orders: [{ orderId: "O2", price: 500000 }],
};

// =============================================================
// ========================= 34-masala =========================
// =============================================================
// Tushuntirish:
// Dilorom jamoa ma'lumotlari uchun TeamData type yozmoqchi. Bu type faqat { teamId: number } ga extends qiladigan tiplarni qabul qiladi va name (string) va members (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type TeamData<T extends { teamId: number }> = {
  name: string;
  members: T[];
};

const devTeam: TeamData<{ teamId: number; role: string }> = {
  name: "Developers",
  members: [{ teamId: 1, role: "Backend" }],
};

const designTeam: TeamData<{ teamId: number; name: string }> = {
  name: "Designers",
  members: [{ teamId: 2, name: "Laylo" }],
};

// =============================================================
// ========================= 35-masala =========================
// =============================================================
// Tushuntirish:
// Shavkat xizmatlar konfiguratsiyasi uchun ServiceConfig interface yozmoqchi. Bu interface faqat { serviceId: string } ga extends qiladigan tiplarni qabul qiladi va name (string) va settings (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface ServiceConfig<T extends { serviceId: string }> {
  name: string;
  settings: T;
}

const cloudService: ServiceConfig<{ serviceId: string; provider: string }> = {
  name: "Cloud",
  settings: { serviceId: "S1", provider: "AWS" },
};

const dbService: ServiceConfig<{ serviceId: string; type: string }> = {
  name: "Database",
  settings: { serviceId: "S2", type: "PostgreSQL" },
};

// =============================================================
// ========================= 36-masala =========================
// =============================================================
// Tushuntirish:
// Oydin tashkilotlar uchun OrgData type yozmoqchi. Bu type faqat { orgId: number } ga extends qiladigan tiplarni qabul qiladi va name (string) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type OrgData<T extends { orgId: number }> = {
  name: string;
  details: T;
};

const company: OrgData<{ orgId: number; industry: string }> = {
  name: "Tech Corp",
  details: { orgId: 1, industry: "IT" },
};

const ngo: OrgData<{ orgId: number; mission: string }> = {
  name: "Charity",
  details: { orgId: 2, mission: "Education" },
};

// =============================================================
// ========================= 37-masala =========================
// =============================================================
// Tushuntirish:
// Farhod hujjatlar ro'yxati uchun DocumentList interface yozmoqchi. Bu interface faqat { docId: string } ga extends qiladigan tiplarni qabul qiladi va category (string) va documents (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface DocumentList<T extends { docId: string }> {
  category: string;
  documents: T[];
}

const reports: DocumentList<{ docId: string; title: string }> = {
  category: "Reports",
  documents: [{ docId: "D1", title: "Annual Report" }],
};

const contracts: DocumentList<{ docId: string; signed: boolean }> = {
  category: "Contracts",
  documents: [{ docId: "D2", signed: true }],
};

// =============================================================
// ========================= 38-masala =========================
// =============================================================
// Tushuntirish:
// Zuhra tadbir rejalari uchun EventPlan type yozmoqchi. Bu type faqat { eventId: number } ga extends qiladigan tiplarni qabul qiladi va eventName (string) va tasks (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type EventPlan<T extends { eventId: number }> = {
  eventName: string;
  tasks: T[];
};

const weddingPlan: EventPlan<{ eventId: number; task: string }> = {
  eventName: "To'y",
  tasks: [{ eventId: 1, task: "Dekoratsiya" }],
};

const conferencePlan: EventPlan<{ eventId: number; priority: string }> = {
  eventName: "Konferensiya",
  tasks: [{ eventId: 2, priority: "High" }],
};

// =============================================================
// ========================= 39-masala =========================
// =============================================================
// Tushuntirish:
// Akram xabarlar ro'yxati uchun NotificationList interface yozmoqchi. Bu interface faqat { notificationId: string } ga extends qiladigan tiplarni qabul qiladi va type (string) va notifications (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface NotificationList<T extends { notificationId: string }> {
  type: string;
  notifications: T[];
}

const emailNotifications: NotificationList<{
  notificationId: string;
  subject: string;
}> = {
  type: "Email",
  notifications: [{ notificationId: "N1", subject: "Meeting" }],
};

const smsNotifications: NotificationList<{
  notificationId: string;
  message: string;
}> = {
  type: "SMS",
  notifications: [{ notificationId: "N2", message: "Reminder" }],
};

// =============================================================
// ========================= 40-masala =========================
// =============================================================
// Tushuntirish:
// Surayyo loyiha holatlari uchun ProjectState type yozmoqchi. Bu type faqat { stateId: number } ga extends qiladigan tiplarni qabul qiladi va projectId (number) va state (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type ProjectState<T extends { stateId: number }> = {
  projectId: number;
  state: T;
};

const activeState: ProjectState<{ stateId: number; status: string }> = {
  projectId: 101,
  state: { stateId: 1, status: "In Progress" },
};

const completedState: ProjectState<{ stateId: number; completedAt: string }> = {
  projectId: 102,
  state: { stateId: 2, completedAt: "2025-06-27" },
};

// =============================================================
// ========================= 41-masala =========================
// =============================================================
// Tushuntirish:
// Mirzo mijozlar ma'lumotlari uchun ClientData interface yozmoqchi. Bu interface faqat { clientId: string } ga extends qiladigan tiplarni qabul qiladi va name (string) va info (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface ClientData<T extends { clientId: string }> {
  name: string;
  info: T;
}

const vipClient: ClientData<{ clientId: string; tier: string }> = {
  name: "VIP",
  info: { clientId: "C1", tier: "Premium" },
};

const regularClient: ClientData<{ clientId: string; orders: number }> = {
  name: "Regular",
  info: { clientId: "C2", orders: 5 },
};

// =============================================================
// ========================= 42-masala =========================
// =============================================================
// Tushuntirish:
// Sabina kitoblar ro'yxati uchun BookCollection type yozmoqchi. Bu type faqat { bookId: number } ga extends qiladigan tiplarni qabul qiladi va genre (string) va books (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type BookCollection<T extends { bookId: number }> = {
  genre: string;
  books: T[];
};

const fictionCollection: BookCollection<{ bookId: number; title: string }> = {
  genre: "Fantastika",
  books: [{ bookId: 1, title: "Dune" }],
};

const scienceCollection: BookCollection<{ bookId: number; author: string }> = {
  genre: "Ilmiy",
  books: [{ bookId: 2, author: "Hawking" }],
};

// =============================================================
// ========================= 43-masala =========================
// =============================================================
// Tushuntirish:
// Ilhom tarmoq javoblari uchun NetworkResponse interface yozmoqchi. Bu interface faqat { statusCode: number } ga extends qiladigan tiplarni qabul qiladi va endpoint (string) va result (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface NetworkResponse<T extends { statusCode: number }> {
  endpoint: string;
  result: T;
}

const successResponse: NetworkResponse<{
  statusCode: number;
  message: string;
}> = {
  endpoint: "/api/data",
  result: { statusCode: 200, message: "Success" },
};

const errorResponse: NetworkResponse<{ statusCode: number; error: string }> = {
  endpoint: "/api/data",
  result: { statusCode: 500, error: "Server Error" },
};

// =============================================================
// ========================= 44-masala =========================
// =============================================================
// Tushuntirish:
// Nargiza ta'til rejalari uchun VacationPlan type yozmoqchi. Bu type faqat { location: string } ga extends qiladigan tiplarni qabul qiladi va startDate (string) va details (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type VacationPlan<T extends { location: string }> = {
  startDate: string;
  details: T;
};

const summerVacation: VacationPlan<{ location: string; duration: number }> = {
  startDate: "2025-07-01",
  details: { location: "Issiqko'l", duration: 7 },
};

const winterVacation: VacationPlan<{ location: string; activities: string[] }> =
{
  startDate: "2025-12-01",
  details: { location: "Chimgan", activities: ["Skiing"] },
};

// =============================================================
// ========================= 45-masala =========================
// =============================================================
// Tushuntirish:
// Sherzod to'lovlar ro'yxati uchun PaymentList interface yozmoqchi. Bu interface faqat { paymentId: string } ga extends qiladigan tiplarni qabul qiladi va date (string) va payments (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface PaymentList<T extends { paymentId: string }> {
  date: string;
  payments: T[];
}

const onlinePayments: PaymentList<{ paymentId: string; method: string }> = {
  date: "2025-06-27",
  payments: [{ paymentId: "P1", method: "Card" }],
};

const cashPayments: PaymentList<{ paymentId: string; amount: number }> = {
  date: "2025-06-28",
  payments: [{ paymentId: "P2", amount: 50000 }],
};

// =============================================================
// ========================= 46-masala =========================
// =============================================================
// Tushuntirish:
// Mavluda loyiha hujjatlari uchun ProjectDocument type yozmoqchi. Bu type faqat { docId: string } ga extends qiladigan tiplarni qabul qiladi va title (string) va content (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
type ProjectDocument<T extends { docId: string }> = {
  title: string;
  content: T;
};

const proposal: ProjectDocument<{ docId: string; summary: string }> = {
  title: "Proposal",
  content: { docId: "D001", summary: "New Feature" },
};

const reportDoc: ProjectDocument<{ docId: string; pages: number }> = {
  title: "Report",
  content: { docId: "D002", pages: 42 },
};

// =============================================================
// ========================= 47-masala =========================
// =============================================================
// Tushuntirish:
// Jafar tarmoq konfiguratsiyalari uchun NetworkConfig interface yozmoqchi. Bu interface faqat { configId: number } ga extends qiladigan tiplarni qabul qiladi va name (string) va settings (generic type) maydonlarini o'z ichiga oladi.

// Kod snippet:
interface NetworkConfig<T extends { configId: number }> {
  name: string;
  settings: T;
}

const serverConfig: NetworkConfig<{ configId: number; port: number }> = {
  name: "Server",
  settings: { configId: 1, port: 8080 },
};

const appConfig: NetworkConfig<{ configId: number; debug: boolean }> = {
  name: "App",
  settings: { configId: 2, debug: true },
};

// =============================================================
// ========================= 48-masala =========================
// =============================================================
// Tushuntirish:
// Laylo retseptlar ro'yxati uchun RecipeList type yozmoqchi. Bu type faqat { recipeId: string } ga extends qiladigan tiplarni qabul qiladi va category (string) va recipes (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type RecipeList<T extends { recipeId: string }> = {
  category: string;
  recipes: T[];
};

const soupRecipes: RecipeList<{ recipeId: string; name: string }> = {
  category: "Sho'rvalar",
  recipes: [{ recipeId: "R1", name: "Osh" }],
};

const dessertRecipes: RecipeList<{ recipeId: string; calories: number }> = {
  category: "Shirinliklar",
  recipes: [{ recipeId: "R2", calories: 300 }],
};

// =============================================================
// ========================= 50-masala =========================
// =============================================================
// Tushuntirish:
// Gulchehra veb-sayt kontenti uchun WebContent type yozmoqchi. Bu type faqat { contentId: string } ga extends qiladigan tiplarni qabul qiladi va page (string) va elements (generic type massiv) maydonlarini o'z ichiga oladi.

// Kod snippet:
type WebContent<T extends { contentId: string }> = {
  page: string;
  elements: T[];
};

const homePage: WebContent<{ contentId: string; title: string }> = {
  page: "Home",
  elements: [{ contentId: "C1", title: "Welcome" }],
};

const blogPage: WebContent<{ contentId: string; postId: number }> = {
  page: "Blog",
  elements: [{ contentId: "C2", postId: 101 }],
};
