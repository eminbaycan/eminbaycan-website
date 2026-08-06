export type Language = 'en' | 'tr';

export interface CVData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  overview: string;
  experience: {
    company: string;
    location: string;
    title: string;
    period: string;
    responsibilities: string[];
  }[];
  education: {
    institution: string;
    location: string;
    degree: string;
    period: string;
    details: string[];
  }[];
  certificates: string[];
}

export const cvData: Record<Language, CVData> = {
  en: {
    name: "Emin BAYCAN",
    location: "Ankara, Türkiye",
    phone: "+90 544 378 1331",
    email: "emin_baycan@outlook.com",
    linkedin: "linkedin.com/in/eminbaycan",
    overview: "I am an IT professional eager to develop myself in the field of information technology, with a particular focus on network systems. I am open to learning, responsible, and adaptable to teamwork. My goal is to gain expertise in network infrastructure and communication technologies and to specialize in this field.",
    experience: [
      {
        company: "Exodus Danışmanlık (Consulting)",
        location: "Ankara, Turkey",
        title: "IT Assistant Specialist",
        period: "Jan 2025 – Continue",
        responsibilities: [
          "Provided service desk support.",
          "Monitored, backed up, maintained, and troubleshot client communication systems.",
          "Managed network infrastructure (LAN, WAN, WLAN, TCP/IP).",
          "Configured server devices (SD-WAN, Router, Firewall).",
          "Performed hardware modifications on devices such as routers and firewalls."
        ]
      },
      {
        company: "Mavinci",
        location: "Ankara, Turkey",
        title: "IT Assistant Specialist",
        period: "Feb 2024 – Jan 2025",
        responsibilities: [
          "Server infrastructure structure, virtualization, networking, operating system and storage issues.",
          "Control, backup, maintenance and troubleshooting of information technologies and communication systems.",
          "Management and maintenance of physical and virtual server data storage units.",
          "Provision of maintenance and support services for Information Technologies components (computers, peripherals) and local area networks.",
          "Service desk support (Jira, Confluence, GitLab, Access control, Microsoft Teams, Fortinet, YaaniMail).",
          "Control of network infrastructure (LAN, WAN, WLAN, TCP/IP), PDKS and camera systems.",
          "Configuration of remote desktop connection settings for servers (FortiClient) (RDP, VDN).",
          "Installation of computer programs used in MS Office environment.",
          "Management and control of in-house programs (Office, Outlook, Windows 10, Windows Server, antivirus, Altium).",
          "Operation and control of Microsoft Windows (Win 10, 11), Linux (Ubuntu) and macOS operating systems.",
          "Maintenance, configuration, auditing and control of Microsoft Server 2012 (Active Directory, DNS, Group Policy)."
        ]
      },
      {
        company: "Arkitech",
        location: "Ankara, Turkey",
        title: "Trainee Technician",
        period: "Nov 2019 – Dec 2019",
        responsibilities: [
          "Solve software problems in programs.",
          "Checking the viability of software prototypes.",
          "To support R&D and software development.",
          "Identify potential security vulnerabilities.",
          "Write and read clean code."
        ]
      },
      {
        company: "Presidency of the Republic of Turkey Presidency of Religious Affairs",
        location: "Ankara, Turkey",
        title: "IT Intern",
        period: "Sep 2016 – Nov 2016",
        responsibilities: [
          "Analyzing and solving problems on the computer of the institution personnel.",
          "Trouble-free operation of the printer and fax equipment of the institution personnel.",
          "Resolving rows on the computer and server.",
          "Identify potential vulnerabilities.",
          "Write and read cleaner code."
        ]
      }
    ],
    education: [
      {
        institution: "İstanbul University (Open education)",
        location: "İstanbul, Turkey",
        degree: "Web design and development",
        period: "Aug 2023 – Ongoing",
        details: [
          "PHP, MySQL, Apache, Nginx, Python, Node.js, Javascript",
          "Information Technologies",
          "Javascript Programming",
          "Web Design",
          "Web Programming",
          "Cyber Security",
          "System Management And Cloud Informatics",
          "Server Based Programming"
        ]
      },
      {
        institution: "Çukurova University",
        location: "Adana, Turkey",
        degree: "Computer Programming",
        period: "Sep 2018 – Jun 2020",
        details: [
          "C#, SQL",
          "Mathematical Modeling and Computational Mathematics",
          "Applied Informatics",
          "Development of Software and Information Systems",
          "Object Oriented Programming"
        ]
      }
    ],
    certificates: [
      "İşletim Sistemlerine Giriş (BTK) – Introduction to Operating Systems",
      "Proje Yönetim Temelleri (BTK) – Fundamentals of Project Management",
      "IPv6 Teknoloji Dönüşüm İhtiyaçları ve Çalışmaları (BTK) – IPv6 Technology Transformation Requirements",
      "Ağ Temelleri Sertifika (BTK) – Network Fundamentals Certificate",
      "İleri Ağ Teknolojileri Sertifika (BTK) – Advanced Network Technologies Certificate",
      "Fortinet Güvenlik Duvarı Temelleri (BTK) – Fortinet Firewall Fundamentals",
      "A'dan Z'ye Sertifikalı Bilgi İşlem (IT) HelpDesk Eğitimi (Udemy) – Certified IT HelpDesk Training",
      "Yapısal Kablolama ve Veri Ağı Kablolama (Udemy) – Structured Cabling and Data Network Cabling",
      "Bilgisayar Teknik Destek Uzmanı (Udemy) – Computer Technical Support Specialist",
      "Java ve Android (Vektörel Bilişim) – Java and Android",
      "Unity Programlama (Vektörel Bilişim) – Unity Programming"
    ]
  },
  tr: {
    name: "Emin BAYCAN",
    location: "Ankara, Türkiye",
    phone: "+90 544 378 1331",
    email: "emin_baycan@outlook.com",
    linkedin: "linkedin.com/in/eminbaycan",
    overview: "Bilişim alanında kendini geliştirmeye istekli, özellikle ağ sistemleri üzerine yoğunlaşmak isteyen bir IT çalışanıyım. Öğrenmeye açık, sorumluluk almaktan çekinmeyen ve takım çalışmasına uyum sağlayan bir yapıya sahibim. Hedefim, ağ altyapısı ve iletişim teknolojileri konusunda yetkinlik kazanarak bu alanda uzmanlaşmak.",
    experience: [
      {
        company: "Exodus Danışmanlık",
        location: "Ankara, Türkiye",
        title: "Bilgi Teknolojileri / IT Uzman Yardımcısı",
        period: "Şubat 2025 – Devam",
        responsibilities: [
          "Servis masası desteği",
          "Müşteri iletişim sistemlerinin kontrolü, yedeklenmesi, bakımı ve sorun giderme.",
          "Ağ altyapısının (LAN, WAN, WLAN, TCP/IP), kontrolü.",
          "Sunucu cihazları (SD-WAN, Router, Firewall) yapılandırılması.",
          "Router ve Firewall gibi cihazların donanım modifikasyonu."
        ]
      },
      {
        company: "Mavinci",
        location: "Ankara, Türkiye",
        title: "Bilgi Teknolojileri / IT Uzman Yardımcısı",
        period: "Şubat 2024 – Şubat 2025",
        responsibilities: [
          "İletişim sistemlerinin kontrolü, yedeklenmesi, bakımı ve sorun giderme.",
          "Fiziksel ve sanal sunucu veri depolama birimlerinin yönetimi ve bakımı.",
          "Bilgi Teknolojileri bileşenleri (bilgisayarlar, çevre birimleri) ve yerel alan ağları için bakım ve destek hizmetlerinin sağlanması.",
          "Servis masası desteği (Jira, Confluence, GitLab, Erişim kontrolü Sistemleri, Microsoft Teams, Fortinet, YaaniMail).",
          "Ağ altyapısının (LAN, WAN, WLAN, TCP/IP), PDKS ve kamera sistemlerinin kontrolü.",
          "Sunucular (FortiClient) için uzak masaüstü bağlantı ayarlarının yapılandırılması (RDP, VDN).",
          "MS Office ortamında kullanılan bilgisayar programlarının kurulumu.",
          "Şirket içi programların (Office, Outlook, Windows 10, Windows Server, antivirüs, Altium) yönetimi ve kontrolü.",
          "Microsoft Windows (Win 10, 11), Linux (Ubuntu) ve macOS işletim sistemlerinin çalıştırılması ve kontrolü.",
          "Microsoft Server 2012'nin (Active Directory, DNS, Grup İlkesi) bakımı, yapılandırılması, denetimi ve kontrolü."
        ]
      },
      {
        company: "Arkitech",
        location: "Ankara, Türkiye",
        title: "Stajyer Teknisyen",
        period: "Kasım 2019 – Aralık 2019",
        responsibilities: [
          "Programlardaki yazılım sorunlarını çözme.",
          "Yazılım prototiplerinin uygulanabilirliğini kontrol etme.",
          "Ar-Ge ve yazılım geliştirmeyi desteklemek.",
          "Olası güvenlik açıklarını belirlemek.",
          "Temiz kod yazmak ve düzenlenlemek."
        ]
      },
      {
        company: "Cumhurbaşkanlığı Diyanet İşleri Başkanlığı",
        location: "Ankara, Türkiye",
        title: "Stajyer Teknisyen",
        period: "Eylül 2016 – Kasım 2016",
        responsibilities: [
          "Kurum personelinin bilgisayarında problemlerin analiz edilmesi ve çözülmesi.",
          "Kurum personelinin yazıcı ve faks ekipmanlarının sorunsuz çalışması.",
          "Bilgisayar ve sunucudaki açıklarını çözme.",
          "Potansiyel güvenlik açıklarını belirlemek.",
          "Temiz kod yazmak ve düzenlenlemek."
        ]
      }
    ],
    education: [
      {
        institution: "İstanbul Üniversitesi (Açıköğretim)",
        location: "İstanbul, Türkiye",
        degree: "Web Tasarımı Ve Kodlama",
        period: "Ağustos 2023 – Devam",
        details: [
          "PHP, MySQL, Apache, Nginx, Python, Node.js, Javascript",
          "Javascript Programlama",
          "Web Tasarım / Web Programlama",
          "Siber Güvenlik",
          "Sistem Yönetim ve Bulut Bilişim",
          "Sunucu Tabanlı Programlama",
          "Nesne yönelimli programlama"
        ]
      },
      {
        institution: "Çukurova Üniversite",
        location: "Adana, Türkiye",
        degree: "Bilgisayar Programcılığı",
        period: "Eylül 2018 – Haziran 2020",
        details: [
          "C#, SQL",
          "Matematiksel Modelleme ve Hesaplamalı Matematik",
          "Uygulamalı Bilişim",
          "Yazılım ve Bilgi Sistemlerinin Geliştirilmesi",
          "Nesne yönelimli programlama"
        ]
      }
    ],
    certificates: [
      "İşletim Sistemlerine Giriş (BTK)",
      "Proje Yönetim Temelleri (BTK)",
      "IPv6 Teknoloji Dönüşüm İhtiyaçları ve Çalışmaları (BTK)",
      "Ağ Temelleri Sertifika (BTK)",
      "İleri Ağ Teknolojileri Sertifika (BTK)",
      "Fortinet Güvenlik Duvarı Temelleri (BTK)",
      "A'dan Z'ye Sertifikalı Bilgi İşlem(IT) HelpDesk Eğitimi (Udemy)",
      "Sistem Ve Network Mühendisliği (Udemy)",
      "Yapısal Kablolama ve Veri Ağı Kablolama (Udemy)",
      "Bilgisayar Teknik Destek Uzmanı (Udemy)",
      "Java ve Android (Vektörel Bilişim)",
      "Unity programlama (Vektörel Bilişim)"
    ]
  }
};
