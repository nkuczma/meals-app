import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useAppDispatch } from '../store/storeHooks';
import { setUser } from '../store/slices/UserSlice';
import { setWeek} from '../store/slices/WeekSlice';
import { mockWeek } from '../store/mockData';

export function useInitPlanner(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(setUser(user));
      setLoading(false);
      dispatch(setWeek(mockWeek));
    });
    return unsubscribe;
  }, []);
}