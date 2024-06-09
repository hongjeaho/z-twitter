"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {}

const Redirect: React.FC<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("i/flow/login");
  });
  return null;
};

export default Redirect;
