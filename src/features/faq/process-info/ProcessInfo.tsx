import React from "react";
import styles from "@/features/faq/process-info/ProcessInfo.module.scss";
import QuestionChatIcon from "@/assets/icons/QuestionChatIcon";
import UserSettingsIcon from "@/assets/icons/UserSettingsIcon";
import UserAddIcon from "@/assets/icons/UserAddIcon";
import CarParkingIcon from "@/assets/icons/CarParkingIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

interface ProcessStep {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: QuestionChatIcon,
    title: "문의 등록",
    description:
      "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
  },
  {
    id: 2,
    icon: UserSettingsIcon,
    title: "관리자 설정",
    description: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
  },
  {
    id: 3,
    icon: UserAddIcon,
    title: "임직원 가입",
    description: "이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.",
  },
  {
    id: 4,
    icon: CarParkingIcon,
    title: "서비스 이용",
    description: "이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!",
  },
];

export default function ProcessInfo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>이용 프로세스 안내</h2>
      <div className={styles.steps_container}>
        {processSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={styles.step_item}>
              <step.icon className={styles.icon} />
              <div className={styles.text_content}>
                <h3
                  className={styles.step_title}
                >{`${step.id}. ${step.title}`}</h3>
                <p className={styles.step_description}>{step.description}</p>
              </div>
            </div>
            {index < processSteps.length - 1 && (
              <ArrowRightIcon
                color="#b4b9bc"
                className={styles.arrow_icon_desktop}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
