"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ end, suffix = "", duration = 2.5, className }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={end} duration={duration} separator="." suffix={suffix} />
      ) : (
        "0"
      )}
    </span>
  );
}
