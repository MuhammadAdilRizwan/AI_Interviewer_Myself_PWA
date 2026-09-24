import Link from "next/link";
import RecruiterShell from "../components/RecruiterShell";

const reports = [
  { id: "hassan-malik", initials: "HM", name: "Hassan Malik", role: "Senior Backend Engineer", score: "86", recommendation: "Strong proceed", date: "Today" },
  { id: "sara-ahmed", initials: "SA", name: "Sara Ahmed", role: "Product Designer", score: "79", recommendation: "Proceed", date: "Yesterday" },
  { id: "omar-khan", initials: "OK", name: "Omar Khan", role: "Junior Python Developer", score: "74", recommendation: "Review", date: "Sep 22, 2026" },
];

export default function ReportsPage() {
  return (
    <RecruiterShell>
      <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8"><div className="mx-auto flex max-w-6xl items-center justify-between"><div><p className="text-sm font-bold tracking-tight text-slate-900">Screenwise</p><p className="mt-1 text-xs text-slate-500">Reports</p></div><Link href="/overview" className="text-sm font-semibold text-slate-500 hover:text-slate-900">Dashboard</Link></div></header>
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div><p className="text-sm font-medium text-[#1f6f68]">Interview intelligence</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Reports</h1><p className="mt-2 text-sm text-slate-500">Review evidence-backed interview results and recommendations.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3"><SummaryCard label="Reports ready" value="49" /><SummaryCard label="Average score" value="81.4" /><SummaryCard label="Strong proceeds" value="18" /></div>
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="hidden grid-cols-[1.4fr_1.25fr_0.7fr_1fr_100px] gap-4 border-b border-slate-100 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 md:grid"><span>Candidate</span><span>Role</span><span>Score</span><span>Recommendation</span><span /></div>{reports.map((report) => <div key={report.id} className="grid gap-3 border-b border-slate-100 px-5 py-5 last:border-0 md:grid-cols-[1.4fr_1.25fr_0.7fr_1fr_100px] md:items-center md:gap-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef7f5] text-xs font-bold text-[#1f6f68]">{report.initials}</div><div><p className="text-sm font-semibold text-slate-800">{report.name}</p><p className="mt-1 text-xs text-slate-500">{report.date}</p></div></div><p className="text-sm text-slate-600">{report.role}</p><p className="text-sm font-bold text-[#1f6f68]">{report.score}<span className="font-normal text-slate-400">/100</span></p><span className="w-fit rounded-full bg-[#eef7f5] px-2.5 py-1 text-xs font-semibold text-[#1f6f68]">{report.recommendation}</span><Link href={`/reports/${report.id}`} className="text-sm font-semibold text-[#1f6f68] hover:underline md:text-right">Open report →</Link></div>)}</section>
      </div>
    </RecruiterShell>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p></div>; }
