# CLOB v2 Product Constitution

## Vision

> The most beautiful coaching app for personal trainers.

CLOB is not trying to become the fitness app with the most features. It is the
coaching app that trainers use every day and members want to open every day.

## Product Core

The daily coaching decision is the heart of CLOB.

People do not open CLOB only to inspect information. They open it to understand
what matters now, take action and complete today's mission.

`Today's Mission` defines the action model. `Dynamic Home` presents the most
important current action and reorders itself as the member's real state changes.

Every module must connect back to at least one of:

- Action
- Progress
- Reward

## Core Principles

### 1. Momentum over Information

Every screen must answer:

> What should I do next?

Information supports the action. It must not compete with the action.

### 2. Beauty with Purpose

The app must feel premium, but every visual choice must improve clarity,
hierarchy or ease of use.

### 3. Color Leads Attention

Color directs the eye. It is not screen decoration.

- Rose `#E11D48`: primary action and active progress
- Orange: streak
- Gold: achievement and personal record
- Green: success
- Amber: warning
- Red: error
- White, black and neutral gray: primary interface foundation

### 4. Celebrate Small Wins

CLOB responds when a user completes something meaningful, including:

- Finish Workout
- Protein Complete
- New Streak
- Positive Weight Trend

Celebration should be brief, calm and earned.

### 5. Coach First

Every feature must help trainers coach more effectively and help members follow
the plan more easily. Complexity without coaching value does not ship.

## Three Product Gates

A screen or feature does not pass unless all three answers are yes:

1. Is it beautiful enough?
2. Can the user understand and begin the task within three seconds?
3. Does it make the user want to return tomorrow?

## Emotion Design

Emotion messages are deterministic and based on real state, not randomly
rotated copy. They may use:

- time of day
- current mission progress
- a newly completed workout
- a new streak or achievement
- the next meaningful action

Copy must be short, human and non-judgmental.

## Daily Mission Rules

- Show no more than three primary missions.
- Use real source data; do not ship fake or placeholder completion.
- Every incomplete mission must lead to its next action.
- Do not use error colors to shame incomplete work.
- Completion must come from the existing source of truth when possible.
- When all missions are complete, show a restrained success response.

## Dynamic Home Rules

- Show one dominant `Next Best Action`.
- Recalculate priority after meaningful completion.
- Use Calories Remaining as the Nutrition hero only after real target and meal
  data exist.
- Do not display fake calories, meals or completion to fill a design.
- Supporting cards may expose context, but they must not compete with the
  current action.
- When the required actions are complete, show a calm `Perfect Day` state.

## Interaction Model

> Open → Know → Do → Celebrate → Return

Detailed information remains available, but action comes first.

## Change Control

This constitution is a binding product decision. A patch must not silently
contradict it. If a requested change conflicts with this document, the conflict
must be identified and approved by the Product Owner before implementation.
