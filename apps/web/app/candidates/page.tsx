import Link from "next/link";
import RecruiterShell from "../components/RecruiterShell";

const candidates = [
  { initials: "HM", name: "Hassan Malik", role: "Senior Backend Engineer", status: "Report ready", score: "86", date: "Today" },
  { initials: "SA", name: "Sara Ahmed", role: "Product Designer", status: "Interview completed", score: "79", date: "Yesterday" },
  { initials: "OK", name: "Omar Khan", role: "Junior Python Developer", status: "Interview completed", score: "74", date: "Sep 22, 2026" },
  { initials: "FN", name: "Fatima Noor", role: "Senior Backend Engineer", status: "Interview scheduled", score: "—", date: "Sep 25, 2026" },
  { initials: "ZA", name: "Zain Abbas", role: "Product Designer", status: "Invitation sent", score: "—", date: "Sep 24, 2026" },
];

export default function CandidatesPage() {
  return (
    <RecruiterShell>
      <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div><p className="text-sm font-bold tracking-tight text-slate-900">Screenwise</p><p className="mt-1 text-xs text-slate-500">Candidates</p></div>
          <div className="flex items-center gap-4"><Link href="/overview" className="text-sm font-semibold text-slate-500 hover:text-slate-900">Dashboard</Link><Link href="/jobs" className="rounded-lg bg-[#1f6f68] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#185b55]">View jobs</Link></div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-[#1f6f68]">Hiring workspace</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Candidates</h1><p className="mt-2 text-sm text-slate-500">Review every candidate across your active interview pipelines.</p></div><Link href="/jobs" className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-600 hover:bg-slate-50">Manage invitations</Link></div>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><SummaryCard label="Total candidates" value="128" /><SummaryCard label="Reports ready" value="49" /><SummaryCard label="In progress" value="17" /><SummaryCard label="Awaiting response" value="24" /></section>
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center"><div><h2 className="font-semibold text-slate-900">All candidates</h2><p className="mt-1 text-xs text-slate-500">Your most recent candidate activity.</p></div><div className="flex gap-2"><button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">All statuses</button><button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">Filter</button></div></div>
          <div className="hidden grid-cols-[1.4fr_1.3fr_1fr_0.7fr_100px] gap-4 border-b border-slate-100 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 md:grid"><span>Candidate</span><span>Role</span><span>Status</span><span>Score</span><span /></div>
          {candidates.map((candidate) => <div key={candidate.name} className="grid gap-3 border-b border-slate-100 px-5 py-4 last:border-0 md:grid-cols-[1.4fr_1.3fr_1fr_0.7fr_100px] md:items-center md:gap-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef7f5] text-xs font-bold text-[#1f6f68]">{candidate.initials}</div><div><p className="text-sm font-semibold text-slate-800">{candidate.name}</p><p className="mt-1 text-xs text-slate-500">{candidate.date}</p></div></div><p className="text-sm text-slate-600">{candidate.role}</p><span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${candidate.status === "Report ready" ? "bg-[#eef7f5] text-[#1f6f68]" : candidate.status === "Invitation sent" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{candidate.status}</span><p className="text-sm font-semibold text-slate-800">{candidate.score}{candidate.score !== "—" && <span className="font-normal text-slate-400">/100</span>}</p><button className="text-left text-sm font-semibold text-[#1f6f68] hover:underline md:text-right">View →</button></div>)}
        </section>
      </div>
    </RecruiterShell>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p></div>;
}
