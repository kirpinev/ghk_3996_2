import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import image1 from "./assets/image1.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      setLoading(false);
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={20} />
        <div className={appSt.cardContainer}>
          <div className={appSt.header}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography.TitleResponsive
                font="system"
                tag="h3"
                view="medium"
                className={appSt.productsTitle}
                style={{ fontSize: "26px" }}
              >
                Лайк
              </Typography.TitleResponsive>
              <img src={image1} alt="" width={96} height={96} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  padding: "2px 6px",
                  backgroundColor: "#E4E4FB47",
                  borderRadius: "16px",
                  width: "max-content",
                }}
              >
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  style={{ marginBottom: 0, color: "white" }}
                >
                  Первые 30 дней за 0 ₽
                </Typography.Text>
              </div>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                view="large"
                className={appSt.productsTitle}
                style={{ fontSize: "30px" }}
              >
                700 ₽
              </Typography.TitleResponsive>
              <Gap size={24} />
            </div>
          </div>
          <div className={appSt.footer}>
            <Gap size={40} />
            <div style={{ display: "flex", gap: "1rem" }}>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                view="large"
                style={{ fontSize: "30px" }}
              >
                50{" "}
                <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                  ГБ
                </span>
              </Typography.TitleResponsive>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                view="large"
                style={{ fontSize: "30px" }}
              >
                500{" "}
                <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                  мин
                </span>
              </Typography.TitleResponsive>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                view="large"
                style={{ fontSize: "30px" }}
              >
                50{" "}
                <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                  смс
                </span>
              </Typography.TitleResponsive>
            </div>
            <Gap size={16} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img src={icon1} alt="" width={32} height={32} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    style={{ marginBottom: 0 }}
                  >
                    Кэшбэк за пополнение счета
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    color="secondary"
                    style={{ marginBottom: 0 }}
                  >
                    Пополните баланс, а мы вернём 100% от суммы
                  </Typography.Text>
                </div>
              </div>
              <Gap size={4} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img src={icon2} alt="" width={32} height={32} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    style={{ marginBottom: 0 }}
                  >
                    Безлимитные мессенджеры
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    color="secondary"
                    style={{ marginBottom: 0 }}
                  >
                    Не расходуют гигабайты тарифа, чтобы вы всегда оставались на
                    связи с близкими
                  </Typography.Text>
                </div>
              </div>
              <Gap size={4} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img src={icon3} alt="" width={32} height={32} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    style={{ marginBottom: 0 }}
                  >
                    Защита от спама, мошенников
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="primary-small"
                    color="secondary"
                    style={{ marginBottom: 0 }}
                  >
                    Все нежелательные звонки будут автоматически переадресованы
                    на голосового ассистента
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div style={{ height: "44px" }}></div>
          </div>
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" loading={loading} onClick={submit}>
          Выбрать
        </ButtonMobile>
      </div>
    </>
  );
};
