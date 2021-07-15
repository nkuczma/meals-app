import React, { useState, useEffect } from 'react';
import { auth } from 'firebaseConfig';
import { useAppDispatch } from 'application/store/storeHooks';
// import { setUser } from '../slices/UserSlice';
import { setWeek} from '../slices/WeekSlice';
import { mockWeek } from '../mockData';

export function useInitWeek(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setWeek(mockWeek)); 
    setLoading(false);
  }, []);
}