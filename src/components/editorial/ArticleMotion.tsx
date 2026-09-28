"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Article } from "@/content/articles";
import styles from "./ArticleMotion.module.scss";

type Kind = NonNullable<Article["sections"][number]["diagram"]>;

const stories = {
  attention: {
    title: "How an idea finds its people",
    note: "A conceptual editorial process, guided by human judgment.",
    frames: [
      ["Discover", "Start with an idea worth investigating. Availability alone does not make it understandable."],
      ["Verify", "Check the work and its evidence before deciding what to share."],
      ["Explain", "Give the idea context that a reader can use. The facts stay attached to the explanation."],
      ["Share", "The explanation reaches a builder, a reader, and a new question. Their feedback begins the next round."],
    ],
  },
  permissions: {
    title: "An action passes through a permission check",
    note: "A conceptual view of Muse and Sentinel, not a product recording or a security guarantee.",
    frames: [
      ["Set a goal", "The owner asks for help planning a trip. A goal gives the agent a task, not unlimited authority."],
      ["Propose", "Muse prepares an action, such as a booking request, for Sentinel to check."],
      ["Check", "Sentinel checks that proposed action against the owner’s permissions."],
      ["Resolve", "Allow proceeds to execution. Ask requests approval and rechecks permission. Deny stops the action."],
    ],
  },
  decisions: {
    title: "Follow a support ticket through the decision",
    note: "An illustrative workflow, not a benchmark. The application defines routing and escalation rules.",
    frames: [
      ["Read", "A support ticket arrives: “I was charged twice.” The immediate job is to choose a destination."],
      ["Classify", "A typed question asks Jev to choose among billing, technical support, and account access."],
      ["Route", "This example routes to Billing. The application uses the result and its probability estimates to apply its routing rules."],
      ["Escalate", "An uncertain result can go to a richer model or human review. A high probability still does not prove correctness."],
    ],
  },
  trust: {
    title: "Evidence travels. Judgment stays with the application.",
    note: "ERC-8004 is a draft. Identity and Reputation are deployed; Validation is evolving. Authorization and payment are separate.",
    frames: [
      ["Identity", "A persistent identity provides a reference for the agent. It does not prove that the agent will do good work."],
      ["Reputation", "Feedback adds history. The application still needs to assess its relevance and whether it can be manipulated."],
      ["Validation", "The evolving validation design adds another possible kind of evidence. It is not a universal verdict."],
      ["Evaluate", "The application weighs the available evidence against its own risk rules. Spending authority is a separate decision."],
    ],
  },
  assembly: {
    title: "80 NFTs become one composition. The originals remain.",
    note: "Illustrative custody-based assembly from the tutorial, not a depiction of production contracts. A real burn removes ownership instead.",
    frames: [
      ["Select", "The holder selects 80 distinct source NFTs. Each tile here represents one of those tokens."],
      ["Check", "The assembly checks ownership, existing approvals, uniqueness, and the allowed output cap."],
      ["Transfer", "The source NFTs move into contract custody. The contract owns them; the tokens have not been burned."],
      ["Mint", "One Statement is minted. The 80 source NFTs remain in custody. If a check, transfer, or mint reverts, the whole transaction reverts."],
    ],
  },
} satisfies Record<Kind, { title: string; note: string; frames: [string, string][] }>;

function Pot({ x = 44, y = 266 }: { x?: number; y?: number }) {
  return <g transform={`translate(${x} ${y})`}>
    <ellipse cx="44" cy="104" rx="48" ry="9" fill="#354533" opacity=".1" />
    <path d="M20 18V7h47v11c22 17 28 44 18 66-7 16-27 20-42 20S8 98 3 82C-5 57 1 32 20 18Z" fill="#f6c341" stroke="#654b29" strokeWidth="2.5" />
    <rect x="13" width="62" height="15" rx="7" fill="#ffdc65" stroke="#654b29" strokeWidth="2.5" />
    <path d="m9 39 28 3 7 7 7-7 28-3-6 24H53l-9-13-9 13H15Z" fill="#29352b" />
    <path d="m19 45 8 1-6 10-6-1Z" fill="#fff9dc" />
    <path d="M35 78q10 10 20-2" fill="none" stroke="#654b29" strokeWidth="3" strokeLinecap="round" />
    <path d="m-3 67-13-8m102 8 12-10M23 101l-6 9m46-9 6 9" fill="none" stroke="#654b29" strokeWidth="5" strokeLinecap="round" />
  </g>;
}

function Spark({ x, y }: { x: number; y: number }) {
  return <path d={`M${x} ${y - 10}q0 10 10 10-10 0-10 10 0-10-10-10 10 0 10-10Z`} fill="#c79931" />;
}

function Envelope({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><rect width="78" height="55" rx="8" fill="#fff9e7" stroke="#475c47" strokeWidth="3" /><path d="m4 6 35 27L74 6M4 51l22-20m48 20L52 31" fill="none" stroke="#475c47" strokeWidth="2" /></g>;
}

function Scene({ kind, step, uid }: { kind: Kind; step: number; uid: string }) {
  const lit = (at: number) => step >= at ? styles.lit : styles.waiting;
  return <svg viewBox="0 0 720 410" className={styles.scene} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${uid}-sky`} x2="0" y2="1"><stop stopColor="#e5eadc" /><stop offset="1" stopColor="#fbf3de" /></linearGradient>
      <pattern id={`${uid}-grid`} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="#73836c" strokeOpacity=".1" /></pattern>
    </defs>
    <rect width="720" height="410" rx="18" fill={`url(#${uid}-sky)`} />
    <rect width="720" height="410" rx="18" fill={`url(#${uid}-grid)`} />
    <circle cx="636" cy="61" r="35" fill="#f4d477" opacity=".5" />
    <path d="M0 360q120-63 250-15t240-4 230-12v81H0Z" fill="#d7dfc5" />
    <path d="M0 389q180-46 355-6t365-24v51H0Z" fill="#c2cfb3" opacity=".55" />
    <Spark x={50} y={68} /><Spark x={667} y={302} />

    {kind === "attention" ? <>
      <path className={styles.flow} d="M144 181h418m-5 0 48-70m-48 70 48 70" fill="none" stroke="#8b9c71" strokeWidth="3" strokeDasharray="8 8" />
      <g className={lit(0)}><circle cx="141" cy="172" r="58" fill="#fff8dc" stroke="#c1a557" strokeWidth="2" /><path d="M119 173c-25-33 41-59 48-20 3 13-11 18-13 30h-26c-1-6-3-7-9-10Z" fill="#ffd65c" stroke="#745c33" strokeWidth="3" /><path d="M128 191h26m-22 8h18m-8-83v-12m-44 28-10-6m94 6 10-6" stroke="#745c33" strokeWidth="3" strokeLinecap="round" /><text x="141" y="260">Idea</text></g>
      <g className={lit(1)}><circle cx="314" cy="172" r="58" fill="#f9faed" stroke="#a6b28c" strokeWidth="2" /><circle cx="308" cy="165" r="27" fill="#e0ebd6" stroke="#475c47" strokeWidth="4" /><path d="m327 186 20 22m-34-58h-15m20 11h-25m7 11h15" stroke="#475c47" strokeWidth="4" strokeLinecap="round" /><text x="314" y="260">Evidence</text></g>
      <g className={lit(2)}><circle cx="485" cy="172" r="58" fill="#fff6e7" stroke="#c6b594" strokeWidth="2" /><path d="M450 151q18-9 35 1 17-10 35-1v48q-17-9-35 0-17-9-35 0Z" fill="#fffbef" stroke="#475c47" strokeWidth="3" /><path d="M485 153v44m-26-33 15 1m-15 10 15 1m23-12 14-1m-14 12 14-1" stroke="#80906c" strokeWidth="2" /><text x="485" y="260">Story</text></g>
      <g className={lit(3)}><circle cx="629" cy="100" r="29" fill="#c4d5d4" /><circle cx="629" cy="170" r="29" fill="#edd29e" /><circle cx="629" cy="240" r="29" fill="#d6cbe4" />{[100, 170, 240].map(y=><g key={y}><circle cx="629" cy={y-6} r="8" fill="#425447" /><path d={`M615 ${y+14}q14-22 28 0`} fill="#425447" /></g>)}<text x="615" y="309">People</text></g>
      <path className={step === 3 ? styles.lit : styles.waiting} d="M541 315q-192 61-352 0m0 0 17-3m-17 3 9 14" fill="none" stroke="#7c8e62" strokeWidth="3" strokeDasharray="6 5" />
      <Pot />
    </> : null}

    {kind === "permissions" ? <>
      <path className={styles.flow} d="M146 176h376m-26 0 93-92m-93 92 93 100" fill="none" stroke="#8b9c71" strokeWidth="3" strokeDasharray="8 8" />
      <g className={lit(0)}><rect x="90" y="128" width="105" height="92" rx="14" fill="#f5dc9e" stroke="#826b48" strokeWidth="3" /><path d="M123 128v-15h40v15m-47 1v91m51-91v91" fill="none" stroke="#826b48" strokeWidth="3" /><path d="m119 172 46-18-17 36-9-14Z" fill="#fffbea" stroke="#826b48" strokeWidth="2" /><text x="142" y="269">Goal</text></g>
      <g className={lit(1)}><rect x="250" y="137" width="101" height="78" rx="22" fill="#e8eef0" stroke="#4f6c6c" strokeWidth="3" /><path d="M301 137v-24" stroke="#4f6c6c" strokeWidth="3" /><circle cx="301" cy="110" r="7" fill="#d9b24e" /><circle cx="276" cy="170" r="8" fill="#4f6c6c" /><circle cx="325" cy="170" r="8" fill="#4f6c6c" /><path d="M285 193h31m-39 24-10 15m59-15 9 15" stroke="#4f6c6c" strokeWidth="3" strokeLinecap="round" /><text x="300" y="269">Muse</text></g>
      <g className={lit(2)}><path d="m445 111 57 22v58q-8 34-57 53-49-19-57-53v-58Z" fill="#dee8cb" stroke="#61764c" strokeWidth="3" /><rect x="427" y="168" width="36" height="30" rx="6" fill="#f7f4dc" stroke="#61764c" strokeWidth="3" /><path d="M434 168v-10a11 11 0 0 1 22 0v10" fill="none" stroke="#61764c" strokeWidth="3" /><text x="446" y="279">Sentinel</text></g>
      <g className={lit(3)}><rect x="555" y="59" width="130" height="50" rx="25" fill="#d4e1c5" stroke="#7d9564" strokeWidth="2" /><rect x="555" y="151" width="130" height="50" rx="25" fill="#f4dfa5" stroke="#bda060" strokeWidth="2" /><rect x="555" y="245" width="130" height="50" rx="25" fill="#ecd2c7" stroke="#b68d7c" strokeWidth="2" /><text x="620" y="91">Allow</text><text x="620" y="183">Ask</text><text x="620" y="277">Deny</text></g>
      <Pot /><path d="M175 347h380" stroke="#abb89a" strokeWidth="2" /><text x="372" y="375" className={styles.annotation}>Your permissions shape the outcome</text>
    </> : null}

    {kind === "decisions" ? <>
      <path className={styles.flow} d="M194 144h118m100 0h125M470 144v111q0 18-18 18h-54v10" fill="none" stroke="#8b9c71" strokeWidth="3" strokeDasharray="8 8" />
      <g className={lit(0)}><rect x="69" y="76" width="135" height="133" rx="12" fill="#fffaed" stroke="#9f957c" strokeWidth="2" /><Envelope x={97} y={94} /><path d="M93 171h85m-85 14h62" stroke="#aa9d7f" strokeWidth="3" strokeLinecap="round" /><text x="135" y="246">Ticket</text></g>
      <g className={lit(1)}><rect x="289" y="92" width="111" height="105" rx="19" fill="#e1e8d3" stroke="#6c805a" strokeWidth="3" /><path d="M308 117h73m-73 23h73m-73 23h73" stroke="#6c805a" strokeWidth="3" /><circle cx="320" cy="117" r="5" fill="#f1c344" /><circle cx="344" cy="140" r="5" fill="#f1c344" /><circle cx="369" cy="163" r="5" fill="#f1c344" /><text x="344" y="246">Jev</text></g>
      <g className={lit(2)}><path d="M470 144V75h65m-65 69h65m-65 0v69h65" fill="none" stroke="#799163" strokeWidth="3" />{[75,144,213].map((y,i)=><g key={y}><rect x="533" y={y-25} width="153" height="50" rx="10" fill={i===0&&step>=2?"#f2d579":"#f5f4e8"} stroke="#94a280" strokeWidth="2" /><text x="609" y={y+7}>{["Billing","Support","Access"][i]}</text></g>)}</g>
      <g className={lit(3)}><rect x="254" y="283" width="288" height="65" rx="14" fill="#efe0bf" stroke="#b79e6c" strokeWidth="2" /><path d="m278 312 10-16 10 16v13h-20Z" fill="#c49c43" /><text x="409" y="321">Human review</text></g>
      <Pot />
    </> : null}

    {kind === "trust" ? <>
      <path className={styles.flow} d="m166 154 181 121m10-135v135m191-121L367 275" fill="none" stroke="#8b9c71" strokeWidth="3" strokeDasharray="8 8" />
      {[0,1,2].map((index)=><g key={index} className={lit(index)}>
        <rect x={86+index*194} y="55" width="158" height="124" rx="12" fill={["#d9e7e3","#f2dfae","#e1dce9"][index]} stroke="#81917b" strokeWidth="2" strokeDasharray={index===2?"7 5":undefined} />
        {index===0?<><circle cx="165" cy="101" r="17" fill="#759388" /><path d="M138 144q27-42 54 0" fill="#759388" /></>:index===1?<><path d="m359 77 8 21 23 1-18 14 6 22-19-13-19 13 6-22-18-14 23-1Z" fill="#c5a047" /><path d="M313 151h90" stroke="#c5a047" strokeWidth="3" /></>:<><path d="m553 77 30 12v25q-5 19-30 31-25-12-30-31V89Z" fill="#aa9dbb" /><text x="553" y="124" fill="#fff">?</text></>}
        <text x={165+index*194} y="213">{["Identity","Reputation","Validation"][index]}</text>
      </g>)}
      <g className={lit(3)}><rect x="240" y="265" width="266" height="77" rx="16" fill="#fff9e5" stroke="#7c9065" strokeWidth="3" /><path d="m263 299 9 10 18-23" fill="none" stroke="#6d8557" strokeWidth="4" strokeLinecap="round" /><text x="391" y="312">Your risk rules</text></g>
      <text x="553" y="241" className={styles.annotation}>Evolving</text><Pot />
      <path d="M261 375h225" stroke="#8da077" strokeWidth="2" /><text x="374" y="397" className={styles.annotation}>Evidence is not spending authority</text>
    </> : null}

    {kind === "assembly" ? <>
      <path className={styles.flow} d="M275 155h150m126 0h66" fill="none" stroke="#8b9c71" strokeWidth="3" strokeDasharray="8 8" />
      <g className={styles.tokenStack} style={{ transform: step>=2?"translate(235px, 0)":"translate(0, 0)" }}>
        <rect x="78" y="61" width="207" height="206" rx="15" fill="#fff9e8" stroke="#9e9175" strokeWidth="2" />
        {Array.from({length:80},(_,i)=><rect key={i} x={94+(i%8)*22} y={76+Math.floor(i/8)*17} width="15" height="12" rx="2" fill={["#c5a5c5","#d7bd71","#9cb3a8","#c39477"][i%4]} stroke="#655b47" strokeWidth=".6" />)}
        <text x="181" y="259" className={styles.annotation}>80 source NFTs</text>
      </g>
      <g className={lit(1)}><circle cx="329" cy="307" r="23" fill="#e0e8d0" stroke="#8b9d72" strokeWidth="2" /><path d="m318 306 8 9 16-20" stroke="#657d4e" fill="none" strokeWidth="3" /><text x="392" y="315" className={styles.annotation}>Checks pass</text></g>
      <g className={step>=2?styles.lit:styles.waiting}><path d="M309 59v204h217V59" fill="none" stroke="#6c805a" strokeWidth="5" /><path d="M303 49h229v19H303Z" fill="#aabc92" stroke="#6c805a" strokeWidth="2" /><text x="417" y="37">Custody</text><rect x="397" y="257" width="40" height="25" rx="5" fill="#f3d173" stroke="#6c805a" strokeWidth="2" /></g>
      <g className={lit(3)}><rect x="558" y="91" width="123" height="170" rx="9" fill="#e6dce8" stroke="#8d7996" strokeWidth="3" /><path d="m574 222 38-104 50 104Z" fill="#c6ac70" /><circle cx="619" cy="166" r="28" fill="#879a85" /><path d="m576 196 46-32 38 53Z" fill="#ab809c" /><rect x="576" y="235" width="87" height="7" rx="3" fill="#8d7996" /><text x="619" y="301">1 Statement</text></g>
      <Pot /><text x="444" y="376" className={styles.annotation}>{step>=2?"New owner. Same source tokens.":"One transaction, with rollback on failure."}</text>
    </> : null}
  </svg>;
}

export default function ArticleMotion({ kind }: { kind: Kind }) {
  const story = stories[kind];
  const uid = useId().replace(/:/g, "");
  const figure = useRef<HTMLElement>(null);
  const autoStarted = useRef(false);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => { setReducedMotion(media.matches); if (media.matches) setPlaying(false); };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    media.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    if (figure.current) observer.observe(figure.current);
    return () => { observer.disconnect(); media.removeEventListener("change", updatePreference); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);

  useEffect(() => {
    if (visible && pageVisible && !reducedMotion && !autoStarted.current) {
      autoStarted.current = true;
      setPlaying(true);
    }
  }, [visible, pageVisible, reducedMotion]);

  useEffect(() => {
    if (!playing || !visible || !pageVisible) return;
    const timer = window.setTimeout(() => {
      if (step === story.frames.length - 1) setPlaying(false);
      else setStep((current) => current + 1);
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [playing, visible, pageVisible, step, story.frames.length]);

  function selectStep(index: number) {
    autoStarted.current = true;
    setPlaying(false);
    setStep(index);
  }

  return <figure ref={figure} id={`illustration-${kind}`} className={styles.motion} data-kind={kind} data-step={step} data-playing={playing && visible && pageVisible} aria-labelledby={`${uid}-title`}>
    <div className={styles.heading}><h3 id={`${uid}-title`}>{story.title}</h3><button type="button" className={styles.play} onClick={() => { autoStarted.current = true; if (!playing && step === story.frames.length - 1) setStep(0); setPlaying(!playing); }} aria-label={`${playing ? "Pause" : step === story.frames.length - 1 ? "Replay" : "Play"} illustration: ${story.title}`}><span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>{playing ? "Pause" : step === story.frames.length - 1 ? "Replay" : "Play"}</button></div>
    <Scene kind={kind} step={step} uid={uid} />
    <div className={styles.steps} role="group" aria-label="Illustration steps">{story.frames.map(([label], index) => <button type="button" key={label} onClick={() => selectStep(index)} aria-pressed={step === index} aria-controls={`${uid}-description`}><span>{index + 1}</span>{label}</button>)}</div>
    <p id={`${uid}-description`} className={styles.description} aria-live={playing ? "off" : "polite"} aria-atomic="true">{story.frames[step][1]}</p>
    <figcaption>{story.note}</figcaption>
  </figure>;
}
