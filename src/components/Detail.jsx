import React, { useContext } from "react";
import style from "../components/Detail.module.css";
import { IncomeContext } from "../contextApi/IncomeContext";
export default function Detail() {
  const { state, dispatch } = useContext(IncomeContext);
  const { detail, selectOption } = state;

  return (
    <div className={style.main}>
      {detail.map((el, index) => (
        <ElemDisplay
          key={el.id}
          el={el}
          index={index}
          dispatch={dispatch}
          selectOption={selectOption}
        />
      ))}
    </div>
  );
}

function ElemDisplay({ el, index, dispatch }) {
  return (
    <div className={style.flex}>
      <div className={style.greenflex}>
        <span>{el.emoji}</span>
        <div className={style.greens}></div>
        <div>{el.name}</div>
      </div>
      <div className={style.list}>
        <span>$ {el.income}</span>
        <span>{el.date}</span>
        <span>{el.textArea}</span>
        <button
          onClick={() => {
            console.log(index);
            dispatch({ type: "delete", payload: el.id });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
