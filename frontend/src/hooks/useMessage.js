import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../slices/userSlice";

export const useMessage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(reset());
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);
};
