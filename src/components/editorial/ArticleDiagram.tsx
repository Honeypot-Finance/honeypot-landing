import type { Article } from "@/content/articles";
import styles from "./Articles.module.scss";

type DiagramKind = NonNullable<Article["sections"][number]["diagram"]>;

const diagrams = {
  attention: {
    title: "An idea’s journey through the attention network",
    caption: "A simplified editorial loop. Human judgment guides what is selected, how it is explained, and when it needs to be revisited.",
    steps: [{ title: "Discover", detail: "Find an idea worth examining" }, { title: "Verify", detail: "Check what exists and what is claimed" }, { title: "Explain", detail: "Make the context understandable" }, { title: "Distribute", detail: "Reach the people it can help" }],
  },
  decisions: {
    title: "Let the model decide. Let code handle the next step.",
    caption: "A conceptual decision workflow. Probability estimates are inputs to application rules, not guarantees that a decision is correct.",
    steps: [{ title: "Input", detail: "A question, event, or task" }, { title: "Typed decision", detail: "Jev returns a label and probabilities" }, { title: "Code routing", detail: "Your application applies its rules" }],
  },
  permissions: {
    title: "Muse proposes. Sentinel checks permission.",
    caption: "A conceptual view of Meta’s published architecture: proposed actions pass through Sentinel before execution. An ask result needs user approval; a deny result stops the action. This diagram is not a security guarantee.",
    steps: [{ title: "Goal", detail: "You define the intended outcome" }, { title: "Proposed action", detail: "Muse proposes a tool or service action" }, { title: "Sentinel", detail: "Check the action against permissions" }],
  },
  assembly: {
    title: "80 IDs in. One Statement out. What happens in between?",
    caption: "An illustrative custody-based assembly, not a claim about a deployed project. Existing source-token approvals must be in place; a source contract’s real burn operation is different from transferring an NFT to custody.",
    steps: [{ title: "80 distinct IDs", detail: "Select the source NFTs to assemble" }, { title: "Check the rules", detail: "Ownership, approvals, uniqueness, and cap" }, { title: "Transfer to custody", detail: "The contract becomes the token owner" }, { title: "Mint one Statement", detail: "Create the assembled output NFT" }],
  },
  trust: {
    title: "Three kinds of signals. Your own risk rules.",
    caption: "ERC-8004 remains a draft. Identity and Reputation have mainnet deployments; Validation is evolving. These signals do not independently authorize an action or move money.",
    steps: [{ title: "Identity", detail: "Who is this agent?" }, { title: "Reputation", detail: "What feedback exists?" }, { title: "Validation", detail: "Proposed / evolving: references to checks" }],
  },
} satisfies Record<DiagramKind, { title: string; caption: string; steps: { title: string; detail: string }[] }>;

export default function ArticleDiagram({ kind }: { kind: DiagramKind }) {
  const diagram = diagrams[kind];
  return (
    <figure className={`${styles.diagram} ${styles[`${kind}Diagram`]}`}>
      <div className={styles.diagramHeading}><span>THE IDEA, VISUALIZED</span><span aria-hidden="true">↗</span></div>
      <h3>{diagram.title}</h3>
      <ol className={styles.diagramSteps}>
        {diagram.steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.detail}</p></li>)}
      </ol>
      {kind === "attention" ? <div className={styles.diagramLoop}><span aria-hidden="true">↺</span><strong>Human editorial judgment</strong><span>Review · correct · discover again</span></div> : null}
      {kind === "decisions" ? <div className={styles.diagramBranches}><span>Route to an LLM</span><span>Request human review</span><span>Finish the task</span></div> : null}
      {kind === "permissions" ? <div className={styles.permissionOutcomes}><div><strong>Allow</strong><span>↓</span><p>Service execution</p><span>↓</span><p>Activity record</p></div><div><strong>Ask</strong><span>↓</span><p>Request user approval</p><span>↺</span><p>Recheck permission</p></div><div><strong>Deny</strong><span>↓</span><p>Stop the action</p><span>↓</span><p>Activity record</p></div></div> : null}
      {kind === "permissions" ? <div className={styles.diagramLoop}><span aria-hidden="true">⊘</span><strong>User control</strong><span>Stop the task or revoke access</span></div> : null}
      {kind === "trust" ? <><div className={styles.diagramLoop}><span aria-hidden="true">↓</span><strong>Application risk rules</strong><span>Decide which evidence is sufficient</span></div><div className={styles.separateControl}><span>Separate responsibilities</span><strong>Authorization</strong><strong>Payments</strong></div></> : null}
      {kind === "assembly" ? <><div className={styles.atomicAssembly}><strong>One transaction · all or nothing</strong><span>If a check, transfer, or mint reverts, the entire assembly reverts.</span></div><div className={styles.ownershipComparison}><div><span>LOCK / CUSTODY</span><strong>The tokens still exist.</strong><p>The custody contract owns the source NFTs. Their ERC-721 ownership has not been destroyed.</p></div><div><span>ACTUAL BURN</span><strong>Ownership is removed.</strong><p>The source ERC-721 executes its burn logic. A custody transfer alone does not do this.</p></div></div></> : null}
      <figcaption>{diagram.caption}</figcaption>
    </figure>
  );
}
