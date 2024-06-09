'use client';
import { api } from "@/convex/_generated/api";
import useStoreUserEffect from "@/lib/useStoreUserEffect";
import { useQuery, useMutation } from "convex/react";

export default () => {
  const userId = useStoreUserEffect();

  return <main className="min-h-screen bg-white"></main>;
};
