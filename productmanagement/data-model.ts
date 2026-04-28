/**
 * PDGMS Leadership Portfolio — Data Model
 * ========================================
 *
 * These are the actual TypeScript types from the PDGMS codebase.
 * Every field here exists in the backend. Your design must work
 * with this data — don't invent fields that aren't here.
 *
 * The mock data file (mock-portfolio-data.json) is populated
 * using these exact types.
 *
 * You do NOT need to write code against these types.
 * They are here so you know exactly what data is available
 * to render on the Leadership Portfolio page.
 */


// =============================================
// ENUMS — Fixed categories used across the system
// =============================================

/** 5 constraint dimensions — every blocker is one of these */
type ConstraintType =
  | "budget"
  | "talent"
  | "internal_support"
  | "assumptions"
  | "permissions";

/** 6 time categories — how an employee's hours are classified */
type TimesheetCategoryType =
  | "operational"
  | "research"
  | "deep_work"
  | "coordination"
  | "meetings"
  | "planning_strategy";

/** The 6 measurement axes — the backbone of all scoring */
type AxisType =
  | "deliverables"
  | "ip"
  | "kpis"
  | "frameworks"
  | "processes"
  | "rituals";

/** Deliverable ticket lifecycle */
type DeliverableStatus =
  | "open"
  | "in_progress"
  | "pending_qa"
  | "qa_failed"
  | "delivered"
  | "confirmed";

/** IP zones — program-level or personal */
type IPZone = "program" | "myzone";

/** KPI monthly outcome */
type KPIStatus = "hit" | "miss" | "partial" | "pending";

/** Career pace */
type PaceStatus = "ahead" | "on_track" | "behind";


// =============================================
// SHARED BUILDING BLOCKS
// =============================================

/** Number + Label claim — used for frameworks and processes */
interface LabelClaim {
  labelId: string;
  labelName: string;
  quantity: number;
  totalQuantity?: number;
}

/** Timesheet entry */
interface TimesheetCategory {
  category: TimesheetCategoryType;
  hours: number;
  description?: string;
}

/** A single deliverable ticket */
interface AutoDeliverable {
  ticketId: string;
  label: string;
  status: DeliverableStatus;
  programId: string;
  programName?: string;
  completedAt?: string | null;
}

/** Constraint entry */
interface ConstraintEntry {
  type: ConstraintType;
  description: string;
  ticketRef?: string;
}


// =============================================
// TICKET — The accountability unit
// =============================================

/**
 * Two lifecycle paths:
 *
 * DELIVERABLE:  open → in_progress → pending_qa → delivered
 *   Only "delivered" (QA passed) counts for career scoring.
 *
 * CONSTRAINT:   open → classified → routed → accepted → resolved → confirmed
 *   Tracks what blocked work and how it was resolved.
 */
interface Ticket {
  ticketId: string;
  programId: string;
  sprintId: string;
  ticketType: "deliverable" | "constraint";
  constraintType?: ConstraintType;
  label: string;
  quantity: number;
  description: string;
  assignedTo: string;
  assignedBy: string;
  targetDate: string;
  estimatedMinutes?: number;
  actualMinutes?: number;
  dependencies: string[];
  qaCriteria?: string;
  status: string;
  stateTransitions: Array<{
    from: string;
    to: string;
    at: string;
    by: string;
    note?: string;
  }>;
  completedAt?: string;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
}


// =============================================
// 6-AXIS SCORES — How performance is measured
// =============================================

/** Raw scores for each axis, 0-100 */
interface AxisScores {
  deliverables: number;
  ip: number;
  kpis: number;
  frameworks: number;
  processes: number;
  rituals: number;
}


// =============================================
// CAREER SYSTEM
// =============================================

interface CareerMilestone {
  level: string;
  targetDate: string;
}

interface CareerPlan {
  id: number;
  orgId: string;
  eid: number;
  ladderId: string | null;
  milestones: CareerMilestone[] | null;
  setBy: string;
  createdAt: string;
  updatedAt: string;
}

interface CareerRunrateSnapshot {
  date: string;
  axisScores: AxisScores;
  compositeScore: number;
  level: string | null;
  ladder: string | null;
}

/** Enriched snapshot with computed display fields */
interface CareerRunrateSnapshotEnriched extends CareerRunrateSnapshot {
  delta: number | null;
  deltaDirection: "up" | "down" | "flat" | "first";
  isLevelChange: boolean;
  monthLabel: string;
}

interface PlannedTrajectory {
  points: Array<{ date: string; level: string; score: number }>;
}

interface ProjectedTrajectory {
  points: Array<{ date: string; projectedScore: number }>;
  nextLevelEligibility: {
    level: string;
    estimatedDate: string;
    gapAreas: string[];
  } | null;
}

/** Criteria required to reach a career level */
interface LevelCriteria {
  axis: AxisType;
  minScore: number;
  weight: number;
  description: string;
}

interface LadderLevel {
  id: string;
  name: string;
  order: number;
  criteria: LevelCriteria[];
  minCompositeScore: number;
}

interface CareerLadder {
  id: string;
  name: string;
  orgId: string;
  levels: LadderLevel[];
}

/** Complete career runrate — planned vs actual vs projected */
interface CareerRunrateData {
  planned: PlannedTrajectory;
  actual: CareerRunrateSnapshot[];
  projected: ProjectedTrajectory;
  currentLevel: LadderLevel;
  nextLevel: LadderLevel | null;
  ladder: CareerLadder;
}

/** Gap analysis for each axis against next-level requirements */
interface AxisGapItem {
  axis: string;
  label: string;
  current: number;
  required: number;
  gap: number;
  cleared: boolean;
  hasCriteria: boolean;
  fillPct: number;
}

/** Trajectory comparison — ahead/behind/on-track */
interface TrajectoryDelta {
  monthsDelta: number;
  direction: "ahead" | "behind" | "on-track";
  concreteMilestone: {
    level: string;
    plannedDate: string;
    achievedDate: string;
  } | null;
}

/** Timeline node for visual career runway */
interface RunwayNode {
  id: string;
  label: string;
  date: string;
  type: "achieved" | "current" | "projected" | "future";
  compositeScore?: number;
  positionPct: number;
  confidenceBand?: {
    leftPct: number;
    widthPct: number;
    earliest: string;
    latest: string;
  };
}


// =============================================
// MONTHLY REPORT — The source for portfolio data
// =============================================

interface DeliverableSummary {
  total: number;
  completed: number;
  inProgress: number;
  items: Array<{
    ticketId: string;
    label: string;
    status: DeliverableStatus;
    programId: string;
  }>;
}

interface IPSummary {
  totalCommits: number;
  targetCommits: number;
  items: Array<{ ipItemId: string; title: string; commits: number }>;
}

interface ClaimSummary {
  claims: LabelClaim[];
  totalQuantity: number;
}

interface RitualSummary {
  participated: number;
  total: number;
  events: Array<{ ritualId: string; ritualName: string; date: string }>;
}

interface MonthlyKPICommit {
  kpiId: string;
  kpiName: string;
  programId: string;
  targetValue: string;
  actualValue: string;
  unit: string;
  status: KPIStatus;
}

interface MonthlyAxisSummary {
  deliverables: DeliverableSummary;
  ip: IPSummary;
  kpis: MonthlyKPICommit[];
  frameworks: ClaimSummary;
  processes: ClaimSummary;
  rituals: RitualSummary;
}

interface WeeklyBreakdownEntry {
  weekStart: string;
  weekEnd: string;
  delivered: number;
  total: number;
  ipCommits: number;
  happiness: number | null;
  submitted: boolean;
}

interface MonthlyConstraintPattern {
  type: string;
  occurrences: number;
  weeksAppeared: number;
  topMicro: string | null;
  topMicroCount: number;
}

interface MonthlyConstraintSummary {
  raised: number;
  resolved: number;
  open: number;
  resolutionRate: number;
  avgResolutionDays: number;
  longestOpen: { description: string; ageDays: number } | null;
  recurringPatterns: MonthlyConstraintPattern[];
}

interface MonthlyReport {
  month: string;
  status: "draft" | "submitted" | "locked";
  axisSummaries: MonthlyAxisSummary;
  weeklySummaries: Array<{
    weekStart: string;
    weekEnd: string;
    happiness: number | null;
    deliverableCount: number;
    ipCommits: number;
    submitted: boolean;
  }>;
  narrative: string | null;
  portfolioId?: string;
  submittedAt?: string;
  gapFlags?: string[];
  happiness?: number | null;
  weeklyBreakdown?: WeeklyBreakdownEntry[];
  missingWeeks?: string[];
  missingDays?: string[];
  analyticsSnapshot?: {
    totalHours: number;
    categories: TimesheetCategory[];
  } | null;
}


// =============================================
// LEADERSHIP PORTFOLIO — The page you are designing
// =============================================

type PortfolioSectionType =
  | "executive_summary"
  | "contribution_highlights"
  | "capability_growth"
  | "kpi_impact"
  | "constraint_patterns"
  | "career_trajectory";

interface LeadershipPortfolioSection {
  id: PortfolioSectionType;
  title: string;
  dataPoints: Record<string, string | number | string[]>;
  narrative: string | null;
}

interface LeadershipPortfolio {
  sections: LeadershipPortfolioSection[];
  generatedAt: string | null;
  uid: string;
}


// =============================================
// UBS (USAGE-BASED SCORE) — Engagement tracking
// =============================================

interface UBSEvent {
  eventType: string;
  eventLabel: string;
  weight: number;
  participated: boolean;
  timestamp?: string;
}

interface UBSScore {
  weekStart: string;
  score: number;
  maxPossible: number;
  breakdown: UBSEvent[];
}

interface UBSTrend {
  weeks: Array<{ weekStart: string; score: number | null }>;
}


// =============================================
// KPI — Shared program metrics
// =============================================

interface KPI {
  id: string;
  programId: string;
  name: string;
  label: string | null;
  unit: string | null;
  currentTarget: unknown | null;
  monthlyCommits: Array<{
    monthId: string;
    commits: Array<{
      eid: number;
      contribution: string | null;
      quantity: number;
      status: string | null;
    }>;
    tpmVerification: {
      verifiedBy: string;
      officialBefore: number;
      officialAfter: number;
      met: boolean;
      verifiedAt: string;
    } | null;
  }>;
}
