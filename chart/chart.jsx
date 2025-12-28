// import React, { useContext } from "react";
// import {
//   Chart as ChartJs,
//   CatagoryScale,
//   PointElement,
//   LineElement,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   ArchElement,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { IncomeContext } from "../src/contextApi/IncomeContext";
// ChartJs.register(
//   CatagoryScale,
//   PointElement,
//   LineElement,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   ArchElement
// );
// export default function Chart() {
//   const{state} = useContext(IncomeContext)
//   const {detail} = state
//   const data = {
//     labels:detail.map(el => el.date)
//   }
//   console.log(state)
//   return (
//     <div>
//       <Line />
//     </div>
//   );
// }
