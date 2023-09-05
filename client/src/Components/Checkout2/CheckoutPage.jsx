import React from "react";

export const CheckoutPage = () => {
  return (
    <>
      <style>
        {`

        .anyflexbox body, .anyflexbox .content, .anyflexbox .content .wrap, .anyflexbox .main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
.shopify-cleanslate .jY8IraEWusqfCW8Fq3yg {
  font-weight: 500 !important;
  color: #000017 !important;
}

.shopify-cleanslate .GbgDkvQbxy7QHgLF5df9 {
  font-weight: normal !important;
  color: #969696 !important;
  font-size: 14px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .GbgDkvQbxy7QHgLF5df9 {
    font-size: 12px !important;
  }
}

.shopify-cleanslate .T5ZNJSk_L5lrkoquqoze {
  color: #187bbd !important;
}

.shopify-cleanslate .Xrk_DudB6JJ3t2Kh2_cU {
  position: absolute !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  width: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  border: 0 !important;
}.shopify-cleanslate .DDTm_SILu6DYBkxLn7JC {
  display: inline !important;
}.shopify-cleanslate .f0pPynu0OCjxD1NNHpxB {
  margin-top: 0 !important;
}

.shopify-cleanslate .B4Tourz_w2V4KbUnttgV {
  margin-top: 4px !important;
}

.shopify-cleanslate .fK3OCBT9T5iAoKC1IJwZ {
  margin-top: 8px !important;
}

.shopify-cleanslate .W_5CPVWVB2Il9NGZRVFV {
  margin-top: 12px !important;
}

.shopify-cleanslate .Y7b1mvsi7Gme1GnNpJsQ {
  margin-top: 16px !important;
}

.shopify-cleanslate .qAqmMcUGR5MhfTOJz3ir {
  margin-top: 20px !important;
}

.shopify-cleanslate .eaUmZPizVV0901gboavj {
  margin-top: 24px !important;
}.shopify-cleanslate .IKlzRqnsOuF8_l330LBc {
  margin-bottom: 0 !important;
}

.shopify-cleanslate .cC852JYKGcf8xEtU7WrS {
  margin-bottom: 4px !important;
}

.shopify-cleanslate .RrLQAgVQeCxllSxQUVZU {
  margin-bottom: 8px !important;
}

.shopify-cleanslate .ZUeVrAHpPgKeulVpjmAa {
  margin-bottom: 12px !important;
}

.shopify-cleanslate .EJooh6J6bEZO47pDXtUu {
  margin-bottom: 16px !important;
}

.shopify-cleanslate .fp9aAZ_SVNNJ6QVo5xKg {
  margin-bottom: 20px !important;
}

.shopify-cleanslate .Jlq9IbDT6wzW4xu3HkZR {
  margin-bottom: 24px !important;
}.shopify-cleanslate .Wdoq8fE7BnbgbuKFv95s {
  margin-left: 0 !important;
}

.shopify-cleanslate .DO9Fecp17tR3s8hbkMHZ {
  margin-left: 4px !important;
}

.shopify-cleanslate ._ydA33DIbiNhOlWT9aGM {
  margin-left: 8px !important;
}

.shopify-cleanslate .FpbaO6rhMjPPjqRVybLA {
  margin-left: 12px !important;
}

.shopify-cleanslate .Wbfh2S8SwDuq8QsZtTEP {
  margin-left: 16px !important;
}

.shopify-cleanslate .GN9o_miRL3ch1Hr5H7kV {
  margin-left: 20px !important;
}

.shopify-cleanslate .pmJoTd2h3J6a94g4OkFf {
  margin-left: 24px !important;
}.shopify-cleanslate .ipWHfz3HYAlPT60qIg7Q {
  margin-right: 0 !important;
}

.shopify-cleanslate .n_3_o0jYDCxrlkW0xviF {
  margin-right: 4px !important;
}

.shopify-cleanslate .O2Q5cYoA6lSYleqffZRK {
  margin-right: 8px !important;
}

.shopify-cleanslate .aCSR_6v2lMVpFULydMvA {
  margin-right: 12px !important;
}

.shopify-cleanslate ._aQnX8dHF1xCg_poDQw_ {
  margin-right: 16px !important;
}

.shopify-cleanslate .mWeaSIaNHoDnz0nc7b7p {
  margin-right: 20px !important;
}

.shopify-cleanslate .jDXB2p4ZudypGvlYOkxY {
  margin-right: 24px !important;
}.shopify-cleanslate .R9tDu8JrE_i1ctOEo0v_ {
  position: absolute !important;
  top: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  overflow: hidden !important;
  height: 1px !important;
  width: 1px !important;
  padding: 0 !important;
  border: 0 !important;
}.shopify-cleanslate .ElVMgDjOgshGFMIvg3se {
  display: inline-block !important;
  line-height: 0 !important;
}

.shopify-cleanslate .qZgSr5RiiBCTAMfQYsty {
  display: inline-block !important;
  max-width: 100% !important;
}

.shopify-cleanslate .L_4kfjrgUJIme2NaY9sr {
  -webkit-animation: uNTp63b4o9m3_VLe13Br linear 1s infinite !important;
  animation: uNTp63b4o9m3_VLe13Br linear 1s infinite !important;
}

@-webkit-keyframes uNTp63b4o9m3_VLe13Br {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes uNTp63b4o9m3_VLe13Br {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}.shopify-cleanslate .w9Qwzo4OimiAclcZ7CHC {
  fill: #000017 !important;
}

.shopify-cleanslate .I7RnGxvojmnvQveuFz9O {
  fill: #d9d9d9 !important;
}

.shopify-cleanslate .wb749_dbiWj1Utdogxz8 {
  fill: #969696 !important;
}

.shopify-cleanslate .ew4umT9w0YT2gylj3K1Q {
  fill: #fff !important;
}

.shopify-cleanslate .hwDOxnNHVpl3dQR4wIIC {
  fill: #e7a321 !important;
}.shopify-cleanslate .LkUKdyYNd2MJG2F_EGwK {
  height: 16px !important;
  width: 16px !important;
}

.shopify-cleanslate .R0ctUoY27_DdpIpOwjI8 {
  height: 32px !important;
  width: 32px !important;
}.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ {
  -webkit-appearance: none !important;
  -webkit-font-smoothing: inherit !important;
  position: relative !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  display: inline-block !important;
  background: #187bbd !important;
  border-radius: 4px !important;
  border: 0 none !important;
  -webkit-box-shadow: 0 0 0 0 transparent !important;
  box-shadow: 0 0 0 0 transparent !important;
  text-align: center !important;
  font-weight: 500 !important;
  line-height: normal !important;
  color: #fff !important;
  -webkit-transition: background 0.2s ease-out, -webkit-box-shadow 0.2s ease-out !important;
  transition: background 0.2s ease-out, -webkit-box-shadow 0.2s ease-out !important;
  transition: background 0.2s ease-out, box-shadow 0.2s ease-out !important;
  transition: background 0.2s ease-out, box-shadow 0.2s ease-out, -webkit-box-shadow 0.2s ease-out !important;
  vertical-align: middle !important;
  padding: 16px 24px !important;
  font-size: 16px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ {
    font-size: 14px !important;
  }
}

.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ,
.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ * {
  cursor: pointer !important;
}

.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ:active,
.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ:focus {
  -webkit-box-shadow: 0 0 0 4px rgba(25,144,198,0.25) !important;
  box-shadow: 0 0 0 4px rgba(25,144,198,0.25) !important;
}

.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ:hover,
.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ:active {
  background: #136f99 !important;
}

.shopify-cleanslate .sJflmvhNHZe_lcm8n9HJ[disabled] {
  background: #d9d9d9 !important;
  cursor: default !important;
}

.shopify-cleanslate .WwEY2txrjWeRYec5pzGa {
  background: transparent !important;
  line-height: 1.5 !important;
  border: 0 none !important;
  color: #187bbd !important;
  padding: 0 !important;
  font-weight: normal !important;
}

.shopify-cleanslate .WwEY2txrjWeRYec5pzGa:focus,
.shopify-cleanslate .WwEY2txrjWeRYec5pzGa:active {
  -webkit-box-shadow: 0 0 0 4px rgba(25,144,198,0.25) !important;
  box-shadow: 0 0 0 4px rgba(25,144,198,0.25) !important;
}

.shopify-cleanslate .WwEY2txrjWeRYec5pzGa:hover {
  color: #136f99 !important;
  background: transparent !important;
}

.shopify-cleanslate .WwEY2txrjWeRYec5pzGa[disabled] {
  color: #d9d9d9 !important;
}

.shopify-cleanslate .wMXFo2zMXI0rbcB3jGv_ {
  visibility: hidden !important;
}

.shopify-cleanslate .Za4FfXJQvJYVdjM_OgM_ {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  -webkit-transform: translate(-50%, -50%) !important;
  transform: translate(-50%, -50%) !important;
}

.shopify-cleanslate .VQNjEX6_4oI5D2k_uKNk {
  width: 100% !important;
}.shopify-cleanslate .CO3vyl0MqNeZ1BIwhnpp {
  text-align: center !important;
}

.shopify-cleanslate .kvpW162ms5cKlxSZJChp {
  text-align: left !important;
}

.shopify-cleanslate .asFVs5jI4yBrqm7YuJH5 {
  text-align: right !important;
}.shopify-cleanslate .gSiVdJ2erv228ljpNdYw {
  margin: 0 !important;
  font-weight: 400 !important;
  line-height: 27px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  font-size: 20px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .gSiVdJ2erv228ljpNdYw {
    font-size: 18px !important;
  }
}.shopify-cleanslate .Z_FNojxP75l5lOblrczK {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  border-bottom: solid 1px #e4e4e4 !important;
  padding: 16px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .Z_FNojxP75l5lOblrczK {
    padding: 12px 16px !important;
  }
}

.shopify-cleanslate .VvQCEnDXDqV21Z5EO7cF {
  width: 100% !important;
  text-align: center !important;
  padding-left: 24px !important;
}

.shopify-cleanslate .NGoeYJPqbe9RF_NrhNO6 {
  -webkit-box-flex: 0 !important;
  -webkit-flex: 0 0 24px !important;
  -ms-flex: 0 0 24px !important;
  flex: 0 0 24px !important;
  color: #969696 !important;
  text-align: center !important;
}.shopify-cleanslate .LEFFDXoKK0QvMVVxsKRS {
  -webkit-font-smoothing: subpixel-antialiased !important;
  background: rgba(0,0,0,0.4) !important;
  bottom: 0 !important;
  font-size: 16px !important;
  height: 100% !important;
  left: 0 !important;
  line-height: 1.3em !important;
  overflow-wrap: break-word !important;
  position: fixed !important;
  top: 0 !important;
  -webkit-transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) !important;
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) !important;
  width: 100% !important;
  word-break: break-word !important;
  word-wrap: break-word !important;
  z-index: 999999999999 !important;
  -webkit-transform: translateZ(999999999999px) !important;
  transform: translateZ(999999999999px) !important;
}

.shopify-cleanslate .jWT_kmcCOTNn2OC3R3tJ,
.shopify-cleanslate .fZH6eKUJE5ST_gHEyWqw,
.shopify-cleanslate .mjxJJetmwQ9H03XAGjOk {
  background: rgba(0,0,0,0) !important;
}

.shopify-cleanslate .fZITIzV8_ue8bUxgABDr,
.shopify-cleanslate .zdd6IT9vG9_W0ZBk6uSJ {
  background: rgba(0,0,0,0.4) !important;
} .ClKjKVFYnuJaiaiOxn5g {
  overflow: hidden !important;
  width: 100% !important;
  position: relative !important;
}

@media (min-width: 500px) {
   .ClKjKVFYnuJaiaiOxn5g {
    position: absolute !important;
  }
}

.shopify-cleanslate .w6s1MSakDMgQE4EIcVnI {
  -webkit-overflow-scrolling: touch !important;
  background-color: #fff !important;
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
  bottom: 0 !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  color: #000017 !important;
  left: 0 !important;
  max-height: calc(100% - 20px) !important;
  outline: none !important;
  position: absolute !important;
  -webkit-transition: translateY,0.5s cubic-bezier(0.2, 0.9, 0.3, 1) !important;
  transition: translateY,0.5s cubic-bezier(0.2, 0.9, 0.3, 1) !important;
  width: 100% !important;
  z-index: 9999999 !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .w6s1MSakDMgQE4EIcVnI {
    border-radius: 4px !important;
    bottom: auto !important;
    left: 50% !important;
    margin-left: -230px !important;
    max-height: calc(100vh - (20px * 2)) !important;
    max-width: 460px !important;
    top: 20px !important;
  }
}

.shopify-cleanslate .ukyrOFuXYGjb8Zzci6nA,
.shopify-cleanslate .xYeiW_gAa_ab9IfqkE0y,
.shopify-cleanslate .xW3aowfv1cdTRP4re6Ny {
  -webkit-transform: translateY(100%) !important;
  transform: translateY(100%) !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .ukyrOFuXYGjb8Zzci6nA,
  .shopify-cleanslate .xYeiW_gAa_ab9IfqkE0y,
  .shopify-cleanslate .xW3aowfv1cdTRP4re6Ny {
    -webkit-transform: translateY(-100%) !important;
    transform: translateY(-100%) !important;
    top: 0 !important;
  }
}

.shopify-cleanslate .w7w2vUlZgWM6KMUp13ct,
.shopify-cleanslate .a6Ahdzc9e6tpNq4LpTFW {
  -webkit-transform: translateY(0%) !important;
  transform: translateY(0%) !important;
}.shopify-cleanslate .kunJ_bwJHBdhVTJtSekQ {
  -webkit-box-pack: center !important;
  -webkit-justify-content: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  padding: 24px !important;
  padding-bottom: 0 !important;
  margin-bottom: 24px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  color: #545454 !important;
  font-size: 16px !important;
  -webkit-box-flex: 1 !important;
  -webkit-flex: 1 !important;
  -ms-flex: 1 !important;
  flex: 1 !important;
  overflow: auto !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .kunJ_bwJHBdhVTJtSekQ {
    font-size: 14px !important;
  }
}.shopify-cleanslate .N90IcxP2Dlqo7HBEkL0Q {
  background: transparent !important;
  border: 0 none !important;
  text-decoration: underline !important;
  padding: 0 !important;
  cursor: pointer !important;
  line-height: 16px !important;
}.shopify-cleanslate .IJV5fMPgFLuxqy8mKZL5 {
  display: none !important;
}

.shopify-cleanslate .IJV5fMPgFLuxqy8mKZL5 .PZIfssykeoTTzYDyIKZR {
  margin: 0 8px 0 8px !important;
  color: #9c83f8 !important;
}

.shopify-cleanslate .size--small .IJV5fMPgFLuxqy8mKZL5 {
  display: none !important;
}

.shopify-cleanslate .size--large .IJV5fMPgFLuxqy8mKZL5 {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
}.shopify-cleanslate .lMOrHegOli_gfk6Ez24O {
  text-align: center !important;
  max-width: 30rem !important;
  margin: 0 auto !important;
  font-size: 14px !important;
  color: rgba(0,0,0,0.55) !important;
  line-height: 1.3rem !important;
}.shopify-cleanslate .ksHaFKZfkYVlKHY1TbUt {
  padding: 24px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  color: #545454 !important;
  font-size: 16px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .ksHaFKZfkYVlKHY1TbUt {
    font-size: 14px !important;
  }
}.shopify-cleanslate .ybSyad5RbtOghAuCHUvv {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  border: 0 !important;
  padding: 0 !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
  outline: 0 none !important;
  max-height: 54px !important;
}

.shopify-cleanslate .N6dorbBFEcKWcdsY1Dgk {
  position: relative !important;
}

.shopify-cleanslate .KHqjJyKjVNT1lCGf2bnQ,
.shopify-cleanslate .wOEViUrCyNb9maEe3QrQ {
  max-height: 54px !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate .KHqjJyKjVNT1lCGf2bnQ {
    max-height: 42px !important;
    border-radius: 4px !important;
  }
}

.shopify-cleanslate .ucYbrgi9nVBRx_QDKIwM {
  max-height: 55px !important;
  width: 100% !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate .ucYbrgi9nVBRx_QDKIwM {
    width: 160px !important;
  }
}.shopify-cleanslate .Gp7WMzF2pc69IRr9yPXD {
  background: transparent !important;
}

.shopify-cleanslate .K0e2fg1oT3h6FpjYlL5m {
  background: #fff !important;
  border-color: #fff !important;
  color: #000 !important;
}

.shopify-cleanslate .K0e2fg1oT3h6FpjYlL5m:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #ebebeb !important;
  border-color: #ebebeb !important;
}

.shopify-cleanslate .MMkDzHILWhgVTH11kqqo {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}

.shopify-cleanslate .MMkDzHILWhgVTH11kqqo:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #000 !important;
  border-color: #000 !important;
}

.shopify-cleanslate .X7BUDcb2xSdf8lsQafmS {
  background: #ffc520 !important;
  border-color: #ffc520 !important;
  color: #253b80 !important;
}

.shopify-cleanslate .X7BUDcb2xSdf8lsQafmS:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #f6b600 !important;
  border-color: #f6b600 !important;
}

.shopify-cleanslate .beR_IRWWHmzzPFJUoa9p {
  background: #ffc520 !important;
  border-color: #ffc520 !important;
  color: #253b80 !important;
}

.shopify-cleanslate .beR_IRWWHmzzPFJUoa9p:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #f6b600 !important;
  border-color: #f6b600 !important;
}

.shopify-cleanslate .gEHhIg_rFT5m29hVufkg {
  background: #5a31f4 !important;
  border-color: #5a31f4 !important;
  color: #fff !important;
}

.shopify-cleanslate .gEHhIg_rFT5m29hVufkg:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #3c0def !important;
  border-color: #3c0def !important;
}

.shopify-cleanslate .DnvZqPMEvBFbBre5UuP9 {
  background: #5a31f4 !important;
  border-color: #5a31f4 !important;
  color: #fff !important;
}

.shopify-cleanslate .DnvZqPMEvBFbBre5UuP9:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #3c0def !important;
  border-color: #3c0def !important;
}

.shopify-cleanslate .DYb3BerKPu65X0EKR7Ql {
  background: #fad676 !important;
  border-color: #fad676 !important;
  color: #333e48 !important;
}

.shopify-cleanslate .DYb3BerKPu65X0EKR7Ql:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #f9ca4f !important;
  border-color: #f9ca4f !important;
}

.shopify-cleanslate .cYVH7FBl1ZchXEbTxNla {
  background: #fad676 !important;
  border-color: #fad676 !important;
  color: #333e48 !important;
}

.shopify-cleanslate .cYVH7FBl1ZchXEbTxNla:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #f9ca4f !important;
  border-color: #f9ca4f !important;
}

.shopify-cleanslate .hzzxDWW_G8mHNo2gXwAp {
  background: #fff !important;
  border-color: #fff !important;
  color: #000 !important;
}

.shopify-cleanslate .hzzxDWW_G8mHNo2gXwAp:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #ebebeb !important;
  border-color: #ebebeb !important;
}

.shopify-cleanslate .vKjZTx5He86dhWbWaFxE {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}

.shopify-cleanslate .vKjZTx5He86dhWbWaFxE:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #000 !important;
  border-color: #000 !important;
}

.shopify-cleanslate .Rrw35sdPt6FBk_x3pbzh {
  background: #fff !important;
  border-color: #fff !important;
  color: #000 !important;
}

.shopify-cleanslate .Rrw35sdPt6FBk_x3pbzh:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #ebebeb !important;
  border-color: #ebebeb !important;
}

.shopify-cleanslate .A0DbISrgWtxvKmVU8VFA {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}

.shopify-cleanslate .A0DbISrgWtxvKmVU8VFA:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: #000 !important;
  border-color: #000 !important;
}

.shopify-cleanslate .Ho6mXJXwQgY_wL8w0_9_,
.shopify-cleanslate .RWJ0IfBjxIhflh4AIrUw {
  -webkit-transition-duration: 100ms !important;
  transition-duration: 100ms !important;
  background: white !important;
  border-width: 1px !important;
  border-color: #187bbd !important;
  color: #187bbd !important;
}

.shopify-cleanslate .Ho6mXJXwQgY_wL8w0_9_:hover:not(.LVeInvZ5HcNOW1Zsn7NH),
.shopify-cleanslate .RWJ0IfBjxIhflh4AIrUw:hover:not(.LVeInvZ5HcNOW1Zsn7NH) {
  background: rgba(24,123,189,0.1) !important;
}

.shopify-cleanslate .BrUulZY1_CeWn4bGNgCe:hover {
  opacity: 0.8 !important;
}

.shopify-cleanslate .cYVH7FBl1ZchXEbTxNla svg,
.shopify-cleanslate .DYb3BerKPu65X0EKR7Ql svg {
  position: relative !important;
  top: 4px !important;
}

.shopify-cleanslate .beR_IRWWHmzzPFJUoa9p svg,
.shopify-cleanslate .X7BUDcb2xSdf8lsQafmS svg {
  position: relative !important;
  top: 1px !important;
}

.shopify-cleanslate .LVeInvZ5HcNOW1Zsn7NH {
  opacity: 0.5 !important;
}

.shopify-cleanslate .LVeInvZ5HcNOW1Zsn7NH,
.shopify-cleanslate .LVeInvZ5HcNOW1Zsn7NH * {
  cursor: default !important;
  pointer-events: none !important;
}

.shopify-cleanslate .LVeInvZ5HcNOW1Zsn7NH:active,
.shopify-cleanslate .LVeInvZ5HcNOW1Zsn7NH:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}.shopify-cleanslate .kqsiVA9Jf8LJAbxw8Bau {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  -webkit-box-pack: center !important;
  -webkit-justify-content: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  border-width: 1px !important;
  border-style: solid !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -webkit-box-shadow: 0 0 0 0 transparent !important;
  box-shadow: 0 0 0 0 transparent !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  padding: 0 !important;
  text-align: center !important;
  -webkit-transition: all 0.2s ease-out !important;
  transition: all 0.2s ease-out !important;
  width: 100% !important;
  font-size: 16px !important;
}

@media (min-width: 500px) {
  .shopify-cleanslate .kqsiVA9Jf8LJAbxw8Bau {
    font-size: 14px !important;
  }
}

.shopify-cleanslate .kqsiVA9Jf8LJAbxw8Bau,
.shopify-cleanslate .kqsiVA9Jf8LJAbxw8Bau * {
  cursor: pointer !important;
}

.shopify-cleanslate .GBRfGcHCIO5Fx7lQoG3r {
  border-radius: 4px !important;
  padding: 15px 0 !important;
  height: 52px !important;
}

.shopify-cleanslate .jjzYeefyWpPZLH9pIgyw {
  -webkit-box-flex: 1 !important;
  -webkit-flex: 1 !important;
  -ms-flex: 1 !important;
  flex: 1 !important;
  -webkit-flex-wrap: wrap !important;
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
  padding: 4px !important;
  min-height: 44px !important;
  max-height: 60px !important;
}

.shopify-cleanslate .IcgSIE7pEVZrlnAeRS6j,
.shopify-cleanslate .DefhEHZZf4y32pvV7mZj {
  border-radius: 4px !important;
  width: 100% !important;
  height: 54px !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate .IcgSIE7pEVZrlnAeRS6j {
    height: 42px !important;
  }
}

.shopify-cleanslate ._zi3yMidTBsFIz271PCH {
  height: 50px !important;
  border: 1px solid transparent !important;
  border-radius: 5px !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate ._zi3yMidTBsFIz271PCH {
    min-width: 160px !important;
  }
}

.shopify-cleanslate ._zi3yMidTBsFIz271PCH span {
  white-space: pre !important;
}

.shopify-cleanslate .h7OYsWHrW5495r9beh2n {
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.shopify-cleanslate .h7OYsWHrW5495r9beh2n span {
  white-space: pre !important;
}.shopify-cleanslate .p28_J2fRvZNDqyZkZ2H9 form,
.shopify-cleanslate .xGd3h1QpIzYq8GCXdELr form {
  margin: auto !important;
}

.shopify-cleanslate .p28_J2fRvZNDqyZkZ2H9 button,
.shopify-cleanslate .xGd3h1QpIzYq8GCXdELr button {
  min-height: auto !important;
}

.shopify-cleanslate .p28_J2fRvZNDqyZkZ2H9,
.shopify-cleanslate .xGd3h1QpIzYq8GCXdELr {
  list-style-type: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.shopify-cleanslate .Vru56DW5IUIiRpxbGTDg,
.shopify-cleanslate .XLcXEW3RnM9fyU7k7fvC {
  list-style-type: none !important;
}

.shopify-cleanslate .fQRHLPulpQPIVgLI2F6g,
.shopify-cleanslate .xGd3h1QpIzYq8GCXdELr {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: column !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
  -webkit-flex-wrap: nowrap !important;
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

.shopify-cleanslate .pGZsIynlCgQUe6S16lYw,
.shopify-cleanslate .XLcXEW3RnM9fyU7k7fvC {
  height: 54px !important;
  margin-top: 8px !important;
  margin-right: 0 !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate .fQRHLPulpQPIVgLI2F6g {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
    -webkit-flex-wrap: wrap !important;
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    row-gap: 0.3125rem !important;
  }
}

@media (min-width: 750px) {
  .shopify-cleanslate .pGZsIynlCgQUe6S16lYw {
    margin-top: 0 !important;
    margin-right: 8px !important;
    max-width: 262px !important;
    height: 42px !important;
    -webkit-box-flex: 1 !important;
    -webkit-flex: 1 1 !important;
    -ms-flex: 1 1 !important;
    flex: 1 1 !important;
  }
}

.shopify-cleanslate .pGZsIynlCgQUe6S16lYw:last-child {
  margin-right: 0 !important;
}

@media (min-width: 750px) {
  .shopify-cleanslate .pGZsIynlCgQUe6S16lYw:only-child {
    margin: 0 auto !important;
  }
}

@media (min-width: 750px) {
  .shopify-cleanslate .pGZsIynlCgQUe6S16lYw:nth-child(4n) {
    margin-right: 0px !important;
  }
}

@media (min-width: 750px) {
  .shopify-cleanslate .pGZsIynlCgQUe6S16lYw:nth-last-child(n+5):first-child,
  .shopify-cleanslate .pGZsIynlCgQUe6S16lYw:nth-last-child(n+5):first-child ~ .pGZsIynlCgQUe6S16lYw {
    max-width: 22.5% !important;
    -webkit-box-flex: 1 !important;
    -webkit-flex: 1 1 22.5% !important;
    -ms-flex: 1 1 22.5% !important;
    flex: 1 1 22.5% !important;
  }
}

.shopify-cleanslate .p28_J2fRvZNDqyZkZ2H9 {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: row !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
  -webkit-flex-wrap: wrap !important;
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
  margin: 0 -5px !important;
  margin-bottom: -5px !important;
}

.shopify-cleanslate .Vru56DW5IUIiRpxbGTDg {
  text-align: center !important;
  height: 42px !important;
  -webkit-flex-basis: 113px !important;
  -ms-flex-preferred-size: 113px !important;
  flex-basis: 113px !important;
  margin: 0 5px 5px !important;
  -webkit-box-flex: 0 !important;
  -webkit-flex-grow: 0 !important;
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}

.shopify-cleanslate .Jk692hbroeK5lg6b_t4v {
  -webkit-transition: opacity 0.5s ease-in !important;
  transition: opacity 0.5s ease-in !important;
}

.shopify-cleanslate ._hXpQa4yOJqTtV7t20hv {
  opacity: 0 !important;
}

.shopify-cleanslate .usE9L3hgsurjyQqHttzR {
  opacity: 1 !important;
}
#suggestedAddress:hover, #originalAddress:hover, .btn-row button.av_button:hover { 
background-color: #f7f7f7 !important; 
}
#addressValidatorBox { 
background-color: #FFFFFF;
border-color: #FFFFFF;
color: #000000; 
}
#addressValidatorBox h2, p#loader-text, span#input-address { 
color: #000000; 
}
#addressValidatorBox .changed { 
color: #000000 !important; 
}
.btn-row button.av_button, div.option_btns > div.option_btns_text { 
background-color: #000000;
border-color: #000000;
color: #FFFFFF; 
}
.alert-warning {
border: 1px solid #e59400;
color: #e59400;
background-color: #fff6e5;
}
#myModal #myModal-container { background-color: #FFFFFF; } #myModal > #myModal-container, #addressValidatorBox, .alert-warning, button.av_button { border-radius: 0px; } #myModal-container, #addressValidatorBox, .btn-row > .av_button { border-width: 0.5px; } #addressValidatorBox > hr { height: 0px; border-width: 0px; } div#addressValidatorBox > div#suggestedAddress, div#originalAddress { box-shadow: 0px 0px 0px 0.5px #000000; } #addressValidatorBox div#originalAddress button:focus,#addressValidatorBox div#suggestedAddress button:focus, .av_button:focus {outline:none;}
`}
      </style>
      <script
        src="https://pay.google.com/gp/p/js/pay.js"
        defer="defer"
      ></script>

      <div class="content" data-content="" aria-hidden="false">
        <div class="wrap">
          <div class="main" role="main">
            <div id="myModal">
              <div id="myModal-container" role="dialog" aria-modal="true"></div>
            </div>
            <div class="main__header">
              <div class="logo-container">
                <a href="/en-pk" aria-label="Link to homepage">
                  <svg viewBox="0 0 1067.6 176.1">
                    <rect x="609.3" width="33" height="176.1"></rect>
                    <rect x="1034.6" width="33" height="176.1"></rect>
                    <polygon points="389 120.24 323.02 0 287.7 0 287.7 176.1 320.7 176.1 320.7 64.37 382 176.1 395.99 176.1 457.29 64.38 457.29 176.1 490.29 176.1 490.29 0 454.96 0 389 120.24"></polygon>
                    <path
                      d="M494.62,452,409.7,628.05h36.63l21.11-43.77h84.15l21.11,43.77h36.63L524.41,452ZM480.74,556.7,509.52,497,538.3,556.7Z"
                      transform="translate(-409.7 -451.95)"
                    ></path>
                    <path
                      d="M1288.33,556.8a82.54,82.54,0,0,0,14.55-3.36c21.57-7.59,33.16-26.68,33.08-50.33,0-14.38-5.31-26.53-14.53-35.13-11.81-11-25.68-16-53.13-16L1171,452v176.1h33.08l.13-69.23,47.38,0,47.88,69.19h37.6ZM1204,528.25V482.16h68.73c19.14,0,30.12,7.84,30.12,23,0,14.31-11.26,23.2-29.41,23.2Z"
                      transform="translate(-409.7 -451.95)"
                    ></path>
                  </svg>
                </a>
              </div>
              <nav aria-label="Breadcrumb">
                <ol class="breadcrumb " role="list">
                  <li class="breadcrumb__item breadcrumb__item--completed">
                    <a
                      class="breadcrumb__link"
                      href="https://amiri.com/en-pk/cart"
                    >
                      Cart
                    </a>
                    <svg
                      class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                      aria-hidden="true"
                      focusable="false"
                    ></svg>
                  </li>
                  <li
                    class="breadcrumb__item breadcrumb__item--current"
                    aria-current="step"
                  >
                    <span class="breadcrumb__text">Information</span>
                    <svg
                      class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                      aria-hidden="true"
                      focusable="false"
                    ></svg>
                  </li>
                  <li class="breadcrumb__item breadcrumb__item--blank">
                    <span class="breadcrumb__text">Shipping</span>
                    <svg
                      class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                      aria-hidden="true"
                      focusable="false"
                    ></svg>
                  </li>
                  <li class="breadcrumb__item breadcrumb__item--blank">
                    <span class="breadcrumb__text">Payment</span>
                  </li>
                </ol>
              </nav>
              <div class="shown-if-js" data-alternative-payments="">
                <div class="dynamic-checkout">
                  <h2 class="dynamic-checkout__title">Express checkout</h2>
                  <div class="dynamic-checkout__content">
                    <div class="dynamic-checkout__skeleton">
                      <div class="placeholder-line placeholder-line--animated"></div>
                      <div class="placeholder-line placeholder-line--animated"></div>
                    </div>
                    <div
                      class="dynamic-checkout__buttons"
                      data-shopify="dynamic-web-checkout"
                    >
                      <div>
                        <div class="shopify-cleanslate">
                          <div
                            id="shopify-svg-symbols"
                            class="R9tDu8JrE_i1ctOEo0v_"
                            aria-hidden="true"
                          >
                            <svg focusable="false">
                              <defs>
                                <symbol
                                  id="shopify-svg__warning"
                                  viewBox="0 0 16 14"
                                >
                                  <path d="M5.925 2.344c1.146-1.889 3.002-1.893 4.149 0l4.994 8.235c1.146 1.889.288 3.421-1.916 3.421h-10.305c-2.204 0-3.063-1.529-1.916-3.421l4.994-8.235zm1.075 1.656v5h2v-5h-2zm0 6v2h2v-2h-2z"></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__loading"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z"></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__error"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    d="M9 18c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"
                                    style={{ fill: "rgb(255, 62, 62)" }}
                                  ></path>
                                  <path
                                    d="M8 4h2v6H8z"
                                    style={{ fill: "rgb(255, 255, 255)" }}
                                  ></path>
                                  <rect
                                    x="7.8"
                                    y="12"
                                    width="2.5"
                                    height="2.5"
                                    rx="1.3"
                                    style={{ fill: "rgb(255, 255, 255)" }}
                                  ></rect>
                                </symbol>
                                <symbol
                                  id="shopify-svg__close-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8"></circle>
                                  <path
                                    d="M10.5 5.5l-5 5M5.5 5.5l5 5"
                                    stroke="#FFF"
                                    stroke-width="1.5"
                                    stroke-linecap="square"
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__close"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__arrow-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z"></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-google-pay-light"
                                  viewBox="0 0 41 17"
                                >
                                  <path
                                    d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                                    style={{ fill: "rgb(255, 255, 255)" }}
                                  ></path>
                                  <path
                                    d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                                    style={{ fill: "rgb(66, 133, 244)" }}
                                  ></path>
                                  <path
                                    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                                    style={{ fill: "rgb(52, 168, 83)" }}
                                  ></path>
                                  <path
                                    d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                                    style={{ fill: "rgb(251, 188, 5)" }}
                                  ></path>
                                  <path
                                    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                                    style={{ fill: "rgb(234, 67, 53)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-google-pay-dark"
                                  viewBox="0 0 41 17"
                                >
                                  <path
                                    d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                                    style={{ fill: "rgba(0, 0, 0, 0.55)" }}
                                  ></path>
                                  <path
                                    d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                                    style={{ fill: "rgb(66, 133, 244)" }}
                                  ></path>
                                  <path
                                    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                                    style={{ fill: "rgb(52, 168, 83)" }}
                                  ></path>
                                  <path
                                    d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                                    style={{ fill: "rgb(251, 188, 5)" }}
                                  ></path>
                                  <path
                                    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                                    style={{ fill: "rgb(234, 67, 53)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-facebook-pay-dark"
                                  viewBox="0 0 300 50"
                                >
                                  <path
                                    d="M277.374 25.35a330.858 330.858 0 0 1-5.496-14.28h6.355c1.122 3.701 2.393 7.365 3.739 11.066 1.383 3.7 2.803 7.364 4.336 10.953a271.222 271.222 0 0 0 7.29-22.019h6.131a183.26 183.26 0 0 1-2.692 7.963 500.958 500.958 0 0 1-3.402 9.159c-1.271 3.29-2.766 6.99-4.411 11.028-1.57 3.813-3.327 6.542-5.196 8.224-1.907 1.645-4.225 2.505-7.028 2.505a11.37 11.37 0 0 1-2.243-.225v-5.046c.374.037.673.074.897.112h.673c1.645 0 3.028-.449 4.149-1.309 1.122-.86 2.131-2.28 3.066-4.299-2.168-4.523-4.187-9.121-6.131-13.832h-.037Zm-9.795 13.421h-5.682v-3.888c-1.009 1.458-2.28 2.58-3.85 3.365-1.571.785-3.328 1.196-5.309 1.196-2.467 0-4.635-.636-6.505-1.87-1.906-1.233-3.364-2.99-4.448-5.158-1.084-2.206-1.608-4.71-1.608-7.514 0-2.804.561-5.346 1.645-7.552 1.084-2.168 2.617-3.887 4.561-5.121 1.944-1.234 4.187-1.87 6.692-1.87 1.906 0 3.588.375 5.121 1.122 1.495.748 2.766 1.795 3.738 3.14v-3.55h5.683v27.775l-.038-.075Zm-5.794-18.056c-.636-1.57-1.608-2.841-2.953-3.738-1.346-.898-2.879-1.384-4.636-1.384-2.467 0-4.449.823-5.944 2.505-1.458 1.682-2.205 3.925-2.205 6.767 0 2.84.71 5.121 2.13 6.803 1.421 1.682 3.327 2.505 5.795 2.505 1.794 0 3.402-.449 4.785-1.383 1.383-.935 2.43-2.168 3.028-3.739v-8.336ZM209 1.5h14.131c4.747 0 8.411 1.084 10.99 3.252 2.58 2.169 3.888 5.234 3.888 9.271 0 4.038-1.271 7.103-3.85 9.271-2.58 2.169-6.243 3.253-11.028 3.253h-8.038v12.261H209V1.5Zm13.645 19.551c3.14 0 5.42-.56 6.916-1.72 1.495-1.158 2.243-2.915 2.243-5.27 0-2.355-.748-4.225-2.243-5.346-1.496-1.122-3.813-1.72-6.916-1.72h-7.552v14.056h7.552ZM71.937 1.249h7.429l12.63 22.85 12.632-22.85h7.268v37.546h-6.06V10.019L94.758 29.946h-5.686L77.997 10.019v28.776h-6.06V1.249Zm58.947 13.999c-4.346 0-6.964 3.27-7.59 7.32h14.75c-.304-4.171-2.711-7.32-7.16-7.32Zm-13.598 9.628c0-8.522 5.508-14.725 13.703-14.725 8.061 0 12.875 6.124 12.875 15.18v1.665h-20.57c.73 4.405 3.653 7.374 8.367 7.374 3.761 0 6.112-1.147 8.34-3.246l3.22 3.943c-3.033 2.79-6.891 4.398-11.775 4.398-8.872 0-14.16-6.47-14.16-14.589Zm33.926-9.09h-5.579v-4.963h5.579V2.618h5.846v8.205h8.475v4.962h-8.475v12.577c0 4.294 1.373 5.82 4.747 5.82 1.541 0 2.424-.132 3.728-.35v4.909c-1.625.459-3.176.67-4.854.67-6.312 0-9.467-3.449-9.467-10.352V15.785v.001Zm38.941 4.825c-1.174-2.965-3.794-5.148-7.644-5.148-5.003 0-8.205 3.55-8.205 9.333 0 5.638 2.948 9.36 7.966 9.36 3.944 0 6.76-2.296 7.883-5.15V20.61v.001ZM196 38.795h-5.739v-3.916c-1.605 2.305-4.524 4.586-9.253 4.586-7.604 0-12.686-6.366-12.686-14.67 0-8.381 5.204-14.644 13.009-14.644 3.858 0 6.885 1.543 8.93 4.266v-3.594H196v27.972Z"
                                    fill="#000000"
                                  ></path>
                                  <path
                                    d="M6.422 26.042c0 2.27.498 4.013 1.15 5.068.853 1.38 2.127 1.966 3.425 1.966 1.675 0 3.207-.415 6.16-4.499 2.364-3.273 5.151-7.867 7.027-10.747l3.175-4.88c2.206-3.388 4.76-7.155 7.687-9.708C37.436 1.158 40.015 0 42.61 0c4.357 0 8.506 2.524 11.682 7.259 3.475 5.185 5.162 11.717 5.162 18.457 0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.497-8.086 4.497v-6.414c3.645 0 4.554-3.35 4.554-7.182 0-5.463-1.273-11.525-4.079-15.856-1.99-3.073-4.571-4.95-7.41-4.95-3.07 0-5.54 2.316-8.317 6.445-1.477 2.193-2.992 4.867-4.694 7.883l-1.873 3.318c-3.763 6.672-4.716 8.192-6.597 10.7-3.298 4.391-6.114 6.056-9.82 6.056-4.398 0-7.18-1.905-8.901-4.774C.69 32.377 0 29.309 0 25.813l6.422.23v-.001Z"
                                    fill="#0081FB"
                                  ></path>
                                  <path
                                    d="M5.063 7.712C8.007 3.174 12.256 0 17.13 0c2.823 0 5.628.835 8.558 3.227 3.204 2.616 6.62 6.922 10.881 14.02l1.528 2.547c3.688 6.145 5.787 9.306 7.015 10.797 1.58 1.914 2.686 2.485 4.123 2.485 3.645 0 4.554-3.35 4.554-7.182l5.665-.178c0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.496-8.086 4.496-2.647 0-4.991-.574-7.584-3.02-1.993-1.877-4.323-5.212-6.116-8.21l-5.332-8.907c-2.675-4.47-5.13-7.803-6.55-9.312-1.528-1.623-3.492-3.583-6.626-3.583-2.537 0-4.691 1.78-6.494 4.503L5.064 7.712h-.001Z"
                                    fill="url(#meta-pay-button__a)"
                                  ></path>
                                  <path
                                    d="M17.026 6.457c-2.537 0-4.691 1.78-6.494 4.503-2.55 3.848-4.11 9.579-4.11 15.082 0 2.27.498 4.013 1.15 5.068l-5.476 3.606C.691 32.377 0 29.309 0 25.813c0-6.358 1.745-12.984 5.063-18.101C8.007 3.174 12.256 0 17.13 0l-.103 6.457h-.001Z"
                                    fill="url(#meta-pay-button__b)"
                                  ></path>
                                  <defs>
                                    <linearGradient
                                      id="meta-pay-button__a"
                                      x1="12.612"
                                      y1="24.19"
                                      x2="53.549"
                                      y2="26.257"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#0064E1"></stop>
                                      <stop
                                        offset=".4"
                                        stop-color="#0064E1"
                                      ></stop>
                                      <stop
                                        offset=".83"
                                        stop-color="#0073EE"
                                      ></stop>
                                      <stop
                                        offset="1"
                                        stop-color="#0082FB"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="meta-pay-button__b"
                                      x1="9.304"
                                      y1="28.738"
                                      x2="9.304"
                                      y2="13.646"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#0082FB"></stop>
                                      <stop
                                        offset="1"
                                        stop-color="#0064E0"
                                      ></stop>
                                    </linearGradient>
                                  </defs>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-facebook-pay-light"
                                  viewBox="0 0 300 50"
                                >
                                  <path
                                    d="M277.374 25.35a330.858 330.858 0 0 1-5.496-14.28h6.355c1.122 3.701 2.393 7.365 3.739 11.066 1.383 3.7 2.803 7.364 4.336 10.953a271.222 271.222 0 0 0 7.29-22.019h6.131a183.26 183.26 0 0 1-2.692 7.963 500.958 500.958 0 0 1-3.402 9.159c-1.271 3.29-2.766 6.99-4.411 11.028-1.57 3.813-3.327 6.542-5.196 8.224-1.907 1.645-4.225 2.505-7.028 2.505a11.37 11.37 0 0 1-2.243-.225v-5.046c.374.037.673.074.897.112h.673c1.645 0 3.028-.449 4.149-1.309 1.122-.86 2.131-2.28 3.066-4.299-2.168-4.523-4.187-9.121-6.131-13.832h-.037Zm-9.795 13.421h-5.682v-3.888c-1.009 1.458-2.28 2.58-3.85 3.365-1.571.785-3.328 1.196-5.309 1.196-2.467 0-4.635-.636-6.505-1.87-1.906-1.233-3.364-2.99-4.448-5.158-1.084-2.206-1.608-4.71-1.608-7.514 0-2.804.561-5.346 1.645-7.552 1.084-2.168 2.617-3.887 4.561-5.121 1.944-1.234 4.187-1.87 6.692-1.87 1.906 0 3.588.375 5.121 1.122 1.495.748 2.766 1.795 3.738 3.14v-3.55h5.683v27.775l-.038-.075Zm-5.794-18.056c-.636-1.57-1.608-2.841-2.953-3.738-1.346-.898-2.879-1.384-4.636-1.384-2.467 0-4.449.823-5.944 2.505-1.458 1.682-2.205 3.925-2.205 6.767 0 2.84.71 5.121 2.13 6.803 1.421 1.682 3.327 2.505 5.795 2.505 1.794 0 3.402-.449 4.785-1.383 1.383-.935 2.43-2.168 3.028-3.739v-8.336ZM209 1.5h14.131c4.747 0 8.411 1.084 10.99 3.252 2.58 2.169 3.888 5.234 3.888 9.271 0 4.038-1.271 7.103-3.85 9.271-2.58 2.169-6.243 3.253-11.028 3.253h-8.038v12.261H209V1.5Zm13.645 19.551c3.14 0 5.42-.56 6.916-1.72 1.495-1.158 2.243-2.915 2.243-5.27 0-2.355-.748-4.225-2.243-5.346-1.496-1.122-3.813-1.72-6.916-1.72h-7.552v14.056h7.552ZM71.937 1.249h7.429l12.63 22.85 12.632-22.85h7.268v37.546h-6.06V10.019L94.758 29.946h-5.686L77.997 10.019v28.776h-6.06V1.249Zm58.947 13.999c-4.346 0-6.964 3.27-7.59 7.32h14.75c-.304-4.171-2.711-7.32-7.16-7.32Zm-13.598 9.628c0-8.522 5.508-14.725 13.703-14.725 8.061 0 12.875 6.124 12.875 15.18v1.665h-20.57c.73 4.405 3.653 7.374 8.367 7.374 3.761 0 6.112-1.147 8.34-3.246l3.22 3.943c-3.033 2.79-6.891 4.398-11.775 4.398-8.872 0-14.16-6.47-14.16-14.589Zm33.926-9.09h-5.579v-4.963h5.579V2.618h5.846v8.205h8.475v4.962h-8.475v12.577c0 4.294 1.373 5.82 4.747 5.82 1.541 0 2.424-.132 3.728-.35v4.909c-1.625.459-3.176.67-4.854.67-6.312 0-9.467-3.449-9.467-10.352V15.785v.001Zm38.941 4.825c-1.174-2.965-3.794-5.148-7.644-5.148-5.003 0-8.205 3.55-8.205 9.333 0 5.638 2.948 9.36 7.966 9.36 3.944 0 6.76-2.296 7.883-5.15V20.61v.001ZM196 38.795h-5.739v-3.916c-1.605 2.305-4.524 4.586-9.253 4.586-7.604 0-12.686-6.366-12.686-14.67 0-8.381 5.204-14.644 13.009-14.644 3.858 0 6.885 1.543 8.93 4.266v-3.594H196v27.972Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M6.422 26.042c0 2.27.498 4.013 1.15 5.068.853 1.38 2.127 1.966 3.425 1.966 1.675 0 3.207-.415 6.16-4.499 2.364-3.273 5.151-7.867 7.027-10.747l3.175-4.88c2.206-3.388 4.76-7.155 7.687-9.708C37.436 1.158 40.015 0 42.61 0c4.357 0 8.506 2.524 11.682 7.259 3.475 5.185 5.162 11.717 5.162 18.457 0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.497-8.086 4.497v-6.414c3.645 0 4.554-3.35 4.554-7.182 0-5.463-1.273-11.525-4.079-15.856-1.99-3.073-4.571-4.95-7.41-4.95-3.07 0-5.54 2.316-8.317 6.445-1.477 2.193-2.992 4.867-4.694 7.883l-1.873 3.318c-3.763 6.672-4.716 8.192-6.597 10.7-3.298 4.391-6.114 6.056-9.82 6.056-4.398 0-7.18-1.905-8.901-4.774C.69 32.377 0 29.309 0 25.813l6.422.23v-.001Z"
                                    fill="#0081FB"
                                  ></path>
                                  <path
                                    d="M5.063 7.712C8.007 3.174 12.256 0 17.13 0c2.823 0 5.628.835 8.558 3.227 3.204 2.616 6.62 6.922 10.881 14.02l1.528 2.547c3.688 6.145 5.787 9.306 7.015 10.797 1.58 1.914 2.686 2.485 4.123 2.485 3.645 0 4.554-3.35 4.554-7.182l5.665-.178c0 4.007-.79 6.95-2.133 9.277-1.299 2.25-3.83 4.496-8.086 4.496-2.647 0-4.991-.574-7.584-3.02-1.993-1.877-4.323-5.212-6.116-8.21l-5.332-8.907c-2.675-4.47-5.13-7.803-6.55-9.312-1.528-1.623-3.492-3.583-6.626-3.583-2.537 0-4.691 1.78-6.494 4.503L5.064 7.712h-.001Z"
                                    fill="url(#meta-pay-button__a)"
                                  ></path>
                                  <path
                                    d="M17.026 6.457c-2.537 0-4.691 1.78-6.494 4.503-2.55 3.848-4.11 9.579-4.11 15.082 0 2.27.498 4.013 1.15 5.068l-5.476 3.606C.691 32.377 0 29.309 0 25.813c0-6.358 1.745-12.984 5.063-18.101C8.007 3.174 12.256 0 17.13 0l-.103 6.457h-.001Z"
                                    fill="url(#meta-pay-button__b)"
                                  ></path>
                                  <defs>
                                    <linearGradient
                                      id="meta-pay-button__a"
                                      x1="12.612"
                                      y1="24.19"
                                      x2="53.549"
                                      y2="26.257"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#0064E1"></stop>
                                      <stop
                                        offset=".4"
                                        stop-color="#0064E1"
                                      ></stop>
                                      <stop
                                        offset=".83"
                                        stop-color="#0073EE"
                                      ></stop>
                                      <stop
                                        offset="1"
                                        stop-color="#0082FB"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="meta-pay-button__b"
                                      x1="9.304"
                                      y1="28.738"
                                      x2="9.304"
                                      y2="13.646"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#0082FB"></stop>
                                      <stop
                                        offset="1"
                                        stop-color="#0064E0"
                                      ></stop>
                                    </linearGradient>
                                  </defs>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-amazon-pay"
                                  viewBox="0 0 102 20"
                                >
                                  <path
                                    d="M75.19 1.786c-.994 0-1.933.326-2.815.98v5.94c.896.683 1.82 1.023 2.774 1.023 1.932 0 2.899-1.32 2.899-3.96 0-2.655-.953-3.983-2.858-3.983zm-2.962-.277A5.885 5.885 0 0 1 73.93.444a4.926 4.926 0 0 1 1.85-.362c.672 0 1.282.127 1.827.383a3.763 3.763 0 0 1 1.387 1.108c.378.482.669 1.068.872 1.757.203.689.305 1.466.305 2.332 0 .88-.109 1.675-.326 2.385-.217.71-.522 1.314-.914 1.81a4.137 4.137 0 0 1-1.429 1.16 4.165 4.165 0 0 1-1.87.416c-1.26 0-2.346-.419-3.256-1.256v4.983c0 .284-.14.426-.42.426h-1.24c-.28 0-.42-.142-.42-.426V.827c0-.284.14-.426.42-.426h.925c.28 0 .441.142.483.426l.105.682zm13.194 8.37a4.21 4.21 0 0 0 1.45-.277 5.463 5.463 0 0 0 1.45-.81V6.62c-.35-.085-.719-.152-1.104-.202a8.8 8.8 0 0 0-1.124-.075c-1.583 0-2.374.617-2.374 1.853 0 .54.147.955.441 1.246.294.29.715.437 1.261.437zm-2.458-7.625l-.158.053a.561.561 0 0 1-.179.033c-.182 0-.273-.128-.273-.384V1.38c0-.199.028-.337.084-.415.056-.078.169-.153.337-.224.448-.199 1-.359 1.66-.48.657-.12 1.316-.18 1.974-.18 1.33 0 2.311.277 2.942.83.63.554.945 1.413.945 2.577v7.284c0 .284-.14.426-.42.426h-.903c-.267 0-.42-.135-.463-.405l-.105-.702a5.74 5.74 0 0 1-1.67 1.022 4.908 4.908 0 0 1-1.817.362c-1.009 0-1.807-.288-2.395-.863-.589-.575-.883-1.345-.883-2.31 0-1.037.364-1.864 1.092-2.481.73-.618 1.71-.927 2.942-.927.784 0 1.667.12 2.647.362V3.852c0-.767-.168-1.307-.504-1.619-.336-.313-.925-.469-1.764-.469-.982 0-2.01.163-3.09.49zm14.16 10.84c-.379.98-.816 1.683-1.314 2.109-.496.426-1.144.639-1.943.639-.448 0-.847-.05-1.197-.15a.606.606 0 0 1-.336-.202c-.07-.093-.105-.237-.105-.437V14.5c0-.27.105-.405.315-.405.07 0 .175.014.315.043.14.028.33.043.567.043.532 0 .946-.128 1.24-.384.294-.255.56-.724.798-1.406l.4-1.086-4.056-10.137c-.098-.241-.146-.411-.146-.511 0-.17.097-.256.294-.256h1.26c.224 0 .378.036.463.106.083.072.167.228.251.47l2.942 8.263L99.708.976c.084-.24.168-.397.252-.469.084-.07.238-.106.462-.106h1.177c.196 0 .294.086.294.256 0 .1-.05.27-.147.51l-4.622 11.927M40.15 15.47c-3.761 2.814-9.216 4.31-13.912 4.31-6.583 0-12.51-2.466-16.996-6.572-.352-.322-.038-.763.385-.513 4.84 2.855 10.825 4.574 17.006 4.574 4.17 0 8.753-.877 12.971-2.691.636-.273 1.17.425.547.891"
                                    style={{ fill: "rgb(51, 62, 72)" }}
                                  ></path>
                                  <path
                                    d="M41.717 13.657c-.482-.624-3.181-.296-4.394-.148-.368.044-.425-.281-.093-.517 2.153-1.533 5.682-1.09 6.092-.577.413.518-.108 4.104-2.127 5.816-.31.263-.605.122-.468-.225.455-1.15 1.471-3.724.99-4.349M37.429 2.06V.57A.365.365 0 0 1 37.8.193l6.59-.001c.21 0 .38.155.38.376v1.278c-.003.214-.18.494-.496.938L40.86 7.722c1.267-.03 2.607.163 3.757.818.26.148.33.367.35.582v1.59c0 .218-.237.472-.485.34-2.028-1.077-4.718-1.194-6.96.013-.23.124-.47-.126-.47-.345V9.209c0-.242.005-.656.246-1.024l3.953-5.75H37.81a.369.369 0 0 1-.38-.375M13.4 11.365h-2.005a.38.38 0 0 1-.358-.343L11.038.595a.38.38 0 0 1 .387-.375h1.866a.38.38 0 0 1 .365.35v1.36h.037C14.18.615 15.096 0 16.331 0c1.253 0 2.039.614 2.6 1.93C19.418.615 20.521 0 21.7 0c.842 0 1.758.351 2.32 1.141.635.878.505 2.15.505 3.27l-.002 6.58a.38.38 0 0 1-.387.374h-2.001a.378.378 0 0 1-.36-.374V5.463c0-.438.037-1.535-.056-1.952-.15-.703-.6-.9-1.179-.9-.486 0-.991.33-1.197.855-.206.527-.188 1.405-.188 1.997v5.527a.38.38 0 0 1-.386.375h-2.002a.379.379 0 0 1-.36-.374l-.001-5.528c0-1.163.186-2.874-1.235-2.874-1.44 0-1.384 1.668-1.384 2.874l-.001 5.527a.38.38 0 0 1-.387.375m37.059-9.236c-1.478 0-1.571 2.04-1.571 3.312 0 1.273-.02 3.993 1.552 3.993 1.554 0 1.628-2.194 1.628-3.532 0-.877-.038-1.93-.3-2.764-.224-.724-.673-1.01-1.31-1.01zM50.439 0c2.975 0 4.584 2.59 4.584 5.88 0 3.181-1.777 5.705-4.584 5.705-2.918 0-4.508-2.59-4.508-5.814C45.93 2.523 47.539 0 50.439 0zm8.441 11.365h-1.997a.379.379 0 0 1-.36-.374L56.52.561a.381.381 0 0 1 .386-.34L58.764.22c.175.009.32.13.356.291v1.595h.038C59.72.68 60.505 0 61.89 0c.898 0 1.778.329 2.339 1.229.524.834.524 2.237.524 3.247v6.561a.382.382 0 0 1-.385.328H62.36a.38.38 0 0 1-.357-.328V5.376c0-1.141.13-2.809-1.253-2.809-.487 0-.936.33-1.16.834-.281.636-.319 1.272-.319 1.975v5.614a.386.386 0 0 1-.39.375m-24.684.075a.41.41 0 0 1-.473.047c-.665-.56-.785-.82-1.149-1.354-1.1 1.136-1.879 1.477-3.304 1.477-1.687 0-3-1.055-3-3.166 0-1.65.882-2.77 2.138-3.32 1.087-.484 2.606-.572 3.769-.704v-.264c0-.484.037-1.055-.245-1.473-.243-.374-.712-.528-1.124-.528-.765 0-1.444.397-1.611 1.22-.035.183-.167.364-.348.374l-1.943-.214c-.164-.037-.346-.17-.299-.425C27.055.721 29.183 0 31.09 0c.975 0 2.25.263 3.018 1.011.975.924.881 2.155.881 3.497v3.165c0 .952.39 1.37.757 1.882.128.185.156.405-.007.54-.409.348-1.136.988-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.98.314-2.98 2.045 0 .88.45 1.473 1.218 1.473.562 0 1.069-.352 1.387-.923.394-.704.376-1.363.376-2.155zM7.926 11.44a.41.41 0 0 1-.473.047c-.667-.56-.786-.82-1.15-1.354C5.204 11.27 4.425 11.61 3 11.61c-1.688 0-3-1.055-3-3.166 0-1.65.88-2.77 2.137-3.32 1.087-.484 2.606-.572 3.768-.704v-.264c0-.484.038-1.055-.243-1.473-.244-.374-.713-.528-1.125-.528-.764 0-1.444.397-1.61 1.22-.036.183-.168.364-.35.374l-1.94-.214c-.165-.037-.347-.17-.3-.425C.783.721 2.911 0 4.818 0c.975 0 2.25.263 3.018 1.011.975.924.882 2.155.882 3.497v3.165c0 .952.39 1.37.756 1.882.128.185.157.405-.006.54a78.47 78.47 0 0 0-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.982.314-2.982 2.045 0 .88.45 1.473 1.219 1.473.562 0 1.069-.352 1.387-.923.394-.704.375-1.363.375-2.155z"
                                    style={{ fill: "rgb(51, 62, 72)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-apple-pay-dark"
                                  viewBox="0 0 43 19"
                                >
                                  <path
                                    d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"
                                    style={{ fill: "rgb(0, 0, 0)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-apple-pay-light"
                                  viewBox="0 0 43 19"
                                >
                                  <path
                                    d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"
                                    style={{ fill: "rgb(255, 255, 255)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-paypal"
                                  viewBox="0 0 67 19"
                                >
                                  <path
                                    d="M8.44.57H3.29a.718.718 0 0 0-.707.61L.502 14.517c-.041.263.16.5.425.5h2.458a.718.718 0 0 0 .707-.61l.561-3.597a.717.717 0 0 1 .706-.611h1.63c3.391 0 5.349-1.658 5.86-4.944.23-1.437.01-2.566-.657-3.357C11.461 1.029 10.162.57 8.44.57zm.594 4.87C8.752 7.308 7.34 7.308 5.976 7.308h-.777l.545-3.485a.43.43 0 0 1 .424-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.796-.06h-2.466a.43.43 0 0 0-.424.367l-.109.696-.172-.252c-.534-.783-1.724-1.044-2.912-1.044-2.725 0-5.052 2.084-5.505 5.008-.235 1.46.1 2.854.919 3.827.75.894 1.826 1.267 3.105 1.267 2.195 0 3.412-1.426 3.412-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.718.718 0 0 0 .707-.61l1.333-8.526a.43.43 0 0 0-.423-.5zm-3.437 4.849c-.238 1.422-1.356 2.378-2.782 2.378-.716 0-1.288-.232-1.655-.672-.365-.436-.503-1.058-.387-1.75.222-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.375.448.524 1.073.417 1.763zM36.96 5.38h-2.478a.716.716 0 0 0-.592.318l-3.417 5.085-1.448-4.887a.719.719 0 0 0-.687-.515h-2.435a.433.433 0 0 0-.407.573l2.73 8.09-2.567 3.66a.434.434 0 0 0 .35.684h2.475a.712.712 0 0 0 .588-.31l8.24-12.016a.434.434 0 0 0-.352-.681z"
                                    style={{ fill: "rgb(37, 59, 128)" }}
                                  ></path>
                                  <path
                                    d="M45.163.57h-5.15a.717.717 0 0 0-.706.61l-2.082 13.337a.43.43 0 0 0 .423.5h2.642a.502.502 0 0 0 .494-.427l.591-3.78a.717.717 0 0 1 .706-.611h1.63c3.392 0 5.348-1.658 5.86-4.944.231-1.437.009-2.566-.657-3.357C48.183 1.029 46.886.57 45.163.57zm.593 4.87c-.28 1.867-1.692 1.867-3.057 1.867h-.777l.546-3.485a.429.429 0 0 1 .423-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.795-.06h-2.464a.428.428 0 0 0-.423.367l-.109.696-.173-.252c-.534-.783-1.723-1.044-2.911-1.044-2.724 0-5.05 2.084-5.504 5.008-.235 1.46.099 2.854.918 3.827.753.894 1.826 1.267 3.105 1.267 2.195 0 3.413-1.426 3.413-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.717.717 0 0 0 .707-.61l1.333-8.526a.433.433 0 0 0-.426-.5zm-3.436 4.849c-.237 1.422-1.356 2.378-2.782 2.378-.714 0-1.288-.232-1.655-.672-.365-.436-.502-1.058-.387-1.75.223-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.377.448.526 1.073.417 1.763zM63.458.935l-2.113 13.582a.43.43 0 0 0 .423.5h2.124a.716.716 0 0 0 .707-.61L66.683 1.07a.432.432 0 0 0-.423-.5h-2.379c-.21 0-.39.156-.423.366z"
                                    style={{ fill: "rgb(23, 155, 215)" }}
                                  ></path>
                                </symbol>
                                <symbol
                                  id="shopify-svg__payments-shop-pay"
                                  viewBox="0 -2 341 81"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M227.297 0C220.448 0 214.896 5.47237 214.896 12.2229V67.8125C214.896 74.563 220.448 80.0354 227.297 80.0354H328.357C335.206 80.0354 340.758 74.563 340.758 67.8125V12.2229C340.758 5.47237 335.206 0 328.357 0H227.297ZM244.999 55.8917V41.8012H253.993C262.21 41.8012 266.579 37.2604 266.579 30.379C266.579 23.4976 262.21 19.3782 253.993 19.3782H239.205V55.8917H244.999ZM244.999 24.8084H252.663C257.982 24.8084 260.595 26.9617 260.595 30.5663C260.595 34.1708 258.077 36.3242 252.9 36.3242H244.999V24.8084ZM276.795 56.6407C281.212 56.6407 284.109 54.7214 285.439 51.4445C285.819 55.0959 288.052 56.9684 292.896 55.7044L292.944 51.819C290.996 52.0063 290.616 51.3041 290.616 49.2912V39.7415C290.616 34.124 286.864 30.8003 279.93 30.8003C273.09 30.8003 269.148 34.1708 269.148 39.8819H274.468C274.468 37.1668 276.415 35.5284 279.835 35.5284C283.444 35.5284 285.107 37.0732 285.059 39.7415V40.9586L278.932 41.614C272.045 42.3629 268.246 44.9376 268.246 49.4316C268.246 53.1298 270.905 56.6407 276.795 56.6407ZM277.982 52.4276C274.99 52.4276 273.803 50.836 273.803 49.2443C273.803 47.091 276.273 46.1079 281.117 45.5462L284.917 45.1249C284.679 49.2443 281.877 52.4276 277.982 52.4276ZM310.537 57.7174C308.115 63.5221 304.22 65.2541 298.141 65.2541H295.528V60.4793H298.331C301.655 60.4793 303.27 59.4494 305.028 56.5002L294.246 31.5493H300.23L307.925 49.7593L314.764 31.5493H320.606L310.537 57.7174Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M29.5136 35.1798C21.5797 33.4835 18.0451 32.8197 18.0451 29.8064C18.0451 26.9722 20.4371 25.5604 25.221 25.5604C29.4282 25.5604 32.5036 27.3726 34.7674 30.9232C34.9382 31.1972 35.2906 31.292 35.5789 31.1445L44.506 26.6983C44.8263 26.5402 44.9438 26.1399 44.7623 25.8343C41.0569 19.5022 34.2121 16.0358 25.1996 16.0358C13.3574 16.0358 6 21.7885 6 30.9338C6 40.648 14.9591 43.1029 22.9038 44.7992C30.8484 46.4955 34.3936 47.1592 34.3936 50.1725C34.3936 53.1858 31.8095 54.6082 26.6518 54.6082C21.8893 54.6082 18.3548 52.4589 16.2191 48.2866C16.059 47.981 15.6852 47.8546 15.3756 48.0127L6.46985 52.364C6.16017 52.5221 6.03203 52.8908 6.19221 53.2069C9.72673 60.2134 16.9773 64.1538 26.6625 64.1538C38.996 64.1538 46.4494 58.496 46.4494 49.0663C46.4494 39.6365 37.4476 36.8972 29.5136 35.2009V35.1798Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M77.3525 16.0358C72.291 16.0358 67.8168 17.8059 64.6026 20.9561C64.3997 21.1458 64.0687 21.0088 64.0687 20.7349V0.621625C64.0687 0.273937 63.791 0 63.4387 0H52.2692C51.9168 0 51.6391 0.273937 51.6391 0.621625V63.0476C51.6391 63.3952 51.9168 63.6692 52.2692 63.6692H63.4387C63.791 63.6692 64.0687 63.3952 64.0687 63.0476V35.6644C64.0687 30.3754 68.1798 26.319 73.7219 26.319C79.2639 26.319 83.279 30.2911 83.279 35.6644V63.0476C83.279 63.3952 83.5566 63.6692 83.909 63.6692H95.0785C95.4309 63.6692 95.7085 63.3952 95.7085 63.0476V35.6644C95.7085 24.1591 88.0628 16.0464 77.3525 16.0464V16.0358Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M118.389 14.2552C112.324 14.2552 106.622 16.0779 102.542 18.7224C102.265 18.9016 102.169 19.2703 102.34 19.5548L107.262 27.8466C107.444 28.1416 107.828 28.247 108.127 28.0679C111.224 26.2241 114.769 25.2653 118.389 25.2864C128.138 25.2864 135.303 32.0716 135.303 41.0377C135.303 48.6763 129.569 54.3342 122.297 54.3342C116.371 54.3342 112.26 50.9311 112.26 46.1266C112.26 43.3767 113.445 41.122 116.531 39.5311C116.851 39.3625 116.969 38.9727 116.777 38.6671L112.132 30.9126C111.982 30.6598 111.662 30.5439 111.373 30.6492C105.148 32.925 100.78 38.4037 100.78 45.7579C100.78 56.8839 109.761 65.1863 122.287 65.1863C136.916 65.1863 147.434 55.1876 147.434 40.8481C147.434 25.476 135.197 14.2446 118.368 14.2446L118.389 14.2552Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M180.098 15.9515C174.449 15.9515 169.409 18.006 165.725 21.6304C165.522 21.8306 165.191 21.6831 165.191 21.4092V17.0473C165.191 16.6996 164.914 16.4256 164.561 16.4256H153.68C153.328 16.4256 153.05 16.6996 153.05 17.0473V79.3784C153.05 79.7261 153.328 80 153.68 80H164.849C165.202 80 165.48 79.7261 165.48 79.3784V58.9385C165.48 58.6645 165.811 58.5276 166.013 58.7067C169.687 62.0782 174.545 64.0485 180.109 64.0485C193.211 64.0485 203.43 53.5862 203.43 39.9947C203.43 26.4032 193.2 15.941 180.109 15.941L180.098 15.9515ZM177.995 53.4914C170.541 53.4914 164.892 47.6439 164.892 39.9104C164.892 32.177 170.53 26.3295 177.995 26.3295C185.459 26.3295 191.086 32.0822 191.086 39.9104C191.086 47.7387 185.533 53.4914 177.984 53.4914H177.995Z"
                                    fill="white"
                                  ></path>
                                </symbol>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div class="shopify-cleanslate">
                          <div class="Jk692hbroeK5lg6b_t4v usE9L3hgsurjyQqHttzR">
                            <ul
                              class="fQRHLPulpQPIVgLI2F6g"
                              data-shopify-buttoncontainer="true"
                              role="list"
                            >
                              <li
                                class="pGZsIynlCgQUe6S16lYw"
                                data-testid="grid-cell"
                              >
                                <div
                                  role="button"
                                  tabindex="0"
                                  class="kqsiVA9Jf8LJAbxw8Bau h7OYsWHrW5495r9beh2n IcgSIE7pEVZrlnAeRS6j DnvZqPMEvBFbBre5UuP9 size--small"
                                  data-testid="ShopifyPay-button"
                                >
                                  <span class="Xrk_DudB6JJ3t2Kh2_cU">
                                    {" "}
                                    ShopPay
                                  </span>
                                  <span class="ElVMgDjOgshGFMIvg3se">
                                    <svg
                                      preserveAspectRatio="xMidYMid"
                                      class="qZgSr5RiiBCTAMfQYsty"
                                      style={{ height: "20px", width: "85px" }}
                                    ></svg>
                                  </span>
                                </div>
                              </li>
                              <li
                                class="pGZsIynlCgQUe6S16lYw"
                                data-testid="grid-cell"
                              >
                                <div
                                  role="button"
                                  tabindex="0"
                                  class="kqsiVA9Jf8LJAbxw8Bau h7OYsWHrW5495r9beh2n IcgSIE7pEVZrlnAeRS6j vKjZTx5He86dhWbWaFxE size--small"
                                  data-testid="GooglePay-button"
                                >
                                  <span class="Xrk_DudB6JJ3t2Kh2_cU">
                                    {" "}
                                    GooglePay
                                  </span>
                                  <span class="ElVMgDjOgshGFMIvg3se">
                                    <svg
                                      preserveAspectRatio="xMidYMid"
                                      class="qZgSr5RiiBCTAMfQYsty"
                                      style={{
                                        height: "20px",
                                        width: "45.2632px",
                                      }}
                                    ></svg>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="alternative-payment-separator"
                  data-alternative-payment-separator=""
                >
                  <span class="alternative-payment-separator__content">OR</span>
                </div>
              </div>
            </div>
            <div class="main__content">
              <div
                class="step"
                data-step="contact_information"
                data-last-step="false"
              >
                <form
                  data-customer-information-form="true"
                  data-email-or-phone="false"
                  class="edit_checkout animate-floating-labels"
                  novalidate="novalidate"
                  action="/10561394/checkouts/a30795ef6ba1ee3f6dab7e80fbac4d16"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <div class="step__sections">
                    <div class="section section--contact-information">
                      <div class="section__header">
                        <div class="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
                          <h2
                            class="section__title layout-flex__item layout-flex__item--stretch"
                            id="main-header"
                            tabindex="-1"
                          >
                            Contact
                          </h2>
                          <p class="layout-flex__item">
                            <span aria-hidden="true">Have an account?</span>
                            <a href="https://amiri.com/en-pk/account/login?checkout_url=https%3A%2F%2Famiri.com%2F10561394%2Fcheckouts%2Fa30795ef6ba1ee3f6dab7e80fbac4d16%3Fkey%3D1d338855337b7d4f6a3ca99e785f4b3d%26step%3Dcontact_information">
                              <span class="visually-hidden">
                                Have an account?
                              </span>
                              Log in
                            </a>
                          </p>
                        </div>
                      </div>
                      <div
                        class="section__content"
                        data-section="customer-information"
                        data-shopify-pay-validate-on-load="true"
                      >
                        <div class="fieldset">
                          <div
                            data-shopify-pay-email-flow="true"
                            class="field field--required field--show-floating-label"
                          >
                            <div class="field__input-wrapper">
                              <label
                                class="field__label field__label--visible"
                                for="checkout_email"
                              >
                                Email
                              </label>
                              <input
                                placeholder="Email"
                                autocapitalize="off"
                                spellcheck="false"
                                autocomplete="shipping email"
                                data-shopify-pay-handle="true"
                                data-autofocus="true"
                                data-backup="customer_email"
                                aria-describedby="checkout-context-step-one"
                                aria-required="true"
                                class="field__input"
                                size="30"
                                type="email"
                                value="omerfarooqkhan7210@gmail.com"
                                name="checkout[email]"
                                id="checkout_email"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="fieldset-description"
                          data-buyer-accepts-marketing=""
                        >
                          <div class="section__content">
                            <div class="checkbox-wrapper">
                              <div class="checkbox__input">
                                <input
                                  name="checkout[buyer_accepts_marketing]"
                                  type="hidden"
                                  value="0"
                                  autocomplete="off"
                                />
                                <input
                                  class="input-checkbox"
                                  data-email-marketing="true"
                                  data-backup="buyer_accepts_marketing"
                                  type="checkbox"
                                  value="1"
                                  checked="checked"
                                  name="checkout[buyer_accepts_marketing]"
                                  id="checkout_buyer_accepts_marketing"
                                />
                              </div>
                              <label
                                class="checkbox__label"
                                for="checkout_buyer_accepts_marketing"
                              >
                                Email me with news and offers
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="section section--shipping-address"
                      data-shipping-address=""
                    >
                      <div class="section__header">
                        <h2 class="section__title" id="section-delivery-title">
                          Shipping address
                        </h2>
                      </div>
                      <div class="section__content">
                        <div class="fieldset">
                          <div class="address-fields" data-address-fields="">
                            <input
                              class="visually-hidden"
                              autocomplete="shipping given-name"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="first_name"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][first_name]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping family-name"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="last_name"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][last_name]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping organization"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="company"
                              data-honeypot="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][company]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping address-line1"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="address1"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][address1]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping address-line2"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="address2"
                              data-honeypot="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][address2]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping address-level2"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="city"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][city]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping country"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="country"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][country]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping address-level1"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="province"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][province]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping postal-code"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="zip"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][zip]"
                            />
                            <input
                              class="visually-hidden"
                              autocomplete="shipping tel"
                              tabindex="-1"
                              aria-hidden="true"
                              aria-label="no-label"
                              data-autocomplete-field="phone"
                              data-honeypot="true"
                              aria-required="true"
                              size="30"
                              type="text"
                              name="checkout[shipping_address][phone]"
                            />
                            <div
                              class="field field--required field--show-floating-label"
                              data-address-field="country"
                              data-autocomplete-field-container="true"
                            >
                              <div class="field__input-wrapper field__input-wrapper--select">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_country"
                                >
                                  Country/region
                                </label>
                                <select
                                  size="1"
                                  autocomplete="shipping country"
                                  data-backup="country"
                                  class="field__input field__input--select"
                                  aria-required="true"
                                  name="checkout[shipping_address][country]"
                                  id="checkout_shipping_address_country"
                                  placeholder="Country/region"
                                >
                                  <option
                                    data-code="US"
                                    data-pure-numeric-postal-code="false"
                                    value="United States"
                                  >
                                    United States
                                  </option>
                                  <option
                                    data-code="CA"
                                    data-pure-numeric-postal-code="false"
                                    value="Canada"
                                  >
                                    Canada
                                  </option>
                                  <option
                                    data-code="GB"
                                    data-pure-numeric-postal-code="false"
                                    value="United Kingdom"
                                  >
                                    United Kingdom
                                  </option>
                                  <option
                                    data-code="MX"
                                    data-pure-numeric-postal-code="true"
                                    value="Mexico"
                                  >
                                    Mexico
                                  </option>
                                  <option
                                    data-code="IN"
                                    data-pure-numeric-postal-code="true"
                                    value="India"
                                  >
                                    India
                                  </option>
                                  <option disabled="disabled" value="---">
                                    ---
                                  </option>
                                  <option
                                    data-code="AL"
                                    data-pure-numeric-postal-code="true"
                                    value="Albania"
                                  >
                                    Albania
                                  </option>
                                  <option
                                    data-code="DZ"
                                    data-pure-numeric-postal-code="true"
                                    value="Algeria"
                                  >
                                    Algeria
                                  </option>
                                  <option
                                    data-code="AD"
                                    data-pure-numeric-postal-code="false"
                                    value="Andorra"
                                  >
                                    Andorra
                                  </option>
                                  <option
                                    data-code="AO"
                                    data-pure-numeric-postal-code="false"
                                    value="Angola"
                                  >
                                    Angola
                                  </option>
                                  <option
                                    data-code="AI"
                                    data-pure-numeric-postal-code="false"
                                    value="Anguilla"
                                  >
                                    Anguilla
                                  </option>
                                  <option
                                    data-code="AG"
                                    data-pure-numeric-postal-code="false"
                                    value="Antigua And Barbuda"
                                  >
                                    Antigua &amp; Barbuda
                                  </option>
                                  <option
                                    data-code="AR"
                                    data-pure-numeric-postal-code="false"
                                    value="Argentina"
                                  >
                                    Argentina
                                  </option>
                                  <option
                                    data-code="AM"
                                    data-pure-numeric-postal-code="true"
                                    value="Armenia"
                                  >
                                    Armenia
                                  </option>
                                  <option
                                    data-code="AW"
                                    data-pure-numeric-postal-code="false"
                                    value="Aruba"
                                  >
                                    Aruba
                                  </option>
                                  <option
                                    data-code="AU"
                                    data-pure-numeric-postal-code="true"
                                    value="Australia"
                                  >
                                    Australia
                                  </option>
                                  <option
                                    data-code="AT"
                                    data-pure-numeric-postal-code="false"
                                    value="Austria"
                                  >
                                    Austria
                                  </option>
                                  <option
                                    data-code="AZ"
                                    data-pure-numeric-postal-code="false"
                                    value="Azerbaijan"
                                  >
                                    Azerbaijan
                                  </option>
                                  <option
                                    data-code="BS"
                                    data-pure-numeric-postal-code="false"
                                    value="Bahamas"
                                  >
                                    Bahamas
                                  </option>
                                  <option
                                    data-code="BD"
                                    data-pure-numeric-postal-code="true"
                                    value="Bangladesh"
                                  >
                                    Bangladesh
                                  </option>
                                  <option
                                    data-code="BB"
                                    data-pure-numeric-postal-code="false"
                                    value="Barbados"
                                  >
                                    Barbados
                                  </option>
                                  <option
                                    data-code="BE"
                                    data-pure-numeric-postal-code="true"
                                    value="Belgium"
                                  >
                                    Belgium
                                  </option>
                                  <option
                                    data-code="BZ"
                                    data-pure-numeric-postal-code="false"
                                    value="Belize"
                                  >
                                    Belize
                                  </option>
                                  <option
                                    data-code="BJ"
                                    data-pure-numeric-postal-code="false"
                                    value="Benin"
                                  >
                                    Benin
                                  </option>
                                  <option
                                    data-code="BO"
                                    data-pure-numeric-postal-code="false"
                                    value="Bolivia"
                                  >
                                    Bolivia
                                  </option>
                                  <option
                                    data-code="BA"
                                    data-pure-numeric-postal-code="true"
                                    value="Bosnia And Herzegovina"
                                  >
                                    Bosnia &amp; Herzegovina
                                  </option>
                                  <option
                                    data-code="BW"
                                    data-pure-numeric-postal-code="false"
                                    value="Botswana"
                                  >
                                    Botswana
                                  </option>
                                  <option
                                    data-code="BR"
                                    data-pure-numeric-postal-code="false"
                                    value="Brazil"
                                  >
                                    Brazil
                                  </option>
                                  <option
                                    data-code="VG"
                                    data-pure-numeric-postal-code="false"
                                    value="Virgin Islands, British"
                                  >
                                    British Virgin Islands
                                  </option>
                                  <option
                                    data-code="BN"
                                    data-pure-numeric-postal-code="false"
                                    value="Brunei"
                                  >
                                    Brunei
                                  </option>
                                  <option
                                    data-code="BG"
                                    data-pure-numeric-postal-code="true"
                                    value="Bulgaria"
                                  >
                                    Bulgaria
                                  </option>
                                  <option
                                    data-code="BF"
                                    data-pure-numeric-postal-code="false"
                                    value="Burkina Faso"
                                  >
                                    Burkina Faso
                                  </option>
                                  <option
                                    data-code="KH"
                                    data-pure-numeric-postal-code="false"
                                    value="Cambodia"
                                  >
                                    Cambodia
                                  </option>
                                  <option
                                    data-code="CM"
                                    data-pure-numeric-postal-code="false"
                                    value="Republic of Cameroon"
                                  >
                                    Cameroon
                                  </option>
                                  <option
                                    data-code="CA"
                                    data-pure-numeric-postal-code="false"
                                    value="Canada"
                                  >
                                    Canada
                                  </option>
                                  <option
                                    data-code="CV"
                                    data-pure-numeric-postal-code="true"
                                    value="Cape Verde"
                                  >
                                    Cape Verde
                                  </option>
                                  <option
                                    data-code="KY"
                                    data-pure-numeric-postal-code="false"
                                    value="Cayman Islands"
                                  >
                                    Cayman Islands
                                  </option>
                                  <option
                                    data-code="TD"
                                    data-pure-numeric-postal-code="false"
                                    value="Chad"
                                  >
                                    Chad
                                  </option>
                                  <option
                                    data-code="CL"
                                    data-pure-numeric-postal-code="true"
                                    value="Chile"
                                  >
                                    Chile
                                  </option>
                                  <option
                                    data-code="CN"
                                    data-pure-numeric-postal-code="true"
                                    value="China"
                                  >
                                    China
                                  </option>
                                  <option
                                    data-code="CO"
                                    data-pure-numeric-postal-code="true"
                                    value="Colombia"
                                  >
                                    Colombia
                                  </option>
                                  <option
                                    data-code="KM"
                                    data-pure-numeric-postal-code="false"
                                    value="Comoros"
                                  >
                                    Comoros
                                  </option>
                                  <option
                                    data-code="CK"
                                    data-pure-numeric-postal-code="false"
                                    value="Cook Islands"
                                  >
                                    Cook Islands
                                  </option>
                                  <option
                                    data-code="CR"
                                    data-pure-numeric-postal-code="false"
                                    value="Costa Rica"
                                  >
                                    Costa Rica
                                  </option>
                                  <option
                                    data-code="HR"
                                    data-pure-numeric-postal-code="true"
                                    value="Croatia"
                                  >
                                    Croatia
                                  </option>
                                  <option
                                    data-code="CW"
                                    data-pure-numeric-postal-code="false"
                                    value="Curaçao"
                                  >
                                    Curaçao
                                  </option>
                                  <option
                                    data-code="CY"
                                    data-pure-numeric-postal-code="true"
                                    value="Cyprus"
                                  >
                                    Cyprus
                                  </option>
                                  <option
                                    data-code="CZ"
                                    data-pure-numeric-postal-code="false"
                                    value="Czech Republic"
                                  >
                                    Czechia
                                  </option>
                                  <option
                                    data-code="CI"
                                    data-pure-numeric-postal-code="false"
                                    value="Côte d'Ivoire"
                                  >
                                    Côte d’Ivoire
                                  </option>
                                  <option
                                    data-code="DK"
                                    data-pure-numeric-postal-code="true"
                                    value="Denmark"
                                  >
                                    Denmark
                                  </option>
                                  <option
                                    data-code="DJ"
                                    data-pure-numeric-postal-code="false"
                                    value="Djibouti"
                                  >
                                    Djibouti
                                  </option>
                                  <option
                                    data-code="DM"
                                    data-pure-numeric-postal-code="false"
                                    value="Dominica"
                                  >
                                    Dominica
                                  </option>
                                  <option
                                    data-code="DO"
                                    data-pure-numeric-postal-code="true"
                                    value="Dominican Republic"
                                  >
                                    Dominican Republic
                                  </option>
                                  <option
                                    data-code="EC"
                                    data-pure-numeric-postal-code="true"
                                    value="Ecuador"
                                  >
                                    Ecuador
                                  </option>
                                  <option
                                    data-code="EG"
                                    data-pure-numeric-postal-code="true"
                                    value="Egypt"
                                  >
                                    Egypt
                                  </option>
                                  <option
                                    data-code="SV"
                                    data-pure-numeric-postal-code="true"
                                    value="El Salvador"
                                  >
                                    El Salvador
                                  </option>
                                  <option
                                    data-code="GQ"
                                    data-pure-numeric-postal-code="false"
                                    value="Equatorial Guinea"
                                  >
                                    Equatorial Guinea
                                  </option>
                                  <option
                                    data-code="EE"
                                    data-pure-numeric-postal-code="true"
                                    value="Estonia"
                                  >
                                    Estonia
                                  </option>
                                  <option
                                    data-code="SZ"
                                    data-pure-numeric-postal-code="false"
                                    value="Eswatini"
                                  >
                                    Eswatini
                                  </option>
                                  <option
                                    data-code="ET"
                                    data-pure-numeric-postal-code="true"
                                    value="Ethiopia"
                                  >
                                    Ethiopia
                                  </option>
                                  <option
                                    data-code="FK"
                                    data-pure-numeric-postal-code="false"
                                    value="Falkland Islands (Malvinas)"
                                  >
                                    Falkland Islands
                                  </option>
                                  <option
                                    data-code="FO"
                                    data-pure-numeric-postal-code="true"
                                    value="Faroe Islands"
                                  >
                                    Faroe Islands
                                  </option>
                                  <option
                                    data-code="FJ"
                                    data-pure-numeric-postal-code="false"
                                    value="Fiji"
                                  >
                                    Fiji
                                  </option>
                                  <option
                                    data-code="FI"
                                    data-pure-numeric-postal-code="true"
                                    value="Finland"
                                  >
                                    Finland
                                  </option>
                                  <option
                                    data-code="FR"
                                    data-pure-numeric-postal-code="true"
                                    value="France"
                                  >
                                    France
                                  </option>
                                  <option
                                    data-code="GF"
                                    data-pure-numeric-postal-code="true"
                                    value="French Guiana"
                                  >
                                    French Guiana
                                  </option>
                                  <option
                                    data-code="PF"
                                    data-pure-numeric-postal-code="true"
                                    value="French Polynesia"
                                  >
                                    French Polynesia
                                  </option>
                                  <option
                                    data-code="GA"
                                    data-pure-numeric-postal-code="false"
                                    value="Gabon"
                                  >
                                    Gabon
                                  </option>
                                  <option
                                    data-code="GM"
                                    data-pure-numeric-postal-code="false"
                                    value="Gambia"
                                  >
                                    Gambia
                                  </option>
                                  <option
                                    data-code="GE"
                                    data-pure-numeric-postal-code="true"
                                    value="Georgia"
                                  >
                                    Georgia
                                  </option>
                                  <option
                                    data-code="DE"
                                    data-pure-numeric-postal-code="true"
                                    value="Germany"
                                  >
                                    Germany
                                  </option>
                                  <option
                                    data-code="GH"
                                    data-pure-numeric-postal-code="false"
                                    value="Ghana"
                                  >
                                    Ghana
                                  </option>
                                  <option
                                    data-code="GI"
                                    data-pure-numeric-postal-code="false"
                                    value="Gibraltar"
                                  >
                                    Gibraltar
                                  </option>
                                  <option
                                    data-code="GR"
                                    data-pure-numeric-postal-code="false"
                                    value="Greece"
                                  >
                                    Greece
                                  </option>
                                  <option
                                    data-code="GL"
                                    data-pure-numeric-postal-code="true"
                                    value="Greenland"
                                  >
                                    Greenland
                                  </option>
                                  <option
                                    data-code="GD"
                                    data-pure-numeric-postal-code="false"
                                    value="Grenada"
                                  >
                                    Grenada
                                  </option>
                                  <option
                                    data-code="GP"
                                    data-pure-numeric-postal-code="true"
                                    value="Guadeloupe"
                                  >
                                    Guadeloupe
                                  </option>
                                  <option
                                    data-code="GT"
                                    data-pure-numeric-postal-code="true"
                                    value="Guatemala"
                                  >
                                    Guatemala
                                  </option>
                                  <option
                                    data-code="GG"
                                    data-pure-numeric-postal-code="false"
                                    value="Guernsey"
                                  >
                                    Guernsey
                                  </option>
                                  <option
                                    data-code="GN"
                                    data-pure-numeric-postal-code="true"
                                    value="Guinea"
                                  >
                                    Guinea
                                  </option>
                                  <option
                                    data-code="GW"
                                    data-pure-numeric-postal-code="true"
                                    value="Guinea Bissau"
                                  >
                                    Guinea-Bissau
                                  </option>
                                  <option
                                    data-code="GY"
                                    data-pure-numeric-postal-code="false"
                                    value="Guyana"
                                  >
                                    Guyana
                                  </option>
                                  <option
                                    data-code="HT"
                                    data-pure-numeric-postal-code="true"
                                    value="Haiti"
                                  >
                                    Haiti
                                  </option>
                                  <option
                                    data-code="HN"
                                    data-pure-numeric-postal-code="false"
                                    value="Honduras"
                                  >
                                    Honduras
                                  </option>
                                  <option
                                    data-code="HK"
                                    data-pure-numeric-postal-code="false"
                                    value="Hong Kong"
                                  >
                                    Hong Kong SAR
                                  </option>
                                  <option
                                    data-code="HU"
                                    data-pure-numeric-postal-code="true"
                                    value="Hungary"
                                  >
                                    Hungary
                                  </option>
                                  <option
                                    data-code="IS"
                                    data-pure-numeric-postal-code="true"
                                    value="Iceland"
                                  >
                                    Iceland
                                  </option>
                                  <option
                                    data-code="IN"
                                    data-pure-numeric-postal-code="true"
                                    value="India"
                                  >
                                    India
                                  </option>
                                  <option
                                    data-code="ID"
                                    data-pure-numeric-postal-code="true"
                                    value="Indonesia"
                                  >
                                    Indonesia
                                  </option>
                                  <option
                                    data-code="IE"
                                    data-pure-numeric-postal-code="false"
                                    value="Ireland"
                                  >
                                    Ireland
                                  </option>
                                  <option
                                    data-code="IM"
                                    data-pure-numeric-postal-code="false"
                                    value="Isle Of Man"
                                  >
                                    Isle of Man
                                  </option>
                                  <option
                                    data-code="IL"
                                    data-pure-numeric-postal-code="true"
                                    value="Israel"
                                  >
                                    Israel
                                  </option>
                                  <option
                                    data-code="IT"
                                    data-pure-numeric-postal-code="false"
                                    value="Italy"
                                  >
                                    Italy
                                  </option>
                                  <option
                                    data-code="JM"
                                    data-pure-numeric-postal-code="true"
                                    value="Jamaica"
                                  >
                                    Jamaica
                                  </option>
                                  <option
                                    data-code="JP"
                                    data-pure-numeric-postal-code="false"
                                    value="Japan"
                                  >
                                    Japan
                                  </option>
                                  <option
                                    data-code="KE"
                                    data-pure-numeric-postal-code="true"
                                    value="Kenya"
                                  >
                                    Kenya
                                  </option>
                                  <option
                                    data-code="KW"
                                    data-pure-numeric-postal-code="true"
                                    value="Kuwait"
                                  >
                                    Kuwait
                                  </option>
                                  <option
                                    data-code="KG"
                                    data-pure-numeric-postal-code="true"
                                    value="Kyrgyzstan"
                                  >
                                    Kyrgyzstan
                                  </option>
                                  <option
                                    data-code="LA"
                                    data-pure-numeric-postal-code="true"
                                    value="Lao People's Democratic Republic"
                                  >
                                    Laos
                                  </option>
                                  <option
                                    data-code="LV"
                                    data-pure-numeric-postal-code="false"
                                    value="Latvia"
                                  >
                                    Latvia
                                  </option>
                                  <option
                                    data-code="LB"
                                    data-pure-numeric-postal-code="true"
                                    value="Lebanon"
                                  >
                                    Lebanon
                                  </option>
                                  <option
                                    data-code="LS"
                                    data-pure-numeric-postal-code="true"
                                    value="Lesotho"
                                  >
                                    Lesotho
                                  </option>
                                  <option
                                    data-code="LI"
                                    data-pure-numeric-postal-code="true"
                                    value="Liechtenstein"
                                  >
                                    Liechtenstein
                                  </option>
                                  <option
                                    data-code="LT"
                                    data-pure-numeric-postal-code="true"
                                    value="Lithuania"
                                  >
                                    Lithuania
                                  </option>
                                  <option
                                    data-code="LU"
                                    data-pure-numeric-postal-code="true"
                                    value="Luxembourg"
                                  >
                                    Luxembourg
                                  </option>
                                  <option
                                    data-code="MO"
                                    data-pure-numeric-postal-code="false"
                                    value="Macao"
                                  >
                                    Macao SAR
                                  </option>
                                  <option
                                    data-code="MW"
                                    data-pure-numeric-postal-code="true"
                                    value="Malawi"
                                  >
                                    Malawi
                                  </option>
                                  <option
                                    data-code="MY"
                                    data-pure-numeric-postal-code="true"
                                    value="Malaysia"
                                  >
                                    Malaysia
                                  </option>
                                  <option
                                    data-code="MV"
                                    data-pure-numeric-postal-code="true"
                                    value="Maldives"
                                  >
                                    Maldives
                                  </option>
                                  <option
                                    data-code="MT"
                                    data-pure-numeric-postal-code="false"
                                    value="Malta"
                                  >
                                    Malta
                                  </option>
                                  <option
                                    data-code="MQ"
                                    data-pure-numeric-postal-code="true"
                                    value="Martinique"
                                  >
                                    Martinique
                                  </option>
                                  <option
                                    data-code="MU"
                                    data-pure-numeric-postal-code="false"
                                    value="Mauritius"
                                  >
                                    Mauritius
                                  </option>
                                  <option
                                    data-code="MX"
                                    data-pure-numeric-postal-code="true"
                                    value="Mexico"
                                  >
                                    Mexico
                                  </option>
                                  <option
                                    data-code="MD"
                                    data-pure-numeric-postal-code="false"
                                    value="Moldova, Republic of"
                                  >
                                    Moldova
                                  </option>
                                  <option
                                    data-code="MC"
                                    data-pure-numeric-postal-code="true"
                                    value="Monaco"
                                  >
                                    Monaco
                                  </option>
                                  <option
                                    data-code="MN"
                                    data-pure-numeric-postal-code="true"
                                    value="Mongolia"
                                  >
                                    Mongolia
                                  </option>
                                  <option
                                    data-code="ME"
                                    data-pure-numeric-postal-code="true"
                                    value="Montenegro"
                                  >
                                    Montenegro
                                  </option>
                                  <option
                                    data-code="MS"
                                    data-pure-numeric-postal-code="false"
                                    value="Montserrat"
                                  >
                                    Montserrat
                                  </option>
                                  <option
                                    data-code="MA"
                                    data-pure-numeric-postal-code="true"
                                    value="Morocco"
                                  >
                                    Morocco
                                  </option>
                                  <option
                                    data-code="MZ"
                                    data-pure-numeric-postal-code="true"
                                    value="Mozambique"
                                  >
                                    Mozambique
                                  </option>
                                  <option
                                    data-code="NA"
                                    data-pure-numeric-postal-code="true"
                                    value="Namibia"
                                  >
                                    Namibia
                                  </option>
                                  <option
                                    data-code="NR"
                                    data-pure-numeric-postal-code="false"
                                    value="Nauru"
                                  >
                                    Nauru
                                  </option>
                                  <option
                                    data-code="NP"
                                    data-pure-numeric-postal-code="true"
                                    value="Nepal"
                                  >
                                    Nepal
                                  </option>
                                  <option
                                    data-code="NL"
                                    data-pure-numeric-postal-code="false"
                                    value="Netherlands"
                                  >
                                    Netherlands
                                  </option>
                                  <option
                                    data-code="NC"
                                    data-pure-numeric-postal-code="true"
                                    value="New Caledonia"
                                  >
                                    New Caledonia
                                  </option>
                                  <option
                                    data-code="NZ"
                                    data-pure-numeric-postal-code="true"
                                    value="New Zealand"
                                  >
                                    New Zealand
                                  </option>
                                  <option
                                    data-code="NI"
                                    data-pure-numeric-postal-code="true"
                                    value="Nicaragua"
                                  >
                                    Nicaragua
                                  </option>
                                  <option
                                    data-code="NG"
                                    data-pure-numeric-postal-code="true"
                                    value="Nigeria"
                                  >
                                    Nigeria
                                  </option>
                                  <option
                                    data-code="NU"
                                    data-pure-numeric-postal-code="false"
                                    value="Niue"
                                  >
                                    Niue
                                  </option>
                                  <option
                                    data-code="MK"
                                    data-pure-numeric-postal-code="true"
                                    value="North Macedonia"
                                  >
                                    North Macedonia
                                  </option>
                                  <option
                                    data-code="NO"
                                    data-pure-numeric-postal-code="true"
                                    value="Norway"
                                  >
                                    Norway
                                  </option>
                                  <option
                                    data-code="PK"
                                    data-pure-numeric-postal-code="true"
                                    selected="selected"
                                    value="Pakistan"
                                  >
                                    Pakistan
                                  </option>
                                  <option
                                    data-code="PA"
                                    data-pure-numeric-postal-code="true"
                                    value="Panama"
                                  >
                                    Panama
                                  </option>
                                  <option
                                    data-code="PG"
                                    data-pure-numeric-postal-code="true"
                                    value="Papua New Guinea"
                                  >
                                    Papua New Guinea
                                  </option>
                                  <option
                                    data-code="PY"
                                    data-pure-numeric-postal-code="true"
                                    value="Paraguay"
                                  >
                                    Paraguay
                                  </option>
                                  <option
                                    data-code="PE"
                                    data-pure-numeric-postal-code="false"
                                    value="Peru"
                                  >
                                    Peru
                                  </option>
                                  <option
                                    data-code="PH"
                                    data-pure-numeric-postal-code="true"
                                    value="Philippines"
                                  >
                                    Philippines
                                  </option>
                                  <option
                                    data-code="PL"
                                    data-pure-numeric-postal-code="false"
                                    value="Poland"
                                  >
                                    Poland
                                  </option>
                                  <option
                                    data-code="PT"
                                    data-pure-numeric-postal-code="false"
                                    value="Portugal"
                                  >
                                    Portugal
                                  </option>
                                  <option
                                    data-code="QA"
                                    data-pure-numeric-postal-code="false"
                                    value="Qatar"
                                  >
                                    Qatar
                                  </option>
                                  <option
                                    data-code="RE"
                                    data-pure-numeric-postal-code="true"
                                    value="Reunion"
                                  >
                                    Réunion
                                  </option>
                                  <option
                                    data-code="RO"
                                    data-pure-numeric-postal-code="true"
                                    value="Romania"
                                  >
                                    Romania
                                  </option>
                                  <option
                                    data-code="RW"
                                    data-pure-numeric-postal-code="false"
                                    value="Rwanda"
                                  >
                                    Rwanda
                                  </option>
                                  <option
                                    data-code="SM"
                                    data-pure-numeric-postal-code="true"
                                    value="San Marino"
                                  >
                                    San Marino
                                  </option>
                                  <option
                                    data-code="ST"
                                    data-pure-numeric-postal-code="false"
                                    value="Sao Tome And Principe"
                                  >
                                    São Tomé &amp; Príncipe
                                  </option>
                                  <option
                                    data-code="SA"
                                    data-pure-numeric-postal-code="false"
                                    value="Saudi Arabia"
                                  >
                                    Saudi Arabia
                                  </option>
                                  <option
                                    data-code="SN"
                                    data-pure-numeric-postal-code="true"
                                    value="Senegal"
                                  >
                                    Senegal
                                  </option>
                                  <option
                                    data-code="RS"
                                    data-pure-numeric-postal-code="true"
                                    value="Serbia"
                                  >
                                    Serbia
                                  </option>
                                  <option
                                    data-code="SC"
                                    data-pure-numeric-postal-code="false"
                                    value="Seychelles"
                                  >
                                    Seychelles
                                  </option>
                                  <option
                                    data-code="SL"
                                    data-pure-numeric-postal-code="false"
                                    value="Sierra Leone"
                                  >
                                    Sierra Leone
                                  </option>
                                  <option
                                    data-code="SG"
                                    data-pure-numeric-postal-code="true"
                                    value="Singapore"
                                  >
                                    Singapore
                                  </option>
                                  <option
                                    data-code="SK"
                                    data-pure-numeric-postal-code="false"
                                    value="Slovakia"
                                  >
                                    Slovakia
                                  </option>
                                  <option
                                    data-code="SI"
                                    data-pure-numeric-postal-code="true"
                                    value="Slovenia"
                                  >
                                    Slovenia
                                  </option>
                                  <option
                                    data-code="SB"
                                    data-pure-numeric-postal-code="false"
                                    value="Solomon Islands"
                                  >
                                    Solomon Islands
                                  </option>
                                  <option
                                    data-code="ZA"
                                    data-pure-numeric-postal-code="true"
                                    value="South Africa"
                                  >
                                    South Africa
                                  </option>
                                  <option
                                    data-code="KR"
                                    data-pure-numeric-postal-code="false"
                                    value="South Korea"
                                  >
                                    South Korea
                                  </option>
                                  <option
                                    data-code="ES"
                                    data-pure-numeric-postal-code="true"
                                    value="Spain"
                                  >
                                    Spain
                                  </option>
                                  <option
                                    data-code="LK"
                                    data-pure-numeric-postal-code="true"
                                    value="Sri Lanka"
                                  >
                                    Sri Lanka
                                  </option>
                                  <option
                                    data-code="BL"
                                    data-pure-numeric-postal-code="true"
                                    value="Saint Barthélemy"
                                  >
                                    St. Barthélemy
                                  </option>
                                  <option
                                    data-code="KN"
                                    data-pure-numeric-postal-code="false"
                                    value="Saint Kitts And Nevis"
                                  >
                                    St. Kitts &amp; Nevis
                                  </option>
                                  <option
                                    data-code="LC"
                                    data-pure-numeric-postal-code="false"
                                    value="Saint Lucia"
                                  >
                                    St. Lucia
                                  </option>
                                  <option
                                    data-code="MF"
                                    data-pure-numeric-postal-code="true"
                                    value="Saint Martin"
                                  >
                                    St. Martin
                                  </option>
                                  <option
                                    data-code="VC"
                                    data-pure-numeric-postal-code="false"
                                    value="St. Vincent"
                                  >
                                    St. Vincent &amp; Grenadines
                                  </option>
                                  <option
                                    data-code="SR"
                                    data-pure-numeric-postal-code="false"
                                    value="Suriname"
                                  >
                                    Suriname
                                  </option>
                                  <option
                                    data-code="SE"
                                    data-pure-numeric-postal-code="false"
                                    value="Sweden"
                                  >
                                    Sweden
                                  </option>
                                  <option
                                    data-code="CH"
                                    data-pure-numeric-postal-code="false"
                                    value="Switzerland"
                                  >
                                    Switzerland
                                  </option>
                                  <option
                                    data-code="TW"
                                    data-pure-numeric-postal-code="true"
                                    value="Taiwan"
                                  >
                                    Taiwan
                                  </option>
                                  <option
                                    data-code="TZ"
                                    data-pure-numeric-postal-code="true"
                                    value="Tanzania, United Republic Of"
                                  >
                                    Tanzania
                                  </option>
                                  <option
                                    data-code="TH"
                                    data-pure-numeric-postal-code="false"
                                    value="Thailand"
                                  >
                                    Thailand
                                  </option>
                                  <option
                                    data-code="TL"
                                    data-pure-numeric-postal-code="false"
                                    value="Timor Leste"
                                  >
                                    Timor-Leste
                                  </option>
                                  <option
                                    data-code="TG"
                                    data-pure-numeric-postal-code="false"
                                    value="Togo"
                                  >
                                    Togo
                                  </option>
                                  <option
                                    data-code="TO"
                                    data-pure-numeric-postal-code="false"
                                    value="Tonga"
                                  >
                                    Tonga
                                  </option>
                                  <option
                                    data-code="TT"
                                    data-pure-numeric-postal-code="true"
                                    value="Trinidad and Tobago"
                                  >
                                    Trinidad &amp; Tobago
                                  </option>
                                  <option
                                    data-code="TR"
                                    data-pure-numeric-postal-code="true"
                                    value="Turkey"
                                  >
                                    Turkey
                                  </option>
                                  <option
                                    data-code="TM"
                                    data-pure-numeric-postal-code="true"
                                    value="Turkmenistan"
                                  >
                                    Turkmenistan
                                  </option>
                                  <option
                                    data-code="TC"
                                    data-pure-numeric-postal-code="false"
                                    value="Turks and Caicos Islands"
                                  >
                                    Turks &amp; Caicos Islands
                                  </option>
                                  <option
                                    data-code="TV"
                                    data-pure-numeric-postal-code="false"
                                    value="Tuvalu"
                                  >
                                    Tuvalu
                                  </option>
                                  <option
                                    data-code="UG"
                                    data-pure-numeric-postal-code="false"
                                    value="Uganda"
                                  >
                                    Uganda
                                  </option>
                                  <option
                                    data-code="AE"
                                    data-pure-numeric-postal-code="false"
                                    value="United Arab Emirates"
                                  >
                                    United Arab Emirates
                                  </option>
                                  <option
                                    data-code="GB"
                                    data-pure-numeric-postal-code="false"
                                    value="United Kingdom"
                                  >
                                    United Kingdom
                                  </option>
                                  <option
                                    data-code="US"
                                    data-pure-numeric-postal-code="false"
                                    value="United States"
                                  >
                                    United States
                                  </option>
                                  <option
                                    data-code="UY"
                                    data-pure-numeric-postal-code="true"
                                    value="Uruguay"
                                  >
                                    Uruguay
                                  </option>
                                  <option
                                    data-code="UZ"
                                    data-pure-numeric-postal-code="true"
                                    value="Uzbekistan"
                                  >
                                    Uzbekistan
                                  </option>
                                  <option
                                    data-code="VU"
                                    data-pure-numeric-postal-code="false"
                                    value="Vanuatu"
                                  >
                                    Vanuatu
                                  </option>
                                  <option
                                    data-code="VA"
                                    data-pure-numeric-postal-code="true"
                                    value="Holy See (Vatican City State)"
                                  >
                                    Vatican City
                                  </option>
                                  <option
                                    data-code="VE"
                                    data-pure-numeric-postal-code="false"
                                    value="Venezuela"
                                  >
                                    Venezuela
                                  </option>
                                  <option
                                    data-code="VN"
                                    data-pure-numeric-postal-code="true"
                                    value="Vietnam"
                                  >
                                    Vietnam
                                  </option>
                                  <option
                                    data-code="WF"
                                    data-pure-numeric-postal-code="true"
                                    value="Wallis And Futuna"
                                  >
                                    Wallis &amp; Futuna
                                  </option>
                                  <option
                                    data-code="ZM"
                                    data-pure-numeric-postal-code="true"
                                    value="Zambia"
                                  >
                                    Zambia
                                  </option>
                                </select>
                                <div class="field__caret">
                                  <svg
                                    class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                    role="presentation"
                                    aria-hidden="true"
                                    focusable="false"
                                  ></svg>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field--third field field--required hidden"
                              data-address-field="province"
                              data-autocomplete-field-container="true"
                            >
                              <div class="field__input-wrapper field__input-wrapper--select">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_province"
                                >
                                  Region
                                </label>
                                <input
                                  placeholder="Region"
                                  autocomplete="shipping address-level1"
                                  autocorrect="off"
                                  data-backup="province"
                                  class="field__input"
                                  aria-required="true"
                                  type="text"
                                  name="checkout[shipping_address][province]"
                                  id="checkout_shipping_address_province"
                                  disabled="disabled"
                                  hidden="hidden"
                                />
                                <div class="field__caret shown-if-js">
                                  <svg
                                    class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                    role="presentation"
                                    aria-hidden="true"
                                    focusable="false"
                                  ></svg>
                                </div>
                              </div>
                            </div>
                            <div
                              class="field field--required field--half"
                              data-address-field="first_name"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_first_name"
                                >
                                  First name
                                </label>
                                <input
                                  placeholder="First name"
                                  autocomplete="shipping given-name"
                                  autocorrect="off"
                                  data-backup="first_name"
                                  class="field__input"
                                  aria-required="true"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][first_name]"
                                  id="checkout_shipping_address_first_name"
                                />
                              </div>
                            </div>
                            <div
                              class="field field--required field--half"
                              data-address-field="last_name"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_last_name"
                                >
                                  Last name
                                </label>
                                <input
                                  placeholder="Last name"
                                  autocomplete="shipping family-name"
                                  autocorrect="off"
                                  data-backup="last_name"
                                  class="field__input"
                                  aria-required="true"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][last_name]"
                                  id="checkout_shipping_address_last_name"
                                />
                              </div>
                            </div>
                            <div
                              data-address-field="company"
                              data-autocomplete-field-container="true"
                              class="field field--optional"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_company"
                                >
                                  Company (optional)
                                </label>
                                <input
                                  placeholder="Company (optional)"
                                  autocomplete="shipping organization"
                                  autocorrect="off"
                                  data-backup="company"
                                  class="field__input"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][company]"
                                  id="checkout_shipping_address_company"
                                />
                              </div>
                            </div>
                            <div
                              data-address-field="address1"
                              data-autocomplete-field-container="true"
                              class="field field--required"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_address1"
                                >
                                  Address
                                </label>
                                <input
                                  placeholder="Address"
                                  autocomplete="shipping address-line1"
                                  autocorrect="off"
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-required="true"
                                  data-backup="address1"
                                  data-autocomplete-trigger="true"
                                  data-autocomplete-title="Suggestions"
                                  data-autocomplete-single-item="1 item available"
                                  data-autocomplete-multi-item="{{number}} items available"
                                  data-autocomplete-item-selection="{{number}} of {{total}}"
                                  data-autocomplete-close="Close suggestions"
                                  class="field__input"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][address1]"
                                  id="checkout_shipping_address_address1"
                                  aria-haspopup="false"
                                />
                                <p
                                  class="field__additional-info visually-hidden"
                                  data-address-civic-number-warning=""
                                >
                                  <svg
                                    class="icon-svg icon-svg--size-16 field__message__icon"
                                    aria-hidden="true"
                                    focusable="false"
                                  ></svg>
                                  Add a house number if you have one
                                </p>
                              </div>
                            </div>
                            <div
                              data-address-field="address2"
                              data-autocomplete-field-container="true"
                              class="field field--optional"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_address2"
                                >
                                  Apartment, suite, etc. (optional)
                                </label>
                                <input
                                  placeholder="Apartment, suite, etc. (optional)"
                                  autocomplete="shipping address-line2"
                                  autocorrect="off"
                                  data-backup="address2"
                                  class="field__input"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][address2]"
                                  id="checkout_shipping_address_address2"
                                />
                              </div>
                            </div>
                            <div
                              data-address-field="city"
                              data-autocomplete-field-container="true"
                              class="field field--required field--half"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_city"
                                >
                                  City
                                </label>
                                <input
                                  placeholder="City"
                                  autocomplete="shipping address-level2"
                                  autocorrect="off"
                                  data-backup="city"
                                  class="field__input"
                                  aria-required="true"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][city]"
                                  id="checkout_shipping_address_city"
                                />
                              </div>
                            </div>
                            <div
                              class="field field--required field--half"
                              data-address-field="zip"
                              data-autocomplete-field-container="true"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_zip"
                                >
                                  Postal code
                                </label>
                                <input
                                  placeholder="Postal code"
                                  autocomplete="shipping postal-code"
                                  autocorrect="off"
                                  data-backup="zip"
                                  data-autocomplete-trigger="true"
                                  data-autocomplete-title="Suggestions"
                                  data-autocomplete-single-item="1 item available"
                                  data-autocomplete-multi-item="{{number}} items available"
                                  data-autocomplete-item-selection="{{number}} of {{total}}"
                                  data-autocomplete-close="Close suggestions"
                                  class="field__input field__input--zip"
                                  aria-required="true"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][zip]"
                                  id="checkout_shipping_address_zip"
                                />
                              </div>
                            </div>
                            <div
                              data-address-field="phone"
                              class="field field--required"
                            >
                              <div class="field__input-wrapper field__input-wrapper--icon-right">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_phone"
                                >
                                  Phone
                                </label>
                                <input
                                  placeholder="Phone"
                                  autocomplete="shipping tel"
                                  autocorrect="off"
                                  data-backup="phone"
                                  data-phone-formatter="true"
                                  data-phone-formatter-country-select="[name='checkout[shipping_address][country]']"
                                  data-placeholder-label-required="Phone"
                                  data-placeholder-label-optional="Phone (optional)"
                                  class="field__input field__input--numeric"
                                  aria-required="true"
                                  size="30"
                                  type="tel"
                                  name="checkout[shipping_address][phone]"
                                  id="checkout_shipping_address_phone"
                                />
                                <div class="field__icon">
                                  <div
                                    data-tooltip="true"
                                    id="phone_tooltip"
                                    class="tooltip-container"
                                  >
                                    <button
                                      type="button"
                                      class="tooltip-control"
                                      data-tooltip-control="true"
                                      aria-label="More information"
                                      aria-describedby="tooltip-for-phone"
                                      aria-controls="tooltip-for-phone"
                                      aria-pressed="false"
                                      placeholder="Phone"
                                    >
                                      <svg
                                        class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center"
                                        role="presentation"
                                        aria-hidden="true"
                                        focusable="false"
                                      ></svg>
                                    </button>
                                    <span
                                      class="tooltip"
                                      role="tooltip"
                                      id="tooltip-for-phone"
                                    >
                                      In case we need to contact you about your
                                      order
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="step__footer" data-step-footer="">
                    <button
                      name="button"
                      type="submit"
                      id="continue_button"
                      class="step__footer__continue-btn btn"
                      aria-busy="false"
                    >
                      <span
                        class="btn__content"
                        data-continue-button-content="true"
                      >
                        Continue to shipping
                      </span>
                      <svg
                        class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                        aria-hidden="true"
                        focusable="false"
                      ></svg>
                    </button>
                    <a
                      class="step__footer__previous-link"
                      href="https://amiri.com/en-pk/cart"
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                        role="img"
                        viewBox="0 0 10 10"
                      >
                        <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
                      </svg>
                      <span class="step__footer__previous-link-content">
                        Return to cart
                      </span>
                    </a>
                  </div>
                </form>
              </div>
              <div class="hidden">
                <span
                  class="visually-hidden"
                  id="forwarding-external-new-window-message"
                >
                  Opens external website in a new window.
                </span>
                <span
                  class="visually-hidden"
                  id="forwarding-new-window-message"
                >
                  Opens in a new window.
                </span>
                <span class="visually-hidden" id="forwarding-external-message">
                  Opens external website.
                </span>
                <span class="visually-hidden" id="checkout-context-step-one">
                  Order details - AMIRI - Checkout
                </span>
              </div>
            </div>
            <div class="main__footer">
              <ul class="policy-list" role="list">
                <li class="policy-list__item ">
                  <a
                    aria-haspopup="dialog"
                    data-modal="policy-refund-policy"
                    data-title-text="Refund policy"
                    data-close-text="Close"
                    data-iframe="true"
                    href="/10561394/policies/refund-policy.html?locale=en-PK"
                  >
                    Refund policy
                  </a>
                </li>
                <li class="policy-list__item ">
                  <a
                    aria-haspopup="dialog"
                    data-modal="policy-shipping-policy"
                    data-title-text="Shipping policy"
                    data-close-text="Close"
                    data-iframe="true"
                    href="/10561394/policies/shipping-policy.html?locale=en-PK"
                  >
                    Shipping policy
                  </a>
                </li>
                <li class="policy-list__item ">
                  <a
                    aria-haspopup="dialog"
                    data-modal="policy-privacy-policy"
                    data-title-text="Privacy policy"
                    data-close-text="Close"
                    data-iframe="true"
                    href="/10561394/policies/privacy-policy.html?locale=en-PK"
                  >
                    Privacy policy
                  </a>
                </li>
                <li class="policy-list__item ">
                  <a
                    aria-haspopup="dialog"
                    data-modal="policy-terms-of-service"
                    data-title-text="Terms of service"
                    data-close-text="Close"
                    data-iframe="true"
                    href="/10561394/policies/terms-of-service.html?locale=en-PK"
                  >
                    Terms of service
                  </a>
                </li>
                <li class="policy-list__item ">
                  <a
                    aria-haspopup="dialog"
                    data-modal="policy-contact-information"
                    data-title-text="Contact information"
                    data-close-text="Close"
                    data-iframe="true"
                    href="/10561394/policies/contact-information.html?locale=en-PK"
                  >
                    Contact information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sidebar" role="complementary">
            <div class="sidebar__header">
              <div class="logo-container">
                <a href="/en-pk">
                  <svg viewBox="0 0 1067.6 176.1">
                    <rect x="609.3" width="33" height="176.1"></rect>
                    <rect x="1034.6" width="33" height="176.1"></rect>
                    <polygon points="389 120.24 323.02 0 287.7 0 287.7 176.1 320.7 176.1 320.7 64.37 382 176.1 395.99 176.1 457.29 64.38 457.29 176.1 490.29 176.1 490.29 0 454.96 0 389 120.24"></polygon>
                    <path
                      d="M494.62,452,409.7,628.05h36.63l21.11-43.77h84.15l21.11,43.77h36.63L524.41,452ZM480.74,556.7,509.52,497,538.3,556.7Z"
                      transform="translate(-409.7 -451.95)"
                    ></path>
                    <path
                      d="M1288.33,556.8a82.54,82.54,0,0,0,14.55-3.36c21.57-7.59,33.16-26.68,33.08-50.33,0-14.38-5.31-26.53-14.53-35.13-11.81-11-25.68-16-53.13-16L1171,452v176.1h33.08l.13-69.23,47.38,0,47.88,69.19h37.6ZM1204,528.25V482.16h68.73c19.14,0,30.12,7.84,30.12,23,0,14.31-11.26,23.2-29.41,23.2Z"
                      transform="translate(-409.7 -451.95)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="sidebar__content">
              <div
                id="order-summary"
                class="order-summary order-summary--is-collapsed"
                data-order-summary=""
              >
                <h2 class="visually-hidden-if-js">Order summary</h2>
                <div class="order-summary__sections">
                  <div class="order-summary__section order-summary__section--product-list">
                    <div class="order-summary__section__content">
                      <table class="product-table">
                        <caption class="visually-hidden">Shopping cart</caption>
                        <thead class="product-table__header">
                          <tr>
                            <th scope="col">
                              <span class="visually-hidden">Product image</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Description</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Quantity</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Price</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody data-order-summary-section="line-items">
                          <tr
                            class="product"
                            data-product-id="6974807179329"
                            data-variant-id="40473039405121"
                            data-product-type="Jersey"
                            data-customer-ready-visible=""
                          >
                            <td class="product__image">
                              <div class="product-thumbnail ">
                                <div class="product-thumbnail__wrapper">
                                  <img
                                    alt="AMIRI PREMIER TEE - BLACK - COTTON / BLACK / X-Small"
                                    class="product-thumbnail__image"
                                    src="//cdn.shopify.com/s/files/1/1056/1394/products/90_AW23_Runway_JERSEY_TOP_AMIRI_20PREEMO_20TEE_AW23MJG011-001_BLACK_677b6ea1-512d-472a-a221-77b0f400448b_small.jpg?v=1692751245"
                                  />
                                </div>
                                <span
                                  class="product-thumbnail__quantity"
                                  aria-hidden="true"
                                >
                                  1
                                </span>
                              </div>
                            </td>
                            <th class="product__description" scope="row">
                              <span class="product__description__name order-summary__emphasis">
                                AMIRI PREMIER TEE - BLACK
                              </span>
                              <span class="product__description__variant order-summary__small-text">
                                COTTON / BLACK / X-Small
                              </span>
                            </th>
                            <td class="product__quantity">
                              <span class="visually-hidden">1</span>
                            </td>
                            <td class="product__price">
                              <span class="order-summary__emphasis skeleton-while-loading">
                                Rs156,100.00
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        class="order-summary__scroll-indicator"
                        aria-hidden="true"
                        tabindex="-1"
                        id="order-summary__scroll-indicator"
                      >
                        Scroll for more items
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="icon-svg icon-svg--size-12"
                        ></svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="order-summary__section order-summary__section--discount"
                    data-reduction-form="update"
                  >
                    <h3 class="visually-hidden">Gift card or discount code</h3>

                    <form
                      class="edit_checkout animate-floating-labels"
                      action="/10561394/checkouts/a30795ef6ba1ee3f6dab7e80fbac4d16"
                      accept-charset="UTF-8"
                      method="post"
                    >
                      <div class="fieldset">
                        <div class="field">
                          <div class="field__input-btn-wrapper">
                            <div class="field__input-wrapper">
                              <label
                                class="field__label field__label--visible"
                                for="checkout_reduction_code"
                              >
                                Gift card or discount code
                              </label>
                              <input
                                placeholder="Gift card or discount code"
                                class="field__input"
                                id="checkout_reduction_code"
                                data-discount-field="true"
                                autocomplete="off"
                                aria-required="true"
                                size="30"
                                type="text"
                                name="checkout[reduction_code]"
                              />
                            </div>
                            <button
                              name="checkout[submit]"
                              type="submit"
                              id="checkout_submit"
                              class="field__input-btn btn btn--disabled"
                              aria-busy="false"
                              disabled="disabled"
                            >
                              <span
                                class="btn__content visually-hidden-on-mobile"
                                aria-hidden="true"
                              >
                                Apply
                              </span>
                              <span class="visually-hidden">
                                Apply Discount Code
                              </span>
                              <svg
                                class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile"
                                aria-hidden="true"
                                focusable="false"
                              ></svg>
                              <svg
                                class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                aria-hidden="true"
                                focusable="false"
                              ></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    class="order-summary__section order-summary__section--total-lines"
                    data-order-summary-section="payment-lines"
                  >
                    <table class="total-line-table">
                      <caption class="visually-hidden">Cost summary</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span class="visually-hidden">Description</span>
                          </th>
                          <th scope="col">
                            <span class="visually-hidden">Price</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="total-line-table__tbody">
                        <tr class="total-line total-line--subtotal">
                          <th class="total-line__name" scope="row">
                            Subtotal
                          </th>
                          <td class="total-line__price">
                            <span
                              class="order-summary__emphasis skeleton-while-loading"
                              data-checkout-subtotal-price-target="15610000"
                            >
                              Rs156,100.00
                            </span>
                          </td>
                        </tr>
                        <tr class="total-line total-line--shipping">
                          <th class="total-line__name" scope="row">
                            <span>Shipping</span>
                            <a
                              aria-haspopup="dialog"
                              data-modal="policy-shipping-policy"
                              data-title-text="Shipping policy"
                              data-close-text="Close"
                              data-iframe="true"
                              href="/10561394/policies/shipping-policy.html?locale=en-PK"
                            >
                              <span class="visually-hidden">
                                Shipping costs
                              </span>
                              <svg
                                class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-14 icon-svg--inline-after icon-svg--clickable"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              ></svg>
                            </a>
                          </th>
                          <td class="total-line__price">
                            <span
                              class="skeleton-while-loading order-summary__small-text"
                              data-checkout-total-shipping-target="0"
                            >
                              Calculated at next step
                            </span>
                          </td>
                        </tr>
                        <tr
                          class="total-line total-line--taxes hidden"
                          data-checkout-taxes=""
                        >
                          <th class="total-line__name" scope="row">
                            Estimated taxes
                          </th>
                          <td class="total-line__price">
                            <span
                              class="order-summary__emphasis skeleton-while-loading"
                              data-checkout-total-taxes-target="0"
                            >
                              Rs0.00
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot class="total-line-table__footer">
                        <tr class="total-line">
                          <th
                            class="total-line__name payment-due-label"
                            scope="row"
                          >
                            <span class="payment-due-label__total">Total</span>
                          </th>
                          <td
                            class="total-line__price payment-due"
                            data-presentment-currency="PKR"
                          >
                            <span class="payment-due__currency remove-while-loading">
                              PKR
                            </span>
                            <span
                              class="payment-due__price skeleton-while-loading--lg"
                              data-checkout-payment-due-target="15610000"
                            >
                              Rs156,100.00
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="visually-hidden"
                data-order-summary-section="accessibility-live-region"
              >
                <div aria-live="polite" aria-atomic="true" role="status">
                  Updated total price:
                  <span data-checkout-payment-due-target="15610000">
                    Rs156,100.00
                  </span>
                </div>
              </div>
              <div
                id="partial-icon-symbols"
                class="icon-symbols"
                data-tg-refresh="partial-icon-symbols"
                data-tg-refresh-always="true"
              >
                <svg>
                  <symbol id="info">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 11h1v7h-2v-5c-.552 0-1-.448-1-1s.448-1 1-1h1zm0 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.5 7.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"></path>
                    </svg>
                  </symbol>
                  <symbol id="caret-down">
                    <svg viewBox="0 0 10 10">
                      <path d="M0 3h10L5 8" fill-rule="nonzero"></path>
                    </svg>
                  </symbol>
                  <symbol id="question">
                    <svg viewBox="0 0 16 16">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.7 13H6.8v-2h1.9v2zm2.6-7.1c0 1.8-1.3 2.6-2.8 2.8l-.1 1.1H7.3L7 7.5l.1-.1c1.8-.1 2.6-.6 2.6-1.6 0-.8-.6-1.3-1.6-1.3-.9 0-1.6.4-2.3 1.1L4.7 4.5c.8-.9 1.9-1.6 3.4-1.6 1.9.1 3.2 1.2 3.2 3z"></path>
                    </svg>
                  </symbol>
                  <symbol id="powered-by-google">
                    <svg viewBox="0 0 116 15">
                      <path
                        fill="#737373"
                        d="M4.025 3.572c1.612 0 2.655 1.283 2.655 3.27 0 1.974-1.05 3.27-2.655 3.27-.902 0-1.63-.393-1.974-1.06h-.09v3.057H.95V3.68h.96v1.054h.094c.404-.726 1.16-1.166 2.02-1.166zm-.24 5.63c1.16 0 1.852-.884 1.852-2.36 0-1.477-.692-2.362-1.846-2.362-1.14 0-1.86.91-1.86 2.362 0 1.447.72 2.36 1.857 2.36zm7.072.91c-1.798 0-2.912-1.243-2.912-3.27 0-2.033 1.114-3.27 2.912-3.27 1.8 0 2.913 1.237 2.913 3.27 0 2.027-1.114 3.27-2.913 3.27zm0-.91c1.196 0 1.87-.866 1.87-2.36 0-1.5-.674-2.362-1.87-2.362-1.195 0-1.87.862-1.87 2.362 0 1.494.675 2.36 1.87 2.36zm12.206-5.518H22.05l-1.244 5.05h-.094L19.3 3.684h-.966l-1.412 5.05h-.094l-1.242-5.05h-1.02L16.336 10h1.02l1.406-4.887h.093L20.268 10h1.025l1.77-6.316zm3.632.78c-1.008 0-1.71.737-1.787 1.856h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.9h1.005c-.305 1.085-1.277 1.747-2.66 1.747-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zM31.03 10h1.01V6.086c0-.89.696-1.535 1.657-1.535.2 0 .563.038.645.06V3.6c-.13-.018-.34-.03-.504-.03-.838 0-1.565.434-1.752 1.05h-.094v-.938h-.96V10zm6.915-5.537c-1.008 0-1.71.738-1.787 1.857h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.902h1.005c-.304 1.084-1.277 1.746-2.66 1.746-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zm5.01 1.746c-1.62 0-2.657-1.28-2.657-3.266 0-1.98 1.05-3.27 2.654-3.27.878 0 1.622.416 1.98 1.108h.087V1.177h1.008V10h-.96V8.992h-.094c-.4.703-1.15 1.12-2.02 1.12zm.232-5.63c-1.15 0-1.846.89-1.846 2.364 0 1.476.69 2.36 1.846 2.36 1.148 0 1.857-.9 1.857-2.36 0-1.447-.715-2.362-1.857-2.362zm7.875-3.115h1.024v3.123c.23-.3.507-.53.827-.688.32-.16.668-.238 1.043-.238.78 0 1.416.27 1.9.806.49.537.73 1.33.73 2.376 0 .992-.24 1.817-.72 2.473-.48.656-1.145.984-1.997.984-.476 0-.88-.114-1.207-.344-.195-.137-.404-.356-.627-.657v.8h-.97V1.363zm4.02 7.225c.284-.454.426-1.05.426-1.794 0-.66-.142-1.207-.425-1.64-.283-.434-.7-.65-1.25-.65-.48 0-.9.177-1.264.532-.36.356-.542.942-.542 1.758 0 .59.075 1.068.223 1.435.277.694.795 1.04 1.553 1.04.57 0 .998-.227 1.28-.68zM63.4 3.726h1.167c-.148.402-.478 1.32-.99 2.754-.383 1.077-.703 1.956-.96 2.635-.61 1.602-1.04 2.578-1.29 2.93-.25.35-.68.527-1.29.527-.147 0-.262-.006-.342-.017-.08-.012-.178-.034-.296-.065v-.96c.183.05.316.08.4.093.08.012.152.018.215.018.195 0 .338-.03.43-.094.092-.065.17-.144.232-.237.02-.033.09-.193.21-.48.122-.29.21-.506.264-.646l-2.32-6.457h1.196l1.68 5.11 1.694-5.11zM73.994 5.282V6.87h3.814c-.117.89-.416 1.54-.87 1.998-.557.555-1.427 1.16-2.944 1.16-2.35 0-4.184-1.882-4.184-4.217 0-2.332 1.835-4.215 4.184-4.215 1.264 0 2.192.497 2.873 1.135l1.122-1.117C77.04.697 75.77 0 73.99 0c-3.218 0-5.923 2.606-5.923 5.805 0 3.2 2.705 5.804 5.923 5.804 1.738 0 3.048-.57 4.073-1.628 1.05-1.045 1.382-2.522 1.382-3.71 0-.366-.028-.708-.087-.992h-5.37zm10.222-1.29c-2.082 0-3.78 1.574-3.78 3.748 0 2.154 1.698 3.747 3.78 3.747S87.998 9.9 87.998 7.74c0-2.174-1.7-3.748-3.782-3.748zm0 6.018c-1.14 0-2.127-.935-2.127-2.27 0-1.348.983-2.27 2.124-2.27 1.142 0 2.128.922 2.128 2.27 0 1.335-.986 2.27-2.128 2.27zm18.54-5.18h-.06c-.37-.438-1.083-.838-1.985-.838-1.88 0-3.52 1.632-3.52 3.748 0 2.102 1.64 3.747 3.52 3.747.905 0 1.618-.4 1.988-.852h.06v.523c0 1.432-.773 2.2-2.012 2.2-1.012 0-1.64-.723-1.9-1.336l-1.44.593c.414.994 1.51 2.213 3.34 2.213 1.94 0 3.58-1.135 3.58-3.902v-6.74h-1.57v.645zm-1.9 5.18c-1.144 0-2.013-.968-2.013-2.27 0-1.323.87-2.27 2.01-2.27 1.13 0 2.012.967 2.012 2.282.006 1.31-.882 2.258-2.01 2.258zM92.65 3.992c-2.084 0-3.783 1.574-3.783 3.748 0 2.154 1.7 3.747 3.782 3.747 2.08 0 3.78-1.587 3.78-3.747 0-2.174-1.7-3.748-3.78-3.748zm0 6.018c-1.143 0-2.13-.935-2.13-2.27 0-1.348.987-2.27 2.13-2.27 1.14 0 2.126.922 2.126 2.27 0 1.335-.986 2.27-2.127 2.27zM105.622.155h1.628v11.332h-1.628m6.655-1.477c-.843 0-1.44-.38-1.83-1.135l5.04-2.07-.168-.426c-.314-.84-1.274-2.39-3.227-2.39-1.94 0-3.554 1.516-3.554 3.75 0 2.1 1.595 3.745 3.736 3.745 1.725 0 2.724-1.05 3.14-1.658l-1.285-.852c-.427.62-1.01 1.032-1.854 1.032zm-.117-4.612c.668 0 1.24.342 1.427.826l-3.405 1.4c0-1.574 1.122-2.226 1.978-2.226z"
                      ></path>
                    </svg>
                  </symbol>
                  <symbol id="close">
                    <svg viewBox="0 0 16 16">
                      <path d="M15.1 2.3L13.7.9 8 6.6 2.3.9.9 2.3 6.6 8 .9 13.7l1.4 1.4L8 9.4l5.7 5.7 1.4-1.4L9.4 8"></path>
                    </svg>
                  </symbol>
                  <symbol id="spinner-button">
                    <svg viewBox="0 0 20 20">
                      <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z"></path>
                    </svg>
                  </symbol>
                  <symbol id="chevron-right">
                    <svg viewBox="0 0 10 10">
                      <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
                    </svg>
                  </symbol>
                  <symbol id="down-arrow">
                    <svg viewBox="0 0 12 12">
                      <path d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884 0l-4.375-4.2c-.244-.234-.244-.614 0-.848.245-.235.64-.235.884 0L5.375 9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16 0 .32.06.442.176.244.234.244.614 0 .848"></path>
                    </svg>
                  </symbol>
                  <symbol id="arrow">
                    <svg viewBox="0 0 16 16">
                      <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z"></path>
                    </svg>
                  </symbol>
                  <symbol id="mobile-phone">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M5 2.99C5 1.34 6.342 0 8.003 0h7.994C17.655 0 19 1.342 19 2.99v18.02c0 1.65-1.342 2.99-3.003 2.99H8.003C6.345 24 5 22.658 5 21.01V2.99zM7 5c0-.552.456-1 .995-1h8.01c.55 0 .995.445.995 1v14c0 .552-.456 1-.995 1h-8.01C7.445 20 7 19.555 7 19V5zm5 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </symbol>
                  <symbol id="spinner-small">
                    <svg viewBox="0 0 32 32">
                      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z"></path>
                    </svg>
                  </symbol>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
