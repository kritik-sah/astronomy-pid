"use client";
"use strict";

import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useEffect, useRef } from "react";
import { ItemLoading } from "../PictureCard/PictureCard";
import MysnoryLayout from "../PictureCard/MysnoryLayout";
// import { ItemLoading } from "./Item";

export function InfiniteScrollWrapper({ children }) {
  const ref = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let observerRefValue = null; // <-- variable to hold ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ugly, I know
        if (entry.isIntersecting) {
          router.replace(
            `?page=${parseInt(searchParams.get("page") ?? "0") + 1}`
          );
          router.refresh();
          console.log("loading more");
        }
      },
      { rootMargin: "0px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current; // <-- save ref value
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [router, searchParams]);

  return (
    <>
      {children}
      <MysnoryLayout>
        <ItemLoading ref={ref} />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
      </MysnoryLayout>
    </>
  );
}
