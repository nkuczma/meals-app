import React, { useState, useEffect } from 'react';
import { auth } from 'firebaseConfig';
import { useAppDispatch } from 'application/store/storeHooks';
import { setUser } from '../slices/UserSlice';

export function useInitUser(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(setUser(user));
      setLoading(false);
    });
    return unsubscribe;
  }, []);
}