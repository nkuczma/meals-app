import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useAppDispatch } from '../store/storeHooks';
import { setUser } from '../store/slices/UserSlice';

export function useInitPlanner() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(setUser(user));
    });
    return unsubscribe;
  }, []);
}