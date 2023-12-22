import { useTranslations } from "next-intl";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

const ResumeButton: React.FC = () => {
  const t = useTranslations("initial.resumeButton");

  return (
    <div className="flex flex-col mt-10 lg:w-fit">
      <p className="text-primary">{t("subtitle")}</p>

      <a href="resume.pdf" target="_blank" className="btn btn-primary">
        <FaFilePdf />
        {t("title")}
      </a>
    </div>
  );
};

export default ResumeButton;
