import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "0 1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  overflow: "hidden",
  textAlign: "center",
  paddingBottom: "0.5rem",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  fontSize: "22px",
  color: "white",
  paddingTop: "1rem",
  fontWeight: 500,
});

const products = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
});

const productText = style({
  marginBottom: 0,
});

const newAdd = style({
  padding: "12px 16px",
  backgroundColor: "#FFFFFF",
  margin: "0 8px 0 8px",
  borderRadius: "24px",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  textAlign: "left",
});

const newAddImageContainer = style({
  width: "8px",
  height: "8px",
  backgroundColor: "#09C509",
  borderRadius: "100%",
});

const newAddImageWrapper = style({
  border: "3px solid white",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden",
  width: "44px",
  height: "44px",
});

const newAddImageWrapperMore = style({
  borderRadius: "50%",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: "none",
  zIndex: "10",
  marginLeft: "-1.8rem",
});

const newAddImage = style({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(4px) brightness(80%)",
  position: "absolute",
  top: 0,
  left: 0,
});

const slider = style({
  boxSizing: "border-box",
  // padding: "1rem 1rem 0 1rem",
  borderRadius: "1rem",
  gap: "1rem",
  width: "295px",
  marginLeft: "32px",
});

const header = style({
  backgroundColor: "#9933FF",
  padding: "0 0 0 1rem",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  overflow: "hidden",
});

const footer = style({
  backgroundColor: "white",
  padding: "0 16px",
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
});

const textContainer = style({
  display: "flex",
  flexDirection: "column",
});

const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "1rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  newAdd,
  newAddImageContainer,
  newAddImageWrapper,
  newAddImageWrapperMore,
  newAddImage,
  slider,
  header,
  textContainer,
  cardContainer,
  footer,
};
