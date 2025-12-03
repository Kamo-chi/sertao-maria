// Separator
// Purpose: Simple presentational horizontal separator that mimics the
// shadcn `Separator` (thin, muted line). Kept intentionally minimal so it
// can be used across sections without adding a dependency.
export default function Separator({ className = '' }) {
  return (
    <div className={`h-px bg-gray-200 dark:bg-gray-700 my-4 ${className}`} role="separator" />
  )
}
