// import React, { Children } from "react";
// import { NavLink } from "react-router";
// import style from "../components/Profile.module.css";
// import { FAKE_USER } from "../contextApi/Authprovider";

// export default function Profile() {
//   return (
//     <div>
//       <div className={style.profile}>
//         <div className={style.profileImage}>
//           <img src={FAKE_USER.avatar} alt="" />
//         </div>
//         <div className={style.link}>
//           <NavLink to="/">Dashboard</NavLink>
//         </div>
//         <div className={style.link}>
//           <NavLink to="/income">Income</NavLink>
//         </div>

//         <div className={style.link}>
//           <NavLink to="/expence">Expence</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";
import style from "../components/Profile.module.css";

export default function Profile() {
  return (
    <div>
      <div className={style.profile}>
        <div className={style.profileDisplay}>
          <div className={style.link}>
            <NavLink to="/">Dashboard</NavLink>
          </div>
          <div className={style.link}>
            <NavLink to="/transactions">Transactions</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
