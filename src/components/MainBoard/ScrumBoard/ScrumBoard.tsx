import React, { useState, FC, useEffect } from "react";
import { BoardFormValuesProps } from "./ScrumBoard.types";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext";
import AddBoardButton from "./AddBoardButton";

const ScrumBoard = (props: any) => {
  const { state } = useBoardContext();
  const [boardFormValues, setBoardFormValues] = useState<BoardFormValuesProps>({
    title: "Untitled Board",
    members: [],
  });

  // useEffect(()=> {
  //   fetchBoard().then(data=> setState(data));
  // }, []);
  const handleAddBoard = (e: any) => {
    e.preventDefault();
    props.onBoardRegister(boardFormValues);
  };

  // async function fetchBoard() {
  //   const response = await fetch('/board');
  //   const data= await response.json();
  //   return data.state

  // }
  return (
    <div className=" h-screen flex justify-center content-center m-2 p-2">
      <div className="flex justify-center flex-wrap">
        {state.length >= 0 &&
          state.map((brd: any) => {
            return <AddBoardButton boardInfo={brd} />;
          })}
      </div>

      <form>
        <button
          type="submit"
          onClick={handleAddBoard}
          className="h-32 w-32 bg-[#FFCB42] relative  justify-center align-middle content-center items-center border border-solid-6 hover:bg-[#FFB200] hover:underline rounded border-[#277BC0] text-xs m-6 font-bold text-[#275378]"
        >
          <span className="material-symbols-outlined">add</span>
          <br />
          Add a New Board
        </button>
      </form>
    </div>
  );
};

export default ScrumBoard;
