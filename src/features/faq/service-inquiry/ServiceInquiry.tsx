import styles from "@/features/faq/service-inquiry/ServiceInquiry.module.scss";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ChatIcon from "@/assets/icons/ChatIcon";

interface InquiryBox {
  href: string;
  icon: React.ComponentType<{ className: string }>;
  text: string;
  subText?: string;
  download?: string;
}

export default function ServiceInquiry() {
  const inquiryBoxes: InquiryBox[] = [
    {
      href: "/files/기아_비즈_서비스_제안서.pdf",
      icon: DownloadIcon,
      text: "서비스 제안서 다운로드",
      download: "기아 비즈 서비스 제안서.pdf",
    },
    {
      href: "https://wiblebiz.kia.com/Counsel",
      icon: EditIcon,
      text: "상담문의 등록하기",
    },
    {
      href: "https://pf.kakao.com/_xfLxjdb",
      icon: ChatIcon,
      text: "카톡으로 문의하기",
      subText: "ID : 기아 비즈",
    },
  ];

  const renderInquiryBox = ({
    href,
    icon: Icon,
    text,
    subText,
    download,
  }: InquiryBox) => (
    <a
      key={href}
      href={href}
      className={styles.box}
      download={download}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
    >
      <Icon className={styles.icon} />
      <span className={styles.text}>
        {text}
        {subText && <span className={styles.sub_text}>{subText}</span>}
      </span>
    </a>
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>서비스 문의</h2>
      <div className={styles.inquiry_boxes}>
        {inquiryBoxes.map(renderInquiryBox)}
      </div>
    </div>
  );
}
