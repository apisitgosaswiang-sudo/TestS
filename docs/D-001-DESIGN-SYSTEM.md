# D-001 — CLOB v2 Design System

Status: Dynamic Home and Member Progress reference complete  
Product direction: Athletic Luxury with Momentum

## Direction

The interface is calm, precise and premium. Energy appears only where it helps
the member act, see progress or feel an earned reward.

> Quiet outside. Active inside.

## Visual ratio

- 90% neutral foundation: warm canvas, white surfaces, ink and muted gray
- 10% semantic emphasis: action, progress, success, streak and achievement

## Semantic color

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Action | `--clob-action` | `#E11D48` | one primary action |
| Progress | `--clob-progress` | `#E11D48` | active progress |
| Success | `--clob-success` | `#16865B` | earned completion |
| Streak | `--clob-streak` | `#E56C2F` | streak only |
| Achievement | `--clob-achievement` | `#B9852F` | PR and achievement |
| Ink | `--clob-ink` | `#131315` | main type and signature hero |
| Canvas | `--clob-canvas` | `#F4F3F1` | app background |

Incomplete work is neutral. It is not an error and must not be shown in red.

## Type, shape and motion

- Inter is the primary Latin face and Noto Sans Thai is the Thai fallback.
- Display copy uses tight tracking and short line length.
- Primary hero radius: 28 px.
- Supporting cards: 18–22 px.
- Primary action: 16 px.
- Motion is brief, directional and disabled by `prefers-reduced-motion`.

## Dynamic Member Home hierarchy

1. Time-aware greeting and member identity
2. One dynamic `Next Best Action`
3. Supporting Workout or Progress state
4. Daily rhythm
5. Weekly coaching link

The first viewport must communicate the next action without requiring the
member to interpret a dashboard or scan navigation.

## Dynamic priority rules

- Show no more than one dominant action.
- Use real source data.
- A completed workout comes from the workout session source of truth.
- A submitted Weekly Check-in completes the matching mission.
- A generic mission can be completed directly.
- When all required missions are complete, show `Perfect Day`.
- If there is no mission, show recovery language without manufacturing work.
- Member Home omits bottom navigation in this reference version.

## Calories Remaining states

The component is implemented for the Nutrition phase but remains hidden until
real Nutrition targets and meal totals exist.

- more than 250 kcal remaining: neutral
- 101–250 kcal remaining: amber / near target
- 0–100 kcal remaining: red / critical
- negative remaining: explicit amount over target

The main number is always remaining or over-target calories, never consumed
calories.

## Member Progress hierarchy

1. `บันทึก Check-in วันนี้` is the primary action.
2. Latest Weight and Check-in count form the hero.
3. Body Fat, Waist and Photo Sets are supporting metrics.
4. Timeline entries can be opened for editing.
5. The form accepts Date, Weight, Body Fat and Waist first, then optional
   measurements.

Check-in rules:

- A member owns and enters their measurements.
- At least one measured value is required.
- Saving the same date updates that Check-in instead of creating a duplicate.
- Photo-only records are not counted as measurement Check-ins.
- Photo sets use the existing Progress path and remain separate in the UI.

## Product gates

The reference screens pass only when:

1. They are beautiful with a clear purpose.
2. The next action is understood within three seconds.
3. Completion feels good enough to support tomorrow's return.
