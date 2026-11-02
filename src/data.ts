export type Language = 'en' | 'tr';

export interface CVData {
  name: string;
  location: string;
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
    email: "ZW1pbl9iYXljYW5Ab3V0bG9vay5jb20=",
    linkedin: "linkedin.com/in/eminbaycan",
    overview: "IT & Network Systems Professional with hands-on field experience in end-to-end deployment, configuration, and management of corporate network architectures (LAN/WAN/WLAN), Fortinet firewalls, VPN tunneling, and Windows Server environments. Skilled in managing switch/router/firewall hardware configurations, VLAN/subnet segmentation, Active Directory, and infrastructure security, dedicated to delivering uninterrupted connectivity, high network performance, and operational continuity.",
    experience: [
      {
        company: "Exodus Danışmanlık (Consulting)",
        location: "Ankara, Turkey",
        title: "IT Assistant Specialist",
        period: "Feb 2025 – Continue",
        responsibilities: [
          "End-to-end management and control of in-house and inter-branch LAN, WAN, WLAN, and TCP/IP network infrastructure.",
          "Discovery, planning, cabling, rack mounting, initial configuration, and hardware modification of switches, routers, and firewalls.",
          "Conducting site surveys for new locations and preparing infrastructure analysis reports.",
          "Management of VLAN configurations, subnet design, DHCP, and DNS services.",
          "Policy management and NAT configurations on Fortinet (FortiGate) firewalls.",
          "Setup and authorization of IPsec and SSL VPN tunnels for branch offices and remote employees.",
          "Maintenance of Windows Server environment, Active Directory (user, group, and permission management), DNS, and DHCP.",
          "Inventory and asset tracking of company-wide hardware, peripherals, and network devices.",
          "Managing onboarding processes for new employees (computer provisioning, email/AD account creation, and permission assignments).",
          "Maintenance and monitoring of security cameras (CCTV), IP telephony extension assignments, communication, and routine backup systems.",
          "Execution of in-office end-user technical support and service desk operations."
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
        company: "Presidency of Religious Affairs",
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
      "ISO 27001:2022 Information Security Management System (BTK)",
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
    email: "ZW1pbl9iYXljYW5Ab3V0bG9vay5jb20=",
    linkedin: "linkedin.com/in/eminbaycan",
    overview: "Kurumsal ağ mimarileri (LAN/WAN/WLAN), Fortinet güvenlik duvarı sistemleri, VPN tünelleme ve Windows Server altyapılarının uçtan uca kurulum, yapılandırma ve yönetiminde aktif saha deneyimine sahip Bilişim & Ağ Teknolojileri Uzmanıyım. Switch, Router, Firewall donanım konfigürasyonları, VLAN/Subnet mimarisi, Active Directory ve sistem güvenliği süreçlerini bütüncül olarak yöneterek; kesintisiz iletişim, yüksek ağ performansı ve kurumsal operasyonel süreklilik sağlama odaklı çalışıyorum.",
    experience: [
      {
        company: "Exodus Danışmanlık",
        location: "Ankara, Türkiye",
        title: "Bilgi Teknolojileri / IT Uzman Yardımcısı",
        period: "Şubat 2025 – Devam",
        responsibilities: [
          "Şirket içi ve şubeler arası LAN, WAN, WLAN ve TCP/IP ağ altyapısının uçtan uca yönetimi ve kontrolü.",
          "Switch, Router ve Firewall cihazlarının keşif, planlama, kablolama, rack montajı, ilk konfigürasyonu ve donanım modifikasyonu.",
          "Yeni lokasyonlar için saha keşiflerinin yapılması ve altyapı analiz raporlarının çıkarılması.",
          "VLAN yapılandırmaları, Subnet yönetimi, DHCP ve DNS servislerinin yönetimi.",
          "Fortinet (FortiGate) güvenlik duvarı üzerinden kural (policy) yönetimi ve NAT yapılandırmaları.",
          "Şubeler ve uzaktaki çalışanlar için IPsec / SSL VPN tünellerinin kurulumu ve yetkilendirilmesi.",
          "Windows Server ortamı, Active Directory (kullanıcı, grup ve yetki yönetimi), DNS ve DHCP bakımı.",
          "Şirket genelindeki donanım, çevre birimleri ve ağ cihazlarının envanter ve zimmet takibi.",
          "Yeni personel başlangıç süreçleri (bilgisayar kurulumu, mail/AD hesap açılışları ve yetkilendirmeler).",
          "Güvenlik kameraları (CCTV) bakım/kontrolü, IP telefon dahili hat atamaları, iletişim ve yedekleme sistemlerinin rutin takibi.",
          "Ofis içi son kullanıcı teknik destek ve servis masası operasyonlarının yürütülmesi."
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
        company: "Diyanet İşleri Başkanlığı",
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
      "ISO 27001:2022 Bilgi Güvenliği Yönetim Sistemi (BTK)",
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
